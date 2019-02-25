import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { CartService } from '../../cart/facade/cart.service';
import { PageTitleResolver } from '../../cms/page/page-title.resolver';
export declare class CheckoutPageTitleResolver extends PageTitleResolver {
    protected routingService: RoutingService;
    protected cartService: CartService;
    constructor(routingService: RoutingService, cartService: CartService);
    resolve(): Observable<string>;
}
