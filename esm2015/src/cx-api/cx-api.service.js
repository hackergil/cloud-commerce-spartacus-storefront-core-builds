/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { AuthService } from '../auth/index';
import { CmsService } from '../cms/index';
import { RoutingService } from '../routing/index';
import { LanguageService, CurrencyService } from '../site-context/index';
import { ProductService, ProductSearchService, ProductReviewService } from '../product/index';
import { UserService } from '../user/index';
import * as i0 from "@angular/core";
import * as i1 from "../auth/facade/auth.service";
import * as i2 from "../cms/facade/cms.service";
import * as i3 from "../routing/facade/routing.service";
import * as i4 from "../site-context/facade/currency.service";
import * as i5 from "../site-context/facade/language.service";
import * as i6 from "../product/facade/product.service";
import * as i7 from "../product/facade/product-search.service";
import * as i8 from "../product/facade/product-review.service";
import * as i9 from "../user/facade/user.service";
export class CxApiService {
    /**
     * @param {?} auth
     * @param {?} cms
     * @param {?} routing
     * @param {?} currency
     * @param {?} language
     * @param {?} product
     * @param {?} productSearch
     * @param {?} productReview
     * @param {?} user
     */
    constructor(auth, cms, routing, currency, language, product, productSearch, productReview, user) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.currency = currency;
        this.language = language;
        this.product = product;
        this.productSearch = productSearch;
        this.productReview = productReview;
        this.user = user;
    }
}
CxApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CxApiService.ctorParameters = () => [
    { type: AuthService, decorators: [{ type: Optional }] },
    { type: CmsService, decorators: [{ type: Optional }] },
    { type: RoutingService, decorators: [{ type: Optional }] },
    { type: CurrencyService, decorators: [{ type: Optional }] },
    { type: LanguageService, decorators: [{ type: Optional }] },
    { type: ProductService, decorators: [{ type: Optional }] },
    { type: ProductSearchService, decorators: [{ type: Optional }] },
    { type: ProductReviewService, decorators: [{ type: Optional }] },
    { type: UserService, decorators: [{ type: Optional }] }
];
/** @nocollapse */ CxApiService.ngInjectableDef = i0.defineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.inject(i1.AuthService, 8), i0.inject(i2.CmsService, 8), i0.inject(i3.RoutingService, 8), i0.inject(i4.CurrencyService, 8), i0.inject(i5.LanguageService, 8), i0.inject(i6.ProductService, 8), i0.inject(i7.ProductSearchService, 8), i0.inject(i8.ProductReviewService, 8), i0.inject(i9.UserService, 8)); }, token: CxApiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CxApiService.prototype.auth;
    /** @type {?} */
    CxApiService.prototype.cms;
    /** @type {?} */
    CxApiService.prototype.routing;
    /** @type {?} */
    CxApiService.prototype.currency;
    /** @type {?} */
    CxApiService.prototype.language;
    /** @type {?} */
    CxApiService.prototype.product;
    /** @type {?} */
    CxApiService.prototype.productSearch;
    /** @type {?} */
    CxApiService.prototype.productReview;
    /** @type {?} */
    CxApiService.prototype.user;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY3gtYXBpL2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekUsT0FBTyxFQUNMLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3JCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFLNUMsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7Ozs7OztJQUN2QixZQUNxQixJQUFpQixFQUNqQixHQUFlLEVBQ2YsT0FBdUIsRUFFdkIsUUFBeUIsRUFDekIsUUFBeUIsRUFFekIsT0FBdUIsRUFDdkIsYUFBbUMsRUFDbkMsYUFBbUMsRUFFbkMsSUFBaUI7UUFYakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFFdkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFFekIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUVuQyxTQUFJLEdBQUosSUFBSSxDQUFhO0lBQ25DLENBQUM7OztZQWpCTCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFiUSxXQUFXLHVCQWdCZixRQUFRO1lBZkosVUFBVSx1QkFnQmQsUUFBUTtZQWZKLGNBQWMsdUJBZ0JsQixRQUFRO1lBZmEsZUFBZSx1QkFpQnBDLFFBQVE7WUFqQkosZUFBZSx1QkFrQm5CLFFBQVE7WUFoQlgsY0FBYyx1QkFrQlgsUUFBUTtZQWpCWCxvQkFBb0IsdUJBa0JqQixRQUFRO1lBakJYLG9CQUFvQix1QkFrQmpCLFFBQVE7WUFoQkosV0FBVyx1QkFrQmYsUUFBUTs7Ozs7SUFYVCw0QkFBb0M7O0lBQ3BDLDJCQUFrQzs7SUFDbEMsK0JBQTBDOztJQUUxQyxnQ0FBNEM7O0lBQzVDLGdDQUE0Qzs7SUFFNUMsK0JBQTBDOztJQUMxQyxxQ0FBc0Q7O0lBQ3RELHFDQUFzRDs7SUFFdEQsNEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi9jbXMvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSwgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vc2l0ZS1jb250ZXh0L2luZGV4JztcbmltcG9ydCB7XG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUHJvZHVjdFJldmlld1NlcnZpY2Vcbn0gZnJvbSAnLi4vcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDeEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNtczogQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgLy8gc2l0ZSBjb250ZXh0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGN1cnJlbmN5OiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgLy8gcHJvZHVjdFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0OiBQcm9kdWN0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFNlYXJjaDogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RSZXZpZXc6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlLFxuICAgIC8vIHVzZXJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlcjogVXNlclNlcnZpY2VcbiAgKSB7fVxufVxuIl19