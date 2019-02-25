/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/billing-countries.action';
import { CLEAR_MISCS_DATA } from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.LOAD_BILLING_COUNTRIES_SUCCESS: {
            /** @type {?} */
            var billingCountries = action.payload;
            /** @type {?} */
            var entities = billingCountries.reduce(function (countryEntities, name) {
                var _a;
                return tslib_1.__assign({}, countryEntities, (_a = {}, _a[name.isocode] = name, _a));
            }, tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL2JpbGxpbmctY291bnRyaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBa0IsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFcEUsTUFBTSxLQUFPLFlBQVksR0FBMEI7SUFDakQsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBMEQ7SUFEMUQsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUM7O2dCQUN4QyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTzs7Z0JBQ2pDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQ3RDLFVBQUMsZUFBMkMsRUFBRSxJQUFTOztnQkFDckQsNEJBQ0ssZUFBZSxlQUNqQixJQUFJLENBQUMsT0FBTyxJQUFHLElBQUksT0FDcEI7WUFDSixDQUFDLHVCQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQSxJQUNSO1NBQ0g7UUFFRCxLQUFLLGdCQUFnQixDQUFDLENBQUM7WUFDckIsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpbGxpbmdDb3VudHJpZXNTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2JpbGxpbmctY291bnRyaWVzLmFjdGlvbic7XG5pbXBvcnQgeyBDTEVBUl9NSVNDU19EQVRBLCBDbGVhck1pc2NzRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBCaWxsaW5nQ291bnRyaWVzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiB7fVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uQmlsbGluZ0NvdW50cmllc0FjdGlvbiB8IENsZWFyTWlzY3NEYXRhXG4pOiBCaWxsaW5nQ291bnRyaWVzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfQklMTElOR19DT1VOVFJJRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgYmlsbGluZ0NvdW50cmllcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBiaWxsaW5nQ291bnRyaWVzLnJlZHVjZShcbiAgICAgICAgKGNvdW50cnlFbnRpdGllczogeyBbaXNvY29kZTogc3RyaW5nXTogYW55IH0sIG5hbWU6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jb3VudHJ5RW50aXRpZXMsXG4gICAgICAgICAgICBbbmFtZS5pc29jb2RlXTogbmFtZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllc1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDTEVBUl9NSVNDU19EQVRBOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==