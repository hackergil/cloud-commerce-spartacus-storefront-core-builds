import { Meta } from '@angular/platform-browser';
import { ServerConfig } from './server-config';
export declare const SERVER_BASE_URL_META_TAG_NAME = "occ-backend-base-url";
export declare const SERVER_BASE_URL_META_TAG_PLACEHOLDER = "OCC_BACKEND_BASE_URL_VALUE";
export declare function serverConfigFromMetaTagFactory(meta: Meta): ServerConfig;
