/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromPageData from '../actions/page.action';
/** @type {?} */
export var initialState = {
    entities: {},
    count: 0,
    latestPageKey: ''
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var e_1, _a, _b, _c;
    switch (action.type) {
        case fromPageData.UPDATE_LATEST_PAGE_KEY: {
            /** @type {?} */
            var pageKey = action.payload;
            return tslib_1.__assign({}, state, { latestPageKey: pageKey });
        }
        case fromPageData.LOAD_PAGEDATA_SUCCESS: {
            /** @type {?} */
            var page = action.payload;
            /** @type {?} */
            var existPage = state.entities[page.key];
            if (existPage != null) {
                /** @type {?} */
                var samePage = true;
                try {
                    for (var _d = tslib_1.__values(Object.keys(page.value.slots)), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var position = _e.value;
                        if (page.value.slots[position].components.length !==
                            existPage.slots[position].components.length) {
                            samePage = false;
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (samePage) {
                    page = tslib_1.__assign({}, page, { value: tslib_1.__assign({}, page.value, { seen: tslib_1.__spread(page.value.seen, existPage.seen) }) });
                }
            }
            /** @type {?} */
            var entities = tslib_1.__assign({}, state.entities, (_b = {}, _b[page.key] = page.value, _b));
            return tslib_1.__assign({}, state, { entities: entities, count: state.count + 1, latestPageKey: page.key });
        }
        case fromPageData.REFRESH_LATEST_PAGE: {
            /** @type {?} */
            var entities = tslib_1.__assign({}, state.entities, (_c = {}, _c[state.latestPageKey] = null, _c));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromPageData.CLEAN_PAGE_STATE: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9wYWdlLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssWUFBWSxNQUFNLHdCQUF3QixDQUFDOztBQUl2RCxNQUFNLEtBQU8sWUFBWSxHQUFjO0lBQ3JDLFFBQVEsRUFBRSxFQUFFO0lBQ1osS0FBSyxFQUFFLENBQUM7SUFDUixhQUFhLEVBQUUsRUFBRTtDQUNsQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBK0I7SUFEL0Isc0JBQUEsRUFBQSxvQkFBb0I7O0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQzlCLDRCQUNLLEtBQUssSUFDUixhQUFhLEVBQUUsT0FBTyxJQUN0QjtTQUNIO1FBRUQsS0FBSyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Z0JBQ25DLElBQUksR0FBaUMsTUFBTSxDQUFDLE9BQU87O2dCQUVqRCxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzFDLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTs7b0JBQ2pCLFFBQVEsR0FBRyxJQUFJOztvQkFDbkIsS0FBdUIsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTt3QkFBakQsSUFBTSxRQUFRLFdBQUE7d0JBQ2pCLElBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU07NEJBQzVDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDM0M7NEJBQ0EsUUFBUSxHQUFHLEtBQUssQ0FBQzs0QkFDakIsTUFBTTt5QkFDUDtxQkFDRjs7Ozs7Ozs7O2dCQUNELElBQUksUUFBUSxFQUFFO29CQUNaLElBQUksd0JBQ0MsSUFBSSxJQUNQLEtBQUssdUJBQ0EsSUFBSSxDQUFDLEtBQUssSUFDYixJQUFJLG1CQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFLLFNBQVMsQ0FBQyxJQUFJLE9BRS9DLENBQUM7aUJBQ0g7YUFDRjs7Z0JBRUssUUFBUSx3QkFDVCxLQUFLLENBQUMsUUFBUSxlQUNoQixJQUFJLENBQUMsR0FBRyxJQUFHLElBQUksQ0FBQyxLQUFLLE1BQ3ZCO1lBRUQsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQSxFQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDdEIsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLElBQ3ZCO1NBQ0g7UUFFRCxLQUFLLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztnQkFDL0IsUUFBUSx3QkFDVCxLQUFLLENBQUMsUUFBUSxlQUNoQixLQUFLLENBQUMsYUFBYSxJQUFHLElBQUksTUFDNUI7WUFFRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtRQUVELEtBQUssWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21QYWdlRGF0YSBmcm9tICcuLi9hY3Rpb25zL3BhZ2UuYWN0aW9uJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VTdGF0ZSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFBhZ2VTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxuICBjb3VudDogMCxcbiAgbGF0ZXN0UGFnZUtleTogJydcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tUGFnZURhdGEuUGFnZUFjdGlvblxuKTogUGFnZVN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbVBhZ2VEYXRhLlVQREFURV9MQVRFU1RfUEFHRV9LRVk6IHtcbiAgICAgIGNvbnN0IHBhZ2VLZXkgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsYXRlc3RQYWdlS2V5OiBwYWdlS2V5XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbVBhZ2VEYXRhLkxPQURfUEFHRURBVEFfU1VDQ0VTUzoge1xuICAgICAgbGV0IHBhZ2U6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiBQYWdlIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgY29uc3QgZXhpc3RQYWdlID0gc3RhdGUuZW50aXRpZXNbcGFnZS5rZXldO1xuICAgICAgaWYgKGV4aXN0UGFnZSAhPSBudWxsKSB7XG4gICAgICAgIGxldCBzYW1lUGFnZSA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgT2JqZWN0LmtleXMocGFnZS52YWx1ZS5zbG90cykpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwYWdlLnZhbHVlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzLmxlbmd0aCAhPT1cbiAgICAgICAgICAgIGV4aXN0UGFnZS5zbG90c1twb3NpdGlvbl0uY29tcG9uZW50cy5sZW5ndGhcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNhbWVQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNhbWVQYWdlKSB7XG4gICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgIC4uLnBhZ2UsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAuLi5wYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBzZWVuOiBbLi4ucGFnZS52YWx1ZS5zZWVuLCAuLi5leGlzdFBhZ2Uuc2Vlbl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudGl0aWVzID0ge1xuICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgW3BhZ2Uua2V5XTogcGFnZS52YWx1ZVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyAxLFxuICAgICAgICBsYXRlc3RQYWdlS2V5OiBwYWdlLmtleVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21QYWdlRGF0YS5SRUZSRVNIX0xBVEVTVF9QQUdFOiB7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHtcbiAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIFtzdGF0ZS5sYXRlc3RQYWdlS2V5XTogbnVsbFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbVBhZ2VEYXRhLkNMRUFOX1BBR0VfU1RBVEU6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==