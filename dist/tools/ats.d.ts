import { z } from "zod";
import { CreateJobOpeningSchema, CreateCandidateSchema, GetJobApplicationsSchema, UpdateApplicantStatusSchema } from "../types.js";
export declare const atsTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            jobTitle?: undefined;
            department?: undefined;
            location?: undefined;
            hiringLead?: undefined;
            description?: undefined;
            employmentType?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            email?: undefined;
            phone?: undefined;
            address?: undefined;
            jobId?: undefined;
            resume?: undefined;
            statusId?: undefined;
            applicationId?: undefined;
            note?: undefined;
            comment?: undefined;
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
            jobTitle: {
                type: string;
            };
            department: {
                type: string;
            };
            location: {
                type: string;
            };
            hiringLead: {
                type: string;
                description: string;
            };
            description: {
                type: string;
            };
            employmentType: {
                type: string;
                enum: string[];
            };
            firstName?: undefined;
            lastName?: undefined;
            email?: undefined;
            phone?: undefined;
            address?: undefined;
            jobId?: undefined;
            resume?: undefined;
            statusId?: undefined;
            applicationId?: undefined;
            note?: undefined;
            comment?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof CreateJobOpeningSchema>): Promise<unknown>;
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
            email: {
                type: string;
            };
            phone: {
                type: string;
            };
            address: {
                type: string;
            };
            jobId: {
                type: string;
                description: string;
            };
            resume: {
                type: string;
                description: string;
            };
            jobTitle?: undefined;
            department?: undefined;
            location?: undefined;
            hiringLead?: undefined;
            description?: undefined;
            employmentType?: undefined;
            statusId?: undefined;
            applicationId?: undefined;
            note?: undefined;
            comment?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof CreateCandidateSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            jobId: {
                type: string;
                description?: undefined;
            };
            statusId: {
                type: string;
                description: string;
            };
            jobTitle?: undefined;
            department?: undefined;
            location?: undefined;
            hiringLead?: undefined;
            description?: undefined;
            employmentType?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            email?: undefined;
            phone?: undefined;
            address?: undefined;
            resume?: undefined;
            applicationId?: undefined;
            note?: undefined;
            comment?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof GetJobApplicationsSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            applicationId: {
                type: string;
            };
            statusId: {
                type: string;
                description?: undefined;
            };
            note: {
                type: string;
            };
            jobTitle?: undefined;
            department?: undefined;
            location?: undefined;
            hiringLead?: undefined;
            description?: undefined;
            employmentType?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            email?: undefined;
            phone?: undefined;
            address?: undefined;
            jobId?: undefined;
            resume?: undefined;
            comment?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof UpdateApplicantStatusSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            applicationId: {
                type: string;
            };
            comment: {
                type: string;
            };
            jobTitle?: undefined;
            department?: undefined;
            location?: undefined;
            hiringLead?: undefined;
            description?: undefined;
            employmentType?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            email?: undefined;
            phone?: undefined;
            address?: undefined;
            jobId?: undefined;
            resume?: undefined;
            statusId?: undefined;
            note?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: {
        applicationId: string;
        comment: string;
    }): Promise<unknown>;
})[];
//# sourceMappingURL=ats.d.ts.map