import { z } from "zod";
import { GetEmployeeTrainingsSchema, CreateTrainingRecordSchema, CreateTrainingTypeSchema } from "../types.js";
export declare const trainingTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            name?: undefined;
            renewable?: undefined;
            frequency?: undefined;
            dueFromHireDate?: undefined;
            categoryId?: undefined;
            employeeId?: undefined;
            completed?: undefined;
            trainingTypeId?: undefined;
            completedDate?: undefined;
            dueDate?: undefined;
            notes?: undefined;
            cost?: undefined;
            instructor?: undefined;
            hours?: undefined;
            credits?: undefined;
            status?: undefined;
            trainingRecordId?: undefined;
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
            name: {
                type: string;
            };
            renewable: {
                type: string;
            };
            frequency: {
                type: string;
                description: string;
            };
            dueFromHireDate: {
                type: string;
                description: string;
            };
            categoryId: {
                type: string;
            };
            employeeId?: undefined;
            completed?: undefined;
            trainingTypeId?: undefined;
            completedDate?: undefined;
            dueDate?: undefined;
            notes?: undefined;
            cost?: undefined;
            instructor?: undefined;
            hours?: undefined;
            credits?: undefined;
            status?: undefined;
            trainingRecordId?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof CreateTrainingTypeSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            completed: {
                type: string;
                description: string;
            };
            name?: undefined;
            renewable?: undefined;
            frequency?: undefined;
            dueFromHireDate?: undefined;
            categoryId?: undefined;
            trainingTypeId?: undefined;
            completedDate?: undefined;
            dueDate?: undefined;
            notes?: undefined;
            cost?: undefined;
            instructor?: undefined;
            hours?: undefined;
            credits?: undefined;
            status?: undefined;
            trainingRecordId?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof GetEmployeeTrainingsSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            trainingTypeId: {
                type: string;
            };
            completedDate: {
                type: string;
                description: string;
            };
            dueDate: {
                type: string;
                description: string;
            };
            notes: {
                type: string;
            };
            cost: {
                type: string;
            };
            instructor: {
                type: string;
            };
            hours: {
                type: string;
            };
            credits: {
                type: string;
            };
            status: {
                type: string;
                enum: string[];
            };
            name?: undefined;
            renewable?: undefined;
            frequency?: undefined;
            dueFromHireDate?: undefined;
            categoryId?: undefined;
            completed?: undefined;
            trainingRecordId?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof CreateTrainingRecordSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            trainingRecordId: {
                type: string;
            };
            completedDate: {
                type: string;
                description: string;
            };
            status: {
                type: string;
                enum: string[];
            };
            notes: {
                type: string;
            };
            hours: {
                type: string;
            };
            cost: {
                type: string;
            };
            name?: undefined;
            renewable?: undefined;
            frequency?: undefined;
            dueFromHireDate?: undefined;
            categoryId?: undefined;
            completed?: undefined;
            trainingTypeId?: undefined;
            dueDate?: undefined;
            instructor?: undefined;
            credits?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: {
        employeeId: string;
        trainingRecordId: string;
        completedDate?: string;
        status?: string;
        notes?: string;
        hours?: number;
        cost?: number;
    }): Promise<unknown>;
})[];
//# sourceMappingURL=training.d.ts.map