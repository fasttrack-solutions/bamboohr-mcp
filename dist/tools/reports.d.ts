import { z } from "zod";
import { RunReportSchema, QueryDatasetSchema } from "../types.js";
export declare const reportsTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            reportId?: undefined;
            format?: undefined;
            fd?: undefined;
            datasetId?: undefined;
            fields?: undefined;
            filters?: undefined;
            limit?: undefined;
        };
        required?: undefined;
    };
    annotations: {
        readOnlyHint: boolean;
    };
    execute(): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            reportId: {
                type: string;
                description: string;
            };
            format: {
                type: string;
                enum: string[];
                description: string;
            };
            fd: {
                type: string;
                description: string;
            };
            datasetId?: undefined;
            fields?: undefined;
            filters?: undefined;
            limit?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
    };
    execute(input: z.infer<typeof RunReportSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            datasetId: {
                type: string;
            };
            reportId?: undefined;
            format?: undefined;
            fd?: undefined;
            fields?: undefined;
            filters?: undefined;
            limit?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
    };
    execute(input: {
        datasetId: string;
    }): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            datasetId: {
                type: string;
            };
            fields: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            filters: {
                type: string;
                description: string;
                additionalProperties: boolean;
            };
            limit: {
                type: string;
                description: string;
            };
            reportId?: undefined;
            format?: undefined;
            fd?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
    };
    execute(input: z.infer<typeof QueryDatasetSchema>): Promise<unknown>;
})[];
//# sourceMappingURL=reports.d.ts.map