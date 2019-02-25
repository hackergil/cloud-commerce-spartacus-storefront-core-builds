/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CmsConfig } from '../config/cms-config';
var DefaultPageService = /** @class */ (function () {
    function DefaultPageService(config) {
        this.config = config;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    DefaultPageService.prototype.getDefaultPageIdsBytype = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.config.defaultPageIdForType[type];
    };
    DefaultPageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DefaultPageService.ctorParameters = function () { return [
        { type: CmsConfig }
    ]; };
    return DefaultPageService;
}());
export { DefaultPageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultPageService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1wYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3NlcnZpY2VzL2RlZmF1bHQtcGFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdqRDtJQUVFLDRCQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQzs7Ozs7SUFFekMsb0RBQXVCOzs7O0lBQXZCLFVBQXdCLElBQWM7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQU5GLFVBQVU7Ozs7Z0JBSEYsU0FBUzs7SUFVbEIseUJBQUM7Q0FBQSxBQVBELElBT0M7U0FOWSxrQkFBa0I7Ozs7OztJQUNqQixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICcuLi9jb25maWcvY21zLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlZmF1bHRQYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBDbXNDb25maWcpIHt9XG5cbiAgZ2V0RGVmYXVsdFBhZ2VJZHNCeXR5cGUodHlwZTogUGFnZVR5cGUpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRlZmF1bHRQYWdlSWRGb3JUeXBlW3R5cGVdO1xuICB9XG59XG4iXX0=