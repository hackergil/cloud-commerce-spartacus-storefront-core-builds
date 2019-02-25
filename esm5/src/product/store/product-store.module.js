/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerToken, reducerProvider, metaReducers } from './reducers/index';
import { effects } from './effects/index';
import { PRODUCT_FEATURE } from './product-state';
import { ProductConverterModule } from './converters/index';
import { ProductOccModule } from '../occ/product-occ.module';
import { ConfigModule } from '../../config/config.module';
/**
 * @return {?}
 */
export function productStoreConfigFactory() {
    var _a;
    // if we want to reuse PRODUCT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    var config = {
        state: { ssrTransfer: { keys: (_a = {}, _a[PRODUCT_FEATURE] = true, _a) } }
    };
    return config;
}
var ProductStoreModule = /** @class */ (function () {
    function ProductStoreModule() {
    }
    ProductStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        ProductOccModule,
                        ProductConverterModule,
                        StoreModule.forFeature(PRODUCT_FEATURE, reducerToken, { metaReducers: metaReducers }),
                        EffectsModule.forFeature(effects),
                        ConfigModule.withConfigFactory(productStoreConfigFactory)
                    ],
                    providers: [reducerProvider]
                },] }
    ];
    return ProductStoreModule;
}());
export { ProductStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9wcm9kdWN0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBRzFELE1BQU0sVUFBVSx5QkFBeUI7Ozs7UUFFakMsTUFBTSxHQUFHO1FBQ2IsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxZQUFJLEdBQUMsZUFBZSxJQUFHLElBQUksS0FBRSxFQUFFLEVBQUU7S0FDOUQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQVlpQyxDQUFDOztnQkFaakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLFlBQVksRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUM7d0JBQ3ZFLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO3dCQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLENBQUM7cUJBQzFEO29CQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDN0I7O0lBQ2dDLHlCQUFDO0NBQUEsQUFabEMsSUFZa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgcmVkdWNlclRva2VuLCByZWR1Y2VyUHJvdmlkZXIsIG1ldGFSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBQUk9EVUNUX0ZFQVRVUkUgfSBmcm9tICcuL3Byb2R1Y3Qtc3RhdGUnO1xuXG5pbXBvcnQgeyBQcm9kdWN0Q29udmVydGVyTW9kdWxlIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RPY2NNb2R1bGUgfSBmcm9tICcuLi9vY2MvcHJvZHVjdC1vY2MubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vc3RhdGUvY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0U3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgLy8gaWYgd2Ugd2FudCB0byByZXVzZSBQUk9EVUNUX0ZFQVRVUkUgY29uc3QgaW4gY29uZmlnLCB3ZSBoYXZlIHRvIHVzZSBmYWN0b3J5IGluc3RlYWQgb2YgcGxhaW4gb2JqZWN0XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBzdGF0ZTogeyBzc3JUcmFuc2ZlcjogeyBrZXlzOiB7IFtQUk9EVUNUX0ZFQVRVUkVdOiB0cnVlIH0gfSB9XG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBQcm9kdWN0T2NjTW9kdWxlLFxuICAgIFByb2R1Y3RDb252ZXJ0ZXJNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShQUk9EVUNUX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiwgeyBtZXRhUmVkdWNlcnMgfSksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShwcm9kdWN0U3RvcmVDb25maWdGYWN0b3J5KVxuICBdLFxuICBwcm92aWRlcnM6IFtyZWR1Y2VyUHJvdmlkZXJdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTdG9yZU1vZHVsZSB7fVxuIl19