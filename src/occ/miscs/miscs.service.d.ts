import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccConfig } from '../config/occ-config';
import { CountryList, TitleList, CardTypeList, RegionList } from '../../occ/occ-models/index';
export declare class OccMiscsService {
    private http;
    private config;
    constructor(http: HttpClient, config: OccConfig);
    protected getEndpoint(endpoint: string): string;
    loadDeliveryCountries(): Observable<CountryList>;
    loadBillingCountries(): Observable<CountryList>;
    loadTitles(): Observable<TitleList>;
    loadCardTypes(): Observable<CardTypeList>;
    loadRegions(countryIsoCode: string): Observable<RegionList>;
    private buildRegionsUrl;
}
