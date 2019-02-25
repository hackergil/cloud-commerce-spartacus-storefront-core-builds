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
var CxApiService = /** @class */ (function () {
    function CxApiService(auth, cms, routing, currency, language, product, productSearch, productReview, user) {
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
    CxApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CxApiService.ctorParameters = function () { return [
        { type: AuthService, decorators: [{ type: Optional }] },
        { type: CmsService, decorators: [{ type: Optional }] },
        { type: RoutingService, decorators: [{ type: Optional }] },
        { type: CurrencyService, decorators: [{ type: Optional }] },
        { type: LanguageService, decorators: [{ type: Optional }] },
        { type: ProductService, decorators: [{ type: Optional }] },
        { type: ProductSearchService, decorators: [{ type: Optional }] },
        { type: ProductReviewService, decorators: [{ type: Optional }] },
        { type: UserService, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ CxApiService.ngInjectableDef = i0.defineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.inject(i1.AuthService, 8), i0.inject(i2.CmsService, 8), i0.inject(i3.RoutingService, 8), i0.inject(i4.CurrencyService, 8), i0.inject(i5.LanguageService, 8), i0.inject(i6.ProductService, 8), i0.inject(i7.ProductSearchService, 8), i0.inject(i8.ProductReviewService, 8), i0.inject(i9.UserService, 8)); }, token: CxApiService, providedIn: "root" });
    return CxApiService;
}());
export { CxApiService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY3gtYXBpL2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekUsT0FBTyxFQUNMLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3JCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFFNUM7SUFJRSxzQkFDcUIsSUFBaUIsRUFDakIsR0FBZSxFQUNmLE9BQXVCLEVBRXZCLFFBQXlCLEVBQ3pCLFFBQXlCLEVBRXpCLE9BQXVCLEVBQ3ZCLGFBQW1DLEVBQ25DLGFBQW1DLEVBRW5DLElBQWlCO1FBWGpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRXZCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBRXpCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFFbkMsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUNuQyxDQUFDOztnQkFqQkwsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiUSxXQUFXLHVCQWdCZixRQUFRO2dCQWZKLFVBQVUsdUJBZ0JkLFFBQVE7Z0JBZkosY0FBYyx1QkFnQmxCLFFBQVE7Z0JBZmEsZUFBZSx1QkFpQnBDLFFBQVE7Z0JBakJKLGVBQWUsdUJBa0JuQixRQUFRO2dCQWhCWCxjQUFjLHVCQWtCWCxRQUFRO2dCQWpCWCxvQkFBb0IsdUJBa0JqQixRQUFRO2dCQWpCWCxvQkFBb0IsdUJBa0JqQixRQUFRO2dCQWhCSixXQUFXLHVCQWtCZixRQUFROzs7dUJBN0JiO0NBK0JDLEFBbEJELElBa0JDO1NBZlksWUFBWTs7O0lBRXJCLDRCQUFvQzs7SUFDcEMsMkJBQWtDOztJQUNsQywrQkFBMEM7O0lBRTFDLGdDQUE0Qzs7SUFDNUMsZ0NBQTRDOztJQUU1QywrQkFBMEM7O0lBQzFDLHFDQUFzRDs7SUFDdEQscUNBQXNEOztJQUV0RCw0QkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uL2Ntcy9pbmRleCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlLCBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBQcm9kdWN0UmV2aWV3U2VydmljZVxufSBmcm9tICcuLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlci9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEN4QXBpU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY21zOiBDbXNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICAvLyBzaXRlIGNvbnRleHRcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgY3VycmVuY3k6IEN1cnJlbmN5U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSxcbiAgICAvLyBwcm9kdWN0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3Q6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0U2VhcmNoOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFJldmlldzogUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgLy8gdXNlclxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB1c2VyOiBVc2VyU2VydmljZVxuICApIHt9XG59XG4iXX0=