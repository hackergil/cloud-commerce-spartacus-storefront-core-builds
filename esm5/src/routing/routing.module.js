/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerToken, CustomSerializer, reducerProvider } from './store/reducers/router.reducer';
import { effects } from './store/effects/index';
import { RouterModule } from '@angular/router';
import { RoutingService } from './facade/routing.service';
import { ROUTING_FEATURE } from './state';
import { ConfigurableRoutesModule } from './configurable-routes/configurable-routes.module';
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigurableRoutesModule,
                        RouterModule.forRoot([], {
                            scrollPositionRestoration: 'enabled',
                            anchorScrolling: 'enabled'
                        }),
                        StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
                        EffectsModule.forFeature(effects),
                        StoreRouterConnectingModule.forRoot({
                            stateKey: ROUTING_FEATURE // name of reducer key
                        })
                    ],
                    providers: [
                        RoutingService,
                        reducerProvider,
                        {
                            provide: RouterStateSerializer,
                            useClass: CustomSerializer
                        }
                    ]
                },] }
    ];
    return RoutingModule;
}());
export { RoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLHFCQUFxQixFQUN0QixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQ0wsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixlQUFlLEVBQ2hCLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUU1RjtJQUFBO0lBc0I0QixDQUFDOztnQkF0QjVCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3dCQUN4QixZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTs0QkFDdkIseUJBQXlCLEVBQUUsU0FBUzs0QkFDcEMsZUFBZSxFQUFFLFNBQVM7eUJBQzNCLENBQUM7d0JBQ0YsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDO3dCQUNyRCxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzt3QkFDakMsMkJBQTJCLENBQUMsT0FBTyxDQUFDOzRCQUNsQyxRQUFRLEVBQUUsZUFBZSxDQUFDLHNCQUFzQjt5QkFDakQsQ0FBQztxQkFDSDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsY0FBYzt3QkFDZCxlQUFlO3dCQUNmOzRCQUNFLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7eUJBQzNCO3FCQUNGO2lCQUNGOztJQUMyQixvQkFBQztDQUFBLEFBdEI3QixJQXNCNkI7U0FBaEIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFN0b3JlUm91dGVyQ29ubmVjdGluZ01vZHVsZSxcbiAgUm91dGVyU3RhdGVTZXJpYWxpemVyXG59IGZyb20gJ0BuZ3J4L3JvdXRlci1zdG9yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7XG4gIHJlZHVjZXJUb2tlbixcbiAgQ3VzdG9tU2VyaWFsaXplcixcbiAgcmVkdWNlclByb3ZpZGVyXG59IGZyb20gJy4vc3RvcmUvcmVkdWNlcnMvcm91dGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vc3RvcmUvZWZmZWN0cy9pbmRleCc7XG5cbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5cbmltcG9ydCB7IFJPVVRJTkdfRkVBVFVSRSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlUm91dGVzTW9kdWxlIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ3VyYWJsZVJvdXRlc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXSwge1xuICAgICAgc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbjogJ2VuYWJsZWQnLFxuICAgICAgYW5jaG9yU2Nyb2xsaW5nOiAnZW5hYmxlZCdcbiAgICB9KSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFJPVVRJTkdfRkVBVFVSRSwgcmVkdWNlclRva2VuKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgU3RvcmVSb3V0ZXJDb25uZWN0aW5nTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgc3RhdGVLZXk6IFJPVVRJTkdfRkVBVFVSRSAvLyBuYW1lIG9mIHJlZHVjZXIga2V5XG4gICAgfSlcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUm91dGluZ1NlcnZpY2UsXG4gICAgcmVkdWNlclByb3ZpZGVyLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJvdXRlclN0YXRlU2VyaWFsaXplcixcbiAgICAgIHVzZUNsYXNzOiBDdXN0b21TZXJpYWxpemVyXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge31cbiJdfQ==