import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccConfig } from '../../occ/config/occ-config';
import { LanguageList, CurrencyList } from '../../occ/occ-models/occ.models';
export declare class OccSiteService {
    private http;
    private config;
    constructor(http: HttpClient, config: OccConfig);
    protected getBaseEndPoint(): string;
    loadLanguages(): Observable<LanguageList>;
    loadCurrencies(): Observable<CurrencyList>;
}
