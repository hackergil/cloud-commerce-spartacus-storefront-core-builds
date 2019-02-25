/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { GlobalMessageService } from './facade/index';
import { interceptors } from './http-interceptors/index';
import { GlobalMessageStoreModule } from './store/global-message-store.module';
var GlobalMessageModule = /** @class */ (function () {
    function GlobalMessageModule() {
    }
    /**
     * @return {?}
     */
    GlobalMessageModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GlobalMessageModule,
            providers: tslib_1.__spread(interceptors)
        };
    };
    GlobalMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [GlobalMessageStoreModule],
                    providers: [GlobalMessageService]
                },] }
    ];
    return GlobalMessageModule;
}());
export { GlobalMessageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUvRTtJQUFBO0lBV0EsQ0FBQzs7OztJQU5RLDJCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsbUJBQU0sWUFBWSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDOztnQkFWRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ25DLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNsQzs7SUFRRCwwQkFBQztDQUFBLEFBWEQsSUFXQztTQVBZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2dsb2JhbC1tZXNzYWdlLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtHbG9iYWxNZXNzYWdlU3RvcmVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtHbG9iYWxNZXNzYWdlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR2xvYmFsTWVzc2FnZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLmludGVyY2VwdG9yc11cbiAgICB9O1xuICB9XG59XG4iXX0=