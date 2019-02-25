/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { CmsService } from './cms.service';
import { PageTitleResolver } from '../page/page-title.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../page/page-title.resolver";
import * as i2 from "./cms.service";
var PageTitleService = /** @class */ (function () {
    function PageTitleService(resolvers, cms) {
        this.resolvers = resolvers;
        this.cms = cms;
    }
    /**
     * @return {?}
     */
    PageTitleService.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(function (page) {
            /** @type {?} */
            var pageTitleResolver = _this.getResolver(page);
            if (pageTitleResolver) {
                return pageTitleResolver.resolve();
            }
            else {
                // we do not have a page resolver
                return of('');
            }
        }));
    };
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    PageTitleService.prototype.getResolver = /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var matchingResolvers = this.resolvers.filter(function (resolver) { return resolver.getScore(page) > 0; });
        matchingResolvers.sort(function (a, b) {
            return b.getScore(page) - a.getScore(page);
        });
        return matchingResolvers[0];
    };
    PageTitleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PageTitleService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [PageTitleResolver,] }] },
        { type: CmsService }
    ]; };
    /** @nocollapse */ PageTitleService.ngInjectableDef = i0.defineInjectable({ factory: function PageTitleService_Factory() { return new PageTitleService(i0.inject(i1.PageTitleResolver), i0.inject(i2.CmsService)); }, token: PageTitleService, providedIn: "root" });
    return PageTitleService;
}());
export { PageTitleService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageTitleService.prototype.resolvers;
    /**
     * @type {?}
     * @protected
     */
    PageTitleService.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aXRsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9mYWNhZGUvcGFnZS10aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUVoRTtJQUlFLDBCQUNxQyxTQUE4QixFQUN2RCxHQUFlO1FBRFUsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDdkQsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUN4QixDQUFDOzs7O0lBRUosbUNBQVE7OztJQUFSO1FBQUEsaUJBYUM7UUFaQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUyxDQUFDLFVBQUEsSUFBSTs7Z0JBQ04saUJBQWlCLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDaEQsSUFBSSxpQkFBaUIsRUFBRTtnQkFDckIsT0FBTyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxpQ0FBaUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2Y7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7OztJQUNPLHNDQUFXOzs7Ozs7OztJQUFyQixVQUFzQixJQUFVOztZQUN4QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDN0MsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDeEM7UUFDRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8saUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBckNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7NENBR0ksTUFBTSxTQUFDLGlCQUFpQjtnQkFScEIsVUFBVTs7OzJCQUpuQjtDQTZDQyxBQXRDRCxJQXNDQztTQW5DWSxnQkFBZ0I7Ozs7OztJQUV6QixxQ0FBaUU7Ozs7O0lBQ2pFLCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuLi9wYWdlL3BhZ2UtdGl0bGUucmVzb2x2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYWdlVGl0bGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQYWdlVGl0bGVSZXNvbHZlcikgcHJpdmF0ZSByZXNvbHZlcnM6IFBhZ2VUaXRsZVJlc29sdmVyW10sXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZVxuICApIHt9XG5cbiAgZ2V0VGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4ge1xuICAgICAgICBjb25zdCBwYWdlVGl0bGVSZXNvbHZlciA9IHRoaXMuZ2V0UmVzb2x2ZXIocGFnZSk7XG4gICAgICAgIGlmIChwYWdlVGl0bGVSZXNvbHZlcikge1xuICAgICAgICAgIHJldHVybiBwYWdlVGl0bGVSZXNvbHZlci5yZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gd2UgZG8gbm90IGhhdmUgYSBwYWdlIHJlc29sdmVyXG4gICAgICAgICAgcmV0dXJuIG9mKCcnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgdGl0bGUgcmVzb2x2ZXIgd2l0aCB0aGUgYmVzdCBtYXRjaFxuICAgKiB0aXRsZSByZXNvdmVycyBjYW4gYnkgZGVmYXVsdCBtYXRjaCBvbiBQYWdlVHlwZSBhbmQgcGFnZSB0ZW1wbGF0ZVxuICAgKiBidXQgY3VzdG9tIG1hdGNoIGNvbXBhcmlzb3JzIGNhbiBiZSBpbXBsZW1lbnRlZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZXNvbHZlcihwYWdlOiBQYWdlKSB7XG4gICAgY29uc3QgbWF0Y2hpbmdSZXNvbHZlcnMgPSB0aGlzLnJlc29sdmVycy5maWx0ZXIoXG4gICAgICByZXNvbHZlciA9PiByZXNvbHZlci5nZXRTY29yZShwYWdlKSA+IDBcbiAgICApO1xuICAgIG1hdGNoaW5nUmVzb2x2ZXJzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGIuZ2V0U2NvcmUocGFnZSkgLSBhLmdldFNjb3JlKHBhZ2UpO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGluZ1Jlc29sdmVyc1swXTtcbiAgfVxufVxuIl19