/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NAVIGATION_DETAIL_ENTITY } from '../cms-state';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
/** @type {?} */
export var LOAD_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
/** @type {?} */
export var LOAD_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
/** @type {?} */
export var LOAD_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
var LoadNavigationItems = /** @class */ (function (_super) {
    tslib_1.__extends(LoadNavigationItems, _super);
    function LoadNavigationItems(payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
        _this.payload = payload;
        _this.type = LOAD_NAVIGATION_ITEMS;
        return _this;
    }
    return LoadNavigationItems;
}(EntityLoadAction));
export { LoadNavigationItems };
if (false) {
    /** @type {?} */
    LoadNavigationItems.prototype.type;
    /** @type {?} */
    LoadNavigationItems.prototype.payload;
}
var LoadNavigationItemsFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadNavigationItemsFail, _super);
    function LoadNavigationItemsFail(nodeId, payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, nodeId, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_NAVIGATION_ITEMS_FAIL;
        return _this;
    }
    return LoadNavigationItemsFail;
}(EntityFailAction));
export { LoadNavigationItemsFail };
if (false) {
    /** @type {?} */
    LoadNavigationItemsFail.prototype.type;
    /** @type {?} */
    LoadNavigationItemsFail.prototype.payload;
}
var LoadNavigationItemsSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadNavigationItemsSuccess, _super);
    function LoadNavigationItemsSuccess(payload) {
        var _this = _super.call(this, NAVIGATION_DETAIL_ENTITY, payload.nodeId) || this;
        _this.payload = payload;
        _this.type = LOAD_NAVIGATION_ITEMS_SUCCESS;
        return _this;
    }
    return LoadNavigationItemsSuccess;
}(EntitySuccessAction));
export { LoadNavigationItemsSuccess };
if (false) {
    /** @type {?} */
    LoadNavigationItemsSuccess.prototype.type;
    /** @type {?} */
    LoadNavigationItemsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNwQixNQUFNLHlEQUF5RCxDQUFDOztBQUVqRSxNQUFNLEtBQU8scUJBQXFCLEdBQUcsa0NBQWtDOztBQUN2RSxNQUFNLEtBQU8sMEJBQTBCLEdBQ3JDLHVDQUF1Qzs7QUFDekMsTUFBTSxLQUFPLDZCQUE2QixHQUN4QywwQ0FBMEM7QUFFNUM7SUFBeUMsK0NBQWdCO0lBRXZELDZCQUFtQixPQUF5QztRQUE1RCxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDaEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBa0M7UUFEbkQsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsZ0JBQWdCLEdBS3hEOzs7O0lBSkMsbUNBQXNDOztJQUMxQixzQ0FBZ0Q7O0FBSzlEO0lBQTZDLG1EQUFnQjtJQUUzRCxpQ0FBWSxNQUFjLEVBQVMsT0FBWTtRQUEvQyxZQUNFLGtCQUFNLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FDakQ7UUFGa0MsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QyxVQUFJLEdBQUcsMEJBQTBCLENBQUM7O0lBRzNDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFMRCxDQUE2QyxnQkFBZ0IsR0FLNUQ7Ozs7SUFKQyx1Q0FBMkM7O0lBQ2YsMENBQW1COztBQUtqRDtJQUFnRCxzREFBbUI7SUFFakUsb0NBQW1CLE9BQThDO1FBQWpFLFlBQ0Usa0JBQU0sd0JBQXdCLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUNoRDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUF1QztRQUR4RCxVQUFJLEdBQUcsNkJBQTZCLENBQUM7O0lBRzlDLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUFMRCxDQUFnRCxtQkFBbUIsR0FLbEU7Ozs7SUFKQywwQ0FBOEM7O0lBQ2xDLDZDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5BVklHQVRJT05fREVUQUlMX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTE9BRF9OQVZJR0FUSU9OX0lURU1TID0gJ1tDbXNdIExvYWQgTmF2aWdhdGlvbkVudHJ5IGl0ZW1zJztcbmV4cG9ydCBjb25zdCBMT0FEX05BVklHQVRJT05fSVRFTVNfRkFJTCA9XG4gICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUyA9XG4gICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWROYXZpZ2F0aW9uSXRlbXMgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTkFWSUdBVElPTl9JVEVNUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgbm9kZUlkOiBzdHJpbmc7IGl0ZW1zOiBhbnlbXSB9KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBwYXlsb2FkLm5vZGVJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWROYXZpZ2F0aW9uSXRlbXNGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX05BVklHQVRJT05fSVRFTVNfRkFJTDtcbiAgY29uc3RydWN0b3Iobm9kZUlkOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFksIG5vZGVJZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWROYXZpZ2F0aW9uSXRlbXNTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgbm9kZUlkOiBzdHJpbmc7IGNvbXBvbmVudHM6IGFueVtdIH0pIHtcbiAgICBzdXBlcihOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFksIHBheWxvYWQubm9kZUlkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIE5hdmlnYXRpb25FbnRyeUl0ZW1BY3Rpb24gPVxuICB8IExvYWROYXZpZ2F0aW9uSXRlbXNcbiAgfCBMb2FkTmF2aWdhdGlvbkl0ZW1zRmFpbFxuICB8IExvYWROYXZpZ2F0aW9uSXRlbXNTdWNjZXNzO1xuIl19