import { z } from "zod";
import { ListGoalsSchema, CreateGoalSchema, UpdateGoalProgressSchema } from "../types.js";
export declare const goalsTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            title?: undefined;
            description?: undefined;
            dueDate?: undefined;
            percentComplete?: undefined;
            sharedWithEmployeeIds?: undefined;
            goalId?: undefined;
            note?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof ListGoalsSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            title: {
                type: string;
            };
            description: {
                type: string;
            };
            dueDate: {
                type: string;
                description: string;
            };
            percentComplete: {
                type: string;
                description: string;
            };
            sharedWithEmployeeIds: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            goalId?: undefined;
            note?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof CreateGoalSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            goalId: {
                type: string;
            };
            percentComplete: {
                type: string;
                description: string;
            };
            note: {
                type: string;
            };
            employeeId?: undefined;
            title?: undefined;
            description?: undefined;
            dueDate?: undefined;
            sharedWithEmployeeIds?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof UpdateGoalProgressSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            goalId: {
                type: string;
            };
            employeeId?: undefined;
            title?: undefined;
            description?: undefined;
            dueDate?: undefined;
            percentComplete?: undefined;
            sharedWithEmployeeIds?: undefined;
            note?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: {
        goalId: string;
    }): Promise<unknown>;
})[];
//# sourceMappingURL=goals.d.ts.map