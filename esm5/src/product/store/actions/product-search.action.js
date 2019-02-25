/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var SEARCH_PRODUCTS = '[Product] Search Products';
/** @type {?} */
export var SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
/** @type {?} */
export var SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
/** @type {?} */
export var GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
/** @type {?} */
export var GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
/** @type {?} */
export var GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
/** @type {?} */
export var CLEAN_PRODUCT_SEARCH = '[Product] Clean Product Search State';
var SearchProducts = /** @class */ (function () {
    function SearchProducts(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS;
    }
    return SearchProducts;
}());
export { SearchProducts };
if (false) {
    /** @type {?} */
    SearchProducts.prototype.type;
    /** @type {?} */
    SearchProducts.prototype.payload;
    /** @type {?} */
    SearchProducts.prototype.auxiliary;
}
var SearchProductsFail = /** @class */ (function () {
    function SearchProductsFail(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_FAIL;
    }
    return SearchProductsFail;
}());
export { SearchProductsFail };
if (false) {
    /** @type {?} */
    SearchProductsFail.prototype.type;
    /** @type {?} */
    SearchProductsFail.prototype.payload;
    /** @type {?} */
    SearchProductsFail.prototype.auxiliary;
}
var SearchProductsSuccess = /** @class */ (function () {
    function SearchProductsSuccess(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_SUCCESS;
    }
    return SearchProductsSuccess;
}());
export { SearchProductsSuccess };
if (false) {
    /** @type {?} */
    SearchProductsSuccess.prototype.type;
    /** @type {?} */
    SearchProductsSuccess.prototype.payload;
    /** @type {?} */
    SearchProductsSuccess.prototype.auxiliary;
}
var GetProductSuggestions = /** @class */ (function () {
    function GetProductSuggestions(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS;
    }
    return GetProductSuggestions;
}());
export { GetProductSuggestions };
if (false) {
    /** @type {?} */
    GetProductSuggestions.prototype.type;
    /** @type {?} */
    GetProductSuggestions.prototype.payload;
}
var GetProductSuggestionsSuccess = /** @class */ (function () {
    function GetProductSuggestionsSuccess(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    }
    return GetProductSuggestionsSuccess;
}());
export { GetProductSuggestionsSuccess };
if (false) {
    /** @type {?} */
    GetProductSuggestionsSuccess.prototype.type;
    /** @type {?} */
    GetProductSuggestionsSuccess.prototype.payload;
}
var GetProductSuggestionsFail = /** @class */ (function () {
    function GetProductSuggestionsFail(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    }
    return GetProductSuggestionsFail;
}());
export { GetProductSuggestionsFail };
if (false) {
    /** @type {?} */
    GetProductSuggestionsFail.prototype.type;
    /** @type {?} */
    GetProductSuggestionsFail.prototype.payload;
}
var CleanProductSearchState = /** @class */ (function () {
    function CleanProductSearchState() {
        this.type = CLEAN_PRODUCT_SEARCH;
    }
    return CleanProductSearchState;
}());
export { CleanProductSearchState };
if (false) {
    /** @type {?} */
    CleanProductSearchState.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxNQUFNLEtBQU8sZUFBZSxHQUFHLDJCQUEyQjs7QUFDMUQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLGdDQUFnQzs7QUFDcEUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxLQUFPLCtCQUErQixHQUMxQywyQ0FBMkM7O0FBQzdDLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMsd0NBQXdDOztBQUMxQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsc0NBQXNDO0FBRTFFO0lBRUUsd0JBQ1MsT0FBMEQsRUFDMUQsU0FBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUQ7UUFDMUQsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUhuQixTQUFJLEdBQUcsZUFBZSxDQUFDO0lBSTdCLENBQUM7SUFDTixxQkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsOEJBQWdDOztJQUU5QixpQ0FBaUU7O0lBQ2pFLG1DQUEwQjs7QUFJOUI7SUFFRSw0QkFBbUIsT0FBbUIsRUFBUyxTQUFtQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUR6RCxTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDZ0MsQ0FBQztJQUN4RSx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsa0NBQXFDOztJQUN6QixxQ0FBMEI7O0lBQUUsdUNBQTBCOztBQUdwRTtJQUVFLCtCQUFtQixPQUEwQixFQUFTLFNBQW1CO1FBQXRELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQURoRSxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDb0MsQ0FBQztJQUMvRSw0QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMscUNBQXdDOztJQUM1Qix3Q0FBaUM7O0lBQUUsMENBQTBCOztBQUczRTtJQUVFLCtCQUFtQixPQUFxRDtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUE4QztRQUQvRCxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDbUMsQ0FBQztJQUM5RSw0QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMscUNBQXdDOztJQUM1Qix3Q0FBNEQ7O0FBRzFFO0lBRUUsc0NBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFEL0IsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBQ0wsQ0FBQztJQUM5QyxtQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsNENBQWdEOztJQUNwQywrQ0FBNEI7O0FBRzFDO0lBRUUsbUNBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBQ0osQ0FBQztJQUM1QyxnQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMseUNBQTZDOztJQUNqQyw0Q0FBMEI7O0FBR3hDO0lBRUU7UUFEUyxTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDdEIsQ0FBQztJQUNsQiw4QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7XG4gIFN1Z2dlc3Rpb24sXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBFcnJvck1vZGVsXG59IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUUyA9ICdbUHJvZHVjdF0gU2VhcmNoIFByb2R1Y3RzJztcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVFNfRkFJTCA9ICdbUHJvZHVjdF0gU2VhcmNoIFByb2R1Y3RzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUU19TVUNDRVNTID0gJ1tQcm9kdWN0XSBTZWFyY2ggUHJvZHVjdHMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VHR0VTVElPTlMgPSAnW1Byb2R1Y3RdIEdldCBQcm9kdWN0IFN1Z2dlc3Rpb25zJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTID1cbiAgJ1tQcm9kdWN0XSBHZXQgUHJvZHVjdCBTdWdnZXN0aW9ucyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19GQUlMID1cbiAgJ1tQcm9kdWN0XSBHZXQgUHJvZHVjdCBTdWdnZXN0aW9ucyBGYWlsJztcbmV4cG9ydCBjb25zdCBDTEVBTl9QUk9EVUNUX1NFQVJDSCA9ICdbUHJvZHVjdF0gQ2xlYW4gUHJvZHVjdCBTZWFyY2ggU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUHJvZHVjdHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VBUkNIX1BST0RVQ1RTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyBxdWVyeVRleHQ6IHN0cmluZzsgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgfSxcbiAgICBwdWJsaWMgYXV4aWxpYXJ5PzogYm9vbGVhblxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQcm9kdWN0c0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VBUkNIX1BST0RVQ1RTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFcnJvck1vZGVsLCBwdWJsaWMgYXV4aWxpYXJ5PzogYm9vbGVhbikge31cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFByb2R1Y3RzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRUFSQ0hfUFJPRFVDVFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2R1Y3RTZWFyY2hQYWdlLCBwdWJsaWMgYXV4aWxpYXJ5PzogYm9vbGVhbikge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9ucyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdGVybTogc3RyaW5nOyBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogU3VnZ2VzdGlvbltdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRXJyb3JNb2RlbCkge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFuUHJvZHVjdFNlYXJjaFN0YXRlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFOX1BST0RVQ1RfU0VBUkNIO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgUHJvZHVjdFNlYXJjaEFjdGlvbiA9XG4gIHwgU2VhcmNoUHJvZHVjdHNcbiAgfCBTZWFyY2hQcm9kdWN0c0ZhaWxcbiAgfCBTZWFyY2hQcm9kdWN0c1N1Y2Nlc3NcbiAgfCBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNcbiAgfCBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbFxuICB8IENsZWFuUHJvZHVjdFNlYXJjaFN0YXRlO1xuIl19