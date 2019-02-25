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
    return function () {
        langService.initialize(config.site.language);
        currService.initialize(config.site.currency);
    };
}
/** @type {?} */
export var contextServiceProviders = [
    LanguageService,
    CurrencyService,
    {
        provide: APP_INITIALIZER,
        useFactory: inititializeContext,
        deps: [OccConfig, LanguageService, CurrencyService],
        multi: true
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7QUFFeEQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxNQUFpQixFQUNqQixXQUE0QixFQUM1QixXQUE0QjtJQUU1QixPQUFPO1FBQ0wsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyx1QkFBdUIsR0FBZTtJQUNqRCxlQUFlO0lBQ2YsZUFBZTtJQUNmO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLG1CQUFtQjtRQUMvQixJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztRQUNuRCxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvY3VycmVuY3kuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGl0aWFsaXplQ29udGV4dChcbiAgY29uZmlnOiBPY2NDb25maWcsXG4gIGxhbmdTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gIGN1cnJTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2Vcbikge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxhbmdTZXJ2aWNlLmluaXRpYWxpemUoY29uZmlnLnNpdGUubGFuZ3VhZ2UpO1xuICAgIGN1cnJTZXJ2aWNlLmluaXRpYWxpemUoY29uZmlnLnNpdGUuY3VycmVuY3kpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY29udGV4dFNlcnZpY2VQcm92aWRlcnM6IFByb3ZpZGVyW10gPSBbXG4gIExhbmd1YWdlU2VydmljZSxcbiAgQ3VycmVuY3lTZXJ2aWNlLFxuICB7XG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgIHVzZUZhY3Rvcnk6IGluaXRpdGlhbGl6ZUNvbnRleHQsXG4gICAgZGVwczogW09jY0NvbmZpZywgTGFuZ3VhZ2VTZXJ2aWNlLCBDdXJyZW5jeVNlcnZpY2VdLFxuICAgIG11bHRpOiB0cnVlXG4gIH1cbl07XG4iXX0=