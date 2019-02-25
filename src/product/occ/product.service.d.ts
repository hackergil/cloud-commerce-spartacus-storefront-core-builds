import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OccConfig } from '../../occ/config/occ-config';
import { Product, ReviewList, Review } from '../../occ/occ-models/occ.models';
export declare class OccProductService {
    private http;
    private config;
    constructor(http: HttpClient, config: OccConfig);
    protected getProductEndpoint(): string;
    loadProduct(productCode: string): Observable<Product>;
    loadProductReviews(productCode: string, maxCount?: number): Observable<ReviewList>;
    postProductReview(productCode: String, review: any): Observable<Review>;
}
