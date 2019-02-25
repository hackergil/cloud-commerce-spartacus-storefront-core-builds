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
const STORES_ENDPOINT = 'stores';
export class OccStoreFinderService {
    /**
     * @param {?} http
     * @param {?} occModuleConfig
     */
    constructor(http, occModuleConfig) {
        this.http = http;
        this.occModuleConfig = occModuleConfig;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    findStores(query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude);
    }
    /**
     * @return {?}
     */
    storesCount() {
        /** @type {?} */
        const storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http
            .get(storeCountUrl)
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} storeId
     * @return {?}
     */
    findStoreById(storeId) {
        /** @type {?} */
        const storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        const params = { fields: 'FULL' };
        return this.http
            .get(storeDetailsUrl, { params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    callOccFindStores(query, searchConfig, longitudeLatitude) {
        /** @type {?} */
        const url = this.getStoresEndpoint();
        /** @type {?} */
        let params = new HttpParams({
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
        return this.http.get(url, { params }).pipe(catchError((error) => {
            if (error.json) {
                return throwError(error.json());
            }
            return throwError(error);
        }));
    }
    /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    getStoresEndpoint(url) {
        /** @type {?} */
        const baseUrl = this.occModuleConfig.server.baseUrl +
            this.occModuleConfig.server.occPrefix +
            this.occModuleConfig.site.baseSite +
            '/' +
            STORES_ENDPOINT;
        return url ? baseUrl + '/' + url : baseUrl;
    }
}
OccStoreFinderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccStoreFinderService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL29jYy9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7TUFHbEQsZUFBZSxHQUFHLFFBQVE7QUFHaEMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFDaEMsWUFBb0IsSUFBZ0IsRUFBVSxlQUEwQjtRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQVc7SUFBRyxDQUFDOzs7Ozs7O0lBRTVFLFVBQVUsQ0FDUixLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQXFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBRUQsV0FBVzs7Y0FDSCxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztRQUU1RCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLGFBQWEsQ0FBQzthQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQWU7O2NBQ3JCLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOztjQUNqRCxNQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7OztJQUVTLGlCQUFpQixDQUN6QixLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQXFDOztjQUUvQixHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFOztZQUNoQyxNQUFNLEdBQWUsSUFBSSxVQUFVLENBQUM7WUFDdEMsVUFBVSxFQUNSLG9HQUFvRztnQkFDcEcsZ0hBQWdIO2dCQUNoSCxzQkFBc0I7Z0JBQ3RCLGdCQUFnQjtTQUNuQixDQUFDO1FBRUYsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDekIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUM1QixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDL0QsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNkLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLGlCQUFpQixDQUFDLEdBQVk7O2NBQ2hDLE9BQU8sR0FDWCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNsQyxHQUFHO1lBQ0gsZUFBZTtRQUVqQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM3QyxDQUFDOzs7WUE5RUYsVUFBVTs7OztZQVhGLFVBQVU7WUFNVixTQUFTOzs7Ozs7O0lBT0oscUNBQXdCOzs7OztJQUFFLGdEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZywgTG9uZ2l0dWRlTGF0aXR1ZGUgfSBmcm9tICcuLy4uL21vZGVsL2luZGV4JztcblxuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzJztcblxuY29uc3QgU1RPUkVTX0VORFBPSU5UID0gJ3N0b3Jlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NTdG9yZUZpbmRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgb2NjTW9kdWxlQ29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgZmluZFN0b3JlcyhcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBMb25naXR1ZGVMYXRpdHVkZVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNhbGxPY2NGaW5kU3RvcmVzKHF1ZXJ5LCBzZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlKTtcbiAgfVxuXG4gIHN0b3Jlc0NvdW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgc3RvcmVDb3VudFVybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoJ3N0b3Jlc2NvdW50cycpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChzdG9yZUNvdW50VXJsKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBmaW5kU3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgc3RvcmVEZXRhaWxzVXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludChzdG9yZUlkKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7IGZpZWxkczogJ0ZVTEwnIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHN0b3JlRGV0YWlsc1VybCwgeyBwYXJhbXMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNhbGxPY2NGaW5kU3RvcmVzKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IExvbmdpdHVkZUxhdGl0dWRlXG4gICk6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgpO1xuICAgIGxldCBwYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOlxuICAgICAgICAnZmllbGRzPXN0b3JlcyhuYW1lLGRpc3BsYXlOYW1lLG9wZW5pbmdIb3Vycyh3ZWVrRGF5T3BlbmluZ0xpc3QoRlVMTCksc3BlY2lhbERheU9wZW5pbmdMaXN0KEZVTEwpKSwnICtcbiAgICAgICAgJ2dlb1BvaW50KGxhdGl0dWRlLGxvbmdpdHVkZSksYWRkcmVzcyhsaW5lMSxsaW5lMix0b3duLHJlZ2lvbihGVUxMKSxwb3N0YWxDb2RlLHBob25lLGNvdW50cnksZW1haWwpLCBmZWF0dXJlcyksJyArXG4gICAgICAgICdwYWdpbmF0aW9uKERFRkFVTFQpLCcgK1xuICAgICAgICAnc29ydHMoREVGQVVMVCknXG4gICAgfSk7XG5cbiAgICBpZiAobG9uZ2l0dWRlTGF0aXR1ZGUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2xvbmdpdHVkZScsIFN0cmluZyhsb25naXR1ZGVMYXRpdHVkZS5sb25naXR1ZGUpKTtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2xhdGl0dWRlJywgU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxhdGl0dWRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIFN0cmluZyhzZWFyY2hDb25maWcucGFnZVNpemUpKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnY3VycmVudFBhZ2UnLCBTdHJpbmcoc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlKSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuc29ydCkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnc29ydCcsIHNlYXJjaENvbmZpZy5zb3J0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+KHVybCwgeyBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLmpzb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdG9yZXNFbmRwb2ludCh1cmw/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBiYXNlVXJsID1cbiAgICAgIHRoaXMub2NjTW9kdWxlQ29uZmlnLnNlcnZlci5iYXNlVXJsICtcbiAgICAgIHRoaXMub2NjTW9kdWxlQ29uZmlnLnNlcnZlci5vY2NQcmVmaXggK1xuICAgICAgdGhpcy5vY2NNb2R1bGVDb25maWcuc2l0ZS5iYXNlU2l0ZSArXG4gICAgICAnLycgK1xuICAgICAgU1RPUkVTX0VORFBPSU5UO1xuXG4gICAgcmV0dXJuIHVybCA/IGJhc2VVcmwgKyAnLycgKyB1cmwgOiBiYXNlVXJsO1xuICB9XG59XG4iXX0=