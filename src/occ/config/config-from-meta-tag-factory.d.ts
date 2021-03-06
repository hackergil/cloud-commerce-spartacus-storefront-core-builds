import { Meta } from '@angular/platform-browser';
import { OccConfig } from './occ-config';
export declare const OCC_BASE_URL_META_TAG_NAME = "occ-backend-base-url";
export declare const OCC_BASE_URL_META_TAG_PLACEHOLDER = "OCC_BACKEND_BASE_URL_VALUE";
export declare const MEDIA_BASE_URL_META_TAG_NAME = "media-backend-base-url";
export declare const MEDIA_BASE_URL_META_TAG_PLACEHOLDER = "MEDIA_BACKEND_BASE_URL_VALUE";
export declare function occServerConfigFromMetaTagFactory(meta: Meta): OccConfig;
export declare function mediaServerConfigFromMetaTagFactory(meta: Meta): OccConfig;
