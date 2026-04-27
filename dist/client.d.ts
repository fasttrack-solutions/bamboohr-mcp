export interface BambooHRConfig {
    apiKey: string;
    subdomain: string;
}
export declare class BambooHRClient {
    private http;
    readonly subdomain: string;
    constructor(config?: BambooHRConfig);
    get<T = unknown>(path: string, params?: Record<string, unknown>): Promise<T>;
    post<T = unknown>(path: string, data?: unknown): Promise<T>;
    put<T = unknown>(path: string, data?: unknown): Promise<T>;
    patch<T = unknown>(path: string, data?: unknown): Promise<T>;
    delete<T = unknown>(path: string): Promise<T>;
}
//# sourceMappingURL=client.d.ts.map