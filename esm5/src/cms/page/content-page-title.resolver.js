/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { PageType } from '../../occ/occ-models/occ.models';
import { CmsService } from '../facade/cms.service';
import { PageTitleResolver } from './page-title.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../facade/cms.service";
var ContentPageTitleResolver = /** @class */ (function (_super) {
    tslib_1.__extends(ContentPageTitleResolver, _super);
    function ContentPageTitleResolver(cms) {
        var _this = _super.call(this) || this;
        _this.cms = cms;
        _this.pageType = PageType.CONTENT_PAGE;
        return _this;
    }
    /**
     * @return {?}
     */
    ContentPageTitleResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        return this.cms.getCurrentPage().pipe(filter(Boolean), map(function (page) { return page.title; }));
    };
    ContentPageTitleResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ContentPageTitleResolver.ctorParameters = function () { return [
        { type: CmsService }
    ]; };
    /** @nocollapse */ ContentPageTitleResolver.ngInjectableDef = i0.defineInjectable({ factory: function ContentPageTitleResolver_Factory() { return new ContentPageTitleResolver(i0.inject(i1.CmsService)); }, token: ContentPageTitleResolver, providedIn: "root" });
    return ContentPageTitleResolver;
}(PageTitleResolver));
export { ContentPageTitleResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ContentPageTitleResolver.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLXRpdGxlLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9wYWdlL2NvbnRlbnQtcGFnZS10aXRsZS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFMUQ7SUFHOEMsb0RBQWlCO0lBQzdELGtDQUFzQixHQUFlO1FBQXJDLFlBQ0UsaUJBQU8sU0FFUjtRQUhxQixTQUFHLEdBQUgsR0FBRyxDQUFZO1FBRW5DLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQzs7SUFDeEMsQ0FBQzs7OztJQUVELDBDQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQyxDQUN4QixDQUFDO0lBQ0osQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxVQUFVOzs7bUNBSm5CO0NBc0JDLEFBZkQsQ0FHOEMsaUJBQWlCLEdBWTlEO1NBWlksd0JBQXdCOzs7Ozs7SUFDdkIsdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4vcGFnZS10aXRsZS5yZXNvbHZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlVGl0bGVSZXNvbHZlciBleHRlbmRzIFBhZ2VUaXRsZVJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNtczogQ21zU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKHBhZ2UgPT4gcGFnZS50aXRsZSlcbiAgICApO1xuICB9XG59XG4iXX0=