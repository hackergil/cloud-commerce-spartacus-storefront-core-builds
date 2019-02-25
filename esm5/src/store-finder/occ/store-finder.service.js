/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccConfig } from '../../occ/config/occ-config';
/** @type {?} */
var STORES_ENDPOINT = 'stores';
var OccStoreFinderService = /** @class */ (function () {
    function OccStoreFinderService(http, occModuleConfig) {
        this.http = http;
        this.occModuleConfig = occModuleConfig;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderService.prototype.findStores = /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude);
    };
    /**
     * @return {?}
     */
    OccStoreFinderService.prototype.storesCount = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http
            .get(storeCountUrl)
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} storeId
     * @return {?}
     */
    OccStoreFinderService.prototype.findStoreById = /**
     * @param {?} storeId
     * @return {?}
     */
    function (storeId) {
        /** @type {?} */
        var storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        var params = { fields: 'FULL' };
        return this.http
            .get(storeDetailsUrl, { params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderService.prototype.callOccFindStores = /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        /** @type {?} */
        var url = this.getStoresEndpoint();
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'fields=stores(name,displayName,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),' +
                'geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),' +
                'pagination(DEFAULT),' +
                'sorts(DEFAULT)'
        });
        if (longitudeLatitude) {
            params = params.set('longitude', String(longitudeLatitude.longitude));
            params = params.set('latitude', String(longitudeLatitude.latitude));
        }
        else {
            params = params.set('query', query);
        }
        if (searchConfig.pageSize) {
            params = params.set('pageSize', String(searchConfig.pageSize));
        }
        if (searchConfig.currentPage) {
            params = params.set('currentPage', String(searchConfig.currentPage));
        }
        if (searchConfig.sort) {
            params = params.set('sort', searchConfig.sort);
        }
        return this.http.get(url, { params: params }).pipe(catchError(function (error) {
            if (error.json) {
                return throwError(error.json());
            }
            return throwError(error);
        }));
    };
    /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    OccStoreFinderService.prototype.getStoresEndpoint = /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var baseUrl = this.occModuleConfig.server.baseUrl +
            this.occModuleConfig.server.occPrefix +
            this.occModuleConfig.site.baseSite +
            '/' +
            STORES_ENDPOINT;
        return url ? baseUrl + '/' + url : baseUrl;
    };
    OccStoreFinderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccStoreFinderService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccStoreFinderService;
}());
export { OccStoreFinderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccStoreFinderService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccStoreFinderService.prototype.occModuleConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL29jYy9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUFHbEQsZUFBZSxHQUFHLFFBQVE7QUFFaEM7SUFFRSwrQkFBb0IsSUFBZ0IsRUFBVSxlQUEwQjtRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQVc7SUFBRyxDQUFDOzs7Ozs7O0lBRTVFLDBDQUFVOzs7Ozs7SUFBVixVQUNFLEtBQWEsRUFDYixZQUFxQyxFQUNyQyxpQkFBcUM7UUFFckMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7O1lBQ1EsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCw2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d0I7Ozs7O0lBQUUsZ0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLCBMb25naXR1ZGVMYXRpdHVkZSB9IGZyb20gJy4vLi4vbW9kZWwvaW5kZXgnO1xuXG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMnO1xuXG5jb25zdCBTVE9SRVNfRU5EUE9JTlQgPSAnc3RvcmVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1N0b3JlRmluZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBvY2NNb2R1bGVDb25maWc6IE9jY0NvbmZpZykge31cblxuICBmaW5kU3RvcmVzKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IExvbmdpdHVkZUxhdGl0dWRlXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbE9jY0ZpbmRTdG9yZXMocXVlcnksIHNlYXJjaENvbmZpZywgbG9uZ2l0dWRlTGF0aXR1ZGUpO1xuICB9XG5cbiAgc3RvcmVzQ291bnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzdG9yZUNvdW50VXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgnc3RvcmVzY291bnRzJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHN0b3JlQ291bnRVcmwpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGZpbmRTdG9yZUJ5SWQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzdG9yZURldGFpbHNVcmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KHN0b3JlSWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgZmllbGRzOiAnRlVMTCcgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoc3RvcmVEZXRhaWxzVXJsLCB7IHBhcmFtcyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2FsbE9jY0ZpbmRTdG9yZXMoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogTG9uZ2l0dWRlTGF0aXR1ZGVcbiAgKTogT2JzZXJ2YWJsZTxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KCk7XG4gICAgbGV0IHBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6XG4gICAgICAgICdmaWVsZHM9c3RvcmVzKG5hbWUsZGlzcGxheU5hbWUsb3BlbmluZ0hvdXJzKHdlZWtEYXlPcGVuaW5nTGlzdChGVUxMKSxzcGVjaWFsRGF5T3BlbmluZ0xpc3QoRlVMTCkpLCcgK1xuICAgICAgICAnZ2VvUG9pbnQobGF0aXR1ZGUsbG9uZ2l0dWRlKSxhZGRyZXNzKGxpbmUxLGxpbmUyLHRvd24scmVnaW9uKEZVTEwpLHBvc3RhbENvZGUscGhvbmUsY291bnRyeSxlbWFpbCksIGZlYXR1cmVzKSwnICtcbiAgICAgICAgJ3BhZ2luYXRpb24oREVGQVVMVCksJyArXG4gICAgICAgICdzb3J0cyhERUZBVUxUKSdcbiAgICB9KTtcblxuICAgIGlmIChsb25naXR1ZGVMYXRpdHVkZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbG9uZ2l0dWRlJywgU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxvbmdpdHVkZSkpO1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbGF0aXR1ZGUnLCBTdHJpbmcobG9uZ2l0dWRlTGF0aXR1ZGUubGF0aXR1ZGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcucGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgU3RyaW5nKHNlYXJjaENvbmZpZy5wYWdlU2l6ZSkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdjdXJyZW50UGFnZScsIFN0cmluZyhzZWFyY2hDb25maWcuY3VycmVudFBhZ2UpKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5zb3J0KSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdzb3J0Jywgc2VhcmNoQ29uZmlnLnNvcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFN0b3JlRmluZGVyU2VhcmNoUGFnZT4odXJsLCB7IHBhcmFtcyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IuanNvbikge1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0b3Jlc0VuZHBvaW50KHVybD86IHN0cmluZykge1xuICAgIGNvbnN0IGJhc2VVcmwgPVxuICAgICAgdGhpcy5vY2NNb2R1bGVDb25maWcuc2VydmVyLmJhc2VVcmwgK1xuICAgICAgdGhpcy5vY2NNb2R1bGVDb25maWcuc2VydmVyLm9jY1ByZWZpeCArXG4gICAgICB0aGlzLm9jY01vZHVsZUNvbmZpZy5zaXRlLmJhc2VTaXRlICtcbiAgICAgICcvJyArXG4gICAgICBTVE9SRVNfRU5EUE9JTlQ7XG5cbiAgICByZXR1cm4gdXJsID8gYmFzZVVybCArICcvJyArIHVybCA6IGJhc2VVcmw7XG4gIH1cbn1cbiJdfQ==