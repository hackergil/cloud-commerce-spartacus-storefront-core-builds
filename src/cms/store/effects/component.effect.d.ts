import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccCmsService } from '../../occ/occ-cms.service';
import { RoutingService } from '../../../routing/index';
export declare class ComponentEffects {
    private actions$;
    private occCmsService;
    private routingService;
    constructor(actions$: Actions, occCmsService: OccCmsService, routingService: RoutingService);
    loadComponent$: Observable<any>;
}
