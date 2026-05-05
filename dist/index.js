#!/usr/bin/env node
import { readFileSync } from "fs";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";
import { BambooHRClient } from "./client.js";
import { setClient } from "./context.js";
import { employeeTools } from "./tools/employees.js";
import { timeOffTools } from "./tools/time-off.js";
import { timeTrackingTools } from "./tools/time-tracking.js";
import { atsTools } from "./tools/ats.js";
import { benefitsTools } from "./tools/benefits.js";
import { reportsTools } from "./tools/reports.js";
import { trainingTools } from "./tools/training.js";
import { goalsTools } from "./tools/goals.js";
import { webhooksTools } from "./tools/webhooks.js";
import { filesTools } from "./tools/files.js";
import { accountTools } from "./tools/account.js";
// ─── Validate env vars on startup ────────────────────────────────────────────
if (!process.env.BAMBOOHR_API_KEY) {
    process.stderr.write("ERROR: BAMBOOHR_API_KEY environment variable is required.\n" +
        "Get your API key at: https://yourcompany.bamboohr.com/settings/api.php\n");
    process.exit(1);
}
if (!process.env.BAMBOOHR_SUBDOMAIN) {
    process.stderr.write("ERROR: BAMBOOHR_SUBDOMAIN environment variable is required.\n" +
        "This is the subdomain of your BambooHR URL (e.g. 'acme' from acme.bamboohr.com).\n");
    process.exit(1);
}
// ─── Write-access flags ──────────────────────────────────────────────────────
const ENABLE_TIME_TRACKING_WRITES = process.env.BAMBOOHR_ENABLE_TIME_TRACKING_WRITES === "true";
const ENABLE_WRITES = process.env.BAMBOOHR_ENABLE_WRITES === "true";
const DEFAULT_EMPLOYEE_ID = process.env.BAMBOOHR_EMPLOYEE_ID;
const TIME_TRACKING_WRITE_TOOLS = new Set([
    "bamboohr_clock_in",
    "bamboohr_clock_out",
    "bamboohr_create_hour_entries",
]);
const CLOCK_TOOLS_WITH_GEOLOCATION = new Set([
    "bamboohr_clock_in",
    "bamboohr_clock_out",
]);
function parseCoordinate(raw, name, min, max) {
    if (raw === undefined || raw === "")
        return undefined;
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed < min || parsed > max) {
        process.stderr.write(`WARN: ${name}="${raw}" is not a valid coordinate; ignoring.\n`);
        return undefined;
    }
    return parsed;
}
const STATIC_LATITUDE = parseCoordinate(process.env.BAMBOOHR_DEFAULT_LATITUDE, "BAMBOOHR_DEFAULT_LATITUDE", -90, 90);
const STATIC_LONGITUDE = parseCoordinate(process.env.BAMBOOHR_DEFAULT_LONGITUDE, "BAMBOOHR_DEFAULT_LONGITUDE", -180, 180);
const HAS_STATIC_GEO = STATIC_LATITUDE !== undefined && STATIC_LONGITUDE !== undefined;
// ─── Initialize client ──────────────────────────────────────────────────────
const client = new BambooHRClient({
    apiKey: process.env.BAMBOOHR_API_KEY,
    subdomain: process.env.BAMBOOHR_SUBDOMAIN,
});
setClient(client);
// ─── Read version from package.json ──────────────────────────────────────────
const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf-8"));
const allTools = [
    ...employeeTools,
    ...timeOffTools,
    ...timeTrackingTools,
    ...atsTools,
    ...benefitsTools,
    ...reportsTools,
    ...trainingTools,
    ...goalsTools,
    ...webhooksTools,
    ...filesTools,
    ...accountTools,
];
// Gating uses code behavior, not annotations. Annotations can be wrong
// (a tool can claim readOnlyHint:true while actually calling client.post).
// We treat any tool whose `execute` body invokes a write-shaped HTTP method
// as destructive, regardless of what the annotation says.
const WRITE_METHOD_RE = /\bclient\.(post|put|patch|delete)\s*\(/;
function toolWritesByCode(t) {
    return WRITE_METHOD_RE.test(t.execute.toString());
}
// Loud warning at startup whenever annotations and code disagree, so future
// mislabels surface immediately. Gating decisions ignore annotations.
for (const t of allTools) {
    const codeWrites = toolWritesByCode(t);
    const annoRead = t.annotations?.readOnlyHint === true;
    const annoWrite = t.annotations?.destructiveHint === true;
    if (codeWrites && annoRead) {
        process.stderr.write(`WARN: tool "${t.name}" is annotated readOnlyHint:true but its execute body calls client.{post,put,patch,delete}. Gating it as destructive.\n`);
    }
    else if (codeWrites && !annoWrite) {
        process.stderr.write(`WARN: tool "${t.name}" writes via client.{post,put,patch,delete} but is missing destructiveHint:true.\n`);
    }
    else if (!codeWrites && annoWrite) {
        process.stderr.write(`WARN: tool "${t.name}" is annotated destructiveHint:true but its execute body has no write call.\n`);
    }
    else if (!codeWrites && !annoRead && !annoWrite) {
        process.stderr.write(`WARN: tool "${t.name}" has no readOnlyHint or destructiveHint annotation. Gating it as read-only by code (no write call detected).\n`);
    }
}
function isToolEnabled(t) {
    if (TIME_TRACKING_WRITE_TOOLS.has(t.name))
        return ENABLE_TIME_TRACKING_WRITES;
    if (toolWritesByCode(t))
        return ENABLE_WRITES;
    return true;
}
const enabledTools = allTools.filter(isToolEnabled);
const toolMap = new Map(enabledTools.map((t) => [t.name, t]));
// ─── Server setup ─────────────────────────────────────────────────────────────
const server = new Server({
    name: "bamboohr-mcp",
    version: pkg.version,
}, {
    capabilities: { tools: {} },
});
server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: enabledTools.map(({ name, description, inputSchema, annotations }) => ({
        name,
        description,
        inputSchema,
        ...(annotations ? { annotations } : {}),
    })),
}));
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const tool = toolMap.get(name);
    if (!tool) {
        return {
            content: [{ type: "text", text: `Unknown tool: ${name}` }],
            isError: true,
        };
    }
    let toolArgs = args ?? {};
    if (selfEmployeeId &&
        TIME_TRACKING_WRITE_TOOLS.has(name) &&
        !toolArgs.employeeId) {
        toolArgs = { ...toolArgs, employeeId: selfEmployeeId };
    }
    if (HAS_STATIC_GEO &&
        CLOCK_TOOLS_WITH_GEOLOCATION.has(name) &&
        toolArgs.latitude === undefined &&
        toolArgs.longitude === undefined) {
        toolArgs = {
            ...toolArgs,
            latitude: STATIC_LATITUDE,
            longitude: STATIC_LONGITUDE,
        };
    }
    try {
        const result = await tool.execute(toolArgs);
        return {
            content: [
                {
                    type: "text",
                    text: typeof result === "string" ? result : JSON.stringify(result, null, 2),
                },
            ],
        };
    }
    catch (err) {
        let message;
        if (axios.isAxiosError(err)) {
            const status = err.response?.status ?? "unknown";
            const body = JSON.stringify(err.response?.data)?.slice(0, 500) ?? "";
            message = `HTTP ${status}: ${body}`;
        }
        else {
            message = err instanceof Error ? err.message : String(err);
        }
        return {
            content: [{ type: "text", text: `BambooHR API error: ${message}` }],
            isError: true,
        };
    }
});
// Resolved employee ID for the API key owner. Used as default `employeeId` for
// time-tracking writes. Resolved lazily at startup; can be overridden via the
// BAMBOOHR_EMPLOYEE_ID env var.
let selfEmployeeId = DEFAULT_EMPLOYEE_ID;
async function resolveSelfEmployeeId() {
    if (selfEmployeeId)
        return;
    try {
        const self = await client.get("/employees/0/", {
            fields: "id",
        });
        if (self?.id)
            selfEmployeeId = String(self.id);
    }
    catch (err) {
        const msg = axios.isAxiosError(err)
            ? `HTTP ${err.response?.status ?? "unknown"}`
            : err instanceof Error
                ? err.message
                : String(err);
        process.stderr.write(`WARN: could not auto-resolve current employee ID (${msg}). ` +
            "Set BAMBOOHR_EMPLOYEE_ID or pass employeeId explicitly to time-tracking tools.\n");
    }
}
// ─── Start ────────────────────────────────────────────────────────────────────
async function main() {
    if (ENABLE_TIME_TRACKING_WRITES || ENABLE_WRITES) {
        await resolveSelfEmployeeId();
    }
    const transport = new StdioServerTransport();
    await server.connect(transport);
    const writeMode = ENABLE_WRITES
        ? "all writes"
        : ENABLE_TIME_TRACKING_WRITES
            ? "time-tracking writes only"
            : "read-only";
    const idSuffix = selfEmployeeId ? ` | employeeId: ${selfEmployeeId}` : "";
    const geoSuffix = HAS_STATIC_GEO ? ` | geo: ${STATIC_LATITUDE},${STATIC_LONGITUDE}` : "";
    process.stderr.write(`bamboohr-mcp v${pkg.version} running | subdomain: ${process.env.BAMBOOHR_SUBDOMAIN} | ${enabledTools.length}/${allTools.length} tools loaded | mode: ${writeMode}${idSuffix}${geoSuffix}\n`);
}
main().catch((err) => {
    process.stderr.write(`Fatal error: ${err}\n`);
    process.exit(1);
});
//# sourceMappingURL=index.js.map