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
var ProductsSearchEffects = /** @class */ (function () {
    function ProductsSearchEffects(actions$, occProductSearchService, productImageConverter) {
        var _this = this;
        this.actions$ = actions$;
        this.occProductSearchService = occProductSearchService;
        this.productImageConverter = productImageConverter;
        this.searchProducts$ = this.actions$.pipe(ofType(productsSearchActions.SEARCH_PRODUCTS), switchMap(function (action) {
            return _this.occProductSearchService
                .query(action.payload.queryText, action.payload.searchConfig)
                .pipe(map(function (data) {
                _this.productImageConverter.convertList(data.products);
                return new productsSearchActions.SearchProductsSuccess(data, action.auxiliary);
            }), catchError(function (error) {
                return of(new productsSearchActions.SearchProductsFail(error, action.auxiliary));
            }));
        }));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(productsSearchActions.GET_PRODUCT_SUGGESTIONS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occProductSearchService
                .queryProductSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map(function (data) {
                if (data.suggestions === undefined) {
                    return new productsSearchActions.GetProductSuggestionsSuccess([]);
                }
                return new productsSearchActions.GetProductSuggestionsSuccess(data.suggestions);
            }), catchError(function (error) {
                return of(new productsSearchActions.GetProductSuggestionsFail(error));
            }));
        }));
    }
    ProductsSearchEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductsSearchEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccProductSearchService },
        { type: ProductImageConverterService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductsSearchEffects.prototype, "searchProducts$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);
    return ProductsSearchEffects;
}());
export { ProductsSearchEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXNlYXJjaC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUsscUJBQXFCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFM0U7SUEyREUsK0JBQ1UsUUFBaUIsRUFDakIsdUJBQWdELEVBQ2hELHFCQUFtRDtRQUg3RCxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQThCO1FBM0Q3RCxvQkFBZSxHQUdYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEVBQzdDLFNBQVMsQ0FBQyxVQUFDLE1BQTRDO1lBQ3JELE9BQU8sS0FBSSxDQUFDLHVCQUF1QjtpQkFDaEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2lCQUM1RCxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUEsSUFBSTtnQkFDTixLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxJQUFJLHFCQUFxQixDQUFDLHFCQUFxQixDQUNwRCxJQUFJLEVBQ0osTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FDMUMsS0FBSyxFQUNMLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQ0Y7WUFMRCxDQUtDLENBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUdGLDJCQUFzQixHQUdsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLEVBQ3JELEdBQUcsQ0FDRCxVQUFDLE1BQW1ELElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FDeEUsRUFDRCxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsdUJBQXVCO2lCQUNoQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO2lCQUNwRSxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUEsSUFBSTtnQkFDTixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO29CQUNsQyxPQUFPLElBQUkscUJBQXFCLENBQUMsNEJBQTRCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25FO2dCQUNELE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyw0QkFBNEIsQ0FDM0QsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUE5RCxDQUE4RCxDQUMvRCxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7Z0JBL0RMLFVBQVU7Ozs7Z0JBVE0sT0FBTztnQkFPZix1QkFBdUI7Z0JBRHZCLDRCQUE0Qjs7SUFNbkM7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTtrRUEwQnpCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ2UsVUFBVTt5RUF5QmhDO0lBT0osNEJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQS9EWSxxQkFBcUI7OztJQUNoQyxnREEyQkU7O0lBRUYsdURBMEJFOzs7OztJQUdBLHlDQUF5Qjs7Ozs7SUFDekIsd0RBQXdEOzs7OztJQUN4RCxzREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgcHJvZHVjdHNTZWFyY2hBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcHJvZHVjdC1zZWFyY2guYWN0aW9uJztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZUNvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi9jb252ZXJ0ZXJzL3Byb2R1Y3QtaW1hZ2UtY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c1NlYXJjaEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgc2VhcmNoUHJvZHVjdHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzU3VjY2Vzc1xuICAgIHwgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU0VBUkNIX1BST0RVQ1RTKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NQcm9kdWN0U2VhcmNoU2VydmljZVxuICAgICAgICAucXVlcnkoYWN0aW9uLnBheWxvYWQucXVlcnlUZXh0LCBhY3Rpb24ucGF5bG9hZC5zZWFyY2hDb25maWcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlQ29udmVydGVyLmNvbnZlcnRMaXN0KGRhdGEucHJvZHVjdHMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzKFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBhY3Rpb24uYXV4aWxpYXJ5XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLlNlYXJjaFByb2R1Y3RzRmFpbChcbiAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICBhY3Rpb24uYXV4aWxpYXJ5XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zJDogT2JzZXJ2YWJsZTxcbiAgICB8IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzXG4gICAgfCBwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwcm9kdWN0c1NlYXJjaEFjdGlvbnMuR0VUX1BST0RVQ1RfU1VHR0VTVElPTlMpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnMpID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NQcm9kdWN0U2VhcmNoU2VydmljZVxuICAgICAgICAucXVlcnlQcm9kdWN0U3VnZ2VzdGlvbnMocGF5bG9hZC50ZXJtLCBwYXlsb2FkLnNlYXJjaENvbmZpZy5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgcHJvZHVjdHNTZWFyY2hBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgIGRhdGEuc3VnZ2VzdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IHByb2R1Y3RzU2VhcmNoQWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjUHJvZHVjdFNlYXJjaFNlcnZpY2U6IE9jY1Byb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdEltYWdlQ29udmVydGVyOiBQcm9kdWN0SW1hZ2VDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==