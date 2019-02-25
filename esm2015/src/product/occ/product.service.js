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
const ENDPOINT_PRODUCT = 'products';
export class OccProductService {
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
     * @return {?}
     */
    getProductEndpoint() {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            ENDPOINT_PRODUCT);
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    loadProduct(productCode) {
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'fields=DEFAULT,averageRating,images(FULL),classifications,numberOfReviews'
        });
        return this.http
            .get(this.getProductEndpoint() + `/${productCode}`, { params: params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    loadProductReviews(productCode, maxCount) {
        /** @type {?} */
        let url = this.getProductEndpoint() + `/${productCode}/reviews`;
        if (maxCount && maxCount > 0) {
            url += `?maxCount=${maxCount}`;
        }
        return this.http
            .get(url)
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    postProductReview(productCode, review) {
        /** @type {?} */
        const url = this.getProductEndpoint() + `/${productCode}/reviews`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        /** @type {?} */
        const body = new URLSearchParams();
        body.append('headline', review.headline);
        body.append('comment', review.comment);
        body.append('rating', review.rating.toString());
        body.append('alias', review.alias);
        return this.http
            .post(url, body.toString(), { headers })
            .pipe(catchError((error) => throwError(error.json())));
    }
}
OccProductService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O01BR2xELGdCQUFnQixHQUFHLFVBQVU7QUFHbkMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsWUFBb0IsSUFBZ0IsRUFBVSxNQUFpQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7O0lBRXpELGtCQUFrQjtRQUMxQixPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUN6QixHQUFHO1lBQ0gsZ0JBQWdCLENBQ2pCLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxXQUFtQjs7Y0FDdkIsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzVCLFVBQVUsRUFDUiwyRUFBMkU7U0FDOUUsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxXQUFXLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUNoQixXQUFtQixFQUNuQixRQUFpQjs7WUFFYixHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxXQUFXLFVBQVU7UUFDL0QsSUFBSSxRQUFRLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtZQUM1QixHQUFHLElBQUksYUFBYSxRQUFRLEVBQUUsQ0FBQztTQUNoQztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFTSxpQkFBaUIsQ0FDdEIsV0FBbUIsRUFDbkIsTUFBVzs7Y0FFTCxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxXQUFXLFVBQVU7O2NBRTNELE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BELENBQUM7O2NBRUksSUFBSSxHQUFHLElBQUksZUFBZSxFQUFFO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQTFERixVQUFVOzs7O1lBVkYsVUFBVTtZQUtWLFNBQVM7Ozs7Ozs7SUFPSixpQ0FBd0I7Ozs7O0lBQUUsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBQcm9kdWN0LCBSZXZpZXdMaXN0LCBSZXZpZXcgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuY29uc3QgRU5EUE9JTlRfUFJPRFVDVCA9ICdwcm9kdWN0cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZykge31cblxuICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdEVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5zZXJ2ZXIuYmFzZVVybCB8fCAnJykgK1xuICAgICAgdGhpcy5jb25maWcuc2VydmVyLm9jY1ByZWZpeCArXG4gICAgICB0aGlzLmNvbmZpZy5zaXRlLmJhc2VTaXRlICtcbiAgICAgICcvJyArXG4gICAgICBFTkRQT0lOVF9QUk9EVUNUXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRQcm9kdWN0KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOlxuICAgICAgICAnZmllbGRzPURFRkFVTFQsYXZlcmFnZVJhdGluZyxpbWFnZXMoRlVMTCksY2xhc3NpZmljYXRpb25zLG51bWJlck9mUmV2aWV3cydcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRQcm9kdWN0RW5kcG9pbnQoKSArIGAvJHtwcm9kdWN0Q29kZX1gLCB7IHBhcmFtczogcGFyYW1zIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGxvYWRQcm9kdWN0UmV2aWV3cyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIG1heENvdW50PzogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8UmV2aWV3TGlzdD4ge1xuICAgIGxldCB1cmwgPSB0aGlzLmdldFByb2R1Y3RFbmRwb2ludCgpICsgYC8ke3Byb2R1Y3RDb2RlfS9yZXZpZXdzYDtcbiAgICBpZiAobWF4Q291bnQgJiYgbWF4Q291bnQgPiAwKSB7XG4gICAgICB1cmwgKz0gYD9tYXhDb3VudD0ke21heENvdW50fWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh1cmwpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBwb3N0UHJvZHVjdFJldmlldyhcbiAgICBwcm9kdWN0Q29kZTogU3RyaW5nLFxuICAgIHJldmlldzogYW55XG4gICk6IE9ic2VydmFibGU8UmV2aWV3PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRQcm9kdWN0RW5kcG9pbnQoKSArIGAvJHtwcm9kdWN0Q29kZX0vcmV2aWV3c2A7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBib2R5LmFwcGVuZCgnaGVhZGxpbmUnLCByZXZpZXcuaGVhZGxpbmUpO1xuICAgIGJvZHkuYXBwZW5kKCdjb21tZW50JywgcmV2aWV3LmNvbW1lbnQpO1xuICAgIGJvZHkuYXBwZW5kKCdyYXRpbmcnLCByZXZpZXcucmF0aW5nLnRvU3RyaW5nKCkpO1xuICAgIGJvZHkuYXBwZW5kKCdhbGlhcycsIHJldmlldy5hbGlhcyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGJvZHkudG9TdHJpbmcoKSwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxufVxuIl19