/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
import { CART_DATA } from '../cart-state';
/** @type {?} */
export var ADD_ENTRY = '[Cart-entry] Add Entry';
/** @type {?} */
export var ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
/** @type {?} */
export var ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
/** @type {?} */
export var REMOVE_ENTRY = '[Cart-entry] Remove Entry';
/** @type {?} */
export var REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
/** @type {?} */
export var REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
/** @type {?} */
export var UPDATE_ENTRY = '[Cart-entry] Update Entry';
/** @type {?} */
export var UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
/** @type {?} */
export var UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
var AddEntry = /** @class */ (function (_super) {
    tslib_1.__extends(AddEntry, _super);
    function AddEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = ADD_ENTRY;
        return _this;
    }
    return AddEntry;
}(LoaderLoadAction));
export { AddEntry };
if (false) {
    /** @type {?} */
    AddEntry.prototype.type;
    /** @type {?} */
    AddEntry.prototype.payload;
}
var AddEntrySuccess = /** @class */ (function (_super) {
    tslib_1.__extends(AddEntrySuccess, _super);
    function AddEntrySuccess(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = ADD_ENTRY_SUCCESS;
        return _this;
    }
    return AddEntrySuccess;
}(LoaderSuccessAction));
export { AddEntrySuccess };
if (false) {
    /** @type {?} */
    AddEntrySuccess.prototype.type;
    /** @type {?} */
    AddEntrySuccess.prototype.payload;
}
var AddEntryFail = /** @class */ (function (_super) {
    tslib_1.__extends(AddEntryFail, _super);
    function AddEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = ADD_ENTRY_FAIL;
        return _this;
    }
    return AddEntryFail;
}(LoaderFailAction));
export { AddEntryFail };
if (false) {
    /** @type {?} */
    AddEntryFail.prototype.type;
    /** @type {?} */
    AddEntryFail.prototype.payload;
}
var RemoveEntry = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveEntry, _super);
    function RemoveEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = REMOVE_ENTRY;
        return _this;
    }
    return RemoveEntry;
}(LoaderLoadAction));
export { RemoveEntry };
if (false) {
    /** @type {?} */
    RemoveEntry.prototype.type;
    /** @type {?} */
    RemoveEntry.prototype.payload;
}
var RemoveEntrySuccess = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveEntrySuccess, _super);
    function RemoveEntrySuccess() {
        var _this = _super.call(this, CART_DATA) || this;
        _this.type = REMOVE_ENTRY_SUCCESS;
        return _this;
    }
    return RemoveEntrySuccess;
}(LoaderSuccessAction));
export { RemoveEntrySuccess };
if (false) {
    /** @type {?} */
    RemoveEntrySuccess.prototype.type;
}
var RemoveEntryFail = /** @class */ (function (_super) {
    tslib_1.__extends(RemoveEntryFail, _super);
    function RemoveEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = REMOVE_ENTRY_FAIL;
        return _this;
    }
    return RemoveEntryFail;
}(LoaderFailAction));
export { RemoveEntryFail };
if (false) {
    /** @type {?} */
    RemoveEntryFail.prototype.type;
    /** @type {?} */
    RemoveEntryFail.prototype.payload;
}
var UpdateEntry = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateEntry, _super);
    function UpdateEntry(payload) {
        var _this = _super.call(this, CART_DATA) || this;
        _this.payload = payload;
        _this.type = UPDATE_ENTRY;
        return _this;
    }
    return UpdateEntry;
}(LoaderLoadAction));
export { UpdateEntry };
if (false) {
    /** @type {?} */
    UpdateEntry.prototype.type;
    /** @type {?} */
    UpdateEntry.prototype.payload;
}
var UpdateEntrySuccess = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateEntrySuccess, _super);
    function UpdateEntrySuccess() {
        var _this = _super.call(this, CART_DATA) || this;
        _this.type = UPDATE_ENTRY_SUCCESS;
        return _this;
    }
    return UpdateEntrySuccess;
}(LoaderSuccessAction));
export { UpdateEntrySuccess };
if (false) {
    /** @type {?} */
    UpdateEntrySuccess.prototype.type;
}
var UpdateEntryFail = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateEntryFail, _super);
    function UpdateEntryFail(payload) {
        var _this = _super.call(this, CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = UPDATE_ENTRY_FAIL;
        return _this;
    }
    return UpdateEntryFail;
}(LoaderFailAction));
export { UpdateEntryFail };
if (false) {
    /** @type {?} */
    UpdateEntryFail.prototype.type;
    /** @type {?} */
    UpdateEntryFail.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQtZW50cnkuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUMsTUFBTSxLQUFPLFNBQVMsR0FBRyx3QkFBd0I7O0FBQ2pELE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxnQ0FBZ0M7O0FBQ2pFLE1BQU0sS0FBTyxjQUFjLEdBQUcsNkJBQTZCOztBQUUzRCxNQUFNLEtBQU8sWUFBWSxHQUFHLDJCQUEyQjs7QUFDdkQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLG1DQUFtQzs7QUFDdkUsTUFBTSxLQUFPLGlCQUFpQixHQUFHLGdDQUFnQzs7QUFFakUsTUFBTSxLQUFPLFlBQVksR0FBRywyQkFBMkI7O0FBQ3ZELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxtQ0FBbUM7O0FBQ3ZFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxnQ0FBZ0M7QUFFakU7SUFBOEIsb0NBQWdCO0lBRTVDLGtCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLFNBQVMsQ0FBQzs7SUFHMUIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBOEIsZ0JBQWdCLEdBSzdDOzs7O0lBSkMsd0JBQTBCOztJQUNkLDJCQUFtQjs7QUFLakM7SUFBcUMsMkNBQW1CO0lBRXRELHlCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGlCQUFpQixDQUFDOztJQUdsQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBcUMsbUJBQW1CLEdBS3ZEOzs7O0lBSkMsK0JBQWtDOztJQUN0QixrQ0FBbUI7O0FBS2pDO0lBQWtDLHdDQUFnQjtJQUVoRCxzQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsY0FBYyxDQUFDOztJQUcvQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBa0MsZ0JBQWdCLEdBS2pEOzs7O0lBSkMsNEJBQStCOztJQUNuQiwrQkFBbUI7O0FBS2pDO0lBQWlDLHVDQUFnQjtJQUUvQyxxQkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxZQUFZLENBQUM7O0lBRzdCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFMRCxDQUFpQyxnQkFBZ0IsR0FLaEQ7Ozs7SUFKQywyQkFBNkI7O0lBQ2pCLDhCQUFtQjs7QUFLakM7SUFBd0MsOENBQW1CO0lBRXpEO1FBQUEsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FDakI7UUFIUSxVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxtQkFBbUIsR0FLMUQ7Ozs7SUFKQyxrQ0FBcUM7O0FBTXZDO0lBQXFDLDJDQUFnQjtJQUVuRCx5QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FDMUI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsaUJBQWlCLENBQUM7O0lBR2xDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFMRCxDQUFxQyxnQkFBZ0IsR0FLcEQ7Ozs7SUFKQywrQkFBa0M7O0lBQ3RCLGtDQUFtQjs7QUFLakM7SUFBaUMsdUNBQWdCO0lBRS9DLHFCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLFlBQVksQ0FBQzs7SUFHN0IsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQWlDLGdCQUFnQixHQUtoRDs7OztJQUpDLDJCQUE2Qjs7SUFDakIsOEJBQW1COztBQUtqQztJQUF3Qyw4Q0FBbUI7SUFFekQ7UUFBQSxZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUhRLFVBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFHckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLG1CQUFtQixHQUsxRDs7OztJQUpDLGtDQUFxQzs7QUFNdkM7SUFBcUMsMkNBQWdCO0lBRW5ELHlCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUMxQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxpQkFBaUIsQ0FBQzs7SUFHbEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFDLGdCQUFnQixHQUtwRDs7OztJQUpDLCtCQUFrQzs7SUFDdEIsa0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvblxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBDQVJUX0RBVEEgfSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IEFERF9FTlRSWSA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJ5JztcbmV4cG9ydCBjb25zdCBBRERfRU5UUllfU1VDQ0VTUyA9ICdbQ2FydC1lbnRyeV0gQWRkIEVudHJ5IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEFERF9FTlRSWV9GQUlMID0gJ1tDYXJ0LWVudHJ5XSBBZGQgRW50cnkgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfRU5UUlkgPSAnW0NhcnQtZW50cnldIFJlbW92ZSBFbnRyeSc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0VOVFJZX1NVQ0NFU1MgPSAnW0NhcnQtZW50cnldIFJlbW92ZSBFbnRyeSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfRU5UUllfRkFJTCA9ICdbQ2FydC1lbnRyeV0gUmVtb3ZlIEVudHJ5IEZhaWwnO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0VOVFJZID0gJ1tDYXJ0LWVudHJ5XSBVcGRhdGUgRW50cnknO1xuZXhwb3J0IGNvbnN0IFVQREFURV9FTlRSWV9TVUNDRVNTID0gJ1tDYXJ0LWVudHJ5XSBVcGRhdGUgRW50cnkgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VOVFJZX0ZBSUwgPSAnW0NhcnQtZW50cnldIFVwZGF0ZSBFbnRyeSBGYWlsJztcblxuZXhwb3J0IGNsYXNzIEFkZEVudHJ5IGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU5UUlk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW50cnlGYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU5UUllfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUVudHJ5IGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfRU5UUlk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVFbnRyeVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9FTlRSWV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVFbnRyeUZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9FTlRSWV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlRW50cnkgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9FTlRSWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVudHJ5U3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0VOVFJZX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVudHJ5RmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0VOVFJZX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhcnRFbnRyeUFjdGlvbiA9XG4gIHwgQWRkRW50cnlcbiAgfCBBZGRFbnRyeVN1Y2Nlc3NcbiAgfCBBZGRFbnRyeUZhaWxcbiAgfCBSZW1vdmVFbnRyeVxuICB8IFJlbW92ZUVudHJ5U3VjY2Vzc1xuICB8IFJlbW92ZUVudHJ5RmFpbFxuICB8IFVwZGF0ZUVudHJ5XG4gIHwgVXBkYXRlRW50cnlTdWNjZXNzXG4gIHwgVXBkYXRlRW50cnlGYWlsO1xuIl19