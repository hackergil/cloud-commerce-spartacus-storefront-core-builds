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
const ENDPOINT_COUNTRIES = 'countries';
/** @type {?} */
const ENDPOINT_TITLES = 'titles';
/** @type {?} */
const ENDPOINT_CARD_TYPES = 'cardtypes';
/** @type {?} */
const ENDPOINT_REGIONS = 'regions';
/** @type {?} */
const COUNTRIES_TYPE_SHIPPING = 'SHIPPING';
/** @type {?} */
const COUNTRIES_TYPE_BILLING = 'BILLING';
export class OccMiscsService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @param {?} endpoint
     * @return {?}
     */
    getEndpoint(endpoint) {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            endpoint);
    }
    /**
     * @return {?}
     */
    loadDeliveryCountries() {
        return this.http
            .get(this.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_SHIPPING)
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @return {?}
     */
    loadBillingCountries() {
        return this.http
            .get(this.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_BILLING)
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @return {?}
     */
    loadTitles() {
        return this.http
            .get(this.getEndpoint(ENDPOINT_TITLES))
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @return {?}
     */
    loadCardTypes() {
        return this.http
            .get(this.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        return this.http
            .get(this.getEndpoint(this.buildRegionsUrl(countryIsoCode)))
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @private
     * @param {?} countryIsoCode
     * @return {?}
     */
    buildRegionsUrl(countryIsoCode) {
        return `${ENDPOINT_COUNTRIES}/${countryIsoCode}/${ENDPOINT_REGIONS}`;
    }
}
OccMiscsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccMiscsService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvbWlzY3MvbWlzY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7TUFRM0Msa0JBQWtCLEdBQUcsV0FBVzs7TUFDaEMsZUFBZSxHQUFHLFFBQVE7O01BQzFCLG1CQUFtQixHQUFHLFdBQVc7O01BQ2pDLGdCQUFnQixHQUFHLFNBQVM7O01BQzVCLHVCQUF1QixHQUFHLFVBQVU7O01BQ3BDLHNCQUFzQixHQUFHLFNBQVM7QUFHeEMsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBQzFCLFlBQW9CLElBQWdCLEVBQVUsTUFBaUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7Ozs7SUFFekQsV0FBVyxDQUFDLFFBQWdCO1FBQ3BDLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3pCLEdBQUc7WUFDSCxRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDdEQsTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQztTQUM5RCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQ3RELE1BQU0sRUFBRSxJQUFJLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUM7U0FDN0QsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsY0FBc0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBYSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzthQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxjQUFzQjtRQUM1QyxPQUFPLEdBQUcsa0JBQWtCLElBQUksY0FBYyxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDdkUsQ0FBQzs7O1lBbERGLFVBQVU7Ozs7WUFqQkYsVUFBVTtZQUVWLFNBQVM7Ozs7Ozs7SUFpQkosK0JBQXdCOzs7OztJQUFFLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHtcbiAgQ291bnRyeUxpc3QsXG4gIFRpdGxlTGlzdCxcbiAgQ2FyZFR5cGVMaXN0LFxuICBSZWdpb25MaXN0XG59IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcblxuY29uc3QgRU5EUE9JTlRfQ09VTlRSSUVTID0gJ2NvdW50cmllcyc7XG5jb25zdCBFTkRQT0lOVF9USVRMRVMgPSAndGl0bGVzJztcbmNvbnN0IEVORFBPSU5UX0NBUkRfVFlQRVMgPSAnY2FyZHR5cGVzJztcbmNvbnN0IEVORFBPSU5UX1JFR0lPTlMgPSAncmVnaW9ucyc7XG5jb25zdCBDT1VOVFJJRVNfVFlQRV9TSElQUElORyA9ICdTSElQUElORyc7XG5jb25zdCBDT1VOVFJJRVNfVFlQRV9CSUxMSU5HID0gJ0JJTExJTkcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjTWlzY3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5zZXJ2ZXIuYmFzZVVybCB8fCAnJykgK1xuICAgICAgdGhpcy5jb25maWcuc2VydmVyLm9jY1ByZWZpeCArXG4gICAgICB0aGlzLmNvbmZpZy5zaXRlLmJhc2VTaXRlICtcbiAgICAgICcvJyArXG4gICAgICBlbmRwb2ludFxuICAgICk7XG4gIH1cblxuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Q291bnRyeUxpc3Q+KHRoaXMuZ2V0RW5kcG9pbnQoRU5EUE9JTlRfQ09VTlRSSUVTKSwge1xuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd0eXBlJywgQ09VTlRSSUVTX1RZUEVfU0hJUFBJTkcpXG4gICAgICB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBsb2FkQmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxDb3VudHJ5TGlzdD4odGhpcy5nZXRFbmRwb2ludChFTkRQT0lOVF9DT1VOVFJJRVMpLCB7XG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3R5cGUnLCBDT1VOVFJJRVNfVFlQRV9CSUxMSU5HKVxuICAgICAgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8VGl0bGVMaXN0Pih0aGlzLmdldEVuZHBvaW50KEVORFBPSU5UX1RJVExFUykpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGxvYWRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PENhcmRUeXBlTGlzdD4odGhpcy5nZXRFbmRwb2ludChFTkRQT0lOVF9DQVJEX1RZUEVTKSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8UmVnaW9uTGlzdD4odGhpcy5nZXRFbmRwb2ludCh0aGlzLmJ1aWxkUmVnaW9uc1VybChjb3VudHJ5SXNvQ29kZSkpKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmVnaW9uc1VybChjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7RU5EUE9JTlRfQ09VTlRSSUVTfS8ke2NvdW50cnlJc29Db2RlfS8ke0VORFBPSU5UX1JFR0lPTlN9YDtcbiAgfVxufVxuIl19