/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const SEARCH_PRODUCTS = '[Product] Search Products';
/** @type {?} */
export const SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
/** @type {?} */
export const SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
/** @type {?} */
export const GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
/** @type {?} */
export const GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
/** @type {?} */
export const GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
/** @type {?} */
export const CLEAN_PRODUCT_SEARCH = '[Product] Clean Product Search State';
export class SearchProducts {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS;
    }
}
if (false) {
    /** @type {?} */
    SearchProducts.prototype.type;
    /** @type {?} */
    SearchProducts.prototype.payload;
    /** @type {?} */
    SearchProducts.prototype.auxiliary;
}
export class SearchProductsFail {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    SearchProductsFail.prototype.type;
    /** @type {?} */
    SearchProductsFail.prototype.payload;
    /** @type {?} */
    SearchProductsFail.prototype.auxiliary;
}
export class SearchProductsSuccess {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    SearchProductsSuccess.prototype.type;
    /** @type {?} */
    SearchProductsSuccess.prototype.payload;
    /** @type {?} */
    SearchProductsSuccess.prototype.auxiliary;
}
export class GetProductSuggestions {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS;
    }
}
if (false) {
    /** @type {?} */
    GetProductSuggestions.prototype.type;
    /** @type {?} */
    GetProductSuggestions.prototype.payload;
}
export class GetProductSuggestionsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    GetProductSuggestionsSuccess.prototype.type;
    /** @type {?} */
    GetProductSuggestionsSuccess.prototype.payload;
}
export class GetProductSuggestionsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    GetProductSuggestionsFail.prototype.type;
    /** @type {?} */
    GetProductSuggestionsFail.prototype.payload;
}
export class CleanProductSearchState {
    constructor() {
        this.type = CLEAN_PRODUCT_SEARCH;
    }
}
if (false) {
    /** @type {?} */
    CleanProductSearchState.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxNQUFNLE9BQU8sZUFBZSxHQUFHLDJCQUEyQjs7QUFDMUQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGdDQUFnQzs7QUFDcEUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxPQUFPLCtCQUErQixHQUMxQywyQ0FBMkM7O0FBQzdDLE1BQU0sT0FBTyw0QkFBNEIsR0FDdkMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsc0NBQXNDO0FBRTFFLE1BQU0sT0FBTyxjQUFjOzs7OztJQUV6QixZQUNTLE9BQTBELEVBQzFELFNBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQW1EO1FBQzFELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFIbkIsU0FBSSxHQUFHLGVBQWUsQ0FBQztJQUk3QixDQUFDO0NBQ0w7OztJQUxDLDhCQUFnQzs7SUFFOUIsaUNBQWlFOztJQUNqRSxtQ0FBMEI7O0FBSTlCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBRTdCLFlBQW1CLE9BQW1CLEVBQVMsU0FBbUI7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFEekQsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ2dDLENBQUM7Q0FDdkU7OztJQUZDLGtDQUFxQzs7SUFDekIscUNBQTBCOztJQUFFLHVDQUEwQjs7QUFHcEUsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFFaEMsWUFBbUIsT0FBMEIsRUFBUyxTQUFtQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFEaEUsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ29DLENBQUM7Q0FDOUU7OztJQUZDLHFDQUF3Qzs7SUFDNUIsd0NBQWlDOztJQUFFLDBDQUEwQjs7QUFHM0UsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVoQyxZQUFtQixPQUFxRDtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUE4QztRQUQvRCxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDbUMsQ0FBQztDQUM3RTs7O0lBRkMscUNBQXdDOztJQUM1Qix3Q0FBNEQ7O0FBRzFFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFFdkMsWUFBbUIsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUQvQixTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFDTCxDQUFDO0NBQzdDOzs7SUFGQyw0Q0FBZ0Q7O0lBQ3BDLCtDQUE0Qjs7QUFHMUMsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUVwQyxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRDdCLFNBQUksR0FBRyw0QkFBNEIsQ0FBQztJQUNKLENBQUM7Q0FDM0M7OztJQUZDLHlDQUE2Qzs7SUFDakMsNENBQTBCOztBQUd4QyxNQUFNLE9BQU8sdUJBQXVCO0lBRWxDO1FBRFMsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ3RCLENBQUM7Q0FDakI7OztJQUZDLHVDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQge1xuICBTdWdnZXN0aW9uLFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgRXJyb3JNb2RlbFxufSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVFMgPSAnW1Byb2R1Y3RdIFNlYXJjaCBQcm9kdWN0cyc7XG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RTX0ZBSUwgPSAnW1Byb2R1Y3RdIFNlYXJjaCBQcm9kdWN0cyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVFNfU1VDQ0VTUyA9ICdbUHJvZHVjdF0gU2VhcmNoIFByb2R1Y3RzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TID0gJ1tQcm9kdWN0XSBHZXQgUHJvZHVjdCBTdWdnZXN0aW9ucyc7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfU1VDQ0VTUyA9XG4gICdbUHJvZHVjdF0gR2V0IFByb2R1Y3QgU3VnZ2VzdGlvbnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfRkFJTCA9XG4gICdbUHJvZHVjdF0gR2V0IFByb2R1Y3QgU3VnZ2VzdGlvbnMgRmFpbCc7XG5leHBvcnQgY29uc3QgQ0xFQU5fUFJPRFVDVF9TRUFSQ0ggPSAnW1Byb2R1Y3RdIENsZWFuIFByb2R1Y3QgU2VhcmNoIFN0YXRlJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFByb2R1Y3RzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgcXVlcnlUZXh0OiBzdHJpbmc7IHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnIH0sXG4gICAgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW5cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUHJvZHVjdHNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRXJyb3JNb2RlbCwgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQcm9kdWN0c1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9kdWN0U2VhcmNoUGFnZSwgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9kdWN0U3VnZ2VzdGlvbnMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRlcm06IHN0cmluZzsgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFN1Z2dlc3Rpb25bXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVycm9yTW9kZWwpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhblByb2R1Y3RTZWFyY2hTdGF0ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBTl9QUk9EVUNUX1NFQVJDSDtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFByb2R1Y3RTZWFyY2hBY3Rpb24gPVxuICB8IFNlYXJjaFByb2R1Y3RzXG4gIHwgU2VhcmNoUHJvZHVjdHNGYWlsXG4gIHwgU2VhcmNoUHJvZHVjdHNTdWNjZXNzXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2Vzc1xuICB8IEdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWxcbiAgfCBDbGVhblByb2R1Y3RTZWFyY2hTdGF0ZTtcbiJdfQ==