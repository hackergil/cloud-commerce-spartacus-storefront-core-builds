/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { UserService } from './facade/index';
import { UserStoreModule } from './store/user-store.module';
import { UserOccModule } from './occ/user-occ.module';
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [UserOccModule, UserStoreModule],
                    providers: [UserService]
                },] }
    ];
    return UserModule;
}());
export { UserModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RDtJQUFBO0lBSXlCLENBQUM7O2dCQUp6QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQztvQkFDekMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2lCQUN6Qjs7SUFDd0IsaUJBQUM7Q0FBQSxBQUoxQixJQUkwQjtTQUFiLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IFVzZXJTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvdXNlci1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlck9jY01vZHVsZSB9IGZyb20gJy4vb2NjL3VzZXItb2NjLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtVc2VyT2NjTW9kdWxlLCBVc2VyU3RvcmVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZSB7fVxuIl19