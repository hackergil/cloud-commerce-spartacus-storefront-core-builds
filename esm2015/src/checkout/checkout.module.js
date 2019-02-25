/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CheckoutService } from './facade/index';
import { CheckoutStoreModule } from './store/checkout-store.module';
import { PageTitleResolver } from '../cms/index';
import { CheckoutPageTitleResolver } from './services/checkout-page-title.resolver';
export class CheckoutModule {
}
CheckoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CheckoutStoreModule],
                providers: [
                    CheckoutService,
                    {
                        provide: PageTitleResolver,
                        useExisting: CheckoutPageTitleResolver,
                        multi: true
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBYXBGLE1BQU0sT0FBTyxjQUFjOzs7WUFYMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixTQUFTLEVBQUU7b0JBQ1QsZUFBZTtvQkFDZjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUseUJBQXlCO3dCQUN0QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY2hlY2tvdXQtc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0UGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NoZWNrb3V0LXBhZ2UtdGl0bGUucmVzb2x2ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2hlY2tvdXRTdG9yZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIENoZWNrb3V0U2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQYWdlVGl0bGVSZXNvbHZlcixcbiAgICAgIHVzZUV4aXN0aW5nOiBDaGVja291dFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRNb2R1bGUge31cbiJdfQ==