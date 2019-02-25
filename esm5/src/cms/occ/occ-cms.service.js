/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CmsConfig } from '../config/cms-config';
import { PageType } from '../../occ/occ-models/index';
var OccCmsService = /** @class */ (function () {
    function OccCmsService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @protected
     * @return {?}
     */
    OccCmsService.prototype.getBaseEndPoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/cms');
    };
    /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    OccCmsService.prototype.loadPageData = /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    function (pageContext, fields) {
        /** @type {?} */
        var httpStringParams = 'pageType=' + pageContext.type;
        if (pageContext.type === PageType.CONTENT_PAGE) {
            httpStringParams = httpStringParams + '&pageLabelOrId=' + pageContext.id;
        }
        else {
            httpStringParams = httpStringParams + '&code=' + pageContext.id;
        }
        if (fields !== undefined) {
            httpStringParams = httpStringParams + '&fields=' + fields;
        }
        return this.http
            .get(this.getBaseEndPoint() + "/pages", {
            headers: this.headers,
            params: new HttpParams({
                fromString: httpStringParams
            })
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    OccCmsService.prototype.loadComponent = /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    function (id, pageContext, fields) {
        return this.http
            .get(this.getBaseEndPoint() + ("/components/" + id), {
            headers: this.headers,
            params: new HttpParams({
                fromString: this.getRequestParams(pageContext, fields)
            })
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} idList
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    OccCmsService.prototype.loadListComponents = /**
     * @param {?} idList
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    function (idList, pageContext, fields, currentPage, pageSize, sort) {
        /** @type {?} */
        var requestParams = this.getRequestParams(pageContext, fields);
        if (currentPage !== undefined) {
            requestParams === ''
                ? (requestParams = requestParams + 'currentPage=' + currentPage)
                : (requestParams = requestParams + '&currentPage=' + currentPage);
        }
        if (pageSize !== undefined) {
            requestParams = requestParams + '&pageSize=' + pageSize;
        }
        if (sort !== undefined) {
            requestParams = requestParams + '&sort=' + sort;
        }
        return this.http
            .post(this.getBaseEndPoint() + "/components", idList, {
            headers: this.headers,
            params: new HttpParams({
                fromString: requestParams
            })
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    OccCmsService.prototype.getRequestParams = /**
     * @private
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    function (pageContext, fields) {
        /** @type {?} */
        var requestParams = '';
        switch (pageContext.type) {
            case PageType.PRODUCT_PAGE: {
                requestParams = 'productCode=' + pageContext.id;
                break;
            }
            case PageType.CATEGORY_PAGE: {
                requestParams = 'categoryCode=' + pageContext.id;
                break;
            }
            case PageType.CATALOG_PAGE: {
                requestParams = 'catalogCode=' + pageContext.id;
                break;
            }
        }
        if (fields !== undefined) {
            requestParams === ''
                ? (requestParams = requestParams + 'fields=' + fields)
                : (requestParams = requestParams + '&fields=' + fields);
        }
        return requestParams;
    };
    Object.defineProperty(OccCmsService.prototype, "baseUrl", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.server.baseUrl || '';
        },
        enumerable: true,
        configurable: true
    });
    OccCmsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCmsService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CmsConfig }
    ]; };
    return OccCmsService;
}());
export { OccCmsService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCmsService.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    OccCmsService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccCmsService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9vY2Mvb2NjLWNtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBRUwsUUFBUSxFQUdULE1BQU0sNEJBQTRCLENBQUM7QUFFcEM7SUFJRSx1QkFBb0IsSUFBZ0IsRUFBVSxNQUFpQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUZyRCxZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFWixDQUFDOzs7OztJQUV6RCx1Q0FBZTs7OztJQUF6QjtRQUNFLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3pCLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsb0NBQVk7Ozs7O0lBQVosVUFBYSxXQUF3QixFQUFFLE1BQWU7O1lBQ2hELGdCQUFnQixHQUFHLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSTtRQUVyRCxJQUFJ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IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJZExpc3QgfSBmcm9tICcuLy4uL21vZGVsL2lkTGlzdC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICcuLi9jb25maWcvY21zLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQ01TUGFnZSxcbiAgUGFnZVR5cGUsXG4gIENtc0NvbXBvbmVudCxcbiAgQ21zQ29tcG9uZW50TGlzdFxufSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDbXNTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZzogQ21zQ29uZmlnKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRCYXNlRW5kUG9pbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnLnNlcnZlci5iYXNlVXJsIHx8ICcnKSArXG4gICAgICB0aGlzLmNvbmZpZy5zZXJ2ZXIub2NjUHJlZml4ICtcbiAgICAgIHRoaXMuY29uZmlnLnNpdGUuYmFzZVNpdGUgK1xuICAgICAgJy9jbXMnXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRQYWdlRGF0YShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZpZWxkcz86IHN0cmluZyk6IE9ic2VydmFibGU8Q01TUGFnZT4ge1xuICAgIGxldCBodHRwU3RyaW5nUGFyYW1zID0gJ3BhZ2VUeXBlPScgKyBwYWdlQ29udGV4dC50eXBlO1xuXG4gICAgaWYgKHBhZ2VDb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSkge1xuICAgICAgaHR0cFN0cmluZ1BhcmFtcyA9IGh0dHBTdHJpbmdQYXJhbXMgKyAnJnBhZ2VMYWJlbE9ySWQ9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBodHRwU3RyaW5nUGFyYW1zID0gaHR0cFN0cmluZ1BhcmFtcyArICcmY29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBodHRwU3RyaW5nUGFyYW1zID0gaHR0cFN0cmluZ1BhcmFtcyArICcmZmllbGRzPScgKyBmaWVsZHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldEJhc2VFbmRQb2ludCgpICsgYC9wYWdlc2AsIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiBodHRwU3RyaW5nUGFyYW1zXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBsb2FkQ29tcG9uZW50PFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcz86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFQ+KHRoaXMuZ2V0QmFzZUVuZFBvaW50KCkgKyBgL2NvbXBvbmVudHMvJHtpZH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogdGhpcy5nZXRSZXF1ZXN0UGFyYW1zKHBhZ2VDb250ZXh0LCBmaWVsZHMpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBsb2FkTGlzdENvbXBvbmVudHMoXG4gICAgaWRMaXN0OiBJZExpc3QsXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcz86IHN0cmluZyxcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50TGlzdD4ge1xuICAgIGxldCByZXF1ZXN0UGFyYW1zID0gdGhpcy5nZXRSZXF1ZXN0UGFyYW1zKHBhZ2VDb250ZXh0LCBmaWVsZHMpO1xuICAgIGlmIChjdXJyZW50UGFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zID09PSAnJ1xuICAgICAgICA/IChyZXF1ZXN0UGFyYW1zID0gcmVxdWVzdFBhcmFtcyArICdjdXJyZW50UGFnZT0nICsgY3VycmVudFBhZ2UpXG4gICAgICAgIDogKHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJyZjdXJyZW50UGFnZT0nICsgY3VycmVudFBhZ2UpO1xuICAgIH1cbiAgICBpZiAocGFnZVNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnJnBhZ2VTaXplPScgKyBwYWdlU2l6ZTtcbiAgICB9XG4gICAgaWYgKHNvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnJnNvcnQ9JyArIHNvcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8Q21zQ29tcG9uZW50TGlzdD4odGhpcy5nZXRCYXNlRW5kUG9pbnQoKSArIGAvY29tcG9uZW50c2AsIGlkTGlzdCwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IHJlcXVlc3RQYXJhbXNcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZpZWxkcz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHJlcXVlc3RQYXJhbXMgPSAnJztcbiAgICBzd2l0Y2ggKHBhZ2VDb250ZXh0LnR5cGUpIHtcbiAgICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSAncHJvZHVjdENvZGU9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FURUdPUllfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0gJ2NhdGVnb3J5Q29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZS5DQVRBTE9HX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9ICdjYXRhbG9nQ29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWVsZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtcyA9PT0gJydcbiAgICAgICAgPyAocmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnZmllbGRzPScgKyBmaWVsZHMpXG4gICAgICAgIDogKHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJyZmaWVsZHM9JyArIGZpZWxkcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RQYXJhbXM7XG4gIH1cblxuICBnZXQgYmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5zZXJ2ZXIuYmFzZVVybCB8fCAnJztcbiAgfVxufVxuIl19