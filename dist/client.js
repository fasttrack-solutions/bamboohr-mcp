import axios from "axios";
function getConfig() {
    const apiKey = process.env.BAMBOOHR_API_KEY;
    const subdomain = process.env.BAMBOOHR_SUBDOMAIN;
    if (!apiKey) {
        console.error("ERROR: BAMBOOHR_API_KEY environment variable is required.");
        process.exit(1);
    }
    if (!subdomain) {
        console.error("ERROR: BAMBOOHR_SUBDOMAIN environment variable is required.");
        process.exit(1);
    }
    return { apiKey, subdomain };
}
export class BambooHRClient {
    http;
    subdomain;
    constructor(config) {
        const { apiKey, subdomain } = config ?? getConfig();
        this.subdomain = subdomain;
        this.http = axios.create({
            baseURL: `https://api.bamboohr.com/api/gateway.php/${subdomain}/v1`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            auth: {
                username: apiKey,
                password: "x",
            },
        });
    }
    async get(path, params) {
        const config = {};
        if (params)
            config.params = params;
        const res = await this.http.get(path, config);
        return res.data;
    }
    async post(path, data) {
        const res = await this.http.post(path, data);
        return res.data;
    }
    async put(path, data) {
        const res = await this.http.put(path, data);
        return res.data;
    }
    async patch(path, data) {
        const res = await this.http.patch(path, data);
        return res.data;
    }
    async delete(path) {
        const res = await this.http.delete(path);
        return res.data;
    }
}
//# sourceMappingURL=client.js.map