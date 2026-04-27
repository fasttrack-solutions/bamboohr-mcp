import { z } from "zod";
import { GetEmployeeSchema, ListEmployeesSchema, CreateEmployeeSchema, UpdateEmployeeSchema } from "../types.js";
export declare const employeeTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
                description: string;
            };
            fields: {
                type: string;
                description: string;
                additionalProperties?: undefined;
            };
            firstName?: undefined;
            lastName?: undefined;
            workEmail?: undefined;
            department?: undefined;
            jobTitle?: undefined;
            hireDate?: undefined;
            location?: undefined;
            employmentStatus?: undefined;
            since?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof GetEmployeeSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            fields: {
                type: string;
                description: string;
                additionalProperties?: undefined;
            };
            employeeId?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            workEmail?: undefined;
            department?: undefined;
            jobTitle?: undefined;
            hireDate?: undefined;
            location?: undefined;
            employmentStatus?: undefined;
            since?: undefined;
        };
        required?: undefined;
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof ListEmployeesSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            firstName: {
                type: string;
            };
            lastName: {
                type: string;
            };
            workEmail: {
                type: string;
                description: string;
            };
            department: {
                type: string;
            };
            jobTitle: {
                type: string;
            };
            hireDate: {
                type: string;
                description: string;
            };
            location: {
                type: string;
            };
            employmentStatus: {
                type: string;
            };
            employeeId?: undefined;
            fields?: undefined;
            since?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof CreateEmployeeSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
                description: string;
            };
            fields: {
                type: string;
                description: string;
                additionalProperties: boolean;
            };
            firstName?: undefined;
            lastName?: undefined;
            workEmail?: undefined;
            department?: undefined;
            jobTitle?: undefined;
            hireDate?: undefined;
            location?: undefined;
            employmentStatus?: undefined;
            since?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof UpdateEmployeeSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            since: {
                type: string;
                description: string;
            };
            employeeId?: undefined;
            fields?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            workEmail?: undefined;
            department?: undefined;
            jobTitle?: undefined;
            hireDate?: undefined;
            location?: undefined;
            employmentStatus?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: {
        since: string;
    }): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId?: undefined;
            fields?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            workEmail?: undefined;
            department?: undefined;
            jobTitle?: undefined;
            hireDate?: undefined;
            location?: undefined;
            employmentStatus?: undefined;
            since?: undefined;
        };
        required?: undefined;
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(): Promise<unknown>;
})[];
//# sourceMappingURL=employees.d.ts.map