import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreFinderSearchConfig, LongitudeLatitude } from './../model/index';
import { OccConfig } from '../../occ/config/occ-config';
import { StoreFinderSearchPage } from '../../occ/occ-models';
export declare class OccStoreFinderService {
    private http;
    private occModuleConfig;
    constructor(http: HttpClient, occModuleConfig: OccConfig);
    findStores(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: LongitudeLatitude): Observable<any>;
    storesCount(): Observable<any>;
    findStoreById(storeId: string): Observable<any>;
    protected callOccFindStores(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: LongitudeLatitude): Observable<StoreFinderSearchPage>;
    protected getStoresEndpoint(url?: string): string;
}
