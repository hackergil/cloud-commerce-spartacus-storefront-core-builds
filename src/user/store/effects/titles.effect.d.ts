import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/titles.action';
import { OccMiscsService } from '../../../occ/miscs/miscs.service';
export declare class TitlesEffects {
    private actions$;
    private occMiscsService;
    loadTitles$: Observable<fromAction.TitlesAction>;
    constructor(actions$: Actions, occMiscsService: OccMiscsService);
}
