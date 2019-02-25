import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromUserDetailsAction from '../actions/user-details.action';
import { OccUserService } from '../../occ/index';
export declare class UserDetailsEffects {
    private actions$;
    private occUserService;
    loadUserDetails$: Observable<fromUserDetailsAction.UserDetailsAction>;
    constructor(actions$: Actions, occUserService: OccUserService);
}
