/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
import { StoreFinderService } from './facade/store-finder.service';
import { StoreDataService } from './facade/store-data.service';
import { GoogleMapRendererService, ExternalJsFileLoader } from './service/index';
import { StoreFinderOccModule } from './occ/store-finder-occ.module';
import { ConfigModule } from '../config';
import { defaultStoreFinderConfig } from './config/default-store-finder-config';
import { StoreFinderConfig } from './config/store-finder-config';
var ɵ0 = defaultStoreFinderConfig;
var StoreFinderCoreModule = /** @class */ (function () {
    function StoreFinderCoreModule() {
    }
    StoreFinderCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigModule.withConfig(defaultStoreFinderConfig),
                        StoreFinderStoreModule,
                        StoreFinderOccModule
                    ],
                    providers: [
                        StoreFinderService,
                        StoreDataService,
                        GoogleMapRendererService,
                        ExternalJsFileLoader,
                        { provide: StoreFinderConfig, useValue: ɵ0 }
                    ]
                },] }
    ];
    return StoreFinderCoreModule;
}());
export { StoreFinderCoreModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLG9CQUFvQixFQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7U0FhckIsd0JBQXdCO0FBWHBFO0lBQUE7SUFjb0MsQ0FBQzs7Z0JBZHBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDakQsc0JBQXNCO3dCQUN0QixvQkFBb0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsSUFBMEIsRUFBRTtxQkFDbkU7aUJBQ0Y7O0lBQ21DLDRCQUFDO0NBQUEsQUFkckMsSUFjcUM7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3N0b3JlLWZpbmRlci1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvc3RvcmUtZmluZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3N0b3JlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge1xuICBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UsXG4gIEV4dGVybmFsSnNGaWxlTG9hZGVyXG59IGZyb20gJy4vc2VydmljZS9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck9jY01vZHVsZSB9IGZyb20gJy4vb2NjL3N0b3JlLWZpbmRlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0U3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXN0b3JlLWZpbmRlci1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdG9yZS1maW5kZXItY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRTdG9yZUZpbmRlckNvbmZpZyksXG4gICAgU3RvcmVGaW5kZXJTdG9yZU1vZHVsZSxcbiAgICBTdG9yZUZpbmRlck9jY01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdG9yZUZpbmRlclNlcnZpY2UsXG4gICAgU3RvcmVEYXRhU2VydmljZSxcbiAgICBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UsXG4gICAgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIsXG4gICAgeyBwcm92aWRlOiBTdG9yZUZpbmRlckNvbmZpZywgdXNlVmFsdWU6IGRlZmF1bHRTdG9yZUZpbmRlckNvbmZpZyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJDb3JlTW9kdWxlIHt9XG4iXX0=