/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ProductService, ProductSearchService, ProductReviewService } from './facade/index';
import { ProductStoreModule } from './store/product-store.module';
import { ProductOccModule } from './occ/product-occ.module';
import { CmsModule } from '../cms/cms.module';
import { PageTitleResolver } from '../cms/page/page-title.resolver';
import { ProductPageTitleResolver } from './services/product-page-title.resolver';
import { SearchPageTitleResolver } from './services/search-page-title.resolver';
import { CategoryPageTitleResolver } from './services/category-page-title.resolver';
/** @type {?} */
const pageTitleResolvers = [
    {
        provide: PageTitleResolver,
        useExisting: ProductPageTitleResolver,
        multi: true
    },
    {
        provide: PageTitleResolver,
        useExisting: CategoryPageTitleResolver,
        multi: true
    },
    {
        provide: PageTitleResolver,
        useExisting: SearchPageTitleResolver,
        multi: true
    }
];
export class ProductModule {
}
ProductModule.decorators = [
    { type: NgModule, args: [{
                imports: [ProductOccModule, ProductStoreModule, CmsModule],
                providers: [
                    ProductService,
                    ProductSearchService,
                    ProductReviewService,
                    ...pageTitleResolvers
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQ0wsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDckIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUNBQXlDLENBQUM7O01BRTlFLGtCQUFrQixHQUFHO0lBQ3pCO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGO0FBV0QsTUFBTSxPQUFPLGFBQWE7OztZQVR6QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxDQUFDO2dCQUMxRCxTQUFTLEVBQUU7b0JBQ1QsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsR0FBRyxrQkFBa0I7aUJBQ3RCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBQcm9kdWN0U2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFByb2R1Y3RSZXZpZXdTZXJ2aWNlXG59IGZyb20gJy4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvcHJvZHVjdC1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdE9jY01vZHVsZSB9IGZyb20gJy4vb2NjL3Byb2R1Y3Qtb2NjLm1vZHVsZSc7XG5cbmltcG9ydCB7IENtc01vZHVsZSB9IGZyb20gJy4uL2Ntcy9jbXMubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS10aXRsZS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2R1Y3QtcGFnZS10aXRsZS5yZXNvbHZlcic7XG5pbXBvcnQgeyBTZWFyY2hQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvc2VhcmNoLXBhZ2UtdGl0bGUucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcnlQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2F0ZWdvcnktcGFnZS10aXRsZS5yZXNvbHZlcic7XG5cbmNvbnN0IHBhZ2VUaXRsZVJlc29sdmVycyA9IFtcbiAge1xuICAgIHByb3ZpZGU6IFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBQcm9kdWN0UGFnZVRpdGxlUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWVcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBDYXRlZ29yeVBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIG11bHRpOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBQYWdlVGl0bGVSZXNvbHZlcixcbiAgICB1c2VFeGlzdGluZzogU2VhcmNoUGFnZVRpdGxlUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWVcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1Byb2R1Y3RPY2NNb2R1bGUsIFByb2R1Y3RTdG9yZU1vZHVsZSwgQ21zTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvZHVjdFNlcnZpY2UsXG4gICAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgLi4ucGFnZVRpdGxlUmVzb2x2ZXJzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdE1vZHVsZSB7fVxuIl19