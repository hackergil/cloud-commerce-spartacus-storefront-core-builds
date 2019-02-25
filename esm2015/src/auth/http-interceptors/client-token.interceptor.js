/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthConfig } from '../config/auth-config';
import { AuthService } from '../facade/auth.service';
import { USE_CLIENT_TOKEN, InterceptorUtil } from '../../occ/utils/interceptor-util';
export class ClientTokenInterceptor {
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
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return this.getClientToken(request).pipe(take(1), switchMap((token) => {
            if (token && request.url.indexOf(this.baseReqString) > -1) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type} ${token.access_token}`
                    }
                });
            }
            return next.handle(request);
        }));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    getClientToken(request) {
        if (InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers)) {
            return this.authService.getClientToken();
        }
        return of(null);
    }
}
ClientTokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientTokenInterceptor.ctorParameters = () => [
    { type: AuthConfig },
    { type: AuthService }
];
if (false) {
    /** @type {?} */
    ClientTokenInterceptor.prototype.baseReqString;
    /**
     * @type {?}
     * @private
     */
    ClientTokenInterceptor.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ClientTokenInterceptor.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvaHR0cC1pbnRlcmNlcHRvcnMvY2xpZW50LXRva2VuLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNoQixNQUFNLGtDQUFrQyxDQUFDO0FBSTFDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBTWpDLFlBQW9CLE1BQWtCLEVBQVUsV0FBd0I7UUFBcEQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTHhFLGtCQUFhLEdBQ1gsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRStDLENBQUM7Ozs7OztJQUU1RSxTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUMvQixJQUFJLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUN0QixVQUFVLEVBQUU7d0JBQ1YsYUFBYSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO3FCQUMzRDtpQkFDRixDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE9BQXlCO1FBQzlDLElBQ0UsZUFBZSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFDdEU7WUFDQSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDMUM7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7WUFuQ0YsVUFBVTs7OztZQVJGLFVBQVU7WUFDVixXQUFXOzs7O0lBU2xCLCtDQUc0Qjs7Ozs7SUFFaEIsd0NBQTBCOzs7OztJQUFFLDZDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnRcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1xuICBVU0VfQ0xJRU5UX1RPS0VOLFxuICBJbnRlcmNlcHRvclV0aWxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpZW50VG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGJhc2VSZXFTdHJpbmcgPVxuICAgICh0aGlzLmNvbmZpZy5zZXJ2ZXIuYmFzZVVybCB8fCAnJykgK1xuICAgIHRoaXMuY29uZmlnLnNlcnZlci5vY2NQcmVmaXggK1xuICAgIHRoaXMuY29uZmlnLnNpdGUuYmFzZVNpdGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IEF1dGhDb25maWcsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRUb2tlbihyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgodG9rZW46IENsaWVudFRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbiAmJiByZXF1ZXN0LnVybC5pbmRleE9mKHRoaXMuYmFzZVJlcVN0cmluZykgPiAtMSkge1xuICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2xpZW50VG9rZW4ocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICBpZiAoXG4gICAgICBJbnRlcmNlcHRvclV0aWwuZ2V0SW50ZXJjZXB0b3JQYXJhbShVU0VfQ0xJRU5UX1RPS0VOLCByZXF1ZXN0LmhlYWRlcnMpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRDbGllbnRUb2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cbn1cbiJdfQ==