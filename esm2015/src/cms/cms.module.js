/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CmsService } from './facade/index';
import { CmsStoreModule } from './store/cms-store.module';
import { CmsOccModule } from './occ/cms-occ.module';
import { CmsPageTitleModule } from './page/page.module';
export class CmsModule {
}
CmsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CmsOccModule, CmsStoreModule, CmsPageTitleModule],
                providers: [CmsService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU14RCxNQUFNLE9BQU8sU0FBUzs7O1lBSnJCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2dCQUMzRCxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQ21zU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2Ntcy1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zT2NjTW9kdWxlIH0gZnJvbSAnLi9vY2MvY21zLW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zUGFnZVRpdGxlTW9kdWxlIH0gZnJvbSAnLi9wYWdlL3BhZ2UubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Ntc09jY01vZHVsZSwgQ21zU3RvcmVNb2R1bGUsIENtc1BhZ2VUaXRsZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0Ntc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENtc01vZHVsZSB7fVxuIl19