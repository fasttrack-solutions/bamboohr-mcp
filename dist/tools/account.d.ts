export declare const accountTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            countryId?: undefined;
            fieldId?: undefined;
            options?: undefined;
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
            countryId: {
                type: string;
                description: string;
            };
            fieldId?: undefined;
            options?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: {
        countryId: string;
    }): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            fieldId: {
                type: string;
                description: string;
            };
            countryId?: undefined;
            options?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: {
        fieldId: string;
    }): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            fieldId: {
                type: string;
                description?: undefined;
            };
            options: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                            description: string;
                        };
                        value: {
                            type: string;
                        };
                        archived: {
                            type: string;
                            enum: string[];
                        };
                    };
                    required: string[];
                };
            };
            countryId?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: {
        fieldId: string;
        options: Array<{
            id?: string;
            value: string;
            archived?: string;
        }>;
    }): Promise<unknown>;
})[];
//# sourceMappingURL=account.d.ts.map