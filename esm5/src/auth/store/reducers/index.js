/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import { CLIENT_TOKEN_DATA } from '../auth-state';
import { LOGOUT } from '../actions/login-logout.action';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import * as fromUserTokenReducer from './user-token.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        userToken: fromUserTokenReducer.reducer,
        clientToken: loaderReducer(CLIENT_TOKEN_DATA)
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('AuthReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearAuthState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = tslib_1.__assign({}, state, { userToken: undefined });
        }
        return reducer(state, action);
    };
}
/** @type {?} */
export var metaReducers = [clearAuthState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFTekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxLQUFLLG9CQUFvQixNQUFNLHNCQUFzQixDQUFDOzs7O0FBRTdELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxTQUFTLEVBQUUsb0JBQW9CLENBQUMsT0FBTztRQUN2QyxXQUFXLEVBQUUsYUFBYSxDQUFjLGlCQUFpQixDQUFDO0tBQzNELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUE4QixjQUFjLENBQUM7O0FBRW5FLE1BQU0sS0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBeUM7SUFFekMsT0FBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsS0FBSyx3QkFDQSxLQUFLLElBQ1IsU0FBUyxFQUFFLFNBQVMsR0FDckIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBdUIsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQWN0aW9uUmVkdWNlcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgTWV0YVJlZHVjZXIsXG4gIEFjdGlvblxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IENMSUVOVF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBBdXRoU3RhdGUgfSBmcm9tICcuLi9hdXRoLXN0YXRlJztcbmltcG9ydCB7IExPR09VVCB9IGZyb20gJy4uL2FjdGlvbnMvbG9naW4tbG9nb3V0LmFjdGlvbic7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcblxuaW1wb3J0ICogYXMgZnJvbVVzZXJUb2tlblJlZHVjZXIgZnJvbSAnLi91c2VyLXRva2VuLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxBdXRoU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyVG9rZW46IGZyb21Vc2VyVG9rZW5SZWR1Y2VyLnJlZHVjZXIsXG4gICAgY2xpZW50VG9rZW46IGxvYWRlclJlZHVjZXI8Q2xpZW50VG9rZW4+KENMSUVOVF9UT0tFTl9EQVRBKVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxBdXRoU3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8QXV0aFN0YXRlPj4oJ0F1dGhSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vyc1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQXV0aFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPEF1dGhTdGF0ZSwgQWN0aW9uPlxuKTogQWN0aW9uUmVkdWNlcjxBdXRoU3RhdGUsIEFjdGlvbj4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gTE9HT1VUKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJUb2tlbjogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW2NsZWFyQXV0aFN0YXRlXTtcbiJdfQ==