import { z } from "zod";
import { UploadEmployeeFileSchema } from "../types.js";
export declare const filesTools: ({
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            fileId?: undefined;
            fileName?: undefined;
            fileContent?: undefined;
            categoryId?: undefined;
            shareWithEmployee?: undefined;
            categoryName?: undefined;
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
            fileId: {
                type: string;
            };
            fileName?: undefined;
            fileContent?: undefined;
            categoryId?: undefined;
            shareWithEmployee?: undefined;
            categoryName?: undefined;
        };
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint?: undefined;
    };
    execute(input: {
        employeeId: string;
        fileId: string;
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
            fileName: {
                type: string;
            };
            fileContent: {
                type: string;
                description: string;
            };
            categoryId: {
                type: string;
                description: string;
            };
            shareWithEmployee: {
                type: string;
                description: string;
            };
            fileId?: undefined;
            categoryName?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: z.infer<typeof UploadEmployeeFileSchema>): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId: {
                type: string;
            };
            fileId: {
                type: string;
            };
            fileName?: undefined;
            fileContent?: undefined;
            categoryId?: undefined;
            shareWithEmployee?: undefined;
            categoryName?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: {
        employeeId: string;
        fileId: string;
    }): Promise<unknown>;
} | {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            employeeId?: undefined;
            fileId?: undefined;
            fileName?: undefined;
            fileContent?: undefined;
            categoryId?: undefined;
            shareWithEmployee?: undefined;
            categoryName?: undefined;
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
            categoryName: {
                type: string;
            };
            employeeId?: undefined;
            fileId?: undefined;
            fileName?: undefined;
            fileContent?: undefined;
            categoryId?: undefined;
            shareWithEmployee?: undefined;
        };
        required: string[];
    };
    annotations: {
        destructiveHint: boolean;
        readOnlyHint?: undefined;
    };
    execute(input: {
        categoryName: string;
    }): Promise<unknown>;
})[];
//# sourceMappingURL=files.d.ts.map