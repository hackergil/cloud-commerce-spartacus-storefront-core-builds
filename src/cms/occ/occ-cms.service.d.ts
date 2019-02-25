import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IdList } from './../model/idList.model';
import { CmsConfig } from '../config/cms-config';
import { PageContext } from '../../routing/index';
import { CMSPage, CmsComponent, CmsComponentList } from '../../occ/occ-models/index';
export declare class OccCmsService {
    private http;
    private config;
    protected headers: HttpHeaders;
    constructor(http: HttpClient, config: CmsConfig);
    protected getBaseEndPoint(): string;
    loadPageData(pageContext: PageContext, fields?: string): Observable<CMSPage>;
    loadComponent<T extends CmsComponent>(id: string, pageContext: PageContext, fields?: string): Observable<T>;
    loadListComponents(idList: IdList, pageContext: PageContext, fields?: string, currentPage?: number, pageSize?: number, sort?: string): Observable<CmsComponentList>;
    private getRequestParams;
    readonly baseUrl: string;
}
