/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { COMPONENT_ENTITY } from '../cms-state';
/** @type {?} */
export var LOAD_COMPONENT = '[Cms] Load Component';
/** @type {?} */
export var LOAD_COMPONENT_FAIL = '[Cms] Load Component Fail';
/** @type {?} */
export var LOAD_COMPONENT_SUCCESS = '[Cms] Load Component Success';
/** @type {?} */
export var GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
var LoadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LoadComponent, _super);
    function LoadComponent(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_COMPONENT;
        return _this;
    }
    return LoadComponent;
}(EntityLoadAction));
export { LoadComponent };
if (false) {
    /** @type {?} */
    LoadComponent.prototype.type;
    /** @type {?} */
    LoadComponent.prototype.payload;
}
var LoadComponentFail = /** @class */ (function (_super) {
    tslib_1.__extends(LoadComponentFail, _super);
    function LoadComponentFail(uid, payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, uid, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_COMPONENT_FAIL;
        return _this;
    }
    return LoadComponentFail;
}(EntityFailAction));
export { LoadComponentFail };
if (false) {
    /** @type {?} */
    LoadComponentFail.prototype.type;
    /** @type {?} */
    LoadComponentFail.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
LoadComponentSuccess = /** @class */ (function (_super) {
    tslib_1.__extends(LoadComponentSuccess, _super);
    function LoadComponentSuccess(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.uid) || this;
        _this.payload = payload;
        _this.type = LOAD_COMPONENT_SUCCESS;
        return _this;
    }
    return LoadComponentSuccess;
}(EntitySuccessAction));
/**
 * @template T
 */
export { LoadComponentSuccess };
if (false) {
    /** @type {?} */
    LoadComponentSuccess.prototype.type;
    /** @type {?} */
    LoadComponentSuccess.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
GetComponentFromPage = /** @class */ (function (_super) {
    tslib_1.__extends(GetComponentFromPage, _super);
    function GetComponentFromPage(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.map(function (cmp) { return cmp.uid; })) || this;
        _this.payload = payload;
        _this.type = GET_COMPONENET_FROM_PAGE;
        return _this;
    }
    return GetComponentFromPage;
}(EntitySuccessAction));
/**
 * @template T
 */
export { GetComponentFromPage };
if (false) {
    /** @type {?} */
    GetComponentFromPage.prototype.type;
    /** @type {?} */
    GetComponentFromPage.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVoRCxNQUFNLEtBQU8sY0FBYyxHQUFHLHNCQUFzQjs7QUFDcEQsTUFBTSxLQUFPLG1CQUFtQixHQUFHLDJCQUEyQjs7QUFDOUQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLDhCQUE4Qjs7QUFDcEUsTUFBTSxLQUFPLHdCQUF3QixHQUFHLCtCQUErQjtBQUV2RTtJQUFtQyx5Q0FBZ0I7SUFFakQsdUJBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsU0FDakM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsY0FBYyxDQUFDOztJQUcvQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUMsZ0JBQWdCLEdBS2xEOzs7O0lBSkMsNkJBQStCOztJQUNuQixnQ0FBc0I7O0FBS3BDO0lBQXVDLDZDQUFnQjtJQUVyRCwyQkFBWSxHQUFXLEVBQVMsT0FBWTtRQUE1QyxZQUNFLGtCQUFNLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsU0FDdEM7UUFGK0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQURuQyxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxnQkFBZ0IsR0FLdEQ7Ozs7SUFKQyxpQ0FBb0M7O0lBQ1gsb0NBQW1COzs7OztBQUs5Qzs7OztJQUVVLGdEQUFtQjtJQUUzQiw4QkFBbUIsT0FBVTtRQUE3QixZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FDckM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBRztRQURwQixVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFQRCxDQUVVLG1CQUFtQixHQUs1Qjs7Ozs7OztJQUpDLG9DQUF1Qzs7SUFDM0IsdUNBQWlCOzs7OztBQUsvQjs7OztJQUVVLGdEQUFtQjtJQUUzQiw4QkFBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxFQUFQLENBQU8sQ0FBQyxDQUFDLFNBQ3JEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FFVSxtQkFBbUIsR0FLNUI7Ozs7Ozs7SUFKQyxvQ0FBeUM7O0lBQzdCLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBDT01QT05FTlRfRU5USVRZIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ09NUE9ORU5UID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50JztcbmV4cG9ydCBjb25zdCBMT0FEX0NPTVBPTkVOVF9GQUlMID0gJ1tDbXNdIExvYWQgQ29tcG9uZW50IEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ09NUE9ORU5UX1NVQ0NFU1MgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgR0VUX0NPTVBPTkVORVRfRlJPTV9QQUdFID0gJ1tDbXNdIEdldCBDb21wb25lbnQgZnJvbSBQYWdlJztcblxuZXhwb3J0IGNsYXNzIExvYWRDb21wb25lbnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ09NUE9ORU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoQ09NUE9ORU5UX0VOVElUWSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDb21wb25lbnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTVBPTkVOVF9GQUlMO1xuICBjb25zdHJ1Y3Rvcih1aWQ6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHVpZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDb21wb25lbnRTdWNjZXNzPFxuICBUIGV4dGVuZHMgQ21zQ29tcG9uZW50XG4+IGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTVBPTkVOVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQudWlkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0Q29tcG9uZW50RnJvbVBhZ2U8XG4gIFQgZXh0ZW5kcyBDbXNDb21wb25lbnRcbj4gZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdFVF9DT01QT05FTkVUX0ZST01fUEFHRTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbXSkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQubWFwKGNtcCA9PiBjbXAudWlkKSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBDb21wb25lbnRBY3Rpb248VCBleHRlbmRzIENtc0NvbXBvbmVudD4gPVxuICB8IExvYWRDb21wb25lbnRcbiAgfCBMb2FkQ29tcG9uZW50RmFpbFxuICB8IExvYWRDb21wb25lbnRTdWNjZXNzPFQ+XG4gIHwgR2V0Q29tcG9uZW50RnJvbVBhZ2U8VD47XG4iXX0=