/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromProductReviews from './../actions/product-reviews.action';
/** @type {?} */
export var initialState = {
    productCode: '',
    list: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromProductReviews.LOAD_PRODUCT_REVIEWS_SUCCESS: {
            /** @type {?} */
            var productCode = action.payload.productCode;
            /** @type {?} */
            var list = action.payload.list;
            return tslib_1.__assign({}, state, { productCode: productCode,
                list: list });
        }
    }
    return state;
}
/** @type {?} */
export var getReviewList = function (state) {
    return state.list;
};
/** @type {?} */
export var getReviewProductCode = function (state) {
    return state.productCode;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LXJldmlld3MucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFHMUUsTUFBTSxLQUFPLFlBQVksR0FBd0I7SUFDL0MsV0FBVyxFQUFFLEVBQUU7SUFDZixJQUFJLEVBQUUsRUFBRTtDQUNUOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUErQztJQUQvQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztnQkFDOUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVzs7Z0JBQ3hDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7WUFFaEMsNEJBQ0ssS0FBSyxJQUNSLFdBQVcsYUFBQTtnQkFDWCxJQUFJLE1BQUEsSUFDSjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxLQUFPLGFBQWEsR0FBRyxVQUFDLEtBQTBCO0lBQ3RELE9BQUEsS0FBSyxDQUFDLElBQUk7QUFBVixDQUFVOztBQUNaLE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxVQUFDLEtBQTBCO0lBQzdELE9BQUEsS0FBSyxDQUFDLFdBQVc7QUFBakIsQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0UmV2aWV3c1N0YXRlIH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tUHJvZHVjdFJldmlld3MgZnJvbSAnLi8uLi9hY3Rpb25zL3Byb2R1Y3QtcmV2aWV3cy5hY3Rpb24nO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0UmV2aWV3c1N0YXRlID0ge1xuICBwcm9kdWN0Q29kZTogJycsXG4gIGxpc3Q6IFtdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbVByb2R1Y3RSZXZpZXdzLlByb2R1Y3RSZXZpZXdzQWN0aW9uXG4pOiBQcm9kdWN0UmV2aWV3c1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbVByb2R1Y3RSZXZpZXdzLkxPQURfUFJPRFVDVF9SRVZJRVdTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RDb2RlID0gYWN0aW9uLnBheWxvYWQucHJvZHVjdENvZGU7XG4gICAgICBjb25zdCBsaXN0ID0gYWN0aW9uLnBheWxvYWQubGlzdDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICBsaXN0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJldmlld0xpc3QgPSAoc3RhdGU6IFByb2R1Y3RSZXZpZXdzU3RhdGUpOiBSZXZpZXdbXSA9PlxuICBzdGF0ZS5saXN0O1xuZXhwb3J0IGNvbnN0IGdldFJldmlld1Byb2R1Y3RDb2RlID0gKHN0YXRlOiBQcm9kdWN0UmV2aWV3c1N0YXRlKTogc3RyaW5nID0+XG4gIHN0YXRlLnByb2R1Y3RDb2RlO1xuIl19