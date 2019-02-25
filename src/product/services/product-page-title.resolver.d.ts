import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../../product/facade/product.service';
import { PageTitleResolver } from '../../cms/page/page-title.resolver';
export declare class ProductPageTitleResolver extends PageTitleResolver {
    protected routingService: RoutingService;
    protected productService: ProductService;
    constructor(routingService: RoutingService, productService: ProductService);
    resolve(): Observable<string>;
}
