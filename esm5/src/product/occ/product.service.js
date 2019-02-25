/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccConfig } from '../../occ/config/occ-config';
/** @type {?} */
var ENDPOINT_PRODUCT = 'products';
var OccProductService = /** @class */ (function () {
    function OccProductService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @return {?}
     */
    OccProductService.prototype.getProductEndpoint = /**
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
     * @param {?} productCode
     * @return {?}
     */
    OccProductService.prototype.loadProduct = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'fields=DEFAULT,averageRating,images(FULL),classifications,numberOfReviews'
        });
        return this.http
            .get(this.getProductEndpoint() + ("/" + productCode), { params: params })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    OccProductService.prototype.loadProductReviews = /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    function (productCode, maxCount) {
        /** @type {?} */
        var url = this.getProductEndpoint() + ("/" + productCode + "/reviews");
        if (maxCount && maxCount > 0) {
            url += "?maxCount=" + maxCount;
        }
        return this.http
            .get(url)
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    OccProductService.prototype.postProductReview = /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    function (productCode, review) {
        /** @type {?} */
        var url = this.getProductEndpoint() + ("/" + productCode + "/reviews");
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        /** @type {?} */
        var body = new URLSearchParams();
        body.append('headline', review.headline);
        body.append('comment', review.comment);
        body.append('rating', review.rating.toString());
        body.append('alias', review.alias);
        return this.http
            .post(url, body.toString(), { headers: headers })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    OccProductService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccConfig }
    ]; };
    return OccProductService;
}());
export { OccProductService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccProductService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0lBR2xELGdCQUFnQixHQUFHLFVBQVU7QUFFbkM7SUFFRSwyQkFBb0IsSUFBZ0IsRUFBVSxNQUFpQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7O0lBRXpELDhDQUFrQjs7OztJQUE1QjtRQUNFLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3pCLEdBQUc7WUFDSCxnQkFBZ0IsQ0FDakIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLFdBQW1COztZQUN2QixNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUNSLDJFQUEyRTtTQUM5RSxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBRyxNQUFJLFdBQWEsQ0FBQSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVELDhDQUFrQjs7Ozs7SUFBbEIsVUFDRSxXQUFtQixFQUNuQixRQUFpQjs7WUFFYixHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUcsTUFBSSxXQUFXLGFBQVUsQ0FBQTtRQUMvRCxJQUFJLFFBQVEsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLEdBQUcsSUFBSSxlQUFhLFFBQVUsQ0FBQztTQUNoQztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRU0sNkNBQWlCOzs7OztJQUF4QixVQUNFLFdBQW1CLEVBQ25CLE1BQVc7O1lBRUwsR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFHLE1BQUksV0FBVyxhQUFVLENBQUE7O1lBRTNELE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BELENBQUM7O1lBRUksSUFBSSxHQUFHLElBQUksZUFBZSxFQUFFO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O2dCQTFERixVQUFVOzs7O2dCQVZGLFVBQVU7Z0JBS1YsU0FBUzs7SUFnRWxCLHdCQUFDO0NBQUEsQUEzREQsSUEyREM7U0ExRFksaUJBQWlCOzs7Ozs7SUFDaEIsaUNBQXdCOzs7OztJQUFFLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUmV2aWV3TGlzdCwgUmV2aWV3IH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbmNvbnN0IEVORFBPSU5UX1BST0RVQ1QgPSAncHJvZHVjdHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcuc2VydmVyLmJhc2VVcmwgfHwgJycpICtcbiAgICAgIHRoaXMuY29uZmlnLnNlcnZlci5vY2NQcmVmaXggK1xuICAgICAgdGhpcy5jb25maWcuc2l0ZS5iYXNlU2l0ZSArXG4gICAgICAnLycgK1xuICAgICAgRU5EUE9JTlRfUFJPRFVDVFxuICAgICk7XG4gIH1cblxuICBsb2FkUHJvZHVjdChwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzpcbiAgICAgICAgJ2ZpZWxkcz1ERUZBVUxULGF2ZXJhZ2VSYXRpbmcsaW1hZ2VzKEZVTEwpLGNsYXNzaWZpY2F0aW9ucyxudW1iZXJPZlJldmlld3MnXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0UHJvZHVjdEVuZHBvaW50KCkgKyBgLyR7cHJvZHVjdENvZGV9YCwgeyBwYXJhbXM6IHBhcmFtcyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBsb2FkUHJvZHVjdFJldmlld3MoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBtYXhDb3VudD86IG51bWJlclxuICApOiBPYnNlcnZhYmxlPFJldmlld0xpc3Q+IHtcbiAgICBsZXQgdXJsID0gdGhpcy5nZXRQcm9kdWN0RW5kcG9pbnQoKSArIGAvJHtwcm9kdWN0Q29kZX0vcmV2aWV3c2A7XG4gICAgaWYgKG1heENvdW50ICYmIG1heENvdW50ID4gMCkge1xuICAgICAgdXJsICs9IGA/bWF4Q291bnQ9JHttYXhDb3VudH1gO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodXJsKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwdWJsaWMgcG9zdFByb2R1Y3RSZXZpZXcoXG4gICAgcHJvZHVjdENvZGU6IFN0cmluZyxcbiAgICByZXZpZXc6IGFueVxuICApOiBPYnNlcnZhYmxlPFJldmlldz4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0UHJvZHVjdEVuZHBvaW50KCkgKyBgLyR7cHJvZHVjdENvZGV9L3Jldmlld3NgO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgYm9keS5hcHBlbmQoJ2hlYWRsaW5lJywgcmV2aWV3LmhlYWRsaW5lKTtcbiAgICBib2R5LmFwcGVuZCgnY29tbWVudCcsIHJldmlldy5jb21tZW50KTtcbiAgICBib2R5LmFwcGVuZCgncmF0aW5nJywgcmV2aWV3LnJhdGluZy50b1N0cmluZygpKTtcbiAgICBib2R5LmFwcGVuZCgnYWxpYXMnLCByZXZpZXcuYWxpYXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QodXJsLCBib2R5LnRvU3RyaW5nKCksIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cbn1cbiJdfQ==