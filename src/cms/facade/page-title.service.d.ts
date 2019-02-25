import { Observable } from 'rxjs';
import { Page } from '../model/page.model';
import { CmsService } from './cms.service';
import { PageTitleResolver } from '../page/page-title.resolver';
export declare class PageTitleService {
    private resolvers;
    protected cms: CmsService;
    constructor(resolvers: PageTitleResolver[], cms: CmsService);
    getTitle(): Observable<string>;
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    protected getResolver(page: Page): PageTitleResolver;
}
