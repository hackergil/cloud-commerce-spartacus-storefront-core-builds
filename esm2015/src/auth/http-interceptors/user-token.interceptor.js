/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthConfig } from '../config/auth-config';
import { AuthService } from '../facade/auth.service';
export class UserTokenInterceptor {
    /**
     * @param {?} config
     * @param {?} authService
     */
    constructor(config, authService) {
        this.config = config;
        this.authService = authService;
        this.baseReqString = (this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite;
        this.authService.getUserToken().subscribe((token) => {
            this.userToken = token;
        });
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (this.userToken &&
            request.url.indexOf(this.baseReqString) > -1 &&
            !request.headers.get('Authorization')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${this.userToken.token_type} ${this.userToken.access_token}`
                }
            });
        }
        return next.handle(request);
    }
}
UserTokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserTokenInterceptor.ctorParameters = () => [
    { type: AuthConfig },
    { type: AuthService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL3VzZXItdG9rZW4uaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlyRCxNQUFNLE9BQU8sb0JBQW9COzs7OztJQU8vQixZQUFvQixNQUFrQixFQUFVLFdBQXdCO1FBQXBELFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUx4RSxrQkFBYSxHQUNYLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUcxQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixJQUNFLElBQUksQ0FBQyxTQUFTO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUNyQztZQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixVQUFVLEVBQUU7b0JBQ1YsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFDakIsRUFBRTtpQkFDSDthQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWpDRixVQUFVOzs7O1lBSkYsVUFBVTtZQUNWLFdBQVc7Ozs7SUFLbEIseUNBQXFCOztJQUNyQiw2Q0FHNEI7Ozs7O0lBRWhCLHNDQUEwQjs7Ozs7SUFBRSwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBSZXF1ZXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyVG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIHVzZXJUb2tlbjogVXNlclRva2VuO1xuICBiYXNlUmVxU3RyaW5nID1cbiAgICAodGhpcy5jb25maWcuc2VydmVyLmJhc2VVcmwgfHwgJycpICtcbiAgICB0aGlzLmNvbmZpZy5zZXJ2ZXIub2NjUHJlZml4ICtcbiAgICB0aGlzLmNvbmZpZy5zaXRlLmJhc2VTaXRlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBBdXRoQ29uZmlnLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCkuc3Vic2NyaWJlKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICB0aGlzLnVzZXJUb2tlbiA9IHRva2VuO1xuICAgIH0pO1xuICB9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmIChcbiAgICAgIHRoaXMudXNlclRva2VuICYmXG4gICAgICByZXF1ZXN0LnVybC5pbmRleE9mKHRoaXMuYmFzZVJlcVN0cmluZykgPiAtMSAmJlxuICAgICAgIXJlcXVlc3QuaGVhZGVycy5nZXQoJ0F1dGhvcml6YXRpb24nKVxuICAgICkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dGhpcy51c2VyVG9rZW4udG9rZW5fdHlwZX0gJHtcbiAgICAgICAgICAgIHRoaXMudXNlclRva2VuLmFjY2Vzc190b2tlblxuICAgICAgICAgIH1gXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgfVxufVxuIl19