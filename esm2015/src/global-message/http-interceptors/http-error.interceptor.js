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
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class HttpErrorInterceptor {
    /**
     * @param {?} globalMessageService
     */
    constructor(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return next.handle(request).pipe(catchError((errResponse) => {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 400: // Bad Request
                        if (errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'password') {
                                this.globalMessageService.add({
                                    type: GlobalMessageType.MSG_TYPE_ERROR,
                                    text: this.getErrorMessage(errResponse) +
                                        '. Please login again.'
                                });
                                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
                            }
                        }
                        else {
                            this.globalMessageService.add({
                                type: GlobalMessageType.MSG_TYPE_ERROR,
                                text: this.getErrorMessage(errResponse)
                            });
                        }
                        break;
                    case 403: // Forbidden
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'You are not authorized to perform this action.'
                        });
                        break;
                    case 404: // Not Found
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'The requested resource could not be found'
                        });
                        break;
                    case 409: // Already Exists
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'Already exists'
                        });
                        break;
                    case 502: // Bad Gateway
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'A server error occurred. Please try again later.'
                        });
                        break;
                    case 504: // Gateway Timeout
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'The server did not responded, please try again later.'
                        });
                        break;
                    default:
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: this.getErrorMessage(errResponse)
                        });
                }
            }
            else {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'An unknown error occured'
                });
            }
            return throwError(errResponse);
        }));
    }
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    getErrorMessage(resp) {
        /** @type {?} */
        let errMsg = resp.message;
        if (resp.error) {
            if (resp.error.errors && resp.error.errors instanceof Array) {
                errMsg = resp.error.errors[0].message;
            }
            else if (resp.error.error_description) {
                errMsg = resp.error.error_description;
            }
        }
        return errMsg;
    }
}
HttpErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpErrorInterceptor.ctorParameters = () => [
    { type: GlobalMessageService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpErrorInterceptor.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFLbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7TUFFN0QsY0FBYyxHQUFHLGtDQUFrQztBQUd6RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQXNCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQzs7Ozs7O0lBRXBFLFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxXQUFXLFlBQVksaUJBQWlCLEVBQUU7Z0JBQzVDLFFBQVEsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDMUIsS0FBSyxHQUFHLEVBQUUsY0FBYzt3QkFDdEIsSUFDRSxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQzlDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDM0M7NEJBQ0Es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QUN2QztpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2FBQ3ZDO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7WUE5RkYsVUFBVTs7OztZQUxGLG9CQUFvQjs7Ozs7OztJQU9mLG9EQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJSZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJSZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoIChlcnJSZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAwOiAvLyBCYWQgUmVxdWVzdFxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZXJyUmVzcG9uc2UudXJsLmluZGV4T2YoT0FVVEhfRU5EUE9JTlQpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgIGVyclJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEVycm9yTWVzc2FnZShlcnJSZXNwb25zZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICcuIFBsZWFzZSBsb2dpbiBhZ2Fpbi4nXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKFxuICAgICAgICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5nZXRFcnJvck1lc3NhZ2UoZXJyUmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwMzogLy8gRm9yYmlkZGVuXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgICB0ZXh0OiAnWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLidcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDQ6IC8vIE5vdCBGb3VuZFxuICAgICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgY291bGQgbm90IGJlIGZvdW5kJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwOTogLy8gQWxyZWFkeSBFeGlzdHNcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdBbHJlYWR5IGV4aXN0cydcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1MDI6IC8vIEJhZCBHYXRld2F5XG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQSBzZXJ2ZXIgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDUwNDogLy8gR2F0ZXdheSBUaW1lb3V0XG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhlIHNlcnZlciBkaWQgbm90IHJlc3BvbmRlZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmdldEVycm9yTWVzc2FnZShlcnJSZXNwb25zZSlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgdGV4dDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJlZCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVyclJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXJyb3JNZXNzYWdlKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgbGV0IGVyck1zZyA9IHJlc3AubWVzc2FnZTtcbiAgICBpZiAocmVzcC5lcnJvcikge1xuICAgICAgaWYgKHJlc3AuZXJyb3IuZXJyb3JzICYmIHJlc3AuZXJyb3IuZXJyb3JzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZXJyTXNnID0gcmVzcC5lcnJvci5lcnJvcnNbMF0ubWVzc2FnZTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcC5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbikge1xuICAgICAgICBlcnJNc2cgPSByZXNwLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJNc2c7XG4gIH1cbn1cbiJdfQ==