/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
import { OccConfig } from '../../occ/config/occ-config';
var SiteContextInterceptor = /** @class */ (function () {
    function SiteContextInterceptor(languageService, currencyService, config) {
        var _this = this;
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
            .subscribe(function (data) { return (_this.activeLang = data); });
        this.currencyService
            .getActive()
            .subscribe(function (data) { return (_this.activeCurr = data); });
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    SiteContextInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        if (request.url.indexOf(this.baseReqString) > -1) {
            request = request.clone({
                setParams: {
                    lang: this.activeLang,
                    curr: this.activeCurr
                }
            });
        }
        return next.handle(request);
    };
    SiteContextInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextInterceptor.ctorParameters = function () { return [
        { type: LanguageService },
        { type: CurrencyService },
        { type: OccConfig }
    ]; };
    return SiteContextInterceptor;
}());
export { SiteContextInterceptor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9vY2Mvc2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXhEO0lBTUUsZ0NBQ1UsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsTUFBaUI7UUFIM0IsaUJBaUJDO1FBaEJTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQU4zQixlQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9DLGVBQVUsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFPN0MsSUFBSSxDQUFDLGFBQWE7WUFDaEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTO2dCQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFNUIsSUFBSSxDQUFDLGVBQWU7YUFDakIsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLGVBQWU7YUFDakIsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRUQsMENBQVM7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNoRCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDdEIsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtvQkFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO2lCQUN0QjthQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXZDRixVQUFVOzs7O2dCQUhGLGVBQWU7Z0JBRGYsZUFBZTtnQkFFZixTQUFTOztJQTBDbEIsNkJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXZDWSxzQkFBc0I7OztJQUNqQywrQ0FBc0I7O0lBQ3RCLDRDQUErQzs7SUFDL0MsNENBQStDOzs7OztJQUc3QyxpREFBd0M7Ozs7O0lBQ3hDLGlEQUF3Qzs7Ozs7SUFDeEMsd0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBJbnRlcmNlcHRvclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgYmFzZVJlcVN0cmluZzogc3RyaW5nO1xuICBhY3RpdmVMYW5nOiBzdHJpbmcgPSB0aGlzLmNvbmZpZy5zaXRlLmxhbmd1YWdlO1xuICBhY3RpdmVDdXJyOiBzdHJpbmcgPSB0aGlzLmNvbmZpZy5zaXRlLmN1cnJlbmN5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnXG4gICkge1xuICAgIHRoaXMuYmFzZVJlcVN0cmluZyA9XG4gICAgICAodGhpcy5jb25maWcuc2VydmVyLmJhc2VVcmwgfHwgJycpICtcbiAgICAgIHRoaXMuY29uZmlnLnNlcnZlci5vY2NQcmVmaXggK1xuICAgICAgdGhpcy5jb25maWcuc2l0ZS5iYXNlU2l0ZTtcblxuICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiAodGhpcy5hY3RpdmVMYW5nID0gZGF0YSkpO1xuXG4gICAgdGhpcy5jdXJyZW5jeVNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+ICh0aGlzLmFjdGl2ZUN1cnIgPSBkYXRhKSk7XG4gIH1cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKHJlcXVlc3QudXJsLmluZGV4T2YodGhpcy5iYXNlUmVxU3RyaW5nKSA+IC0xKSB7XG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIHNldFBhcmFtczoge1xuICAgICAgICAgIGxhbmc6IHRoaXMuYWN0aXZlTGFuZyxcbiAgICAgICAgICBjdXJyOiB0aGlzLmFjdGl2ZUN1cnJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG59XG4iXX0=