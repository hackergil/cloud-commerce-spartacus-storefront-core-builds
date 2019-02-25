import { ServerConfig } from '../../config/server-config/server-config';
export declare abstract class OccConfig extends ServerConfig {
    site?: {
        baseSite?: string;
        language?: string;
        currency?: string;
    };
}
