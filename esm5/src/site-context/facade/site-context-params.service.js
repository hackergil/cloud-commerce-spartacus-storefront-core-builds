/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { SiteContextConfig } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
var SiteContextParamsService = /** @class */ (function () {
    function SiteContextParamsService(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    /**
     * @param {?=} persistence
     * @return {?}
     */
    SiteContextParamsService.prototype.getContextParameters = /**
     * @param {?=} persistence
     * @return {?}
     */
    function (persistence) {
        /** @type {?} */
        var contextConfig = this.config.siteContext.parameters;
        if (contextConfig) {
            /** @type {?} */
            var params = Object.keys(contextConfig);
            if (persistence) {
                return params.filter(function (key) { return contextConfig[key].persistence === persistence; });
            }
            else {
                return params;
            }
        }
        return [];
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getParamValues = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].values
            : undefined;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getParamDefaultValue = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].defaultValue
            : undefined;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getSiteContextService = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getValue = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        /** @type {?} */
        var value;
        /** @type {?} */
        var service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe(function (val) { return (value = val); })
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    };
    /**
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    SiteContextParamsService.prototype.setValue = /**
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    function (param, value) {
        /** @type {?} */
        var service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    };
    SiteContextParamsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextParamsService.ctorParameters = function () { return [
        { type: SiteContextConfig },
        { type: Injector },
        { type: ContextServiceMap }
    ]; };
    return SiteContextParamsService;
}());
export { SiteContextParamsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SiteContextParamsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SiteContextParamsService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    SiteContextParamsService.prototype.serviceMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9mYWNhZGUvc2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckU7SUFFRSxrQ0FDVSxNQUF5QixFQUN6QixRQUFrQixFQUNsQixVQUE2QjtRQUY3QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBQ3BDLENBQUM7Ozs7O0lBRUosdURBQW9COzs7O0lBQXBCLFVBQXFCLFdBQXFDOztZQUNsRCxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtRQUN4RCxJQUFJLGFBQWEsRUFBRTs7Z0JBQ1gsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3pDLElBQUksV0FBVyxFQUFFO2dCQUNmLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FDbEIsVUFBQSxHQUFHLElBQUksT0FBQSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBOUMsQ0FBOEMsQ0FDdEQsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFRCxpREFBYzs7OztJQUFkLFVBQWUsS0FBYTtRQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFDbEQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELHVEQUFvQjs7OztJQUFwQixVQUFxQixLQUFhO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWTtZQUN4RCxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsd0RBQXFCOzs7O0lBQXJCLFVBQXNCLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFROzs7O0lBQVIsVUFBUyxLQUFhOztZQUNoQixLQUFhOztZQUVYLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTztpQkFDSixTQUFTLEVBQUU7aUJBQ1gsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQWIsQ0FBYSxDQUFDO2lCQUMvQixXQUFXLEVBQUUsQ0FBQztTQUNsQjtRQUVELE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7O0lBRUQsMkNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsS0FBYTs7WUFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBOURGLFVBQVU7Ozs7Z0JBTFQsaUJBQWlCO2dCQUhFLFFBQVE7Z0JBTXBCLGlCQUFpQjs7SUFpRTFCLCtCQUFDO0NBQUEsQUEvREQsSUErREM7U0E5RFksd0JBQXdCOzs7Ozs7SUFFakMsMENBQWlDOzs7OztJQUNqQyw0Q0FBMEI7Ozs7O0lBQzFCLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250ZXh0UGFyYW1QZXJzaXN0ZW5jZSxcbiAgU2l0ZUNvbnRleHRDb25maWdcbn0gZnJvbSAnLi4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9mYWNhZGUvc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250ZXh0U2VydmljZU1hcCB9IGZyb20gJy4uL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtbWFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZyxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHNlcnZpY2VNYXA6IENvbnRleHRTZXJ2aWNlTWFwXG4gICkge31cblxuICBnZXRDb250ZXh0UGFyYW1ldGVycyhwZXJzaXN0ZW5jZT86IENvbnRleHRQYXJhbVBlcnNpc3RlbmNlKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNvbnRleHRDb25maWcgPSB0aGlzLmNvbmZpZy5zaXRlQ29udGV4dC5wYXJhbWV0ZXJzO1xuICAgIGlmIChjb250ZXh0Q29uZmlnKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhjb250ZXh0Q29uZmlnKTtcbiAgICAgIGlmIChwZXJzaXN0ZW5jZSkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmZpbHRlcihcbiAgICAgICAgICBrZXkgPT4gY29udGV4dENvbmZpZ1trZXldLnBlcnNpc3RlbmNlID09PSBwZXJzaXN0ZW5jZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0UGFyYW1WYWx1ZXMocGFyYW06IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVycyAmJlxuICAgICAgdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVyc1twYXJhbV1cbiAgICAgID8gdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVyc1twYXJhbV0udmFsdWVzXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFBhcmFtRGVmYXVsdFZhbHVlKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5zaXRlQ29udGV4dC5wYXJhbWV0ZXJzICYmXG4gICAgICB0aGlzLmNvbmZpZy5zaXRlQ29udGV4dC5wYXJhbWV0ZXJzW3BhcmFtXVxuICAgICAgPyB0aGlzLmNvbmZpZy5zaXRlQ29udGV4dC5wYXJhbWV0ZXJzW3BhcmFtXS5kZWZhdWx0VmFsdWVcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtOiBzdHJpbmcpOiBTaXRlQ29udGV4dDxhbnk+IHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlTWFwW3BhcmFtXSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFNpdGVDb250ZXh0PGFueT4+KHRoaXMuc2VydmljZU1hcFtwYXJhbV0sIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgc2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgLnN1YnNjcmliZSh2YWwgPT4gKHZhbHVlID0gdmFsKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHRoaXMuZ2V0UGFyYW1EZWZhdWx0VmFsdWUocGFyYW0pO1xuICB9XG5cbiAgc2V0VmFsdWUocGFyYW06IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2Uuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==