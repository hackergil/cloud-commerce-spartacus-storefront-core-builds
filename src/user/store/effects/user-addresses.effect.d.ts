import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromUserAddressesAction from '../actions/user-addresses.action';
import { OccUserService } from '../../occ/index';
export declare class UserAddressesEffects {
    private actions$;
    private occUserService;
    loadUserAddresses$: Observable<fromUserAddressesAction.UserAddressesAction>;
    addUserAddress$: Observable<fromUserAddressesAction.UserAddressesAction>;
    updateUserAddress$: Observable<fromUserAddressesAction.UserAddressesAction>;
    deleteUserAddress$: Observable<fromUserAddressesAction.UserAddressesAction>;
    constructor(actions$: Actions, occUserService: OccUserService);
}
