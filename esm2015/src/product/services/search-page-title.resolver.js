/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class SearchPageTitleResolver extends PageTitleResolver {
    /**
     * @param {?} routingService
     * @param {?} productSearchService
     */
    constructor(routingService, productSearchService) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'SearchResultsListPageTemplate';
    }
    /**
     * @return {?}
     */
    resolve() {
        return combineLatest(this.productSearchService.getSearchResults().pipe(filter(data => !!(data && data.pagination)), map(results => results.pagination.totalResults)), this.routingService.getRouterState().pipe(map(state => state.state.params['query']), filter(Boolean))).pipe(map(([t, q]) => this.getSearchResultTitle(t, q)));
    }
    /**
     * @protected
     * @param {?} total
     * @param {?} part
     * @return {?}
     */
    getSearchResultTitle(total, part) {
        return `${total} results for "${part}"`;
    }
}
SearchPageTitleResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SearchPageTitleResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService }
];
/** @nocollapse */ SearchPageTitleResolver.ngInjectableDef = i0.defineInjectable({ factory: function SearchPageTitleResolver_Factory() { return new SearchPageTitleResolver(i0.inject(i1.RoutingService), i0.inject(i2.ProductSearchService)); }, token: SearchPageTitleResolver, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9zZWFyY2gtcGFnZS10aXRsZS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUt2RSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsaUJBQWlCOzs7OztJQUM1RCxZQUNZLGNBQThCLEVBQzlCLG9CQUEwQztRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQUhFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBR3BELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLCtCQUErQixDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUMzQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUNoRCxFQUNELElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUN2QyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQ0YsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7Ozs7O0lBRVMsb0JBQW9CLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDeEQsT0FBTyxHQUFHLEtBQUssaUJBQWlCLElBQUksR0FBRyxDQUFDO0lBQzFDLENBQUM7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxjQUFjO1lBRWQsb0JBQW9COzs7Ozs7OztJQVF6QixpREFBd0M7Ozs7O0lBQ3hDLHVEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLXRpdGxlLnJlc29sdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFnZVRpdGxlUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlVGl0bGVSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5nZXRTZWFyY2hSZXN1bHRzKCkucGlwZShcbiAgICAgICAgZmlsdGVyKGRhdGEgPT4gISEoZGF0YSAmJiBkYXRhLnBhZ2luYXRpb24pKSxcbiAgICAgICAgbWFwKHJlc3VsdHMgPT4gcmVzdWx0cy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cylcbiAgICAgICksXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnBhcmFtc1sncXVlcnknXSksXG4gICAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICAgKVxuICAgICkucGlwZShtYXAoKFt0LCBxXTogW251bWJlciwgc3RyaW5nXSkgPT4gdGhpcy5nZXRTZWFyY2hSZXN1bHRUaXRsZSh0LCBxKSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlYXJjaFJlc3VsdFRpdGxlKHRvdGFsOiBudW1iZXIsIHBhcnQ6IHN0cmluZykge1xuICAgIHJldHVybiBgJHt0b3RhbH0gcmVzdWx0cyBmb3IgXCIke3BhcnR9XCJgO1xuICB9XG59XG4iXX0=