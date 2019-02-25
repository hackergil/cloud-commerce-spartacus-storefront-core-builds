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
var ENDPOINT_PRODUCT = 'products';
/** @type {?} */
var DEFAULT_SEARCH_CONFIG = {
    pageSize: 20
};
var OccProductSearchService = /** @class */ (function () {
    function OccProductSearchService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @return {?}
     */
    OccProductSearchService.prototype.getProductEndpoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            ENDPOINT_PRODUCT);
    };
    /**
     * @param {?} fullQuery
     * @param {?=} searchConfig
     * @return {?}
     */
    OccProductSearchService.prototype.query = /**
     * @param {?} fullQuery
     * @param {?=} searchConfig
     * @return {?}
     */
    function (fullQuery, searchConfig) {
        if (searchConfig === void 0) { searchConfig = DEFAULT_SEARCH_CONFIG; }
        /** @type {?} */
        var params = new HttpParams({
            fromString: '&fields=' +
                'products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),' +
                'facets,' +
                'breadcrumbs,' +
                'pagination(DEFAULT),' +
                'sorts(DEFAULT)'
        });
        params = params.set('query', fullQuery);
        if (searchConfig.pageSize) {
            params = params.set('pageSize', searchConfig.pageSize.toString());
        }
        if (searchConfig.currentPage) {
            params = params.set('currentPage', searchConfig.currentPage.toString());
        }
        if (searchConfig.sortCode) {
            params = params.set('sort', searchConfig.sortCode);
        }
        return this.http
            .get(this.getProductEndpoint() + '/search', { params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    OccProductSearchService.prototype.queryProductSuggestions = /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    function (term, pageSize) {
        if (pageSize === void 0) { pageSize = 3; }
        return this.http
            .get(this.getProductEndpoint() + '/suggestions', {
            params: new HttpParams()
                .set('term', term)
                .set('max', pageSize.toString())
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    OccProductSearchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductSearchService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccProductSearchService;
}());
export { OccProductSearchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductSearchService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccProductSearchService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L29jYy9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQU1sRCxnQkFBZ0IsR0FBRyxVQUFVOztJQUM3QixxQkFBcUIsR0FBaUI7SUFDMUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjtBQUVEO0lBRUUsaUNBQW9CLElBQWdCLEVBQVUsTUFBaUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7OztJQUV6RCxvREFBa0I7Ozs7SUFBNUI7UUFDRSxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUN6QixHQUFHO1lBQ0gsZ0JBQWdCLENBQ2pCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCx1Q0FBSzs7Ozs7SUFBTCxVQUNFLFNBQWlCLEVBQ2pCLFlBQWtEO1FBQWxELDZCQUFBLEVBQUEsb0NBQWtEOztZQUU5QyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDMUIsVUFBVSxFQUNSLFVBQVU7Z0JBQ1Ysb0ZBQW9GO2dCQUNwRixTQUFTO2dCQUNULGNBQWM7Z0JBQ2Qsc0JBQXNCO2dCQUN0QixnQkFBZ0I7U0FDbkIsQ0FBQztRQUNGLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4QyxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDekIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNuRTtRQUNELElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUM1QixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLFNBQVMsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7YUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRUQseURBQXVCOzs7OztJQUF2QixVQUNFLElBQVksRUFDWixRQUFZO1FBQVoseUJBQUEsRUFBQSxZQUFZO1FBRVosT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxjQUFjLEVBQUU7WUFDL0MsTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFO2lCQUNyQixHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztpQkFDakIsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O2dCQXRERixVQUFVOzs7O2dCQWpCRixVQUFVO2dCQU1WLFNBQVM7O0lBa0VsQiw4QkFBQztDQUFBLEFBdkRELElBdURDO1NBdERZLHVCQUF1Qjs7Ozs7O0lBQ3RCLHVDQUF3Qjs7Ozs7SUFBRSx5Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQge1xuICBTdWdnZXN0aW9uTGlzdCxcbiAgUHJvZHVjdFNlYXJjaFBhZ2Vcbn0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbmNvbnN0IEVORFBPSU5UX1BST0RVQ1QgPSAncHJvZHVjdHMnO1xuY29uc3QgREVGQVVMVF9TRUFSQ0hfQ09ORklHOiBTZWFyY2hDb25maWcgPSB7XG4gIHBhZ2VTaXplOiAyMFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RTZWFyY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRQcm9kdWN0RW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5zZXJ2ZXIuYmFzZVVybCB8fCAnJykgK1xuICAgICAgdGhpcy5jb25maWcuc2VydmVyLm9jY1ByZWZpeCArXG4gICAgICB0aGlzLmNvbmZpZy5zaXRlLmJhc2VTaXRlICtcbiAgICAgICcvJyArXG4gICAgICBFTkRQT0lOVF9QUk9EVUNUXG4gICAgKTtcbiAgfVxuXG4gIHF1ZXJ5KFxuICAgIGZ1bGxRdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnID0gREVGQVVMVF9TRUFSQ0hfQ09ORklHXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzpcbiAgICAgICAgJyZmaWVsZHM9JyArXG4gICAgICAgICdwcm9kdWN0cyhjb2RlLG5hbWUsc3VtbWFyeSxwcmljZShGVUxMKSxpbWFnZXMoREVGQVVMVCksc3RvY2soRlVMTCksYXZlcmFnZVJhdGluZyksJyArXG4gICAgICAgICdmYWNldHMsJyArXG4gICAgICAgICdicmVhZGNydW1icywnICtcbiAgICAgICAgJ3BhZ2luYXRpb24oREVGQVVMVCksJyArXG4gICAgICAgICdzb3J0cyhERUZBVUxUKSdcbiAgICB9KTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdxdWVyeScsIGZ1bGxRdWVyeSk7XG4gICAgaWYgKHNlYXJjaENvbmZpZy5wYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncGFnZVNpemUnLCBzZWFyY2hDb25maWcucGFnZVNpemUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnNvcnRDb2RlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdzb3J0Jywgc2VhcmNoQ29uZmlnLnNvcnRDb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0UHJvZHVjdEVuZHBvaW50KCkgKyAnL3NlYXJjaCcsIHsgcGFyYW1zIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHF1ZXJ5UHJvZHVjdFN1Z2dlc3Rpb25zKFxuICAgIHRlcm06IHN0cmluZyxcbiAgICBwYWdlU2l6ZSA9IDNcbiAgKTogT2JzZXJ2YWJsZTxTdWdnZXN0aW9uTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRQcm9kdWN0RW5kcG9pbnQoKSArICcvc3VnZ2VzdGlvbnMnLCB7XG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgICAgIC5zZXQoJ3Rlcm0nLCB0ZXJtKVxuICAgICAgICAgIC5zZXQoJ21heCcsIHBhZ2VTaXplLnRvU3RyaW5nKCkpXG4gICAgICB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cbn1cbiJdfQ==