/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
import { STORE_FINDER_DATA } from '../store-finder-state';
/** @type {?} */
export var VIEW_ALL_STORES = '[StoreFinder] View All Stores';
/** @type {?} */
export var VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
/** @type {?} */
export var VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
var ViewAllStores = /** @class */ (function (_super) {
    tslib_1.__extends(ViewAllStores, _super);
    function ViewAllStores() {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.type = VIEW_ALL_STORES;
        return _this;
    }
    return ViewAllStores;
}(LoaderLoadAction));
export { ViewAllStores };
if (false) {
    /** @type {?} */
    ViewAllStores.prototype.type;
}
var ViewAllStoresFail = /** @class */ (function (_super) {
    tslib_1.__extends(ViewAllStoresFail, _super);
    function ViewAllStoresFail(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA, payload) || this;
        _this.payload = payload;
        _this.type = VIEW_ALL_STORES_FAIL;
        return _this;
    }
    return ViewAllStoresFail;
}(LoaderFailAction));
export { ViewAllStoresFail };
if (false) {
    /** @type {?} */
    ViewAllStoresFail.prototype.type;
    /** @type {?} */
    ViewAllStoresFail.prototype.payload;
}
var ViewAllStoresSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(ViewAllStoresSuccess, _super);
    function ViewAllStoresSuccess(payload) {
        var _this = _super.call(this, STORE_FINDER_DATA) || this;
        _this.payload = payload;
        _this.type = VIEW_ALL_STORES_SUCCESS;
        return _this;
    }
    return ViewAllStoresSuccess;
}(LoaderSuccessAction));
export { ViewAllStoresSuccess };
if (false) {
    /** @type {?} */
    ViewAllStoresSuccess.prototype.type;
    /** @type {?} */
    ViewAllStoresSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvYWN0aW9ucy92aWV3LWFsbC1zdG9yZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ3BCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTFELE1BQU0sS0FBTyxlQUFlLEdBQUcsK0JBQStCOztBQUM5RCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsb0NBQW9DOztBQUN4RSxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsdUNBQXVDO0FBRTlFO0lBQW1DLHlDQUFnQjtJQUVqRDtRQUFBLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFIUSxVQUFJLEdBQUcsZUFBZSxDQUFDOztJQUdoQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUMsZ0JBQWdCLEdBS2xEOzs7O0lBSkMsNkJBQWdDOztBQU1sQztJQUF1Qyw2Q0FBZ0I7SUFFckQsMkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsU0FDbEM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBR3JDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxnQkFBZ0IsR0FLdEQ7Ozs7SUFKQyxpQ0FBcUM7O0lBQ3pCLG9DQUFtQjs7QUFLakM7SUFBMEMsZ0RBQW1CO0lBRTNELDhCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBR3hDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFMRCxDQUEwQyxtQkFBbUIsR0FLNUQ7Ozs7SUFKQyxvQ0FBd0M7O0lBQzVCLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgU1RPUkVfRklOREVSX0RBVEEgfSBmcm9tICcuLi9zdG9yZS1maW5kZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgVklFV19BTExfU1RPUkVTID0gJ1tTdG9yZUZpbmRlcl0gVmlldyBBbGwgU3RvcmVzJztcbmV4cG9ydCBjb25zdCBWSUVXX0FMTF9TVE9SRVNfRkFJTCA9ICdbU3RvcmVGaW5kZXJdIFZpZXcgQWxsIFN0b3JlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBWSUVXX0FMTF9TVE9SRVNfU1VDQ0VTUyA9ICdbU3RvcmVGaW5kZXJdIFZpZXcgQWxsIFN0b3JlcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXMgZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFZJRVdfQUxMX1NUT1JFUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoU1RPUkVfRklOREVSX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWV3QWxsU3RvcmVzRmFpbCBleHRlbmRzIExvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVklFV19BTExfU1RPUkVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihTVE9SRV9GSU5ERVJfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXNTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBWSUVXX0FMTF9TVE9SRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFNUT1JFX0ZJTkRFUl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBWaWV3QWxsU3RvcmVzQWN0aW9uID1cbiAgfCBWaWV3QWxsU3RvcmVzXG4gIHwgVmlld0FsbFN0b3Jlc0ZhaWxcbiAgfCBWaWV3QWxsU3RvcmVzU3VjY2VzcztcbiJdfQ==