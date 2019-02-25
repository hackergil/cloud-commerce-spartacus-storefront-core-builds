/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_USER_DETAILS = '[User] Load User Details';
/** @type {?} */
export var LOAD_USER_DETAILS_FAIL = '[User] Load User Details Fail';
/** @type {?} */
export var LOAD_USER_DETAILS_SUCCESS = '[User] Load User Details Success';
var LoadUserDetails = /** @class */ (function () {
    function LoadUserDetails(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS;
    }
    return LoadUserDetails;
}());
export { LoadUserDetails };
if (false) {
    /** @type {?} */
    LoadUserDetails.prototype.type;
    /** @type {?} */
    LoadUserDetails.prototype.payload;
}
var LoadUserDetailsFail = /** @class */ (function () {
    function LoadUserDetailsFail(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_FAIL;
    }
    return LoadUserDetailsFail;
}());
export { LoadUserDetailsFail };
if (false) {
    /** @type {?} */
    LoadUserDetailsFail.prototype.type;
    /** @type {?} */
    LoadUserDetailsFail.prototype.payload;
}
var LoadUserDetailsSuccess = /** @class */ (function () {
    function LoadUserDetailsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_SUCCESS;
    }
    return LoadUserDetailsSuccess;
}());
export { LoadUserDetailsSuccess };
if (false) {
    /** @type {?} */
    LoadUserDetailsSuccess.prototype.type;
    /** @type {?} */
    LoadUserDetailsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdXNlci1kZXRhaWxzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sS0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7O0FBQzNELE1BQU0sS0FBTyxzQkFBc0IsR0FBRywrQkFBK0I7O0FBQ3JFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxrQ0FBa0M7QUFFM0U7SUFFRSx5QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBQ0csQ0FBQztJQUN4QyxzQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsK0JBQWtDOztJQUN0QixrQ0FBc0I7O0FBR3BDO0lBRUUsNkJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUNMLENBQUM7SUFDckMsMEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLG1DQUF1Qzs7SUFDM0Isc0NBQW1COztBQUdqQztJQUVFLGdDQUFtQixPQUFhO1FBQWIsWUFBTyxHQUFQLE9BQU8sQ0FBTTtRQUR2QixTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFDUCxDQUFDO0lBQ3RDLDZCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxzQ0FBMEM7O0lBQzlCLHlDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfREVUQUlMUyA9ICdbVXNlcl0gTG9hZCBVc2VyIERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9ERVRBSUxTX0ZBSUwgPSAnW1VzZXJdIExvYWQgVXNlciBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9ERVRBSUxTX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgVXNlciBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJEZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJEZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJEZXRhaWxzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlcikge31cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyRGV0YWlsc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJEZXRhaWxzXG4gIHwgTG9hZFVzZXJEZXRhaWxzRmFpbFxuICB8IExvYWRVc2VyRGV0YWlsc1N1Y2Nlc3M7XG4iXX0=