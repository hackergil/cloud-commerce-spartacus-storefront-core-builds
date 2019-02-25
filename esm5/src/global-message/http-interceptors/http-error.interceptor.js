/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalMessageService } from '../facade/global-message.service';
import { GlobalMessageType } from '../models/global-message.model';
/** @type {?} */
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    HttpErrorInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return next.handle(request).pipe(catchError(function (errResponse) {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 400: // Bad Request
                        if (errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'password') {
                                _this.globalMessageService.add({
                                    type: GlobalMessageType.MSG_TYPE_ERROR,
                                    text: _this.getErrorMessage(errResponse) +
                                        '. Please login again.'
                                });
                                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
                            }
                        }
                        else {
                            _this.globalMessageService.add({
                                type: GlobalMessageType.MSG_TYPE_ERROR,
                                text: _this.getErrorMessage(errResponse)
                            });
                        }
                        break;
                    case 403: // Forbidden
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'You are not authorized to perform this action.'
                        });
                        break;
                    case 404: // Not Found
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'The requested resource could not be found'
                        });
                        break;
                    case 409: // Already Exists
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'Already exists'
                        });
                        break;
                    case 502: // Bad Gateway
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'A server error occurred. Please try again later.'
                        });
                        break;
                    case 504: // Gateway Timeout
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'The server did not responded, please try again later.'
                        });
                        break;
                    default:
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: _this.getErrorMessage(errResponse)
                        });
                }
            }
            else {
                _this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'An unknown error occured'
                });
            }
            return throwError(errResponse);
        }));
    };
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    HttpErrorInterceptor.prototype.getErrorMessage = /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        /** @type {?} */
        var errMsg = resp.message;
        if (resp.error) {
            if (resp.error.errors && resp.error.errors instanceof Array) {
                errMsg = resp.error.errors[0].message;
            }
            else if (resp.error.error_description) {
                errMsg = resp.error.error_description;
            }
        }
        return errMsg;
    };
    HttpErrorInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpErrorInterceptor.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    return HttpErrorInterceptor;
}());
export { HttpErrorInterceptor };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpErrorInterceptor.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFLbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFFN0QsY0FBYyxHQUFHLGtDQUFrQztBQUV6RDtJQUVFLDhCQUFzQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUFHLENBQUM7Ozs7OztJQUVwRSx3Q0FBUzs7Ozs7SUFBVCxVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQTZFQztRQXpFQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsVUFBQyxXQUFnQjtZQUMxQixJQUFJLFdBQVcsWUFBWSxpQkFBaUIsRUFBRTtnQkFDNUMsUUFBUSxXQUFXLENBQUMsTUFBTSxFQUFFO29CQUMxQixLQUFLLEdBQUcsRUFBRSxjQUFjO3dCQUN0QixJQUNFLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDOUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssZUFBZSxFQUMzQzs0QkFDQSxJQUFJLE9B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QUFDO2FBQ3ZDO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDdkM7U0FDRjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQTlGRixVQUFVOzs7O2dCQUxGLG9CQUFvQjs7SUFvRzdCLDJCQUFDO0NBQUEsQUEvRkQsSUErRkM7U0E5Rlksb0JBQW9COzs7Ozs7SUFDbkIsb0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVyclJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVyclJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICBzd2l0Y2ggKGVyclJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSA0MDA6IC8vIEJhZCBSZXF1ZXN0XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlcnJSZXNwb25zZS51cmwuaW5kZXhPZihPQVVUSF9FTkRQT0lOVCkgIT09IC0xICYmXG4gICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX2dyYW50J1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5ib2R5LmdldCgnZ3JhbnRfdHlwZScpID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JNZXNzYWdlKGVyclJlc3BvbnNlKSArXG4gICAgICAgICAgICAgICAgICAgICAgJy4gUGxlYXNlIGxvZ2luIGFnYWluLidcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmdldEVycm9yTWVzc2FnZShlcnJSZXNwb25zZSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDAzOiAvLyBGb3JiaWRkZW5cbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdZb3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24uJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwNDogLy8gTm90IEZvdW5kXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhlIHJlcXVlc3RlZCByZXNvdXJjZSBjb3VsZCBub3QgYmUgZm91bmQnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDA5OiAvLyBBbHJlYWR5IEV4aXN0c1xuICAgICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICAgICAgdGV4dDogJ0FscmVhZHkgZXhpc3RzJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDUwMjogLy8gQmFkIEdhdGV3YXlcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdBIHNlcnZlciBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTA0OiAvLyBHYXRld2F5IFRpbWVvdXRcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGUgc2VydmVyIGRpZCBub3QgcmVzcG9uZGVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLidcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKGVyclJlc3BvbnNlKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICB0ZXh0OiAnQW4gdW5rbm93biBlcnJvciBvY2N1cmVkJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyUmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFcnJvck1lc3NhZ2UocmVzcDogSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBsZXQgZXJyTXNnID0gcmVzcC5tZXNzYWdlO1xuICAgIGlmIChyZXNwLmVycm9yKSB7XG4gICAgICBpZiAocmVzcC5lcnJvci5lcnJvcnMgJiYgcmVzcC5lcnJvci5lcnJvcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBlcnJNc2cgPSByZXNwLmVycm9yLmVycm9yc1swXS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmIChyZXNwLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVyck1zZztcbiAgfVxufVxuIl19