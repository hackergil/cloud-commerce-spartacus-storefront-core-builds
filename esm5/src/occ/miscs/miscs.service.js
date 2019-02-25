/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { OccConfig } from '../config/occ-config';
/** @type {?} */
var ENDPOINT_COUNTRIES = 'countries';
/** @type {?} */
var ENDPOINT_TITLES = 'titles';
/** @type {?} */
var ENDPOINT_CARD_TYPES = 'cardtypes';
/** @type {?} */
var ENDPOINT_REGIONS = 'regions';
/** @type {?} */
var COUNTRIES_TYPE_SHIPPING = 'SHIPPING';
/** @type {?} */
var COUNTRIES_TYPE_BILLING = 'BILLING';
var OccMiscsService = /** @class */ (function () {
    function OccMiscsService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @param {?} endpoint
     * @return {?}
     */
    OccMiscsService.prototype.getEndpoint = /**
     * @protected
     * @param {?} endpoint
     * @return {?}
     */
    function (endpoint) {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            endpoint);
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadDeliveryCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_SHIPPING)
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadBillingCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_BILLING)
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadTitles = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getEndpoint(ENDPOINT_TITLES))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadCardTypes = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    OccMiscsService.prototype.loadRegions = /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return this.http
            .get(this.getEndpoint(this.buildRegionsUrl(countryIsoCode)))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @private
     * @param {?} countryIsoCode
     * @return {?}
     */
    OccMiscsService.prototype.buildRegionsUrl = /**
     * @private
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return ENDPOINT_COUNTRIES + "/" + countryIsoCode + "/" + ENDPOINT_REGIONS;
    };
    OccMiscsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccMiscsService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccMiscsService;
}());
export { OccMiscsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccMiscsService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccMiscsService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvbWlzY3MvbWlzY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFRM0Msa0JBQWtCLEdBQUcsV0FBVzs7SUFDaEMsZUFBZSxHQUFHLFFBQVE7O0lBQzFCLG1CQUFtQixHQUFHLFdBQVc7O0lBQ2pDLGdCQUFnQixHQUFHLFNBQVM7O0lBQzVCLHVCQUF1QixHQUFHLFVBQVU7O0lBQ3BDLHNCQUFzQixHQUFHLFNBQVM7QUFFeEM7SUFFRSx5QkFBb0IsSUFBZ0IsRUFBVSxNQUFpQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7OztJQUV6RCxxQ0FBVzs7Ozs7SUFBckIsVUFBc0IsUUFBZ0I7UUFDcEMsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDekIsR0FBRztZQUNILFFBQVEsQ0FDVCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELCtDQUFxQjs7O0lBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDdEQsTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQztTQUM5RCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELDhDQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDdEQsTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQztTQUM3RCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsdUNBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBZSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksY0FBc0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBYSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzthQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFTyx5Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsY0FBc0I7UUFDNUMsT0FBVSxrQkFBa0IsU0FBSSxjQUFjLFNBQUksZ0JBQWtCLENBQUM7SUFDdkUsQ0FBQzs7Z0JBbERGLFVBQVU7Ozs7Z0JBakJGLFVBQVU7Z0JBRVYsU0FBUzs7SUFrRWxCLHNCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FsRFksZUFBZTs7Ozs7O0lBQ2QsK0JBQXdCOzs7OztJQUFFLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHtcbiAgQ291bnRyeUxpc3QsXG4gIFRpdGxlTGlzdCxcbiAgQ2FyZFR5cGVMaXN0LFxuICBSZWdpb25MaXN0XG59IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcblxuY29uc3QgRU5EUE9JTlRfQ09VTlRSSUVTID0gJ2NvdW50cmllcyc7XG5jb25zdCBFTkRQT0lOVF9USVRMRVMgPSAndGl0bGVzJztcbmNvbnN0IEVORFBPSU5UX0NBUkRfVFlQRVMgPSAnY2FyZHR5cGVzJztcbmNvbnN0IEVORFBPSU5UX1JFR0lPTlMgPSAncmVnaW9ucyc7XG5jb25zdCBDT1VOVFJJRVNfVFlQRV9TSElQUElORyA9ICdTSElQUElORyc7XG5jb25zdCBDT1VOVFJJRVNfVFlQRV9CSUxMSU5HID0gJ0JJTExJTkcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjTWlzY3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5zZXJ2ZXIuYmFzZVVybCB8fCAnJykgK1xuICAgICAgdGhpcy5jb25maWcuc2VydmVyLm9jY1ByZWZpeCArXG4gICAgICB0aGlzLmNvbmZpZy5zaXRlLmJhc2VTaXRlICtcbiAgICAgICcvJyArXG4gICAgICBlbmRwb2ludFxuICAgICk7XG4gIH1cblxuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Q291bnRyeUxpc3Q+KHRoaXMuZ2V0RW5kcG9pbnQoRU5EUE9JTlRfQ09VTlRSSUVTKSwge1xuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd0eXBlJywgQ09VTlRSSUVTX1RZUEVfU0hJUFBJTkcpXG4gICAgICB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBsb2FkQmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxDb3VudHJ5TGlzdD4odGhpcy5nZXRFbmRwb2ludChFTkRQT0lOVF9DT1VOVFJJRVMpLCB7XG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3R5cGUnLCBDT1VOVFJJRVNfVFlQRV9CSUxMSU5HKVxuICAgICAgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8VGl0bGVMaXN0Pih0aGlzLmdldEVuZHBvaW50KEVORFBPSU5UX1RJVExFUykpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGxvYWRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PENhcmRUeXBlTGlzdD4odGhpcy5nZXRFbmRwb2ludChFTkRQT0lOVF9DQVJEX1RZUEVTKSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8UmVnaW9uTGlzdD4odGhpcy5nZXRFbmRwb2ludCh0aGlzLmJ1aWxkUmVnaW9uc1VybChjb3VudHJ5SXNvQ29kZSkpKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmVnaW9uc1VybChjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7RU5EUE9JTlRfQ09VTlRSSUVTfS8ke2NvdW50cnlJc29Db2RlfS8ke0VORFBPSU5UX1JFR0lPTlN9YDtcbiAgfVxufVxuIl19