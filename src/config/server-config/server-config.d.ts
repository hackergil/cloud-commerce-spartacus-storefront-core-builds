export declare abstract class ServerConfig {
    production?: boolean;
    server?: {
        baseUrl?: string;
        occPrefix?: string;
    };
}
export declare const defaultServerConfig: ServerConfig;
