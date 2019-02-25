/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_PAGEDATA = '[Cms] Load PageData';
/** @type {?} */
export var LOAD_PAGEDATA_FAIL = '[Cms] Load PageData Fail';
/** @type {?} */
export var LOAD_PAGEDATA_SUCCESS = '[Cms] Load PageData Success';
/** @type {?} */
export var REFRESH_LATEST_PAGE = '[Cms] Refresh latest page';
/** @type {?} */
export var UPDATE_LATEST_PAGE_KEY = '[Cms] Update latest page key';
/** @type {?} */
export var CLEAN_PAGE_STATE = '[Cms] Clean Page State;';
var LoadPageData = /** @class */ (function () {
    function LoadPageData(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA;
    }
    return LoadPageData;
}());
export { LoadPageData };
if (false) {
    /** @type {?} */
    LoadPageData.prototype.type;
    /** @type {?} */
    LoadPageData.prototype.payload;
}
var LoadPageDataFail = /** @class */ (function () {
    function LoadPageDataFail(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA_FAIL;
    }
    return LoadPageDataFail;
}());
export { LoadPageDataFail };
if (false) {
    /** @type {?} */
    LoadPageDataFail.prototype.type;
    /** @type {?} */
    LoadPageDataFail.prototype.payload;
}
var LoadPageDataSuccess = /** @class */ (function () {
    function LoadPageDataSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA_SUCCESS;
    }
    return LoadPageDataSuccess;
}());
export { LoadPageDataSuccess };
if (false) {
    /** @type {?} */
    LoadPageDataSuccess.prototype.type;
    /** @type {?} */
    LoadPageDataSuccess.prototype.payload;
}
var RefreshLatestPage = /** @class */ (function () {
    function RefreshLatestPage() {
        this.type = REFRESH_LATEST_PAGE;
    }
    return RefreshLatestPage;
}());
export { RefreshLatestPage };
if (false) {
    /** @type {?} */
    RefreshLatestPage.prototype.type;
}
var UpdateLatestPageKey = /** @class */ (function () {
    function UpdateLatestPageKey(payload) {
        this.payload = payload;
        this.type = UPDATE_LATEST_PAGE_KEY;
    }
    return UpdateLatestPageKey;
}());
export { UpdateLatestPageKey };
if (false) {
    /** @type {?} */
    UpdateLatestPageKey.prototype.type;
    /** @type {?} */
    UpdateLatestPageKey.prototype.payload;
}
var CleanPageState = /** @class */ (function () {
    function CleanPageState() {
        this.type = CLEAN_PAGE_STATE;
    }
    return CleanPageState;
}());
export { CleanPageState };
if (false) {
    /** @type {?} */
    CleanPageState.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxNQUFNLEtBQU8sYUFBYSxHQUFHLHFCQUFxQjs7QUFDbEQsTUFBTSxLQUFPLGtCQUFrQixHQUFHLDBCQUEwQjs7QUFDNUQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLDZCQUE2Qjs7QUFDbEUsTUFBTSxLQUFPLG1CQUFtQixHQUFHLDJCQUEyQjs7QUFDOUQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLDhCQUE4Qjs7QUFDcEUsTUFBTSxLQUFPLGdCQUFnQixHQUFHLHlCQUF5QjtBQUV6RDtJQUVFLHNCQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxhQUFhLENBQUM7SUFDWSxDQUFDO0lBQzdDLG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw0QkFBOEI7O0lBQ2xCLCtCQUEyQjs7QUFHekM7SUFFRSwwQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ0QsQ0FBQztJQUNyQyx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsZ0NBQW1DOztJQUN2QixtQ0FBbUI7O0FBR2pDO0lBRUUsNkJBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBRC9DLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUNxQixDQUFDO0lBQzlELDBCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxtQ0FBc0M7O0lBQzFCLHNDQUE0Qzs7QUFHMUQ7SUFBQTtRQUNXLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUN0QyxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLGlDQUFvQzs7QUFHdEM7SUFFRSw2QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ0YsQ0FBQztJQUN4QywwQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsbUNBQXVDOztJQUMzQixzQ0FBc0I7O0FBR3BDO0lBRUU7UUFEUyxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDbEIsQ0FBQztJQUNsQixxQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsOEJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IExPQURfUEFHRURBVEEgPSAnW0Ntc10gTG9hZCBQYWdlRGF0YSc7XG5leHBvcnQgY29uc3QgTE9BRF9QQUdFREFUQV9GQUlMID0gJ1tDbXNdIExvYWQgUGFnZURhdGEgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9QQUdFREFUQV9TVUNDRVNTID0gJ1tDbXNdIExvYWQgUGFnZURhdGEgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVGUkVTSF9MQVRFU1RfUEFHRSA9ICdbQ21zXSBSZWZyZXNoIGxhdGVzdCBwYWdlJztcbmV4cG9ydCBjb25zdCBVUERBVEVfTEFURVNUX1BBR0VfS0VZID0gJ1tDbXNdIFVwZGF0ZSBsYXRlc3QgcGFnZSBrZXknO1xuZXhwb3J0IGNvbnN0IENMRUFOX1BBR0VfU1RBVEUgPSAnW0Ntc10gQ2xlYW4gUGFnZSBTdGF0ZTsnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFBhZ2VEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUEFHRURBVEE7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlQ29udGV4dCkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQYWdlRGF0YUZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QQUdFREFUQV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFBhZ2VEYXRhU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BBR0VEQVRBX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGtleTogc3RyaW5nOyB2YWx1ZTogUGFnZSB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVmcmVzaExhdGVzdFBhZ2UgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVGUkVTSF9MQVRFU1RfUEFHRTtcbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUxhdGVzdFBhZ2VLZXkgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0xBVEVTVF9QQUdFX0tFWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFuUGFnZVN0YXRlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFOX1BBR0VfU1RBVEU7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQYWdlQWN0aW9uID1cbiAgfCBMb2FkUGFnZURhdGFcbiAgfCBMb2FkUGFnZURhdGFGYWlsXG4gIHwgTG9hZFBhZ2VEYXRhU3VjY2Vzc1xuICB8IFJlZnJlc2hMYXRlc3RQYWdlXG4gIHwgVXBkYXRlTGF0ZXN0UGFnZUtleVxuICB8IENsZWFuUGFnZVN0YXRlO1xuIl19