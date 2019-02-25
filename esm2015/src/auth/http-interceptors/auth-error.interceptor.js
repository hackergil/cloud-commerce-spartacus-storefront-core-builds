/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../facade/auth.service';
import { ClientErrorHandlingService } from '../services/client-error/client-error-handling.service';
import { UserErrorHandlingService } from '../services/user-error/user-error-handling.service';
import { InterceptorUtil, USE_CLIENT_TOKEN } from '../../occ/utils/interceptor-util';
/** @type {?} */
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class AuthErrorInterceptor {
    /**
     * @param {?} userErrorHandlingService
     * @param {?} clientErrorHandlingService
     * @param {?} authService
     */
    constructor(userErrorHandlingService, clientErrorHandlingService, authService) {
        this.userErrorHandlingService = userErrorHandlingService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        const isClientTokenRequest = this.isClientTokenRequest(request);
        if (isClientTokenRequest) {
            request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
        }
        return next.handle(request).pipe(catchError((errResponse) => {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 401: // Unauthorized
                        if (isClientTokenRequest) {
                            if (this.isExpiredToken(errResponse)) {
                                return this.clientErrorHandlingService.handleExpiredClientToken(request, next);
                            }
                            // user token request
                        }
                        else {
                            if (this.isExpiredToken(errResponse)) {
                                return this.userErrorHandlingService.handleExpiredUserToken(request, next);
                            }
                            else if (
                            // Refresh expired token
                            // Check that the OAUTH endpoint was called and the error is for refresh token is expired
                            errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                                errResponse.error.error === 'invalid_token') {
                                this.userErrorHandlingService.handleExpiredRefreshToken();
                                return of();
                            }
                        }
                        break;
                    case 400: // Bad Request
                        if (errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'refresh_token') {
                                // refresh token fail, force user logout
                                this.authService.logout();
                            }
                        }
                        break;
                }
            }
            return throwError(errResponse);
        }));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    isClientTokenRequest(request) {
        /** @type {?} */
        const isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    }
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    isExpiredToken(resp) {
        if (resp.error &&
            resp.error.errors &&
            resp.error.errors instanceof Array &&
            resp.error.errors[0]) {
            return resp.error.errors[0].type === 'InvalidTokenError';
        }
        return false;
    }
}
AuthErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthErrorInterceptor.ctorParameters = () => [
    { type: UserErrorHandlingService },
    { type: ClientErrorHandlingService },
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthErrorInterceptor.prototype.userErrorHandlingService;
    /**
     * @type {?}
     * @private
     */
    AuthErrorInterceptor.prototype.clientErrorHandlingService;
    /**
     * @type {?}
     * @private
     */
    AuthErrorInterceptor.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUlMLGlCQUFpQixFQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDOUYsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsRUFDakIsTUFBTSxrQ0FBa0MsQ0FBQzs7TUFFcEMsY0FBYyxHQUFHLGtDQUFrQztBQUd6RCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFDL0IsWUFDVSx3QkFBa0QsRUFDbEQsMEJBQXNELEVBQ3RELFdBQXdCO1FBRnhCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUMvQixDQUFDOzs7Ozs7SUFFSixTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7O2NBRVgsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUMvRCxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLE9BQU8sR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsVUFBVSxDQUFDLENBQUMsV0FBZ0IsRUFBRSxFQUFFO1lBQzlCLElBQUksV0FBVyxZQUFZLGlCQUFpQixFQUFFO2dCQUM1QyxRQUFRLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQzFCLEtBQUssR0FBRyxFQUFFLGVBQWU7d0JBQ3ZCLElBQUksb0JBQW9CLEVBQUU7NEJBQ3hCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQ0FDcEMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLENBQzdELE9BQU8sRUFDUCxJQUFJLENBQ0wsQ0FBQzs2QkFDSDs0QkFDRCxxQkFBcUI7eUJBQ3RCOzZCQUFNOzRCQUNMLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQ0FDcEMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQ3pELE9BQU8sRUFDUCxJQUFJLENBQ0wsQ0FBQzs2QkFDSDtpQ0FBTTs0QkFDTCx3QkFBd0I7NEJBQ3hCLHlGQUF5Rjs0QkFDekYsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUM5QyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlLEVBQzNDO2dDQUNBLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dDQUMxRCxPQUFPLEVBQUUsRUFBRSxDQUFDOzZCQUNiO3lCQUNGO3dCQUNELE1BQU07b0JBQ1IsS0FBSyxHQUFHLEVBQUUsY0FBYzt3QkFDdEIsSUFDRSxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQzlDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDM0M7NEJBQ0EsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxlQUFlLEVBQUU7Z0NBQ3RELHdDQUF3QztnQ0FDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs2QkFDM0I7eUJBQ0Y7d0JBQ0QsTUFBTTtpQkFDVDthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLE9BQXlCOztjQUM5QyxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsbUJBQW1CLENBQzFELGdCQUFnQixFQUNoQixPQUFPLENBQUMsT0FBTyxDQUNoQjtRQUNELE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLElBQXVCO1FBQzVDLElBQ0UsSUFBSSxDQUFDLEtBQUs7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQVksS0FBSztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDcEI7WUFDQSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQztTQUMxRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBbkZGLFVBQVU7Ozs7WUFSRix3QkFBd0I7WUFEeEIsMEJBQTBCO1lBRDFCLFdBQVc7Ozs7Ozs7SUFhaEIsd0RBQTBEOzs7OztJQUMxRCwwREFBOEQ7Ozs7O0lBQzlELDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEVycm9yUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnQtZXJyb3IvY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci1lcnJvci91c2VyLWVycm9yLWhhbmRsaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ0xJRU5UX1RPS0VOXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9pbnRlcmNlcHRvci11dGlsJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJFcnJvckhhbmRsaW5nU2VydmljZTogVXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgaXNDbGllbnRUb2tlblJlcXVlc3QgPSB0aGlzLmlzQ2xpZW50VG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xuICAgIGlmIChpc0NsaWVudFRva2VuUmVxdWVzdCkge1xuICAgICAgcmVxdWVzdCA9IEludGVyY2VwdG9yVXRpbC5yZW1vdmVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgcmVxdWVzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJSZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJSZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoIChlcnJSZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOiAvLyBVbmF1dGhvcml6ZWRcbiAgICAgICAgICAgICAgaWYgKGlzQ2xpZW50VG9rZW5SZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBpcmVkVG9rZW4oZXJyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRFcnJvckhhbmRsaW5nU2VydmljZS5oYW5kbGVFeHBpcmVkQ2xpZW50VG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVzZXIgdG9rZW4gcmVxdWVzdFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwaXJlZFRva2VuKGVyclJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRVc2VyVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIC8vIFJlZnJlc2ggZXhwaXJlZCB0b2tlblxuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgT0FVVEggZW5kcG9pbnQgd2FzIGNhbGxlZCBhbmQgdGhlIGVycm9yIGlzIGZvciByZWZyZXNoIHRva2VuIGlzIGV4cGlyZWRcbiAgICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLnVybC5pbmRleE9mKE9BVVRIX0VORFBPSU5UKSAhPT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF90b2tlbidcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXNlckVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRSZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDAwOiAvLyBCYWQgUmVxdWVzdFxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UudXJsLmluZGV4T2YoT0FVVEhfRU5EUE9JTlQpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3JlZnJlc2hfdG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgICAvLyByZWZyZXNoIHRva2VuIGZhaWwsIGZvcmNlIHVzZXIgbG9nb3V0XG4gICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyUmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWVudFRva2VuUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNSZXF1ZXN0TWFwcGluZyA9IEludGVyY2VwdG9yVXRpbC5nZXRJbnRlcmNlcHRvclBhcmFtKFxuICAgICAgVVNFX0NMSUVOVF9UT0tFTixcbiAgICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICk7XG4gICAgcmV0dXJuIEJvb2xlYW4oaXNSZXF1ZXN0TWFwcGluZyk7XG4gIH1cblxuICBwcml2YXRlIGlzRXhwaXJlZFRva2VuKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcmVzcC5lcnJvciAmJlxuICAgICAgcmVzcC5lcnJvci5lcnJvcnMgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICAgIHJlc3AuZXJyb3IuZXJyb3JzWzBdXG4gICAgKSB7XG4gICAgICByZXR1cm4gcmVzcC5lcnJvci5lcnJvcnNbMF0udHlwZSA9PT0gJ0ludmFsaWRUb2tlbkVycm9yJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=