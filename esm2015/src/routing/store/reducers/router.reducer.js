/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PageType } from '../../../occ/occ-models/index';
import * as fromNgrxRouter from '@ngrx/router-store';
import * as fromActions from '../actions';
import { ROUTING_FEATURE } from '../../state';
/**
 * @record
 */
export function RouterState() { }
if (false) {
    /** @type {?} */
    RouterState.prototype.redirectUrl;
}
/** @type {?} */
export const initialState = {
    redirectUrl: '',
    navigationId: 0,
    state: {
        url: '',
        queryParams: {},
        params: {},
        context: {
            id: ''
        },
        cmsRequired: false
    }
};
/**
 * @record
 */
export function ActivatedRouterStateSnapshot() { }
if (false) {
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.url;
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.queryParams;
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.params;
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.context;
    /** @type {?} */
    ActivatedRouterStateSnapshot.prototype.cmsRequired;
}
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.router;
}
/**
 * @return {?}
 */
export function getReducers() {
    return {
        router: reducer
    };
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.SAVE_REDIRECT_URL: {
            return Object.assign({}, state, { redirectUrl: action.payload });
        }
        case fromActions.CLEAR_REDIRECT_URL: {
            return Object.assign({}, state, { redirectUrl: '' });
        }
        case fromNgrxRouter.ROUTER_NAVIGATION:
        case fromNgrxRouter.ROUTER_ERROR:
        case fromNgrxRouter.ROUTER_CANCEL: {
            /** @type {?} */
            const currentUrl = action.payload.routerState
                ? action.payload.routerState.url
                : '';
            /** @type {?} */
            const contextId = action.payload.routerState
                ? action.payload.routerState.context.id
                : '';
            /** @type {?} */
            let redirectUrl;
            if (contextId === 'login' ||
                contextId === 'register' ||
                currentUrl === state.redirectUrl) {
                redirectUrl = state.redirectUrl;
            }
            else {
                redirectUrl = '';
            }
            return {
                redirectUrl: redirectUrl,
                state: action.payload.routerState,
                navigationId: action.payload.event.id
            };
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export const reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers
};
/** @type {?} */
export const getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
/** @type {?} */
export const getRouterState = createSelector(getRouterFeatureState, (state) => state[ROUTING_FEATURE]);
/** @type {?} */
export const getRedirectUrl = createSelector(getRouterState, state => state.redirectUrl);
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
export class CustomSerializer {
    /**
     * @param {?} routerState
     * @return {?}
     */
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        /** @type {?} */
        let state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        /** @type {?} */
        let cmsRequired = false;
        if (state.routeConfig &&
            state.routeConfig.canActivate &&
            state.routeConfig.canActivate.find(x => x && x.guardName === 'CmsPageGuards')) {
            cmsRequired = true;
        }
        /** @type {?} */
        let context;
        if (params['productCode']) {
            context = { id: params['productCode'], type: PageType.PRODUCT_PAGE };
        }
        else if (params['categoryCode']) {
            context = { id: params['categoryCode'], type: PageType.CATEGORY_PAGE };
        }
        else if (params['brandCode']) {
            context = { id: params['brandCode'], type: PageType.CATEGORY_PAGE };
        }
        else if (params['query']) {
            context = { id: 'search', type: PageType.CONTENT_PAGE };
        }
        else if (state.data.pageLabel !== undefined) {
            context = { id: state.data.pageLabel, type: PageType.CONTENT_PAGE };
        }
        else if (state.url.length > 0) {
            context = {
                id: state.url[state.url.length - 1].path,
                type: PageType.CONTENT_PAGE
            };
        }
        else {
            context = {
                id: 'homepage',
                type: PageType.CONTENT_PAGE
            };
        }
        return { url, queryParams, params, context, cmsRequired };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQU16RCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHFCQUFxQixFQUd0QixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxLQUFLLGNBQWMsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEtBQUssV0FBVyxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRTlDLGlDQUdDOzs7SUFEQyxrQ0FBb0I7OztBQUd0QixNQUFNLE9BQU8sWUFBWSxHQUFnQjtJQUN2QyxXQUFXLEVBQUUsRUFBRTtJQUNmLFlBQVksRUFBRSxDQUFDO0lBQ2YsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLEVBQUU7UUFDUCxXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEVBQUU7U0FDUDtRQUNELFdBQVcsRUFBRSxLQUFLO0tBQ25CO0NBQ0Y7Ozs7QUFFRCxrREFNQzs7O0lBTEMsMkNBQVk7O0lBQ1osbURBQW9COztJQUNwQiw4Q0FBZTs7SUFDZiwrQ0FBcUI7O0lBQ3JCLG1EQUFxQjs7Ozs7QUFHdkIsMkJBRUM7OztJQURDLHVCQUFvQjs7Ozs7QUFHdEIsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixRQUFxQixZQUFZLEVBQ2pDLE1BQVc7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VUFBVTtnQkFDZCxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7YUFDNUIsQ0FBQztTQUNIO1FBRUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG4gIFBhcmFtc1xufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgTWVtb2l6ZWRTZWxlY3RvclxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tTmdyeFJvdXRlciBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBST1VUSU5HX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyU3RhdGVcbiAgZXh0ZW5kcyBmcm9tTmdyeFJvdXRlci5Sb3V0ZXJSZWR1Y2VyU3RhdGU8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICByZWRpcmVjdFVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSb3V0ZXJTdGF0ZSA9IHtcbiAgcmVkaXJlY3RVcmw6ICcnLFxuICBuYXZpZ2F0aW9uSWQ6IDAsXG4gIHN0YXRlOiB7XG4gICAgdXJsOiAnJyxcbiAgICBxdWVyeVBhcmFtczoge30sXG4gICAgcGFyYW1zOiB7fSxcbiAgICBjb250ZXh0OiB7XG4gICAgICBpZDogJydcbiAgICB9LFxuICAgIGNtc1JlcXVpcmVkOiBmYWxzZVxuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICB1cmw6IHN0cmluZztcbiAgcXVlcnlQYXJhbXM6IFBhcmFtcztcbiAgcGFyYW1zOiBQYXJhbXM7XG4gIGNvbnRleHQ6IFBhZ2VDb250ZXh0O1xuICBjbXNSZXF1aXJlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIHJvdXRlcjogUm91dGVyU3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgcm91dGVyOiByZWR1Y2VyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZTogUm91dGVyU3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogYW55XG4pOiBSb3V0ZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb25zLlNBVkVfUkVESVJFQ1RfVVJMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVkaXJlY3RVcmw6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIGZyb21BY3Rpb25zLkNMRUFSX1JFRElSRUNUX1VSTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZGlyZWN0VXJsOiAnJ1xuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfTkFWSUdBVElPTjpcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9FUlJPUjpcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9DQU5DRUw6IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZVxuICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLnVybFxuICAgICAgICA6ICcnO1xuICAgICAgY29uc3QgY29udGV4dElkID0gYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGVcbiAgICAgICAgPyBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZS5jb250ZXh0LmlkXG4gICAgICAgIDogJyc7XG4gICAgICBsZXQgcmVkaXJlY3RVcmw7XG4gICAgICBpZiAoXG4gICAgICAgIGNvbnRleHRJZCA9PT0gJ2xvZ2luJyB8fFxuICAgICAgICBjb250ZXh0SWQgPT09ICdyZWdpc3RlcicgfHxcbiAgICAgICAgY3VycmVudFVybCA9PT0gc3RhdGUucmVkaXJlY3RVcmxcbiAgICAgICkge1xuICAgICAgICByZWRpcmVjdFVybCA9IHN0YXRlLnJlZGlyZWN0VXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVkaXJlY3RVcmwgPSAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVkaXJlY3RVcmw6IHJlZGlyZWN0VXJsLFxuICAgICAgICBzdGF0ZTogYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUsXG4gICAgICAgIG5hdmlnYXRpb25JZDogYWN0aW9uLnBheWxvYWQuZXZlbnQuaWRcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+PignUm91dGVyUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnNcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSb3V0ZXJGZWF0dXJlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgYW55XG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFxuICBmcm9tTmdyeFJvdXRlci5Sb3V0ZXJSZWR1Y2VyU3RhdGU8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD5cbj4oUk9VVElOR19GRUFUVVJFKTtcblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlclN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPGFueSwgYW55PiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJGZWF0dXJlU3RhdGUsXG4gIChzdGF0ZTogYW55KSA9PiBzdGF0ZVtST1VUSU5HX0ZFQVRVUkVdXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVkaXJlY3RVcmw6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBhbnk+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlclN0YXRlLFxuICBzdGF0ZSA9PiBzdGF0ZS5yZWRpcmVjdFVybFxuKTtcblxuLyogVGhlIHNlcmlhbGl6ZXIgaXMgdGhlcmUgdG8gcGFyc2UgdGhlIFJvdXRlclN0YXRlU25hcHNob3QsXG5hbmQgdG8gcmVkdWNlIHRoZSBhbW91bnQgb2YgcHJvcGVydGllcyB0byBiZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21TZXJpYWxpemVyXG4gIGltcGxlbWVudHNcbiAgICBmcm9tTmdyeFJvdXRlci5Sb3V0ZXJTdGF0ZVNlcmlhbGl6ZXI8QWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdD4ge1xuICBzZXJpYWxpemUocm91dGVyU3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90IHtcbiAgICBjb25zdCB7IHVybCB9ID0gcm91dGVyU3RhdGU7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcyB9ID0gcm91dGVyU3RhdGUucm9vdDtcblxuICAgIGxldCBzdGF0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCA9IHJvdXRlclN0YXRlLnJvb3Q7XG4gICAgd2hpbGUgKHN0YXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0YXRlID0gc3RhdGUuZmlyc3RDaGlsZDtcbiAgICB9XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IHN0YXRlO1xuXG4gICAgbGV0IGNtc1JlcXVpcmVkID0gZmFsc2U7XG4gICAgaWYgKFxuICAgICAgc3RhdGUucm91dGVDb25maWcgJiZcbiAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlICYmXG4gICAgICBzdGF0ZS5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZS5maW5kKFxuICAgICAgICB4ID0+IHggJiYgeC5ndWFyZE5hbWUgPT09ICdDbXNQYWdlR3VhcmRzJ1xuICAgICAgKVxuICAgICkge1xuICAgICAgY21zUmVxdWlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0OiBQYWdlQ29udGV4dDtcbiAgICBpZiAocGFyYW1zWydwcm9kdWN0Q29kZSddKSB7XG4gICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydwcm9kdWN0Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5QUk9EVUNUX1BBR0UgfTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtc1snY2F0ZWdvcnlDb2RlJ10pIHtcbiAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2NhdGVnb3J5Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgfSBlbHNlIGlmIChwYXJhbXNbJ2JyYW5kQ29kZSddKSB7XG4gICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydicmFuZENvZGUnXSwgdHlwZTogUGFnZVR5cGUuQ0FURUdPUllfUEFHRSB9O1xuICAgIH0gZWxzZSBpZiAocGFyYW1zWydxdWVyeSddKSB7XG4gICAgICBjb250ZXh0ID0geyBpZDogJ3NlYXJjaCcsIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSB9O1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuZGF0YS5wYWdlTGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHsgaWQ6IHN0YXRlLmRhdGEucGFnZUxhYmVsLCB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UgfTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLnVybC5sZW5ndGggPiAwKSB7XG4gICAgICBjb250ZXh0ID0ge1xuICAgICAgICBpZDogc3RhdGUudXJsW3N0YXRlLnVybC5sZW5ndGggLSAxXS5wYXRoLFxuICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0VcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgIGlkOiAnaG9tZXBhZ2UnLFxuICAgICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0VcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXJsLCBxdWVyeVBhcmFtcywgcGFyYW1zLCBjb250ZXh0LCBjbXNSZXF1aXJlZCB9O1xuICB9XG59XG4iXX0=