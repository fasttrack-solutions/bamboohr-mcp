import { z } from "zod";
import { GetTimesheetEntriesSchema, ClockInSchema, ClockOutSchema, CreateHourEntriesSchema } from "../types.js";
export declare const timeTrackingTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
                description: string;
            };
            start: {
                type: string;
                description: string;
            };
            end: {
                type: string;
                description: string;
            };
            clockInTime?: undefined;
            note?: undefined;
            latitude?: undefined;
            longitude?: undefined;
            clockOutTime?: undefined;
            date?: undefined;
            hours?: undefined;
            projectId?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof GetTimesheetEntriesSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
                description?: undefined;
            };
            clockInTime: {
                type: string;
                description: string;
            };
            note: {
                type: string;
            };
            latitude: {
                type: string;
                description: string;
            };
            longitude: {
                type: string;
                description: string;
            };
            start?: undefined;
            end?: undefined;
            clockOutTime?: undefined;
            date?: undefined;
            hours?: undefined;
            projectId?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof ClockInSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
                description?: undefined;
            };
            clockOutTime: {
                type: string;
                description: string;
            };
            latitude: {
                type: string;
                description: string;
            };
            longitude: {
                type: string;
                description: string;
            };
            start?: undefined;
            end?: undefined;
            clockInTime?: undefined;
            note?: undefined;
            date?: undefined;
            hours?: undefined;
            projectId?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof ClockOutSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
                description?: undefined;
            };
            date: {
                type: string;
                description: string;
            };
            hours: {
                type: string;
                description: string;
            };
            note: {
                type: string;
            };
            projectId: {
                type: string;
            };
            start?: undefined;
            end?: undefined;
            clockInTime?: undefined;
            latitude?: undefined;
            longitude?: undefined;
            clockOutTime?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof CreateHourEntriesSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId?: undefined;
            start?: undefined;
            end?: undefined;
            clockInTime?: undefined;
            note?: undefined;
            latitude?: undefined;
            longitude?: undefined;
            clockOutTime?: undefined;
            date?: undefined;
            hours?: undefined;
            projectId?: undefined;
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
            employeeId: {
                type: string;
                description?: undefined;
            };
            date: {
                type: string;
                description: string;
            };
            start?: undefined;
            end?: undefined;
            clockInTime?: undefined;
            note?: undefined;
            latitude?: undefined;
            longitude?: undefined;
            clockOutTime?: undefined;
            hours?: undefined;
            projectId?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: {
        employeeId: string;
        date: string;
    }): Promise<unknown>;
})[];
//# sourceMappingURL=time-tracking.d.ts.map