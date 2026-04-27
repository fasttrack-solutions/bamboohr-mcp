import { z } from "zod";
import { GetTimeOffRequestsSchema, CreateTimeOffRequestSchema, UpdateTimeOffStatusSchema, GetTimeOffBalanceSchema, GetWhosOutSchema } from "../types.js";
export declare const timeOffTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            start?: undefined;
            end?: undefined;
            employeeId?: undefined;
            status?: undefined;
            type?: undefined;
            timeOffTypeId?: undefined;
            notes?: undefined;
            requestId?: undefined;
            note?: undefined;
            date?: undefined;
            policyAssignments?: undefined;
        };
        required?: undefined;
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            start: {
                type: string;
                description: string;
            };
            end: {
                type: string;
                description: string;
            };
            employeeId: {
                type: string;
            };
            status: {
                type: string;
                enum: string[];
            };
            type: {
                type: string;
                description: string;
            };
            timeOffTypeId?: undefined;
            notes?: undefined;
            requestId?: undefined;
            note?: undefined;
            date?: undefined;
            policyAssignments?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof GetTimeOffRequestsSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            timeOffTypeId: {
                type: string;
            };
            start: {
                type: string;
                description: string;
            };
            end: {
                type: string;
                description: string;
            };
            notes: {
                type: string;
            };
            status?: undefined;
            type?: undefined;
            requestId?: undefined;
            note?: undefined;
            date?: undefined;
            policyAssignments?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof CreateTimeOffRequestSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            requestId: {
                type: string;
            };
            status: {
                type: string;
                enum: string[];
            };
            note: {
                type: string;
            };
            start?: undefined;
            end?: undefined;
            employeeId?: undefined;
            type?: undefined;
            timeOffTypeId?: undefined;
            notes?: undefined;
            date?: undefined;
            policyAssignments?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof UpdateTimeOffStatusSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            date: {
                type: string;
                description: string;
            };
            start?: undefined;
            end?: undefined;
            status?: undefined;
            type?: undefined;
            timeOffTypeId?: undefined;
            notes?: undefined;
            requestId?: undefined;
            note?: undefined;
            policyAssignments?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof GetTimeOffBalanceSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            start: {
                type: string;
                description: string;
            };
            end: {
                type: string;
                description: string;
            };
            employeeId?: undefined;
            status?: undefined;
            type?: undefined;
            timeOffTypeId?: undefined;
            notes?: undefined;
            requestId?: undefined;
            note?: undefined;
            date?: undefined;
            policyAssignments?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof GetWhosOutSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            policyAssignments: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        timeOffTypeId: {
                            type: string;
                        };
                        accrualStartDate: {
                            type: string;
                            description: string;
                        };
                    };
                };
                description: string;
            };
            start?: undefined;
            end?: undefined;
            status?: undefined;
            type?: undefined;
            timeOffTypeId?: undefined;
            notes?: undefined;
            requestId?: undefined;
            note?: undefined;
            date?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: {
        employeeId: string;
        policyAssignments: unknown[];
    }): Promise<unknown>;
})[];
//# sourceMappingURL=time-off.d.ts.map