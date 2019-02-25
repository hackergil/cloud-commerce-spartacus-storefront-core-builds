/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { loaderValueSelector, loaderLoadingSelector } from '../../../state/utils/loader/loader.selectors';
import { getUserState } from './feature.selector';
/** @type {?} */
export var getPaymentMethodsState = createSelector(getUserState, function (state) { return state.payments; });
/** @type {?} */
export var getPaymentMethods = createSelector(getPaymentMethodsState, function (state) { return loaderValueSelector(state); });
/** @type {?} */
export var getPaymentMethodsLoading = createSelector(getPaymentMethodsState, function (state) { return loaderLoadingSelector(state); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy9wYXltZW50LW1ldGhvZHMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUsvRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUN0QixNQUFNLDhDQUE4QyxDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFbEQsTUFBTSxLQUFPLHNCQUFzQixHQUcvQixjQUFjLENBQ2hCLFlBQVksRUFDWixVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWMsQ0FDckM7O0FBRUQsTUFBTSxLQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLHNCQUFzQixFQUN0QixVQUFDLEtBQW9DLElBQUssT0FBQSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FDckU7O0FBRUQsTUFBTSxLQUFPLHdCQUF3QixHQUdqQyxjQUFjLENBQ2hCLHNCQUFzQixFQUN0QixVQUFDLEtBQW9DLElBQUssT0FBQSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FDdkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgVXNlclN0YXRlLCBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxuICBsb2FkZXJMb2FkaW5nU2VsZWN0b3Jcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UGF5bWVudE1ldGhvZHNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgTG9hZGVyU3RhdGU8UGF5bWVudERldGFpbHNbXT5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0VXNlclN0YXRlLFxuICAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUucGF5bWVudHNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYXltZW50TWV0aG9kczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgUGF5bWVudERldGFpbHNbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYXltZW50TWV0aG9kc1N0YXRlLFxuICAoc3RhdGU6IExvYWRlclN0YXRlPFBheW1lbnREZXRhaWxzW10+KSA9PiBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBheW1lbnRNZXRob2RzTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYXltZW50TWV0aG9kc1N0YXRlLFxuICAoc3RhdGU6IExvYWRlclN0YXRlPFBheW1lbnREZXRhaWxzW10+KSA9PiBsb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19