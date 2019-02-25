import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../../config/server-config/server-config';
import { RoutesConfig } from './routes-config';
import { ConfigurableRoutesConfig } from './config/configurable-routes-config';
export declare class RoutesConfigLoader {
    private readonly http;
    private readonly serverConfig;
    private readonly configurableRoutesConfig;
    private _routesConfig;
    readonly routesConfig: RoutesConfig;
    readonly endpoint: string;
    constructor(http: HttpClient, serverConfig: ServerConfig, configurableRoutesConfig: ConfigurableRoutesConfig);
    load(): Promise<void>;
    private fetch;
    private extendStaticWith;
    private extendLanguagesTranslationsWithDefault;
}
