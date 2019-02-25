/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { createFeatureSelector } from '@ngrx/store';
import { CHECKOUT_FEATURE } from '../checkout-state';
import * as fromAction from '../actions/index';
import { LOGOUT } from '../../../auth/store/actions/index';
import { CURRENCY_CHANGE, LANGUAGE_CHANGE } from '../../../site-context/store/actions/index';
import * as fromAddressVerification from './address-verification.reducer';
import * as fromCardTypes from './card-types.reducer';
import * as fromCheckout from './checkout.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        steps: fromCheckout.reducer,
        cardTypes: fromCardTypes.reducer,
        addressVerification: fromAddressVerification.reducer
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('CheckoutReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers
};
/** @type {?} */
export var getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearCheckoutState(reducer) {
    return function (state, action) {
        switch (action.type) {
            case LANGUAGE_CHANGE: {
                action = new fromAction.CheckoutClearMiscsData();
                break;
            }
            case CURRENCY_CHANGE: {
                action = new fromAction.ClearSupportedDeliveryModes();
                break;
            }
            case LOGOUT: {
                action = new fromAction.ClearCheckoutData();
                break;
            }
        }
        return reducer(state, action);
    };
}
/** @type {?} */
export var metaReducers = [clearCheckoutState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUVMLHFCQUFxQixFQUl0QixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQWlCLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0QsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEVBQ2hCLE1BQU0sMkNBQTJDLENBQUM7QUFFbkQsT0FBTyxLQUFLLHVCQUF1QixNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxhQUFhLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxLQUFLLFlBQVksTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVuRCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsS0FBSyxFQUFFLFlBQVksQ0FBQyxPQUFPO1FBQzNCLFNBQVMsRUFBRSxhQUFhLENBQUMsT0FBTztRQUNoQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO0tBQ3JELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUFrQyxrQkFBa0IsQ0FBQzs7QUFFM0UsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBR3pCLHFCQUFxQixDQUFnQixnQkFBZ0IsQ0FBQzs7Ozs7QUFFMUQsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxPQUFxQztJQUVyQyxPQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssZUFBZSxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNqRCxNQUFNO2FBQ1A7WUFDRCxLQUFLLGVBQWUsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztnQkFDdEQsTUFBTTthQUNQO1lBQ0QsS0FBSyxNQUFNLENBQUMsQ0FBQztnQkFDWCxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDNUMsTUFBTTthQUNQO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUFpQyxDQUFDLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFjdGlvblJlZHVjZXJNYXAsXG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgTWV0YVJlZHVjZXIsXG4gIEFjdGlvblJlZHVjZXIsXG4gIE1lbW9pemVkU2VsZWN0b3Jcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBDaGVja291dFN0YXRlLCBDSEVDS09VVF9GRUFUVVJFIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IExPR09VVCB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQge1xuICBDVVJSRU5DWV9DSEFOR0UsXG4gIExBTkdVQUdFX0NIQU5HRVxufSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5cbmltcG9ydCAqIGFzIGZyb21BZGRyZXNzVmVyaWZpY2F0aW9uIGZyb20gJy4vYWRkcmVzcy12ZXJpZmljYXRpb24ucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tQ2FyZFR5cGVzIGZyb20gJy4vY2FyZC10eXBlcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21DaGVja291dCBmcm9tICcuL2NoZWNrb3V0LnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxDaGVja291dFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgc3RlcHM6IGZyb21DaGVja291dC5yZWR1Y2VyLFxuICAgIGNhcmRUeXBlczogZnJvbUNhcmRUeXBlcy5yZWR1Y2VyLFxuICAgIGFkZHJlc3NWZXJpZmljYXRpb246IGZyb21BZGRyZXNzVmVyaWZpY2F0aW9uLnJlZHVjZXJcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8Q2hlY2tvdXRTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxDaGVja291dFN0YXRlPj4oJ0NoZWNrb3V0UmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnNcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDaGVja291dFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIENoZWNrb3V0U3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q2hlY2tvdXRTdGF0ZT4oQ0hFQ0tPVVRfRkVBVFVSRSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNoZWNrb3V0U3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8Q2hlY2tvdXRTdGF0ZT5cbik6IEFjdGlvblJlZHVjZXI8Q2hlY2tvdXRTdGF0ZT4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTEFOR1VBR0VfQ0hBTkdFOiB7XG4gICAgICAgIGFjdGlvbiA9IG5ldyBmcm9tQWN0aW9uLkNoZWNrb3V0Q2xlYXJNaXNjc0RhdGEoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENVUlJFTkNZX0NIQU5HRToge1xuICAgICAgICBhY3Rpb24gPSBuZXcgZnJvbUFjdGlvbi5DbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExPR09VVDoge1xuICAgICAgICBhY3Rpb24gPSBuZXcgZnJvbUFjdGlvbi5DbGVhckNoZWNrb3V0RGF0YSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPENoZWNrb3V0U3RhdGU+W10gPSBbY2xlYXJDaGVja291dFN0YXRlXTtcbiJdfQ==