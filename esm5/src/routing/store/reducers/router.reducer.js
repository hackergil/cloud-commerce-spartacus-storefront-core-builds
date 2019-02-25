/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var initialState = {
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
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromActions.SAVE_REDIRECT_URL: {
            return tslib_1.__assign({}, state, { redirectUrl: action.payload });
        }
        case fromActions.CLEAR_REDIRECT_URL: {
            return tslib_1.__assign({}, state, { redirectUrl: '' });
        }
        case fromNgrxRouter.ROUTER_NAVIGATION:
        case fromNgrxRouter.ROUTER_ERROR:
        case fromNgrxRouter.ROUTER_CANCEL: {
            /** @type {?} */
            var currentUrl = action.payload.routerState
                ? action.payload.routerState.url
                : '';
            /** @type {?} */
            var contextId = action.payload.routerState
                ? action.payload.routerState.context.id
                : '';
            /** @type {?} */
            var redirectUrl = void 0;
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
export var reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers
};
/** @type {?} */
export var getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
/** @type {?} */
export var getRouterState = createSelector(getRouterFeatureState, function (state) { return state[ROUTING_FEATURE]; });
/** @type {?} */
export var getRedirectUrl = createSelector(getRouterState, function (state) { return state.redirectUrl; });
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
var /* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    /**
     * @param {?} routerState
     * @return {?}
     */
    CustomSerializer.prototype.serialize = /**
     * @param {?} routerState
     * @return {?}
     */
    function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        /** @type {?} */
        var state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        var params = state.params;
        /** @type {?} */
        var cmsRequired = false;
        if (state.routeConfig &&
            state.routeConfig.canActivate &&
            state.routeConfig.canActivate.find(function (x) { return x && x.guardName === 'CmsPageGuards'; })) {
            cmsRequired = true;
        }
        /** @type {?} */
        var context;
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
        return { url: url, queryParams: queryParams, params: params, context: context, cmsRequired: cmsRequired };
    };
    return CustomSerializer;
}());
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
export { CustomSerializer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFNekQsT0FBTyxFQUNMLGNBQWMsRUFDZCxxQkFBcUIsRUFHdEIsTUFBTSxhQUFhLENBQUM7QUFFckIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sS0FBSyxjQUFjLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxLQUFLLFdBQVcsTUFBTSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUU5QyxpQ0FHQzs7O0lBREMsa0NBQW9COzs7QUFHdEIsTUFBTSxLQUFPLFlBQVksR0FBZ0I7SUFDdkMsV0FBVyxFQUFFLEVBQUU7SUFDZixZQUFZLEVBQUUsQ0FBQztJQUNmLEtBQUssRUFBRTtRQUNMLEdBQUcsRUFBRSxFQUFFO1FBQ1AsV0FBVyxFQUFFLEVBQUU7UUFDZixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxFQUFFO1NBQ1A7UUFDRCxXQUFXLEVBQUUsS0FBSztLQUNuQjtDQUNGOzs7O0FBRUQsa0RBTUM7OztJQUxDLDJDQUFZOztJQUNaLG1EQUFvQjs7SUFDcEIsOENBQWU7O0lBQ2YsK0NBQXFCOztJQUNyQixtREFBcUI7Ozs7O0FBR3ZCLDJCQUVDOzs7SUFEQyx1QkFBb0I7Ozs7O0FBR3RCLE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxNQUFNLEVBQUUsT0FBTztLQUNoQixDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBaUMsRUFDakMsTUFBVztJQURYLHNCQUFBLEVBQUEsb0JBQWlDO0lBR2pDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2xDLDRCQUNLLEtBQUssSUFDUixXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDM0I7U0FDSDtRQUNELEtBQUssV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbkMsNEJBQ0ssS0FBSyxJQUNSLFdBQVcsRUFBRSxFQUFFLElBQ2Y7U0FDSDtRQUNELEtBQUssY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLEtBQUssY0FBYyxDQUFDLFlBQVksQ0FBQztRQUNqQyxLQUFLLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Z0JBQzNCLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7Z0JBQzNDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHO2dCQUNoQyxDQUFDLENBQUMsRUFBRTs7Z0JBQ0EsU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztnQkFDMUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN2QyxDQUFDLENBQUMsRUFBRTs7Z0JBQ0YsV0FBVyxTQUFBO1lBQ2YsSUFDRSxTQUFTLEtBQUssT0FBTztnQkFDckIsU0FBUyxLQUFLLFVBQVU7Z0JBQ3hCLFVBQVUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUNoQztnQkFDQSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxXQUFXLEdBQUcsRUFBRSxDQUFDO2FBQ2xCO1lBRUQsT0FBTztnQkFDTCxXQUFXLEVBQUUsV0FBVztnQkFDeEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztnQkFDakMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7YUFDdEMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxDQUFDLENBQUM7WUFDUCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7QUFDSCxDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUEwQixnQkFBZ0IsQ0FBQzs7QUFFakUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBRzlCLHFCQUFxQixDQUV2QixlQUFlLENBQUM7O0FBRWxCLE1BQU0sS0FBTyxjQUFjLEdBQStCLGNBQWMsQ0FDdEUscUJBQXFCLEVBQ3JCLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUF0QixDQUFzQixDQUN2Qzs7QUFFRCxNQUFNLEtBQU8sY0FBYyxHQUErQixjQUFjLENBQ3RFLGNBQWMsRUFDZCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLENBQzNCOzs7O0FBS0Q7Ozs7SUFBQTtJQWlEQSxDQUFDOzs7OztJQTlDQyxvQ0FBUzs7OztJQUFULFVBQVUsV0FBZ0M7UUFDaEMsSUFBQSxxQkFBRztRQUNILElBQUEsMENBQVc7O1lBRWYsS0FBSyxHQUEyQixXQUFXLENBQUMsSUFBSTtRQUNwRCxPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDMUI7UUFDTyxJQUFBLHFCQUFNOztZQUVWLFdBQVcsR0FBRyxLQUFLO1FBQ3ZCLElBQ0UsS0FBSyxDQUFDLFdBQVc7WUFDakIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXO1lBQzdCLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDaEMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxlQUFlLEVBQXBDLENBQW9DLENBQzFDLEVBQ0Q7WUFDQSxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3BCOztZQUVHLE9BQW9CO1FBQ3hCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0RTthQUFNLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4RTthQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUNyRTthQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzFCLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6RDthQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQzdDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JFO2FBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHO2dCQUNSLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ3hDLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTthQUM1QixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sR0FBRztnQkFDUixFQUFFLEVBQUUsVUFBVTtnQkFDZCxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7YUFDNUIsQ0FBQztTQUNIO1FBRUQsT0FBTyxFQUFFLEdBQUcsS0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUGFyYW1zXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBjcmVhdGVTZWxlY3RvcixcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBNZW1vaXplZFNlbGVjdG9yXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21OZ3J4Um91dGVyIGZyb20gJ0BuZ3J4L3JvdXRlci1zdG9yZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IFJPVVRJTkdfRkVBVFVSRSB9IGZyb20gJy4uLy4uL3N0YXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJTdGF0ZVxuICBleHRlbmRzIGZyb21OZ3J4Um91dGVyLlJvdXRlclJlZHVjZXJTdGF0ZTxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFJvdXRlclN0YXRlID0ge1xuICByZWRpcmVjdFVybDogJycsXG4gIG5hdmlnYXRpb25JZDogMCxcbiAgc3RhdGU6IHtcbiAgICB1cmw6ICcnLFxuICAgIHF1ZXJ5UGFyYW1zOiB7fSxcbiAgICBwYXJhbXM6IHt9LFxuICAgIGNvbnRleHQ6IHtcbiAgICAgIGlkOiAnJ1xuICAgIH0sXG4gICAgY21zUmVxdWlyZWQ6IGZhbHNlXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCB7XG4gIHVybDogc3RyaW5nO1xuICBxdWVyeVBhcmFtczogUGFyYW1zO1xuICBwYXJhbXM6IFBhcmFtcztcbiAgY29udGV4dDogUGFnZUNvbnRleHQ7XG4gIGNtc1JlcXVpcmVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgcm91dGVyOiBSb3V0ZXJTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICByb3V0ZXI6IHJlZHVjZXJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlOiBSb3V0ZXJTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBhbnlcbik6IFJvdXRlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbnMuU0FWRV9SRURJUkVDVF9VUkw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWRpcmVjdFVybDogYWN0aW9uLnBheWxvYWRcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgZnJvbUFjdGlvbnMuQ0xFQVJfUkVESVJFQ1RfVVJMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVkaXJlY3RVcmw6ICcnXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FUSU9OOlxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX0VSUk9SOlxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX0NBTkNFTDoge1xuICAgICAgY29uc3QgY3VycmVudFVybCA9IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlXG4gICAgICAgID8gYWN0aW9uLnBheWxvYWQucm91dGVyU3RhdGUudXJsXG4gICAgICAgIDogJyc7XG4gICAgICBjb25zdCBjb250ZXh0SWQgPSBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZVxuICAgICAgICA/IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLmNvbnRleHQuaWRcbiAgICAgICAgOiAnJztcbiAgICAgIGxldCByZWRpcmVjdFVybDtcbiAgICAgIGlmIChcbiAgICAgICAgY29udGV4dElkID09PSAnbG9naW4nIHx8XG4gICAgICAgIGNvbnRleHRJZCA9PT0gJ3JlZ2lzdGVyJyB8fFxuICAgICAgICBjdXJyZW50VXJsID09PSBzdGF0ZS5yZWRpcmVjdFVybFxuICAgICAgKSB7XG4gICAgICAgIHJlZGlyZWN0VXJsID0gc3RhdGUucmVkaXJlY3RVcmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWRpcmVjdFVybCA9ICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWRpcmVjdFVybDogcmVkaXJlY3RVcmwsXG4gICAgICAgIHN0YXRlOiBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxTdGF0ZT4+KCdSb3V0ZXJSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vyc1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJvdXRlckZlYXR1cmVTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBhbnlcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8XG4gIGZyb21OZ3J4Um91dGVyLlJvdXRlclJlZHVjZXJTdGF0ZTxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PlxuPihST1VUSU5HX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0Um91dGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8YW55LCBhbnk+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlckZlYXR1cmVTdGF0ZSxcbiAgKHN0YXRlOiBhbnkpID0+IHN0YXRlW1JPVVRJTkdfRkVBVFVSRV1cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRSZWRpcmVjdFVybDogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIGFueT4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Um91dGVyU3RhdGUsXG4gIHN0YXRlID0+IHN0YXRlLnJlZGlyZWN0VXJsXG4pO1xuXG4vKiBUaGUgc2VyaWFsaXplciBpcyB0aGVyZSB0byBwYXJzZSB0aGUgUm91dGVyU3RhdGVTbmFwc2hvdCxcbmFuZCB0byByZWR1Y2UgdGhlIGFtb3VudCBvZiBwcm9wZXJ0aWVzIHRvIGJlIHBhc3NlZCB0byB0aGUgcmVkdWNlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbVNlcmlhbGl6ZXJcbiAgaW1wbGVtZW50c1xuICAgIGZyb21OZ3J4Um91dGVyLlJvdXRlclN0YXRlU2VyaWFsaXplcjxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIHNlcmlhbGl6ZShyb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Qge1xuICAgIGNvbnN0IHsgdXJsIH0gPSByb3V0ZXJTdGF0ZTtcbiAgICBjb25zdCB7IHF1ZXJ5UGFyYW1zIH0gPSByb3V0ZXJTdGF0ZS5yb290O1xuXG4gICAgbGV0IHN0YXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90ID0gcm91dGVyU3RhdGUucm9vdDtcbiAgICB3aGlsZSAoc3RhdGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5maXJzdENoaWxkO1xuICAgIH1cbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gc3RhdGU7XG5cbiAgICBsZXQgY21zUmVxdWlyZWQgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICBzdGF0ZS5yb3V0ZUNvbmZpZyAmJlxuICAgICAgc3RhdGUucm91dGVDb25maWcuY2FuQWN0aXZhdGUgJiZcbiAgICAgIHN0YXRlLnJvdXRlQ29uZmlnLmNhbkFjdGl2YXRlLmZpbmQoXG4gICAgICAgIHggPT4geCAmJiB4Lmd1YXJkTmFtZSA9PT0gJ0Ntc1BhZ2VHdWFyZHMnXG4gICAgICApXG4gICAgKSB7XG4gICAgICBjbXNSZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ6IFBhZ2VDb250ZXh0O1xuICAgIGlmIChwYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pIHtcbiAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ3Byb2R1Y3RDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSB9O1xuICAgIH0gZWxzZSBpZiAocGFyYW1zWydjYXRlZ29yeUNvZGUnXSkge1xuICAgICAgY29udGV4dCA9IHsgaWQ6IHBhcmFtc1snY2F0ZWdvcnlDb2RlJ10sIHR5cGU6IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgfTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtc1snYnJhbmRDb2RlJ10pIHtcbiAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2JyYW5kQ29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgfSBlbHNlIGlmIChwYXJhbXNbJ3F1ZXJ5J10pIHtcbiAgICAgIGNvbnRleHQgPSB7IGlkOiAnc2VhcmNoJywgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFIH07XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5kYXRhLnBhZ2VMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0geyBpZDogc3RhdGUuZGF0YS5wYWdlTGFiZWwsIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSB9O1xuICAgIH0gZWxzZSBpZiAoc3RhdGUudXJsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgIGlkOiBzdGF0ZS51cmxbc3RhdGUudXJsLmxlbmd0aCAtIDFdLnBhdGgsXG4gICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgaWQ6ICdob21lcGFnZScsXG4gICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB1cmwsIHF1ZXJ5UGFyYW1zLCBwYXJhbXMsIGNvbnRleHQsIGNtc1JlcXVpcmVkIH07XG4gIH1cbn1cbiJdfQ==