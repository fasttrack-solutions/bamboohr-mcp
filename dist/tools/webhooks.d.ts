import { z } from "zod";
import { CreateWebhookSchema, GetWebhookLogsSchema } from "../types.js";
export declare const webhooksTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            webhookId?: undefined;
            name?: undefined;
            monitorFields?: undefined;
            postFields?: undefined;
            url?: undefined;
            format?: undefined;
            privateKey?: undefined;
            includeCompanyDomain?: undefined;
            lastAttemptedDate?: undefined;
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
            webhookId: {
                type: string;
            };
            name?: undefined;
            monitorFields?: undefined;
            postFields?: undefined;
            url?: undefined;
            format?: undefined;
            privateKey?: undefined;
            includeCompanyDomain?: undefined;
            lastAttemptedDate?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: {
        webhookId: string;
    }): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            name: {
                type: string;
                description: string;
            };
            monitorFields: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            postFields: {
                type: string;
                description: string;
                additionalProperties: {
                    type: string;
                };
            };
            url: {
                type: string;
                description: string;
            };
            format: {
                type: string;
                enum: string[];
                description: string;
            };
            privateKey: {
                type: string;
                description: string;
            };
            includeCompanyDomain: {
                type: string;
                description: string;
            };
            webhookId?: undefined;
            lastAttemptedDate?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof CreateWebhookSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            webhookId: {
                type: string;
            };
            name: {
                type: string;
                description?: undefined;
            };
            monitorFields: {
                type: string;
                items: {
                    type: string;
                };
                description?: undefined;
            };
            postFields: {
                type: string;
                additionalProperties: {
                    type: string;
                };
                description?: undefined;
            };
            url: {
                type: string;
                description?: undefined;
            };
            format: {
                type: string;
                enum: string[];
                description?: undefined;
            };
            privateKey: {
                type: string;
                description?: undefined;
            };
            includeCompanyDomain?: undefined;
            lastAttemptedDate?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: {
        webhookId: string;
        [key: string]: unknown;
    }): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            webhookId: {
                type: string;
            };
            name?: undefined;
            monitorFields?: undefined;
            postFields?: undefined;
            url?: undefined;
            format?: undefined;
            privateKey?: undefined;
            includeCompanyDomain?: undefined;
            lastAttemptedDate?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: {
        webhookId: string;
    }): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            webhookId: {
                type: string;
            };
            lastAttemptedDate: {
                type: string;
                description: string;
            };
            name?: undefined;
            monitorFields?: undefined;
            postFields?: undefined;
            url?: undefined;
            format?: undefined;
            privateKey?: undefined;
            includeCompanyDomain?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: z.infer<typeof GetWebhookLogsSchema>): Promise<unknown>;
})[];
//# sourceMappingURL=webhooks.d.ts.map