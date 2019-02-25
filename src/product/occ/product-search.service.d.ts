import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchConfig } from '../model/search-config';
import { OccConfig } from '../../occ/config/occ-config';
import { SuggestionList, ProductSearchPage } from '../../occ/occ-models/occ.models';
export declare class OccProductSearchService {
    private http;
    private config;
    constructor(http: HttpClient, config: OccConfig);
    protected getProductEndpoint(): string;
    query(fullQuery: string, searchConfig?: SearchConfig): Observable<ProductSearchPage>;
    queryProductSuggestions(term: string, pageSize?: number): Observable<SuggestionList>;
}
