/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var pageTitleResolvers = [
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
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ProductOccModule, ProductStoreModule, CmsModule],
                    providers: tslib_1.__spread([
                        ProductService,
                        ProductSearchService,
                        ProductReviewService
                    ], pageTitleResolvers)
                },] }
    ];
    return ProductModule;
}());
export { ProductModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUNMLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztJQUU5RSxrQkFBa0IsR0FBRztJQUN6QjtRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRjtBQUVEO0lBQUE7SUFTNEIsQ0FBQzs7Z0JBVDVCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLENBQUM7b0JBQzFELFNBQVM7d0JBQ1AsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLG9CQUFvQjt1QkFDakIsa0JBQWtCLENBQ3RCO2lCQUNGOztJQUMyQixvQkFBQztDQUFBLEFBVDdCLElBUzZCO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBQcm9kdWN0U2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFByb2R1Y3RSZXZpZXdTZXJ2aWNlXG59IGZyb20gJy4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvcHJvZHVjdC1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdE9jY01vZHVsZSB9IGZyb20gJy4vb2NjL3Byb2R1Y3Qtb2NjLm1vZHVsZSc7XG5cbmltcG9ydCB7IENtc01vZHVsZSB9IGZyb20gJy4uL2Ntcy9jbXMubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS10aXRsZS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2R1Y3QtcGFnZS10aXRsZS5yZXNvbHZlcic7XG5pbXBvcnQgeyBTZWFyY2hQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvc2VhcmNoLXBhZ2UtdGl0bGUucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcnlQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2F0ZWdvcnktcGFnZS10aXRsZS5yZXNvbHZlcic7XG5cbmNvbnN0IHBhZ2VUaXRsZVJlc29sdmVycyA9IFtcbiAge1xuICAgIHByb3ZpZGU6IFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBQcm9kdWN0UGFnZVRpdGxlUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWVcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBDYXRlZ29yeVBhZ2VUaXRsZVJlc29sdmVyLFxuICAgIG11bHRpOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBQYWdlVGl0bGVSZXNvbHZlcixcbiAgICB1c2VFeGlzdGluZzogU2VhcmNoUGFnZVRpdGxlUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWVcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1Byb2R1Y3RPY2NNb2R1bGUsIFByb2R1Y3RTdG9yZU1vZHVsZSwgQ21zTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvZHVjdFNlcnZpY2UsXG4gICAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgLi4ucGFnZVRpdGxlUmVzb2x2ZXJzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdE1vZHVsZSB7fVxuIl19