/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthConfig } from '../config/auth-config';
import { AuthService } from '../facade/auth.service';
var UserTokenInterceptor = /** @class */ (function () {
    function UserTokenInterceptor(config, authService) {
        var _this = this;
        this.config = config;
        this.authService = authService;
        this.baseReqString = (this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite;
        this.authService.getUserToken().subscribe(function (token) {
            _this.userToken = token;
        });
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    UserTokenInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        if (this.userToken &&
            request.url.indexOf(this.baseReqString) > -1 &&
            !request.headers.get('Authorization')) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.userToken.token_type + " " + this.userToken.access_token
                }
            });
        }
        return next.handle(request);
    };
    UserTokenInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserTokenInterceptor.ctorParameters = function () { return [
        { type: AuthConfig },
        { type: AuthService }
    ]; };
    return UserTokenInterceptor;
}());
export { UserTokenInterceptor };
if (false) {
    /** @type {?} */
    UserTokenInterceptor.prototype.userToken;
    /** @type {?} */
    UserTokenInterceptor.prototype.baseReqString;
    /**
     * @type {?}
     * @private
     */
    UserTokenInterceptor.prototype.config;
    /**
     * @type {?}
     * @private
     */
    UserTokenInterceptor.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL3VzZXItdG9rZW4uaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdyRDtJQVFFLDhCQUFvQixNQUFrQixFQUFVLFdBQXdCO1FBQXhFLGlCQUlDO1FBSm1CLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUx4RSxrQkFBYSxHQUNYLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUcxQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWdCO1lBQ3pELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsd0NBQVM7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixJQUNFLElBQUksQ0FBQyxTQUFTO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUNyQztZQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixVQUFVLEVBQUU7b0JBQ1YsYUFBYSxFQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxTQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQ2Y7aUJBQ0g7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFqQ0YsVUFBVTs7OztnQkFKRixVQUFVO2dCQUNWLFdBQVc7O0lBcUNwQiwyQkFBQztDQUFBLEFBbENELElBa0NDO1NBakNZLG9CQUFvQjs7O0lBQy9CLHlDQUFxQjs7SUFDckIsNkNBRzRCOzs7OztJQUVoQixzQ0FBMEI7Ozs7O0lBQUUsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwUmVxdWVzdFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vYXV0aC9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclRva2VuSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICB1c2VyVG9rZW46IFVzZXJUb2tlbjtcbiAgYmFzZVJlcVN0cmluZyA9XG4gICAgKHRoaXMuY29uZmlnLnNlcnZlci5iYXNlVXJsIHx8ICcnKSArXG4gICAgdGhpcy5jb25maWcuc2VydmVyLm9jY1ByZWZpeCArXG4gICAgdGhpcy5jb25maWcuc2l0ZS5iYXNlU2l0ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogQXV0aENvbmZpZywgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXJUb2tlbigpLnN1YnNjcmliZSgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgdGhpcy51c2VyVG9rZW4gPSB0b2tlbjtcbiAgICB9KTtcbiAgfVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnVzZXJUb2tlbiAmJlxuICAgICAgcmVxdWVzdC51cmwuaW5kZXhPZih0aGlzLmJhc2VSZXFTdHJpbmcpID4gLTEgJiZcbiAgICAgICFyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJylcbiAgICApIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke3RoaXMudXNlclRva2VuLnRva2VuX3R5cGV9ICR7XG4gICAgICAgICAgICB0aGlzLnVzZXJUb2tlbi5hY2Nlc3NfdG9rZW5cbiAgICAgICAgICB9YFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gIH1cbn1cbiJdfQ==