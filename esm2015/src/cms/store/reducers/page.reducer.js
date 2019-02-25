/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromPageData from '../actions/page.action';
/** @type {?} */
export const initialState = {
    entities: {},
    count: 0,
    latestPageKey: ''
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromPageData.UPDATE_LATEST_PAGE_KEY: {
            /** @type {?} */
            const pageKey = action.payload;
            return Object.assign({}, state, { latestPageKey: pageKey });
        }
        case fromPageData.LOAD_PAGEDATA_SUCCESS: {
            /** @type {?} */
            let page = action.payload;
            /** @type {?} */
            const existPage = state.entities[page.key];
            if (existPage != null) {
                /** @type {?} */
                let samePage = true;
                for (const position of Object.keys(page.value.slots)) {
                    if (page.value.slots[position].components.length !==
                        existPage.slots[position].components.length) {
                        samePage = false;
                        break;
                    }
                }
                if (samePage) {
                    page = Object.assign({}, page, { value: Object.assign({}, page.value, { seen: [...page.value.seen, ...existPage.seen] }) });
                }
            }
            /** @type {?} */
            const entities = Object.assign({}, state.entities, { [page.key]: page.value });
            return Object.assign({}, state, { entities, count: state.count + 1, latestPageKey: page.key });
        }
        case fromPageData.REFRESH_LATEST_PAGE: {
            /** @type {?} */
            const entities = Object.assign({}, state.entities, { [state.latestPageKey]: null });
            return Object.assign({}, state, { entities });
        }
        case fromPageData.CLEAN_PAGE_STATE: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9wYWdlLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7O0FBSXZELE1BQU0sT0FBTyxZQUFZLEdBQWM7SUFDckMsUUFBUSxFQUFFLEVBQUU7SUFDWixLQUFLLEVBQUUsQ0FBQztJQUNSLGFBQWEsRUFBRSxFQUFFO0NBQ2xCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUErQjtJQUUvQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7a0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztZQUM5Qix5QkFDSyxLQUFLLElBQ1IsYUFBYSxFQUFFLE9BQU8sSUFDdEI7U0FDSDtRQUVELEtBQUssWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUM7O2dCQUNuQyxJQUFJLEdBQWlDLE1BQU0sQ0FBQyxPQUFPOztrQkFFakQsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUMxQyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7O29CQUNqQixRQUFRLEdBQUcsSUFBSTtnQkFDbkIsS0FBSyxNQUFNLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3BELElBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU07d0JBQzVDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDM0M7d0JBQ0EsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDakIsTUFBTTtxQkFDUDtpQkFDRjtnQkFDRCxJQUFJLFFBQVEsRUFBRTtvQkFDWixJQUFJLHFCQUNDLElBQUksSUFDUCxLQUFLLG9CQUNBLElBQUksQ0FBQyxLQUFLLElBQ2IsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFFaEQsQ0FBQztpQkFDSDthQUNGOztrQkFFSyxRQUFRLHFCQUNULEtBQUssQ0FBQyxRQUFRLElBQ2pCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQ3ZCO1lBRUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsRUFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ3RCLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUN2QjtTQUNIO1FBRUQsS0FBSyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7a0JBQy9CLFFBQVEscUJBQ1QsS0FBSyxDQUFDLFFBQVEsSUFDakIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxHQUM1QjtZQUVELHlCQUNLLEtBQUssSUFDUixRQUFRLElBQ1I7U0FDSDtRQUVELEtBQUssWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21QYWdlRGF0YSBmcm9tICcuLi9hY3Rpb25zL3BhZ2UuYWN0aW9uJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VTdGF0ZSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFBhZ2VTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxuICBjb3VudDogMCxcbiAgbGF0ZXN0UGFnZUtleTogJydcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tUGFnZURhdGEuUGFnZUFjdGlvblxuKTogUGFnZVN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbVBhZ2VEYXRhLlVQREFURV9MQVRFU1RfUEFHRV9LRVk6IHtcbiAgICAgIGNvbnN0IHBhZ2VLZXkgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsYXRlc3RQYWdlS2V5OiBwYWdlS2V5XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbVBhZ2VEYXRhLkxPQURfUEFHRURBVEFfU1VDQ0VTUzoge1xuICAgICAgbGV0IHBhZ2U6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiBQYWdlIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgY29uc3QgZXhpc3RQYWdlID0gc3RhdGUuZW50aXRpZXNbcGFnZS5rZXldO1xuICAgICAgaWYgKGV4aXN0UGFnZSAhPSBudWxsKSB7XG4gICAgICAgIGxldCBzYW1lUGFnZSA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgT2JqZWN0LmtleXMocGFnZS52YWx1ZS5zbG90cykpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwYWdlLnZhbHVlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzLmxlbmd0aCAhPT1cbiAgICAgICAgICAgIGV4aXN0UGFnZS5zbG90c1twb3NpdGlvbl0uY29tcG9uZW50cy5sZW5ndGhcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNhbWVQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNhbWVQYWdlKSB7XG4gICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgIC4uLnBhZ2UsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAuLi5wYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBzZWVuOiBbLi4ucGFnZS52YWx1ZS5zZWVuLCAuLi5leGlzdFBhZ2Uuc2Vlbl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudGl0aWVzID0ge1xuICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgW3BhZ2Uua2V5XTogcGFnZS52YWx1ZVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyAxLFxuICAgICAgICBsYXRlc3RQYWdlS2V5OiBwYWdlLmtleVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21QYWdlRGF0YS5SRUZSRVNIX0xBVEVTVF9QQUdFOiB7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHtcbiAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIFtzdGF0ZS5sYXRlc3RQYWdlS2V5XTogbnVsbFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbVBhZ2VEYXRhLkNMRUFOX1BBR0VfU1RBVEU6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==