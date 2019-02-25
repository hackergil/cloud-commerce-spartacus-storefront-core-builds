/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PRODUCT_DETAIL_ENTITY } from '../product-state';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
/** @type {?} */
export const LOAD_PRODUCT = '[Product] Load Product Data';
/** @type {?} */
export const LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
/** @type {?} */
export const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
export class LoadProduct extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_DETAIL_ENTITY, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT;
    }
}
if (false) {
    /** @type {?} */
    LoadProduct.prototype.type;
    /** @type {?} */
    LoadProduct.prototype.payload;
}
export class LoadProductFail extends EntityFailAction {
    /**
     * @param {?} productCode
     * @param {?} payload
     */
    constructor(productCode, payload) {
        super(PRODUCT_DETAIL_ENTITY, productCode, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadProductFail.prototype.type;
    /** @type {?} */
    LoadProductFail.prototype.payload;
}
export class LoadProductSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_DETAIL_ENTITY, payload.code);
        this.payload = payload;
        this.type = LOAD_PRODUCT_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadProductSuccess.prototype.type;
    /** @type {?} */
    LoadProductSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9hY3Rpb25zL3Byb2R1Y3QuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV6RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDcEIsTUFBTSx5REFBeUQsQ0FBQzs7QUFFakUsTUFBTSxPQUFPLFlBQVksR0FBRyw2QkFBNkI7O0FBQ3pELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxrQ0FBa0M7O0FBQ25FLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxxQ0FBcUM7QUFFekUsTUFBTSxPQUFPLFdBQVksU0FBUSxnQkFBZ0I7Ozs7SUFFL0MsWUFBbUIsT0FBZTtRQUNoQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsWUFBWSxDQUFDO0lBRzdCLENBQUM7Q0FDRjs7O0lBSkMsMkJBQTZCOztJQUNqQiw4QkFBc0I7O0FBS3BDLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjs7Ozs7SUFFbkQsWUFBWSxXQUFtQixFQUFTLE9BQVk7UUFDbEQsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURiLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEM0MsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBR2xDLENBQUM7Q0FDRjs7O0lBSkMsK0JBQWtDOztJQUNELGtDQUFtQjs7QUFLdEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjs7OztJQUV6RCxZQUFtQixPQUFnQjtRQUNqQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFEMUIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR3JDLENBQUM7Q0FDRjs7O0lBSkMsa0NBQXFDOztJQUN6QixxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQUk9EVUNUX0RFVEFJTF9FTlRJVFkgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1QgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfRkFJTCA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IERhdGEgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1NVQ0NFU1MgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBEYXRhIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3QgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFBST0RVQ1RfREVUQUlMX0VOVElUWSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9EVUNUX0RFVEFJTF9FTlRJVFksIHByb2R1Y3RDb2RlLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2R1Y3QpIHtcbiAgICBzdXBlcihQUk9EVUNUX0RFVEFJTF9FTlRJVFksIHBheWxvYWQuY29kZSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQcm9kdWN0QWN0aW9uID0gTG9hZFByb2R1Y3QgfCBMb2FkUHJvZHVjdEZhaWwgfCBMb2FkUHJvZHVjdFN1Y2Nlc3M7XG4iXX0=