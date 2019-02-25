/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_PAGEDATA = '[Cms] Load PageData';
/** @type {?} */
export const LOAD_PAGEDATA_FAIL = '[Cms] Load PageData Fail';
/** @type {?} */
export const LOAD_PAGEDATA_SUCCESS = '[Cms] Load PageData Success';
/** @type {?} */
export const REFRESH_LATEST_PAGE = '[Cms] Refresh latest page';
/** @type {?} */
export const UPDATE_LATEST_PAGE_KEY = '[Cms] Update latest page key';
/** @type {?} */
export const CLEAN_PAGE_STATE = '[Cms] Clean Page State;';
export class LoadPageData {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA;
    }
}
if (false) {
    /** @type {?} */
    LoadPageData.prototype.type;
    /** @type {?} */
    LoadPageData.prototype.payload;
}
export class LoadPageDataFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadPageDataFail.prototype.type;
    /** @type {?} */
    LoadPageDataFail.prototype.payload;
}
export class LoadPageDataSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadPageDataSuccess.prototype.type;
    /** @type {?} */
    LoadPageDataSuccess.prototype.payload;
}
export class RefreshLatestPage {
    constructor() {
        this.type = REFRESH_LATEST_PAGE;
    }
}
if (false) {
    /** @type {?} */
    RefreshLatestPage.prototype.type;
}
export class UpdateLatestPageKey {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_LATEST_PAGE_KEY;
    }
}
if (false) {
    /** @type {?} */
    UpdateLatestPageKey.prototype.type;
    /** @type {?} */
    UpdateLatestPageKey.prototype.payload;
}
export class CleanPageState {
    constructor() {
        this.type = CLEAN_PAGE_STATE;
    }
}
if (false) {
    /** @type {?} */
    CleanPageState.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvcGFnZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxNQUFNLE9BQU8sYUFBYSxHQUFHLHFCQUFxQjs7QUFDbEQsTUFBTSxPQUFPLGtCQUFrQixHQUFHLDBCQUEwQjs7QUFDNUQsTUFBTSxPQUFPLHFCQUFxQixHQUFHLDZCQUE2Qjs7QUFDbEUsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDJCQUEyQjs7QUFDOUQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLDhCQUE4Qjs7QUFDcEUsTUFBTSxPQUFPLGdCQUFnQixHQUFHLHlCQUF5QjtBQUV6RCxNQUFNLE9BQU8sWUFBWTs7OztJQUV2QixZQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxhQUFhLENBQUM7SUFDWSxDQUFDO0NBQzVDOzs7SUFGQyw0QkFBOEI7O0lBQ2xCLCtCQUEyQjs7QUFHekMsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUUzQixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDRCxDQUFDO0NBQ3BDOzs7SUFGQyxnQ0FBbUM7O0lBQ3ZCLG1DQUFtQjs7QUFHakMsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUU5QixZQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtRQUQvQyxTQUFJLEdBQUcscUJBQXFCLENBQUM7SUFDcUIsQ0FBQztDQUM3RDs7O0lBRkMsbUNBQXNDOztJQUMxQixzQ0FBNEM7O0FBRzFELE1BQU0sT0FBTyxpQkFBaUI7SUFBOUI7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDdEMsQ0FBQztDQUFBOzs7SUFEQyxpQ0FBb0M7O0FBR3RDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFFOUIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ0YsQ0FBQztDQUN2Qzs7O0lBRkMsbUNBQXVDOztJQUMzQixzQ0FBc0I7O0FBR3BDLE1BQU0sT0FBTyxjQUFjO0lBRXpCO1FBRFMsU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBQ2xCLENBQUM7Q0FDakI7OztJQUZDLDhCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BBR0VEQVRBID0gJ1tDbXNdIExvYWQgUGFnZURhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfUEFHRURBVEFfRkFJTCA9ICdbQ21zXSBMb2FkIFBhZ2VEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfUEFHRURBVEFfU1VDQ0VTUyA9ICdbQ21zXSBMb2FkIFBhZ2VEYXRhIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFRlJFU0hfTEFURVNUX1BBR0UgPSAnW0Ntc10gUmVmcmVzaCBsYXRlc3QgcGFnZSc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0xBVEVTVF9QQUdFX0tFWSA9ICdbQ21zXSBVcGRhdGUgbGF0ZXN0IHBhZ2Uga2V5JztcbmV4cG9ydCBjb25zdCBDTEVBTl9QQUdFX1NUQVRFID0gJ1tDbXNdIENsZWFuIFBhZ2UgU3RhdGU7JztcblxuZXhwb3J0IGNsYXNzIExvYWRQYWdlRGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BBR0VEQVRBO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZUNvbnRleHQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZURhdGFGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUEFHRURBVEFfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQYWdlRGF0YVN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QQUdFREFUQV9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBrZXk6IHN0cmluZzsgdmFsdWU6IFBhZ2UgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZnJlc2hMYXRlc3RQYWdlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFRlJFU0hfTEFURVNUX1BBR0U7XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVMYXRlc3RQYWdlS2V5IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9MQVRFU1RfUEFHRV9LRVk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhblBhZ2VTdGF0ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBTl9QQUdFX1NUQVRFO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgUGFnZUFjdGlvbiA9XG4gIHwgTG9hZFBhZ2VEYXRhXG4gIHwgTG9hZFBhZ2VEYXRhRmFpbFxuICB8IExvYWRQYWdlRGF0YVN1Y2Nlc3NcbiAgfCBSZWZyZXNoTGF0ZXN0UGFnZVxuICB8IFVwZGF0ZUxhdGVzdFBhZ2VLZXlcbiAgfCBDbGVhblBhZ2VTdGF0ZTtcbiJdfQ==