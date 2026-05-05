import { z } from "zod";
import { CreateDependentSchema } from "../types.js";
export declare const benefitsTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            relationship?: undefined;
            dateOfBirth?: undefined;
            gender?: undefined;
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
            };
            firstName?: undefined;
            lastName?: undefined;
            relationship?: undefined;
            dateOfBirth?: undefined;
            gender?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: {
        employeeId: string;
    }): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            firstName: {
                type: string;
            };
            lastName: {
                type: string;
            };
            relationship: {
                type: string;
                description: string;
            };
            dateOfBirth: {
                type: string;
                description: string;
            };
            gender: {
                type: string;
                enum: string[];
            };
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof CreateDependentSchema>): Promise<unknown>;
})[];
//# sourceMappingURL=benefits.d.ts.map