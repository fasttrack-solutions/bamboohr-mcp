let activeClient = null;
export function setClient(client) {
    activeClient = client;
}
export function getClient() {
    if (!activeClient) {
        throw new Error("BambooHR client has not been initialized. setClient() must be called before any tool executes.");
    }
    return activeClient;
}
//# sourceMappingURL=context.js.map