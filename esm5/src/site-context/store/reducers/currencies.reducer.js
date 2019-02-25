/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromCurrencies from '../actions/currencies.action';
/** @type {?} */
export var initialState = {
    entities: null,
    activeCurrency: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromCurrencies.LOAD_CURRENCIES_SUCCESS: {
            /** @type {?} */
            var currencies = action.payload;
            /** @type {?} */
            var entities = currencies.reduce(function (currEntities, currency) {
                var _a;
                return tslib_1.__assign({}, currEntities, (_a = {}, _a[currency.isocode] = currency, _a));
            }, tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromCurrencies.SET_ACTIVE_CURRENCY: {
            /** @type {?} */
            var isocode = action.payload;
            return tslib_1.__assign({}, state, { activeCurrency: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zdG9yZS9yZWR1Y2Vycy9jdXJyZW5jaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssY0FBYyxNQUFNLDhCQUE4QixDQUFDOztBQUkvRCxNQUFNLEtBQU8sWUFBWSxHQUFvQjtJQUMzQyxRQUFRLEVBQUUsSUFBSTtJQUNkLGNBQWMsRUFBRSxJQUFJO0NBQ3JCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUF1QztJQUR2QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Z0JBQ3JDLFVBQVUsR0FBZSxNQUFNLENBQUMsT0FBTzs7Z0JBQ3ZDLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUNoQyxVQUFDLFlBQTZDLEVBQUUsUUFBa0I7O2dCQUNoRSw0QkFDSyxZQUFZLGVBQ2QsUUFBUSxDQUFDLE9BQU8sSUFBRyxRQUFRLE9BQzVCO1lBQ0osQ0FBQyx1QkFFSSxLQUFLLENBQUMsUUFBUSxFQUVwQjtZQUVELDRCQUNLLEtBQUssSUFDUixRQUFRLFVBQUEsSUFDUjtTQUNIO1FBRUQsS0FBSyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Z0JBQ2pDLE9BQU8sR0FBVyxNQUFNLENBQUMsT0FBTztZQUV0Qyw0QkFDSyxLQUFLLElBQ1IsY0FBYyxFQUFFLE9BQU8sSUFDdkI7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUN1cnJlbmNpZXMgZnJvbSAnLi4vYWN0aW9ucy9jdXJyZW5jaWVzLmFjdGlvbic7XG5pbXBvcnQgeyBDdXJyZW5jaWVzU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDdXJyZW5jaWVzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBudWxsLFxuICBhY3RpdmVDdXJyZW5jeTogbnVsbFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21DdXJyZW5jaWVzLkN1cnJlbmNpZXNBY3Rpb25cbik6IEN1cnJlbmNpZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21DdXJyZW5jaWVzLkxPQURfQ1VSUkVOQ0lFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBjdXJyZW5jaWVzOiBDdXJyZW5jeVtdID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGN1cnJlbmNpZXMucmVkdWNlKFxuICAgICAgICAoY3VyckVudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBDdXJyZW5jeSB9LCBjdXJyZW5jeTogQ3VycmVuY3kpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VyckVudGl0aWVzLFxuICAgICAgICAgICAgW2N1cnJlbmN5Lmlzb2NvZGVdOiBjdXJyZW5jeVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllc1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQ3VycmVuY2llcy5TRVRfQUNUSVZFX0NVUlJFTkNZOiB7XG4gICAgICBjb25zdCBpc29jb2RlOiBzdHJpbmcgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUN1cnJlbmN5OiBpc29jb2RlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==