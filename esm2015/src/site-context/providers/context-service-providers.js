/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER } from '@angular/core';
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
import { OccConfig } from '../../occ/config/occ-config';
/**
 * @param {?} config
 * @param {?} langService
 * @param {?} currService
 * @return {?}
 */
export function inititializeContext(config, langService, currService) {
    return () => {
        langService.initialize(config.site.language);
        currService.initialize(config.site.currency);
    };
}
/** @type {?} */
export const contextServiceProviders = [
    LanguageService,
    CurrencyService,
    {
        provide: APP_INITIALIZER,
        useFactory: inititializeContext,
        deps: [OccConfig, LanguageService, CurrencyService],
        multi: true
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7QUFFeEQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxNQUFpQixFQUNqQixXQUE0QixFQUM1QixXQUE0QjtJQUU1QixPQUFPLEdBQUcsRUFBRTtRQUNWLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCLEdBQWU7SUFDakQsZUFBZTtJQUNmLGVBQWU7SUFDZjtRQUNFLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFVBQVUsRUFBRSxtQkFBbUI7UUFDL0IsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7UUFDbkQsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpdGlhbGl6ZUNvbnRleHQoXG4gIGNvbmZpZzogT2NjQ29uZmlnLFxuICBsYW5nU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICBjdXJyU2VydmljZTogQ3VycmVuY3lTZXJ2aWNlXG4pIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsYW5nU2VydmljZS5pbml0aWFsaXplKGNvbmZpZy5zaXRlLmxhbmd1YWdlKTtcbiAgICBjdXJyU2VydmljZS5pbml0aWFsaXplKGNvbmZpZy5zaXRlLmN1cnJlbmN5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzOiBQcm92aWRlcltdID0gW1xuICBMYW5ndWFnZVNlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBpbml0aXRpYWxpemVDb250ZXh0LFxuICAgIGRlcHM6IFtPY2NDb25maWcsIExhbmd1YWdlU2VydmljZSwgQ3VycmVuY3lTZXJ2aWNlXSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XG5dO1xuIl19