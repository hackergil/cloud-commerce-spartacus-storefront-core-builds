/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from './../actions/user-token.action';
/** @type {?} */
export var initialState = {
    token: (/** @type {?} */ ({}))
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.LOAD_USER_TOKEN:
        case fromAction.REFRESH_USER_TOKEN: {
            return tslib_1.__assign({}, state);
        }
        case fromAction.LOAD_USER_TOKEN_SUCCESS:
        case fromAction.REFRESH_USER_TOKEN_SUCCESS: {
            /** @type {?} */
            var token = action.payload;
            return tslib_1.__assign({}, state, { token: token });
        }
        case fromAction.LOAD_USER_TOKEN_FAIL:
        case fromAction.REFRESH_USER_TOKEN_FAIL: {
            return tslib_1.__assign({}, state);
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc3RvcmUvcmVkdWNlcnMvdXNlci10b2tlbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLFVBQVUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFJN0QsTUFBTSxLQUFPLFlBQVksR0FBbUI7SUFDMUMsS0FBSyxFQUFFLG1CQUFXLEVBQUUsRUFBQTtDQUNyQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBa0M7SUFEbEMsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxLQUFLLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xDLDRCQUNLLEtBQUssRUFDUjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsdUJBQXVCLENBQUM7UUFDeEMsS0FBSyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7Z0JBQ3BDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTztZQUU1Qiw0QkFDSyxLQUFLLElBQ1IsS0FBSyxPQUFBLElBQ0w7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JDLEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDdkMsNEJBQ0ssS0FBSyxFQUNSO1NBQ0g7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi8uLi9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyVG9rZW5TdGF0ZSB9IGZyb20gJy4uL2F1dGgtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyVG9rZW5TdGF0ZSA9IHtcbiAgdG9rZW46IDxVc2VyVG9rZW4+e31cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLlVzZXJUb2tlbkFjdGlvblxuKTogVXNlclRva2VuU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfVVNFUl9UT0tFTjpcbiAgICBjYXNlIGZyb21BY3Rpb24uUkVGUkVTSF9VU0VSX1RPS0VOOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1M6XG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFRlJFU0hfVVNFUl9UT0tFTl9TVUNDRVNTOiB7XG4gICAgICBjb25zdCB0b2tlbiA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9rZW5cbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfVVNFUl9UT0tFTl9GQUlMOlxuICAgIGNhc2UgZnJvbUFjdGlvbi5SRUZSRVNIX1VTRVJfVE9LRU5fRkFJTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==