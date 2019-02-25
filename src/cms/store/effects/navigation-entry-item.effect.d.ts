import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccCmsService } from '../../occ/occ-cms.service';
import { IdList } from '../../model/idList.model';
import { RoutingService } from '../../../routing/index';
export declare class NavigationEntryItemEffects {
    private actions$;
    private occCmsService;
    private routingService;
    loadNavigationItems$: Observable<any>;
    getIdListByItemType(itemList: any[]): {
        pageIds: IdList;
        componentIds: IdList;
        mediaIds: IdList;
    };
    constructor(actions$: Actions, occCmsService: OccCmsService, routingService: RoutingService);
}
