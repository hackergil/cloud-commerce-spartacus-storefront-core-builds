import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
import { PageTitleResolver } from '../../cms/page/page-title.resolver';
export declare class SearchPageTitleResolver extends PageTitleResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService);
    resolve(): Observable<string>;
    protected getSearchResultTitle(total: number, part: string): string;
}
