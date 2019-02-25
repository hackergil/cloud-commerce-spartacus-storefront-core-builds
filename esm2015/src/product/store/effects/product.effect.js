/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, catchError, mergeMap, switchMap, groupBy } from 'rxjs/operators';
import * as actions from '../actions/index';
import * as converters from '../converters/index';
import { OccProductService } from '../../occ/product.service';
export class ProductEffects {
    /**
     * @param {?} actions$
     * @param {?} occProductService
     * @param {?} productImageConverter
     * @param {?} productReferenceConverterService
     */
    constructor(actions$, occProductService, productImageConverter, productReferenceConverterService) {
        this.actions$ = actions$;
        this.occProductService = occProductService;
        this.productImageConverter = productImageConverter;
        this.productReferenceConverterService = productReferenceConverterService;
        this.loadProduct$ = this.actions$.pipe(ofType(actions.LOAD_PRODUCT), map((action) => action.payload), groupBy(productCode => productCode), mergeMap(group => group.pipe(switchMap(productCode => {
            return this.occProductService.loadProduct(productCode).pipe(map(product => {
                this.productImageConverter.convertProduct(product);
                this.productReferenceConverterService.convertProduct(product);
                return new actions.LoadProductSuccess(product);
            }), catchError(error => of(new actions.LoadProductFail(productCode, error))));
        }))));
    }
}
ProductEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccProductService },
    { type: converters.ProductImageConverterService },
    { type: converters.ProductReferenceConverterService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductEffects.prototype, "loadProduct$", void 0);
if (false) {
    /** @type {?} */
    ProductEffects.prototype.loadProduct$;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.occProductService;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.productImageConverter;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.productReferenceConverterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRSxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHOUQsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUEwQnpCLFlBQ1UsUUFBaUIsRUFDakIsaUJBQW9DLEVBQ3BDLHFCQUE4RCxFQUM5RCxnQ0FBNkU7UUFIN0UsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBeUM7UUFDOUQscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUE2QztRQTVCdkYsaUJBQVksR0FFUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFDNUIsR0FBRyxDQUFDLENBQUMsTUFBMkIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNwRCxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFDbkMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDekQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNaLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlELE9BQU8sSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQ3BELENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQ0YsQ0FDRixDQUFDO0lBT0MsQ0FBQzs7O1lBaENMLFVBQVU7Ozs7WUFSTSxPQUFPO1lBTWYsaUJBQWlCO1lBZ0NTLFVBQVUsQ0FBQyw0QkFBNEI7WUFDNUIsVUFBVSxDQUFDLGdDQUFnQzs7QUE1QnZGO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7b0RBc0J0Qjs7O0lBdkJGLHNDQXVCRTs7Ozs7SUFHQSxrQ0FBeUI7Ozs7O0lBQ3pCLDJDQUE0Qzs7Ozs7SUFDNUMsK0NBQXNFOzs7OztJQUN0RSwwREFBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBtZXJnZU1hcCwgc3dpdGNoTWFwLCBncm91cEJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0ICogYXMgY29udmVydGVycyBmcm9tICcuLi9jb252ZXJ0ZXJzL2luZGV4JztcbmltcG9ydCB7IE9jY1Byb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3Byb2R1Y3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUHJvZHVjdCQ6IE9ic2VydmFibGU8XG4gICAgYWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MgfCBhY3Rpb25zLkxvYWRQcm9kdWN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShhY3Rpb25zLkxPQURfUFJPRFVDVCksXG4gICAgbWFwKChhY3Rpb246IGFjdGlvbnMuTG9hZFByb2R1Y3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBncm91cEJ5KHByb2R1Y3RDb2RlID0+IHByb2R1Y3RDb2RlKSxcbiAgICBtZXJnZU1hcChncm91cCA9PlxuICAgICAgZ3JvdXAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHByb2R1Y3RDb2RlID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vY2NQcm9kdWN0U2VydmljZS5sb2FkUHJvZHVjdChwcm9kdWN0Q29kZSkucGlwZShcbiAgICAgICAgICAgIG1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydFByb2R1Y3QocHJvZHVjdCk7XG4gICAgICAgICAgICAgIHRoaXMucHJvZHVjdFJlZmVyZW5jZUNvbnZlcnRlclNlcnZpY2UuY29udmVydFByb2R1Y3QocHJvZHVjdCk7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgYWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MocHJvZHVjdCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgb2YobmV3IGFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsKHByb2R1Y3RDb2RlLCBlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY1Byb2R1Y3RTZXJ2aWNlOiBPY2NQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHByb2R1Y3RJbWFnZUNvbnZlcnRlcjogY29udmVydGVycy5Qcm9kdWN0SW1hZ2VDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdFJlZmVyZW5jZUNvbnZlcnRlclNlcnZpY2U6IGNvbnZlcnRlcnMuUHJvZHVjdFJlZmVyZW5jZUNvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxufVxuIl19