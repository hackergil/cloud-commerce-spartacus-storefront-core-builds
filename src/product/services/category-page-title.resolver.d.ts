import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { Page } from '../../cms/model/page.model';
import { PageTitleResolver } from '../../cms/page/page-title.resolver';
import { ProductSearchService } from '../facade/product-search.service';
export declare class CategoryPageTitleResolver extends PageTitleResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected cms: CmsService;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, cms: CmsService);
    resolve(): Observable<string>;
    protected hasProductListComponent(page: Page): boolean;
}
