/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CmsConfig } from '../config/cms-config';
export class DefaultPageService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getDefaultPageIdsBytype(type) {
        return this.config.defaultPageIdForType[type];
    }
}
DefaultPageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DefaultPageService.ctorParameters = () => [
    { type: CmsConfig }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultPageService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1wYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3NlcnZpY2VzL2RlZmF1bHQtcGFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUlqRCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7OztJQUV6Qyx1QkFBdUIsQ0FBQyxJQUFjO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFORixVQUFVOzs7O1lBSEYsU0FBUzs7Ozs7OztJQUtKLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVmYXVsdFBhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZykge31cblxuICBnZXREZWZhdWx0UGFnZUlkc0J5dHlwZSh0eXBlOiBQYWdlVHlwZSk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZGVmYXVsdFBhZ2VJZEZvclR5cGVbdHlwZV07XG4gIH1cbn1cbiJdfQ==