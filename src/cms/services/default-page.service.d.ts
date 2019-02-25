import { CmsConfig } from '../config/cms-config';
import { PageType } from '../../occ/occ-models/index';
export declare class DefaultPageService {
    private config;
    constructor(config: CmsConfig);
    getDefaultPageIdsBytype(type: PageType): string[];
}
