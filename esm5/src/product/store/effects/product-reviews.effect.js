/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as productReviewsActions from './../actions/product-reviews.action';
import { OccProductService } from './../../occ/product.service';
var ProductReviewsEffects = /** @class */ (function () {
    function ProductReviewsEffects(actions$, occProductService) {
        var _this = this;
        this.actions$ = actions$;
        this.occProductService = occProductService;
        this.loadProductReviews$ = this.actions$.pipe(ofType(productReviewsActions.LOAD_PRODUCT_REVIEWS), map(function (action) { return action.payload; }), mergeMap(function (productCode) {
            return _this.occProductService.loadProductReviews(productCode).pipe(map(function (data) {
                return new productReviewsActions.LoadProductReviewsSuccess({
                    productCode: productCode,
                    list: data.reviews
                });
            }), catchError(function (_error) {
                return of(new productReviewsActions.LoadProductReviewsFail((/** @type {?} */ ({
                    message: productCode
                }))));
            }));
        }));
        this.postProductReview = this.actions$.pipe(ofType(productReviewsActions.POST_PRODUCT_REVIEW), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occProductService
                .postProductReview(payload.productCode, payload.review)
                .pipe(map(function (reviewResponse) {
                return new productReviewsActions.PostProductReviewSuccess(reviewResponse);
            }), catchError(function (_error) {
                return of(new productReviewsActions.PostProductReviewFail(payload.productCode));
            }));
        }));
    }
    ProductReviewsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductReviewsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccProductService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductReviewsEffects.prototype, "postProductReview", void 0);
    return ProductReviewsEffects;
}());
export { ProductReviewsEffects };
if (false) {
    /** @type {?} */
    ProductReviewsEffects.prototype.loadProductReviews$;
    /** @type {?} */
    ProductReviewsEffects.prototype.postProductReview;
    /**
     * @type {?}
     * @private
     */
    ProductReviewsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductReviewsEffects.prototype.occProductService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2VmZmVjdHMvcHJvZHVjdC1yZXZpZXdzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdoRTtJQXVERSwrQkFDVSxRQUFpQixFQUNqQixpQkFBb0M7UUFGOUMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF0RDlDLHdCQUFtQixHQUdmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsRUFDbEQsR0FBRyxDQUFDLFVBQUMsTUFBZ0QsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQ3pFLFFBQVEsQ0FBQyxVQUFBLFdBQVc7WUFDbEIsT0FBTyxLQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRSxHQUFHLENBQUMsVUFBQSxJQUFJO2dCQUNOLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDekQsV0FBVyxhQUFBO29CQUNYLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztpQkFDbkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsTUFBTTtnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLG1CQUFBO29CQUMvQyxPQUFPLEVBQUUsV0FBVztpQkFDckIsRUFBYyxDQUFDLENBQ2pCO1lBSkQsQ0FJQyxDQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixzQkFBaUIsR0FHYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN4RSxRQUFRLENBQUMsVUFBQSxPQUFPO1lBQ2QsT0FBTyxLQUFJLENBQUMsaUJBQWlCO2lCQUMxQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQ3RELElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQSxjQUFjO2dCQUNoQixPQUFPLElBQUkscUJBQXFCLENBQUMsd0JBQXdCLENBQ3ZELGNBQWMsQ0FDZixDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsTUFBTTtnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLHFCQUFxQixDQUFDLHFCQUFxQixDQUM3QyxPQUFPLENBQUMsV0FBVyxDQUNwQixDQUNGO1lBSkQsQ0FJQyxDQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkExREwsVUFBVTs7OztnQkFURixPQUFPO2dCQU1QLGlCQUFpQjs7SUFNeEI7UUFEQyxNQUFNLEVBQUU7MENBQ1ksVUFBVTtzRUF1QjdCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1UsVUFBVTtvRUF3QjNCO0lBTUosNEJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTFEWSxxQkFBcUI7OztJQUNoQyxvREF3QkU7O0lBRUYsa0RBeUJFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIsa0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtZXJnZU1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgcHJvZHVjdFJldmlld3NBY3Rpb25zIGZyb20gJy4vLi4vYWN0aW9ucy9wcm9kdWN0LXJldmlld3MuYWN0aW9uJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9vY2MvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUHJvZHVjdFJldmlld3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgcHJvZHVjdFJldmlld3NBY3Rpb25zLkxvYWRQcm9kdWN0UmV2aWV3c1N1Y2Nlc3NcbiAgICB8IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5MT0FEX1BST0RVQ1RfUkVWSUVXUyksXG4gICAgbWFwKChhY3Rpb246IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwcm9kdWN0Q29kZSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NQcm9kdWN0U2VydmljZS5sb2FkUHJvZHVjdFJldmlld3MocHJvZHVjdENvZGUpLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NTdWNjZXNzKHtcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgbGlzdDogZGF0YS5yZXZpZXdzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKF9lcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Mb2FkUHJvZHVjdFJldmlld3NGYWlsKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogcHJvZHVjdENvZGVcbiAgICAgICAgICAgIH0gYXMgRXJyb3JNb2RlbClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcG9zdFByb2R1Y3RSZXZpZXc6IE9ic2VydmFibGU8XG4gICAgfCBwcm9kdWN0UmV2aWV3c0FjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdTdWNjZXNzXG4gICAgfCBwcm9kdWN0UmV2aWV3c0FjdGlvbnMuUG9zdFByb2R1Y3RSZXZpZXdGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5QT1NUX1BST0RVQ1RfUkVWSUVXKSxcbiAgICBtYXAoKGFjdGlvbjogcHJvZHVjdFJldmlld3NBY3Rpb25zLlBvc3RQcm9kdWN0UmV2aWV3KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NQcm9kdWN0U2VydmljZVxuICAgICAgICAucG9zdFByb2R1Y3RSZXZpZXcocGF5bG9hZC5wcm9kdWN0Q29kZSwgcGF5bG9hZC5yZXZpZXcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChyZXZpZXdSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld1N1Y2Nlc3MoXG4gICAgICAgICAgICAgIHJldmlld1Jlc3BvbnNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoX2Vycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IHByb2R1Y3RSZXZpZXdzQWN0aW9ucy5Qb3N0UHJvZHVjdFJldmlld0ZhaWwoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wcm9kdWN0Q29kZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY1Byb2R1Y3RTZXJ2aWNlOiBPY2NQcm9kdWN0U2VydmljZVxuICApIHt9XG59XG4iXX0=