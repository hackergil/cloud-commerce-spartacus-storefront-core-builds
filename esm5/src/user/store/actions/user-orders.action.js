/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { USER_ORDERS } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
/** @type {?} */
export var LOAD_USER_ORDERS = '[User] Load User Orders';
/** @type {?} */
export var LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
/** @type {?} */
export var LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
/** @type {?} */
export var CLEAR_USER_ORDERS = '[User] Clear User Orders';
var LoadUserOrders = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserOrders, _super);
    function LoadUserOrders(payload) {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS;
        return _this;
    }
    return LoadUserOrders;
}(LoaderLoadAction));
export { LoadUserOrders };
if (false) {
    /** @type {?} */
    LoadUserOrders.prototype.type;
    /** @type {?} */
    LoadUserOrders.prototype.payload;
}
var LoadUserOrdersFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserOrdersFail, _super);
    function LoadUserOrdersFail(payload) {
        var _this = _super.call(this, USER_ORDERS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS_FAIL;
        return _this;
    }
    return LoadUserOrdersFail;
}(LoaderFailAction));
export { LoadUserOrdersFail };
if (false) {
    /** @type {?} */
    LoadUserOrdersFail.prototype.type;
    /** @type {?} */
    LoadUserOrdersFail.prototype.payload;
}
var LoadUserOrdersSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadUserOrdersSuccess, _super);
    function LoadUserOrdersSuccess(payload) {
        var _this = _super.call(this, USER_ORDERS) || this;
        _this.payload = payload;
        _this.type = LOAD_USER_ORDERS_SUCCESS;
        return _this;
    }
    return LoadUserOrdersSuccess;
}(LoaderSuccessAction));
export { LoadUserOrdersSuccess };
if (false) {
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.type;
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.payload;
}
var ClearUserOrders = /** @class */ (function () {
    function ClearUserOrders() {
        this.type = CLEAR_USER_ORDERS;
    }
    return ClearUserOrders;
}());
export { ClearUserOrders };
if (false) {
    /** @type {?} */
    ClearUserOrders.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLW9yZGVycy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNwQixNQUFNLDJDQUEyQyxDQUFDOztBQUVuRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsOEJBQThCOztBQUNuRSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUN6RSxNQUFNLEtBQU8saUJBQWlCLEdBQUcsMEJBQTBCO0FBRTNEO0lBQW9DLDBDQUFnQjtJQUVsRCx3QkFDUyxPQUtOO1FBTkgsWUFRRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFSUSxhQUFPLEdBQVAsT0FBTyxDQUtiO1FBUE0sVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQVVqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBb0MsZ0JBQWdCLEdBWW5EOzs7O0lBWEMsOEJBQWlDOztJQUUvQixpQ0FLQzs7QUFNTDtJQUF3Qyw4Q0FBZ0I7SUFFdEQsNEJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxXQUFXLEVBQUUsT0FBTyxDQUFDLFNBQzVCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0MsZ0JBQWdCLEdBS3ZEOzs7O0lBSkMsa0NBQXNDOztJQUMxQixxQ0FBbUI7O0FBS2pDO0lBQTJDLGlEQUFtQjtJQUU1RCwrQkFBbUIsT0FBeUI7UUFBNUMsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFEbkMsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsbUJBQW1CLEdBSzdEOzs7O0lBSkMscUNBQXlDOztJQUM3Qix3Q0FBZ0M7O0FBSzlDO0lBRUU7UUFEUyxTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDbkIsQ0FBQztJQUNsQixzQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsK0JBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVVNFUl9PUkRFUlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9PUkRFUlMgPSAnW1VzZXJdIExvYWQgVXNlciBPcmRlcnMnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9PUkRFUlNfRkFJTCA9ICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVycyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfT1JERVJTX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgVXNlciBPcmRlcnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfVVNFUl9PUkRFUlMgPSAnW1VzZXJdIENsZWFyIFVzZXIgT3JkZXJzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyT3JkZXJzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfT1JERVJTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwYWdlU2l6ZTogbnVtYmVyO1xuICAgICAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gICAgICBzb3J0Pzogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoVVNFUl9PUkRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlck9yZGVyc0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9PUkRFUlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJPcmRlcnNTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfT1JERVJTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBPcmRlckhpc3RvcnlMaXN0KSB7XG4gICAgc3VwZXIoVVNFUl9PUkRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclVzZXJPcmRlcnMge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfVVNFUl9PUkRFUlM7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJPcmRlcnNcbiAgfCBMb2FkVXNlck9yZGVyc0ZhaWxcbiAgfCBMb2FkVXNlck9yZGVyc1N1Y2Nlc3NcbiAgfCBDbGVhclVzZXJPcmRlcnM7XG4iXX0=