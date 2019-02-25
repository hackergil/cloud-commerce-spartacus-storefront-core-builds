/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { USER_ORDERS } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
/** @type {?} */
export const LOAD_USER_ORDERS = '[User] Load User Orders';
/** @type {?} */
export const LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
/** @type {?} */
export const LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
/** @type {?} */
export const CLEAR_USER_ORDERS = '[User] Clear User Orders';
export class LoadUserOrders extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserOrders.prototype.type;
    /** @type {?} */
    LoadUserOrders.prototype.payload;
}
export class LoadUserOrdersFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS, payload);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadUserOrdersFail.prototype.type;
    /** @type {?} */
    LoadUserOrdersFail.prototype.payload;
}
export class LoadUserOrdersSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.type;
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.payload;
}
export class ClearUserOrders {
    constructor() {
        this.type = CLEAR_USER_ORDERS;
    }
}
if (false) {
    /** @type {?} */
    ClearUserOrders.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLW9yZGVycy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7O0FBQ25FLE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7QUFFM0QsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7Ozs7SUFFbEQsWUFDUyxPQUtOO1FBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBUFosWUFBTyxHQUFQLE9BQU8sQ0FLYjtRQVBNLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQVVqQyxDQUFDO0NBQ0Y7OztJQVhDLDhCQUFpQzs7SUFFL0IsaUNBS0M7O0FBTUwsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjs7OztJQUV0RCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUd0QyxDQUFDO0NBQ0Y7OztJQUpDLGtDQUFzQzs7SUFDMUIscUNBQW1COztBQUtqQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsbUJBQW1COzs7O0lBRTVELFlBQW1CLE9BQXlCO1FBQzFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQURGLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRG5DLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLHFDQUF5Qzs7SUFDN0Isd0NBQWdDOztBQUs5QyxNQUFNLE9BQU8sZUFBZTtJQUUxQjtRQURTLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUNuQixDQUFDO0NBQ2pCOzs7SUFGQywrQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVU0VSX09SREVSUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7XG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX09SREVSUyA9ICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVycyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX09SREVSU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgT3JkZXJzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9PUkRFUlNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVycyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9VU0VSX09SREVSUyA9ICdbVXNlcl0gQ2xlYXIgVXNlciBPcmRlcnMnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJPcmRlcnMgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9PUkRFUlM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIHBhZ2VTaXplOiBudW1iZXI7XG4gICAgICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgICAgIHNvcnQ/OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihVU0VSX09SREVSUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyT3JkZXJzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX09SREVSU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9PUkRFUlMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlck9yZGVyc1N1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9PUkRFUlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IE9yZGVySGlzdG9yeUxpc3QpIHtcbiAgICBzdXBlcihVU0VSX09SREVSUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyVXNlck9yZGVycyB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9VU0VSX09SREVSUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgdHlwZSBVc2VyT3JkZXJzQWN0aW9uID1cbiAgfCBMb2FkVXNlck9yZGVyc1xuICB8IExvYWRVc2VyT3JkZXJzRmFpbFxuICB8IExvYWRVc2VyT3JkZXJzU3VjY2Vzc1xuICB8IENsZWFyVXNlck9yZGVycztcbiJdfQ==