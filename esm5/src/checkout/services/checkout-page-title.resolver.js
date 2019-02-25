/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { PageType } from '../../occ/occ-models/occ.models';
import { CartService } from '../../cart/facade/cart.service';
import { PageTitleResolver } from '../../cms/page/page-title.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../../cart/facade/cart.service";
var CheckoutPageTitleResolver = /** @class */ (function (_super) {
    tslib_1.__extends(CheckoutPageTitleResolver, _super);
    function CheckoutPageTitleResolver(routingService, cartService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.cartService = cartService;
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
        return _this;
    }
    /**
     * @return {?}
     */
    CheckoutPageTitleResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        return this.cartService
            .getActive()
            .pipe(map(function (cart) { return "Checkout " + cart.totalItems + " items"; }));
    };
    CheckoutPageTitleResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CheckoutPageTitleResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutPageTitleResolver.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutPageTitleResolver_Factory() { return new CheckoutPageTitleResolver(i0.inject(i1.RoutingService), i0.inject(i2.CartService)); }, token: CheckoutPageTitleResolver, providedIn: "root" });
    return CheckoutPageTitleResolver;
}(PageTitleResolver));
export { CheckoutPageTitleResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutPageTitleResolver.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutPageTitleResolver.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS10aXRsZS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1wYWdlLXRpdGxlLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFFdkU7SUFHK0MscURBQWlCO0lBQzlELG1DQUNZLGNBQThCLEVBQzlCLFdBQXdCO1FBRnBDLFlBSUUsaUJBQU8sU0FHUjtRQU5XLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdsQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRyxzQ0FBc0MsQ0FBQzs7SUFDN0QsQ0FBQzs7OztJQUVELDJDQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVc7YUFDcEIsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLGNBQVksSUFBSSxDQUFDLFVBQVUsV0FBUSxFQUFuQyxDQUFtQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxjQUFjO2dCQUVkLFdBQVc7OztvQ0FMcEI7Q0EwQkMsQUFsQkQsQ0FHK0MsaUJBQWlCLEdBZS9EO1NBZlkseUJBQXlCOzs7Ozs7SUFFbEMsbURBQXdDOzs7OztJQUN4QyxnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLXRpdGxlLnJlc29sdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYWdlVGl0bGVSZXNvbHZlciBleHRlbmRzIFBhZ2VUaXRsZVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgICB0aGlzLnBhZ2VUZW1wbGF0ZSA9ICdNdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5waXBlKG1hcChjYXJ0ID0+IGBDaGVja291dCAke2NhcnQudG90YWxJdGVtc30gaXRlbXNgKSk7XG4gIH1cbn1cbiJdfQ==