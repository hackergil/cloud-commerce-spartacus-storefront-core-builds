/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { PageType } from '../../occ/occ-models/occ.models';
import { ProductSearchService } from '../facade/product-search.service';
import { PageTitleResolver } from '../../cms/page/page-title.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product-search.service";
var SearchPageTitleResolver = /** @class */ (function (_super) {
    tslib_1.__extends(SearchPageTitleResolver, _super);
    function SearchPageTitleResolver(routingService, productSearchService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'SearchResultsListPageTemplate';
        return _this;
    }
    /**
     * @return {?}
     */
    SearchPageTitleResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return combineLatest(this.productSearchService.getSearchResults().pipe(filter(function (data) { return !!(data && data.pagination); }), map(function (results) { return results.pagination.totalResults; })), this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['query']; }), filter(Boolean))).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), t = _b[0], q = _b[1];
            return _this.getSearchResultTitle(t, q);
        }));
    };
    /**
     * @protected
     * @param {?} total
     * @param {?} part
     * @return {?}
     */
    SearchPageTitleResolver.prototype.getSearchResultTitle = /**
     * @protected
     * @param {?} total
     * @param {?} part
     * @return {?}
     */
    function (total, part) {
        return total + " results for \"" + part + "\"";
    };
    SearchPageTitleResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SearchPageTitleResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService }
    ]; };
    /** @nocollapse */ SearchPageTitleResolver.ngInjectableDef = i0.defineInjectable({ factory: function SearchPageTitleResolver_Factory() { return new SearchPageTitleResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductSearchService)); }, token: SearchPageTitleResolver, providedIn: "root" });
    return SearchPageTitleResolver;
}(PageTitleResolver));
export { SearchPageTitleResolver };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SearchPageTitleResolver.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    SearchPageTitleResolver.prototype.productSearchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9zZWFyY2gtcGFnZS10aXRsZS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFFdkU7SUFHNkMsbURBQWlCO0lBQzVELGlDQUNZLGNBQThCLEVBQzlCLG9CQUEwQztRQUZ0RCxZQUlFLGlCQUFPLFNBR1I7UUFOVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUdwRCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRywrQkFBK0IsQ0FBQzs7SUFDdEQsQ0FBQzs7OztJQUVELHlDQUFPOzs7SUFBUDtRQUFBLGlCQVdDO1FBVkMsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUMzQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBL0IsQ0FBK0IsQ0FBQyxDQUNoRCxFQUNELElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUN2QyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQ0YsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBd0I7Z0JBQXhCLDBCQUF3QixFQUF2QixTQUFDLEVBQUUsU0FBQztZQUF3QixPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQS9CLENBQStCLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7Ozs7SUFFUyxzREFBb0I7Ozs7OztJQUE5QixVQUErQixLQUFhLEVBQUUsSUFBWTtRQUN4RCxPQUFVLEtBQUssdUJBQWlCLElBQUksT0FBRyxDQUFDO0lBQzFDLENBQUM7O2dCQTVCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLGNBQWM7Z0JBRWQsb0JBQW9COzs7a0NBTDdCO0NBcUNDLEFBN0JELENBRzZDLGlCQUFpQixHQTBCN0Q7U0ExQlksdUJBQXVCOzs7Ozs7SUFFaEMsaURBQXdDOzs7OztJQUN4Qyx1REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS10aXRsZS5yZXNvbHZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhZ2VUaXRsZVJlc29sdmVyIGV4dGVuZHMgUGFnZVRpdGxlUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ1NlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlJztcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0U2VhcmNoUmVzdWx0cygpLnBpcGUoXG4gICAgICAgIGZpbHRlcihkYXRhID0+ICEhKGRhdGEgJiYgZGF0YS5wYWdpbmF0aW9uKSksXG4gICAgICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpXG4gICAgICApLFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3F1ZXJ5J10pLFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICAgIClcbiAgICApLnBpcGUobWFwKChbdCwgcV06IFtudW1iZXIsIHN0cmluZ10pID0+IHRoaXMuZ2V0U2VhcmNoUmVzdWx0VGl0bGUodCwgcSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTZWFyY2hSZXN1bHRUaXRsZSh0b3RhbDogbnVtYmVyLCBwYXJ0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7dG90YWx9IHJlc3VsdHMgZm9yIFwiJHtwYXJ0fVwiYDtcbiAgfVxufVxuIl19