import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccCmsService } from '../../occ/occ-cms.service';
import { DefaultPageService } from '../../services/default-page.service';
import { RoutingService } from '../../../routing/index';
export declare class PageEffects {
    private actions$;
    private occCmsService;
    private defaultPageService;
    private routingService;
    loadPage$: Observable<any>;
    constructor(actions$: Actions, occCmsService: OccCmsService, defaultPageService: DefaultPageService, routingService: RoutingService);
    private getPageData;
    private getPageKey;
    private getCatalogUuid;
    private getComponents;
}
