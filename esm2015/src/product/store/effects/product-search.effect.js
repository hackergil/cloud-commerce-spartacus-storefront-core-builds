/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as productsSearchActions from '../actions/product-search.action';
import { ProductImageConverterService } from '../converters/product-image-converter.service';
import { OccProductSearchService } from '../../occ/product-search.service';
export class ProductsSearchEffects {
    /**
     * @param {?} actions$
     * @param {?} occProductSearchService
     * @param {?} productImageConverter
     */
    constructor(actions$, occProductSearchService, productImageConverter) {
        this.actions$ = actions$;
        this.occProductSearchService = occProductSearchService;
        this.productImageConverter = productImageConverter;
        this.searchProducts$ = this.actions$.pipe(ofType(productsSearchActions.SEARCH_PRODUCTS), switchMap((action) => {
            return this.occProductSearchService
                .query(action.payload.queryText, action.payload.searchConfig)
                .pipe(map(data => {
                this.productImageConverter.convertList(data.products);
                return new productsSearchActions.SearchProductsSuccess(data, action.auxiliary);
            }), catchError(error => of(new productsSearchActions.SearchProductsFail(error, action.auxiliary))));
        }));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(productsSearchActions.GET_PRODUCT_SUGGESTIONS), map((action) => action.payload), switchMap(payload => {
            return this.occProductSearchService
                .queryProductSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map(data => {
                if (data.suggestions === undefined) {
                    return new productsSearchActions.GetProductSuggestionsSuccess([]);
                }
                return new productsSearchActions.GetProductSuggestionsSuccess(data.suggestions);
            }), catchError(error => of(new productsSearchActions.GetProductSuggestionsFail(error))));
        }));
    }
}
ProductsSearchEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductsSearchEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccProductSearchService },
    { type: ProductImageConverterService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductsSearchEffects.prototype, "searchProducts$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);
if (false) {
    /** @type {?} */
    ProductsSearchEffects.prototype.searchProducts$;
    /** @type {?} */
    ProductsSearchEffects.prototype.getProductSuggestions$;
    /**
     * @type {?}
     * @private
     */
    ProductsSearchEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductsSearchEffects.prototype.occProductSearchService;
    /**
     * @type {?}
     * @private
     */
    ProductsSearchEffects.prototype.productImageConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUsscUJBQXFCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHM0UsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBMERoQyxZQUNVLFFBQWlCLEVBQ2pCLHVCQUFnRCxFQUNoRCxxQkFBbUQ7UUFGbkQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBOEI7UUEzRDdELG9CQUFlLEdBR1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsRUFDN0MsU0FBUyxDQUFDLENBQUMsTUFBNEMsRUFBRSxFQUFFO1lBQ3pELE9BQU8sSUFBSSxDQUFDLHVCQUF1QjtpQkFDaEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2lCQUM1RCxJQUFJLENBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNULElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLElBQUkscUJBQXFCLENBQUMscUJBQXFCLENBQ3BELElBQUksRUFDSixNQUFNLENBQUMsU0FBUyxDQUNqQixDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLHFCQUFxQixDQUFDLGtCQUFrQixDQUMxQyxLQUFLLEVBQ0wsTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FDRixDQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRiwyQkFBc0IsR0FHbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxFQUNyRCxHQUFHLENBQ0QsQ0FBQyxNQUFtRCxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN4RSxFQUNELFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyx1QkFBdUI7aUJBQ2hDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7aUJBQ3BFLElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtvQkFDbEMsT0FBTyxJQUFJLHFCQUFxQixDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuRTtnQkFDRCxPQUFPLElBQUkscUJBQXFCLENBQUMsNEJBQTRCLENBQzNELElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7WUFDSixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0QsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQU1DLENBQUM7OztZQS9ETCxVQUFVOzs7O1lBVE0sT0FBTztZQU9mLHVCQUF1QjtZQUR2Qiw0QkFBNEI7O0FBTW5DO0lBREMsTUFBTSxFQUFFO3NDQUNRLFVBQVU7OERBMEJ6QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNlLFVBQVU7cUVBeUJoQzs7O0lBdkRGLGdEQTJCRTs7SUFFRix1REEwQkU7Ozs7O0lBR0EseUNBQXlCOzs7OztJQUN6Qix3REFBd0Q7Ozs7O0lBQ3hELHNEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24nO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VhcmNoRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBzZWFyY2hQcm9kdWN0cyQ6IE9ic2VydmFibGU8XG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzXG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TRUFSQ0hfUFJPRFVDVFMpLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9jY1Byb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICAgICAgIC5xdWVyeShhY3Rpb24ucGF5bG9hZC5xdWVyeVRleHQsIGFjdGlvbi5wYXlsb2FkLnNlYXJjaENvbmZpZylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydExpc3QoZGF0YS5wcm9kdWN0cyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5TZWFyY2hQcm9kdWN0c1N1Y2Nlc3MoXG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGFjdGlvbi5hdXhpbGlhcnlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsKFxuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIGFjdGlvbi5hdXhpbGlhcnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMkOiBPYnNlcnZhYmxlPFxuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3NcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OUyksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9ucykgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9jY1Byb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICAgICAgIC5xdWVyeVByb2R1Y3RTdWdnZXN0aW9ucyhwYXlsb2FkLnRlcm0sIHBheWxvYWQuc2VhcmNoQ29uZmlnLnBhZ2VTaXplKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyhcbiAgICAgICAgICAgICAgZGF0YS5zdWdnZXN0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NQcm9kdWN0U2VhcmNoU2VydmljZTogT2NjUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW1hZ2VDb252ZXJ0ZXI6IFByb2R1Y3RJbWFnZUNvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxufVxuIl19