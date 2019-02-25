/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { CART_DATA } from './../cart-state';
import { reducer as cartReducer } from './cart.reducer';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        active: loaderReducer(CART_DATA, cartReducer)
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('CartReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearCartState(reducer) {
    return function (state, action) {
        if (action.type === '[Auth] Logout' ||
            action.type === '[Checkout] Place Order Success') {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
export var metaReducers = [clearCartState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLElBQUksV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7O0FBRTNFLE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxNQUFNLEVBQUUsYUFBYSxDQUFZLFNBQVMsRUFBRSxXQUFXLENBQUM7S0FDekQsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQStCLGNBQWMsQ0FBQzs7QUFFcEUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixPQUEyQjtJQUUzQixPQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFDRSxNQUFNLENBQUMsSUFBSSxLQUFLLGVBQWU7WUFDL0IsTUFBTSxDQUFDLElBQUksS0FBSyxnQ0FBZ0MsRUFDaEQ7WUFDQSxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBdUIsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvblJlZHVjZXJNYXAsIE1ldGFSZWR1Y2VyLCBBY3Rpb25SZWR1Y2VyIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydHNTdGF0ZSwgQ2FydFN0YXRlLCBDQVJUX0RBVEEgfSBmcm9tICcuLy4uL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydC5yZWR1Y2VyJztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxDYXJ0c1N0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgYWN0aXZlOiBsb2FkZXJSZWR1Y2VyPENhcnRTdGF0ZT4oQ0FSVF9EQVRBLCBjYXJ0UmVkdWNlcilcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8Q2FydHNTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxDYXJ0c1N0YXRlPj4oJ0NhcnRSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vyc1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2FydFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLnR5cGUgPT09ICdbQXV0aF0gTG9nb3V0JyB8fFxuICAgICAgYWN0aW9uLnR5cGUgPT09ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyIFN1Y2Nlc3MnXG4gICAgKSB7XG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhckNhcnRTdGF0ZV07XG4iXX0=