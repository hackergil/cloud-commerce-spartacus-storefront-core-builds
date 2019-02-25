/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
import { OccConfig } from '../../occ/config/occ-config';
export class SiteContextInterceptor {
    /**
     * @param {?} languageService
     * @param {?} currencyService
     * @param {?} config
     */
    constructor(languageService, currencyService, config) {
        this.languageService = languageService;
        this.currencyService = currencyService;
        this.config = config;
        this.activeLang = this.config.site.language;
        this.activeCurr = this.config.site.currency;
        this.baseReqString =
            (this.config.server.baseUrl || '') +
                this.config.server.occPrefix +
                this.config.site.baseSite;
        this.languageService
            .getActive()
            .subscribe(data => (this.activeLang = data));
        this.currencyService
            .getActive()
            .subscribe(data => (this.activeCurr = data));
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (request.url.indexOf(this.baseReqString) > -1) {
            request = request.clone({
                setParams: {
                    lang: this.activeLang,
                    curr: this.activeCurr
                }
            });
        }
        return next.handle(request);
    }
}
SiteContextInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextInterceptor.ctorParameters = () => [
    { type: LanguageService },
    { type: CurrencyService },
    { type: OccConfig }
];
if (false) {
    /** @type {?} */
    SiteContextInterceptor.prototype.baseReqString;
    /** @type {?} */
    SiteContextInterceptor.prototype.activeLang;
    /** @type {?} */
    SiteContextInterceptor.prototype.activeCurr;
    /**
     * @type {?}
     * @private
     */
    SiteContextInterceptor.prototype.languageService;
    /**
     * @type {?}
     * @private
     */
    SiteContextInterceptor.prototype.currencyService;
    /**
     * @type {?}
     * @private
     */
    SiteContextInterceptor.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9vY2Mvc2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3hELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUtqQyxZQUNVLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLE1BQWlCO1FBRmpCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQU4zQixlQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9DLGVBQVUsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFPN0MsSUFBSSxDQUFDLGFBQWE7WUFDaEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTO2dCQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFNUIsSUFBSSxDQUFDLGVBQWU7YUFDakIsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLGVBQWU7YUFDakIsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7aUJBQ3RCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBdkNGLFVBQVU7Ozs7WUFIRixlQUFlO1lBRGYsZUFBZTtZQUVmLFNBQVM7Ozs7SUFJaEIsK0NBQXNCOztJQUN0Qiw0Q0FBK0M7O0lBQy9DLDRDQUErQzs7Ozs7SUFHN0MsaURBQXdDOzs7OztJQUN4QyxpREFBd0M7Ozs7O0lBQ3hDLHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvY3VycmVuY3kuc2VydmljZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGJhc2VSZXFTdHJpbmc6IHN0cmluZztcbiAgYWN0aXZlTGFuZzogc3RyaW5nID0gdGhpcy5jb25maWcuc2l0ZS5sYW5ndWFnZTtcbiAgYWN0aXZlQ3Vycjogc3RyaW5nID0gdGhpcy5jb25maWcuc2l0ZS5jdXJyZW5jeTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZ1xuICApIHtcbiAgICB0aGlzLmJhc2VSZXFTdHJpbmcgPVxuICAgICAgKHRoaXMuY29uZmlnLnNlcnZlci5iYXNlVXJsIHx8ICcnKSArXG4gICAgICB0aGlzLmNvbmZpZy5zZXJ2ZXIub2NjUHJlZml4ICtcbiAgICAgIHRoaXMuY29uZmlnLnNpdGUuYmFzZVNpdGU7XG5cbiAgICB0aGlzLmxhbmd1YWdlU2VydmljZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gKHRoaXMuYWN0aXZlTGFuZyA9IGRhdGEpKTtcblxuICAgIHRoaXMuY3VycmVuY3lTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiAodGhpcy5hY3RpdmVDdXJyID0gZGF0YSkpO1xuICB9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmIChyZXF1ZXN0LnVybC5pbmRleE9mKHRoaXMuYmFzZVJlcVN0cmluZykgPiAtMSkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRQYXJhbXM6IHtcbiAgICAgICAgICBsYW5nOiB0aGlzLmFjdGl2ZUxhbmcsXG4gICAgICAgICAgY3VycjogdGhpcy5hY3RpdmVDdXJyXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgfVxufVxuIl19