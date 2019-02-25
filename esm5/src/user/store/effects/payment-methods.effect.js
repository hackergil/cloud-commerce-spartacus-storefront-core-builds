/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { OccUserService } from '../../occ/index';
import * as fromUserPaymentMethodsAction from '../actions/payment-methods.action';
var UserPaymentMethodsEffects = /** @class */ (function () {
    function UserPaymentMethodsEffects(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserPaymentMethods$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.LOAD_USER_PAYMENT_METHODS), map(function (action) {
            return action.payload;
        }), mergeMap(function (payload) {
            return _this.occUserService.loadUserPaymentMethods(payload).pipe(map(function (paymentsList) {
                return new fromUserPaymentMethodsAction.LoadUserPaymentMethodsSuccess(paymentsList.payments);
            }), catchError(function (error) {
                return of(new fromUserPaymentMethodsAction.LoadUserPaymentMethodsFail(error));
            }));
        }));
        this.setDefaultUserPaymentMethod$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.SET_DEFAULT_USER_PAYMENT_METHOD), map(function (action) {
            return action.payload;
        }), mergeMap(function (payload) {
            return _this.occUserService
                .setDefaultUserPaymentMethod(payload.userId, payload.paymentMethodId)
                .pipe(switchMap(function (data) {
                return [
                    new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodSuccess(data),
                    new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId)
                ];
            }), catchError(function (error) {
                return of(new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodFail(error));
            }));
        }));
        this.deleteUserPaymentMethod$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.DELETE_USER_PAYMENT_METHOD), map(function (action) {
            return action.payload;
        }), mergeMap(function (payload) {
            return _this.occUserService
                .deleteUserPaymentMethod(payload.userId, payload.paymentMethodId)
                .pipe(switchMap(function (data) {
                return [
                    new fromUserPaymentMethodsAction.DeleteUserPaymentMethodSuccess(data),
                    new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId)
                ];
            }), catchError(function (error) {
                return of(new fromUserPaymentMethodsAction.DeleteUserPaymentMethodFail(error));
            }));
        }));
    }
    UserPaymentMethodsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserPaymentMethodsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserPaymentMethodsEffects.prototype, "loadUserPaymentMethods$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserPaymentMethodsEffects.prototype, "setDefaultUserPaymentMethod$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UserPaymentMethodsEffects.prototype, "deleteUserPaymentMethod$", void 0);
    return UserPaymentMethodsEffects;
}());
export { UserPaymentMethodsEffects };
if (false) {
    /** @type {?} */
    UserPaymentMethodsEffects.prototype.loadUserPaymentMethods$;
    /** @type {?} */
    UserPaymentMethodsEffects.prototype.setDefaultUserPaymentMethod$;
    /** @type {?} */
    UserPaymentMethodsEffects.prototype.deleteUserPaymentMethod$;
    /**
     * @type {?}
     * @private
     */
    UserPaymentMethodsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserPaymentMethodsEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvcGF5bWVudC1tZXRob2RzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxLQUFLLDRCQUE0QixNQUFNLG1DQUFtQyxDQUFDO0FBR2xGO0lBc0ZFLG1DQUNVLFFBQWlCLEVBQ2pCLGNBQThCO1FBRnhDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFyRnhDLDRCQUF1QixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0QsTUFBTSxDQUFDLDRCQUE0QixDQUFDLHlCQUF5QixDQUFDLEVBQzlELEdBQUcsQ0FDRCxVQUFDLE1BQTJEO1lBQzFELE9BQUEsTUFBTSxDQUFDLE9BQU87UUFBZCxDQUFjLENBQ2pCLEVBQ0QsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzdELEdBQUcsQ0FBQyxVQUFDLFlBQWdDO2dCQUNuQyxPQUFPLElBQUksNEJBQTRCLENBQUMsNkJBQTZCLENBQ25FLFlBQVksQ0FBQyxRQUFRLENBQ3RCLENBQUM7WUFDSixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUksNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBdEUsQ0FBc0UsQ0FDdkUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUdGLGlDQUE0QixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEUsTUFBTSxDQUFDLDRCQUE0QixDQUFDLCtCQUErQixDQUFDLEVBQ3BFLEdBQUcsQ0FDRCxVQUFDLE1BQWdFO1lBQy9ELE9BQUEsTUFBTSxDQUFDLE9BQU87UUFBZCxDQUFjLENBQ2pCLEVBQ0QsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQU8sS0FBSSxDQUFDLGNBQWM7aUJBQ3ZCLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztpQkFDcEUsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFDLElBQVM7Z0JBQ2xCLE9BQU87b0JBQ0wsSUFBSSw0QkFBNEIsQ0FBQyxrQ0FBa0MsQ0FDakUsSUFBSSxDQUNMO29CQUNELElBQUksNEJBQTRCLENBQUMsc0JBQXNCLENBQ3JELE9BQU8sQ0FBQyxNQUFNLENBQ2Y7aUJBQ0YsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSw0QkFBNEIsQ0FBQywrQkFBK0IsQ0FDOUQsS0FBSyxDQUNOLENBQ0Y7WUFKRCxDQUlDLENBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLDZCQUF3QixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDNUQsTUFBTSxDQUFDLDRCQUE0QixDQUFDLDBCQUEwQixDQUFDLEVBQy9ELEdBQUcsQ0FDRCxVQUFDLE1BQTREO1lBQzNELE9BQUEsTUFBTSxDQUFDLE9BQU87UUFBZCxDQUFjLENBQ2pCLEVBQ0QsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQU8sS0FBSSxDQUFDLGNBQWM7aUJBQ3ZCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztpQkFDaEUsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFDLElBQVM7Z0JBQ2xCLE9BQU87b0JBQ0wsSUFBSSw0QkFBNEIsQ0FBQyw4QkFBOEIsQ0FDN0QsSUFBSSxDQUNMO29CQUNELElBQUksNEJBQTRCLENBQUMsc0JBQXNCLENBQ3JELE9BQU8sQ0FBQyxNQUFNLENBQ2Y7aUJBQ0YsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSw0QkFBNEIsQ0FBQywyQkFBMkIsQ0FDMUQsS0FBSyxDQUNOLENBQ0Y7WUFKRCxDQUlDLENBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQXpGTCxVQUFVOzs7O2dCQVJGLE9BQU87Z0JBSVAsY0FBYzs7SUFPckI7UUFEQyxNQUFNLEVBQUU7MENBQ2dCLFVBQVU7OEVBa0JqQztJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNxQixVQUFVO21GQTZCdEM7SUFFRjtRQURDLE1BQU0sRUFBRTswQ0FDaUIsVUFBVTsrRUE2QmxDO0lBTUosZ0NBQUM7Q0FBQSxBQTFGRCxJQTBGQztTQXpGWSx5QkFBeUI7OztJQUNwQyw0REFtQkU7O0lBRUYsaUVBOEJFOztJQUNGLDZEQThCRTs7Ozs7SUFHQSw2Q0FBeUI7Ozs7O0lBQ3pCLG1EQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBPY2NVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvcGF5bWVudC1tZXRob2RzLmFjdGlvbic7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlsc0xpc3QgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUGF5bWVudE1ldGhvZHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EUyksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzKSA9PlxuICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NVc2VyU2VydmljZS5sb2FkVXNlclBheW1lbnRNZXRob2RzKHBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcCgocGF5bWVudHNMaXN0OiBQYXltZW50RGV0YWlsc0xpc3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTG9hZFVzZXJQYXltZW50TWV0aG9kc1N1Y2Nlc3MoXG4gICAgICAgICAgICBwYXltZW50c0xpc3QucGF5bWVudHNcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkxvYWRVc2VyUGF5bWVudE1ldGhvZHNGYWlsKGVycm9yKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2QkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRCksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5TZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2QpID0+XG4gICAgICAgIGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9jY1VzZXJTZXJ2aWNlXG4gICAgICAgIC5zZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2QocGF5bG9hZC51c2VySWQsIHBheWxvYWQucGF5bWVudE1ldGhvZElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkxvYWRVc2VyUGF5bWVudE1ldGhvZHMoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC51c2VySWRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kRmFpbChcbiAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG4gIEBFZmZlY3QoKVxuICBkZWxldGVVc2VyUGF5bWVudE1ldGhvZCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5ERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRCksXG4gICAgbWFwKFxuICAgICAgKGFjdGlvbjogZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5EZWxldGVVc2VyUGF5bWVudE1ldGhvZCkgPT5cbiAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2VcbiAgICAgICAgLmRlbGV0ZVVzZXJQYXltZW50TWV0aG9kKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLnBheW1lbnRNZXRob2RJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkRlbGV0ZVVzZXJQYXltZW50TWV0aG9kU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkxvYWRVc2VyUGF5bWVudE1ldGhvZHMoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC51c2VySWRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uRGVsZXRlVXNlclBheW1lbnRNZXRob2RGYWlsKFxuICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjVXNlclNlcnZpY2U6IE9jY1VzZXJTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==