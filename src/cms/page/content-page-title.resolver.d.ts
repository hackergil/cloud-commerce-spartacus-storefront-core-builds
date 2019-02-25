import { Observable } from 'rxjs';
import { CmsService } from '../facade/cms.service';
import { PageTitleResolver } from './page-title.resolver';
export declare class ContentPageTitleResolver extends PageTitleResolver {
    protected cms: CmsService;
    constructor(cms: CmsService);
    resolve(): Observable<string>;
}
