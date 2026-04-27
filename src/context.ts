import type { BambooHRClient } from "./client.js";

let activeClient: BambooHRClient | null = null;

export function setClient(client: BambooHRClient): void {
  activeClient = client;
}

export function getClient(): BambooHRClient {
  if (!activeClient) {
    throw new Error(
      "BambooHR client has not been initialized. setClient() must be called before any tool executes."
    );
  }
  return activeClient;
}
