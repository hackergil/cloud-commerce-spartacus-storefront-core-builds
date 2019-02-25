/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
export var initialLoaderState = {
    loading: false,
    error: false,
    success: false,
    value: undefined
};
/**
 * Higher order reducer that adds generic loading flag to chunk of the state
 *
 * Utilizes "loader" meta field of actions to set specific flags for specific
 * action (LOAD, SUCCESS, FAIL, RESET)
 * @template T
 * @param {?} loadActionType
 * @param {?=} reducer
 * @return {?}
 */
export function loaderReducer(loadActionType, reducer) {
    return function (state, action) {
        if (state === void 0) { state = initialLoaderState; }
        if (action.meta &&
            action.meta.loader &&
            action.meta.entityType === loadActionType) {
            /** @type {?} */
            var entity = action.meta.loader;
            if (entity.load) {
                return tslib_1.__assign({}, state, { loading: true, value: reducer ? reducer(state.value, action) : state.value });
            }
            else if (entity.error) {
                return tslib_1.__assign({}, state, { loading: false, error: true, success: false, value: reducer ? reducer(state.value, action) : undefined });
            }
            else if (entity.success) {
                return tslib_1.__assign({}, state, { value: reducer ? reducer(state.value, action) : action.payload, loading: false, error: false, success: true });
            }
            else {
                // reset state action
                return tslib_1.__assign({}, initialLoaderState, { value: reducer
                        ? reducer(initialLoaderState.value, action)
                        : initialLoaderState.value });
            }
        }
        if (reducer) {
            /** @type {?} */
            var newValue = reducer(state.value, action);
            if (newValue !== state.value) {
                return tslib_1.__assign({}, state, { value: newValue });
            }
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sS0FBTyxrQkFBa0IsR0FBcUI7SUFDbEQsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsS0FBSztJQUNaLE9BQU8sRUFBRSxLQUFLO0lBQ2QsS0FBSyxFQUFFLFNBQVM7Q0FDakI7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsY0FBc0IsRUFDdEIsT0FBeUM7SUFFekMsT0FBTyxVQUNMLEtBQTBDLEVBQzFDLE1BQW9CO1FBRHBCLHNCQUFBLEVBQUEsMEJBQTBDO1FBRzFDLElBQ0UsTUFBTSxDQUFDLElBQUk7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssY0FBYyxFQUN6Qzs7Z0JBQ00sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUVqQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxJQUFJLEVBQ2IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQzNEO2FBQ0g7aUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUN2Qiw0QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLEtBQUssRUFDZCxLQUFLLEVBQUUsSUFBSSxFQUNYLE9BQU8sRUFBRSxLQUFLLEVBQ2QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFDekQ7YUFDSDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLDRCQUNLLEtBQUssSUFDUixLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFDOUQsT0FBTyxFQUFFLEtBQUssRUFDZCxLQUFLLEVBQUUsS0FBSyxFQUNaLE9BQU8sRUFBRSxJQUFJLElBQ2I7YUFDSDtpQkFBTTtnQkFDTCxxQkFBcUI7Z0JBQ3JCLDRCQUNLLGtCQUFrQixJQUNyQixLQUFLLEVBQUUsT0FBTzt3QkFDWixDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7d0JBQzNDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLElBQzVCO2FBQ0g7U0FDRjtRQUVELElBQUksT0FBTyxFQUFFOztnQkFDTCxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQzdDLElBQUksUUFBUSxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzVCLDRCQUFZLEtBQUssSUFBRSxLQUFLLEVBQUUsUUFBUSxJQUFHO2FBQ3RDO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4vbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IExvYWRlckFjdGlvbiB9IGZyb20gJy4vbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsTG9hZGVyU3RhdGU6IExvYWRlclN0YXRlPGFueT4gPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogZmFsc2UsXG4gIHN1Y2Nlc3M6IGZhbHNlLFxuICB2YWx1ZTogdW5kZWZpbmVkXG59O1xuXG4vKipcbiAqIEhpZ2hlciBvcmRlciByZWR1Y2VyIHRoYXQgYWRkcyBnZW5lcmljIGxvYWRpbmcgZmxhZyB0byBjaHVuayBvZiB0aGUgc3RhdGVcbiAqXG4gKiBVdGlsaXplcyBcImxvYWRlclwiIG1ldGEgZmllbGQgb2YgYWN0aW9ucyB0byBzZXQgc3BlY2lmaWMgZmxhZ3MgZm9yIHNwZWNpZmljXG4gKiBhY3Rpb24gKExPQUQsIFNVQ0NFU1MsIEZBSUwsIFJFU0VUKVxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyUmVkdWNlcjxUPihcbiAgbG9hZEFjdGlvblR5cGU6IHN0cmluZyxcbiAgcmVkdWNlcj86IChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IFRcbikge1xuICByZXR1cm4gKFxuICAgIHN0YXRlOiBMb2FkZXJTdGF0ZTxUPiA9IGluaXRpYWxMb2FkZXJTdGF0ZSxcbiAgICBhY3Rpb246IExvYWRlckFjdGlvblxuICApOiBMb2FkZXJTdGF0ZTxUPiA9PiB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmxvYWRlciAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gbG9hZEFjdGlvblR5cGVcbiAgICApIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IGFjdGlvbi5tZXRhLmxvYWRlcjtcblxuICAgICAgaWYgKGVudGl0eS5sb2FkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogcmVkdWNlciA/IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbikgOiBzdGF0ZS52YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogcmVkdWNlciA/IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbikgOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICB2YWx1ZTogcmVkdWNlciA/IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbikgOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVzZXQgc3RhdGUgYWN0aW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uaW5pdGlhbExvYWRlclN0YXRlLFxuICAgICAgICAgIHZhbHVlOiByZWR1Y2VyXG4gICAgICAgICAgICA/IHJlZHVjZXIoaW5pdGlhbExvYWRlclN0YXRlLnZhbHVlLCBhY3Rpb24pXG4gICAgICAgICAgICA6IGluaXRpYWxMb2FkZXJTdGF0ZS52YWx1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWR1Y2VyKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbik7XG4gICAgICBpZiAobmV3VmFsdWUgIT09IHN0YXRlLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2YWx1ZTogbmV3VmFsdWUgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufVxuIl19