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
export class OccCmsService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @protected
     * @return {?}
     */
    getBaseEndPoint() {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/cms');
    }
    /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    loadPageData(pageContext, fields) {
        /** @type {?} */
        let httpStringParams = 'pageType=' + pageContext.type;
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
            .get(this.getBaseEndPoint() + `/pages`, {
            headers: this.headers,
            params: new HttpParams({
                fromString: httpStringParams
            })
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    loadComponent(id, pageContext, fields) {
        return this.http
            .get(this.getBaseEndPoint() + `/components/${id}`, {
            headers: this.headers,
            params: new HttpParams({
                fromString: this.getRequestParams(pageContext, fields)
            })
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} idList
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    loadListComponents(idList, pageContext, fields, currentPage, pageSize, sort) {
        /** @type {?} */
        let requestParams = this.getRequestParams(pageContext, fields);
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
            .post(this.getBaseEndPoint() + `/components`, idList, {
            headers: this.headers,
            params: new HttpParams({
                fromString: requestParams
            })
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    getRequestParams(pageContext, fields) {
        /** @type {?} */
        let requestParams = '';
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
    }
    /**
     * @return {?}
     */
    get baseUrl() {
        return this.config.server.baseUrl || '';
    }
}
OccCmsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCmsService.ctorParameters = () => [
    { type: HttpClient },
    { type: CmsConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9vY2Mvb2NjLWNtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBRUwsUUFBUSxFQUdULE1BQU0sNEJBQTRCLENBQUM7QUFHcEMsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBR3hCLFlBQW9CLElBQWdCLEVBQVUsTUFBaUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFGckQsWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBRVosQ0FBQzs7Ozs7SUFFekQsZUFBZTtRQUN2QixPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUN6QixNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxXQUF3QixFQUFFLE1BQWU7O1lBQ2hELGdCQUFnQixHQUFHLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSTtRQUVyRCxJQUFJ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RUFBRTtRQUN0QixRQUFRLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLGFBQWEsR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsTUFBTTthQUNQO1lBQ0QsS0FBSyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLGFBQWEsR0FBRyxlQUFlLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLGFBQWEsR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsTUFBTTthQUNQO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsYUFBYSxLQUFLLEVBQUU7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxhQUFhLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLGFBQWEsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDM0Q7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzFDLENBQUM7OztZQWhIRixVQUFVOzs7O1lBWkYsVUFBVTtZQUdWLFNBQVM7Ozs7Ozs7SUFXaEIsZ0NBQThFOzs7OztJQUVsRSw2QkFBd0I7Ozs7O0lBQUUsK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWRMaXN0IH0gZnJvbSAnLi8uLi9tb2RlbC9pZExpc3QubW9kZWwnO1xuaW1wb3J0IHsgQ21zQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2Ntcy1jb25maWcnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7XG4gIENNU1BhZ2UsXG4gIFBhZ2VUeXBlLFxuICBDbXNDb21wb25lbnQsXG4gIENtc0NvbXBvbmVudExpc3Rcbn0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zU2VydmljZSB7XG4gIHByb3RlY3RlZCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZykge31cblxuICBwcm90ZWN0ZWQgZ2V0QmFzZUVuZFBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5zZXJ2ZXIuYmFzZVVybCB8fCAnJykgK1xuICAgICAgdGhpcy5jb25maWcuc2VydmVyLm9jY1ByZWZpeCArXG4gICAgICB0aGlzLmNvbmZpZy5zaXRlLmJhc2VTaXRlICtcbiAgICAgICcvY21zJ1xuICAgICk7XG4gIH1cblxuICBsb2FkUGFnZURhdGEocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmaWVsZHM/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENNU1BhZ2U+IHtcbiAgICBsZXQgaHR0cFN0cmluZ1BhcmFtcyA9ICdwYWdlVHlwZT0nICsgcGFnZUNvbnRleHQudHlwZTtcblxuICAgIGlmIChwYWdlQ29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DT05URU5UX1BBR0UpIHtcbiAgICAgIGh0dHBTdHJpbmdQYXJhbXMgPSBodHRwU3RyaW5nUGFyYW1zICsgJyZwYWdlTGFiZWxPcklkPScgKyBwYWdlQ29udGV4dC5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaHR0cFN0cmluZ1BhcmFtcyA9IGh0dHBTdHJpbmdQYXJhbXMgKyAnJmNvZGU9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgIH1cblxuICAgIGlmIChmaWVsZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaHR0cFN0cmluZ1BhcmFtcyA9IGh0dHBTdHJpbmdQYXJhbXMgKyAnJmZpZWxkcz0nICsgZmllbGRzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRCYXNlRW5kUG9pbnQoKSArIGAvcGFnZXNgLCB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogaHR0cFN0cmluZ1BhcmFtc1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZENvbXBvbmVudDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxUPih0aGlzLmdldEJhc2VFbmRQb2ludCgpICsgYC9jb21wb25lbnRzLyR7aWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IHRoaXMuZ2V0UmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dCwgZmllbGRzKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZExpc3RDb21wb25lbnRzKFxuICAgIGlkTGlzdDogSWRMaXN0LFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHM/OiBzdHJpbmcsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudExpc3Q+IHtcbiAgICBsZXQgcmVxdWVzdFBhcmFtcyA9IHRoaXMuZ2V0UmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dCwgZmllbGRzKTtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtcyA9PT0gJydcbiAgICAgICAgPyAocmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnY3VycmVudFBhZ2U9JyArIGN1cnJlbnRQYWdlKVxuICAgICAgICA6IChyZXF1ZXN0UGFyYW1zID0gcmVxdWVzdFBhcmFtcyArICcmY3VycmVudFBhZ2U9JyArIGN1cnJlbnRQYWdlKTtcbiAgICB9XG4gICAgaWYgKHBhZ2VTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJyZwYWdlU2l6ZT0nICsgcGFnZVNpemU7XG4gICAgfVxuICAgIGlmIChzb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJyZzb3J0PScgKyBzb3J0O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PENtc0NvbXBvbmVudExpc3Q+KHRoaXMuZ2V0QmFzZUVuZFBvaW50KCkgKyBgL2NvbXBvbmVudHNgLCBpZExpc3QsIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiByZXF1ZXN0UGFyYW1zXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlcXVlc3RQYXJhbXMocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmaWVsZHM/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCByZXF1ZXN0UGFyYW1zID0gJyc7XG4gICAgc3dpdGNoIChwYWdlQ29udGV4dC50eXBlKSB7XG4gICAgICBjYXNlIFBhZ2VUeXBlLlBST0RVQ1RfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0gJ3Byb2R1Y3RDb2RlPScgKyBwYWdlQ29udGV4dC5pZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9ICdjYXRlZ29yeUNvZGU9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSAnY2F0YWxvZ0NvZGU9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmllbGRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXMgPT09ICcnXG4gICAgICAgID8gKHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJ2ZpZWxkcz0nICsgZmllbGRzKVxuICAgICAgICA6IChyZXF1ZXN0UGFyYW1zID0gcmVxdWVzdFBhcmFtcyArICcmZmllbGRzPScgKyBmaWVsZHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0UGFyYW1zO1xuICB9XG5cbiAgZ2V0IGJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuc2VydmVyLmJhc2VVcmwgfHwgJyc7XG4gIH1cbn1cbiJdfQ==