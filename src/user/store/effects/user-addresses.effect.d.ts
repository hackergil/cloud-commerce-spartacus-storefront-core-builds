import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromUserAddressesAction from '../actions/user-addresses.action';
import { GlobalMessageService } from '../../../global-message/index';
import { UserService } from '../../facade/index';
import { UserAddressConnector } from '../../connectors/address/user-address.connector';
export declare class UserAddressesEffects {
    private actions$;
    private userAddressConnector;
    private userService;
    private messageService;
    loadUserAddresses$: Observable<fromUserAddressesAction.UserAddressesAction>;
    addUserAddress$: Observable<fromUserAddressesAction.UserAddressesAction>;
    updateUserAddress$: Observable<fromUserAddressesAction.UserAddressesAction>;
    deleteUserAddress$: Observable<fromUserAddressesAction.UserAddressesAction>;
    /**
     *  Reload addresses and notify about add success
     */
    showGlobalMessageOnAddSuccess$: Observable<never>;
    /**
     *  Reload addresses and notify about update success
     */
    showGlobalMessageOnUpdateSuccess$: Observable<never>;
    /**
     *  Reload addresses and notify about delete success
     */
    showGlobalMessageOnDeleteSuccess$: Observable<never>;
    constructor(actions$: Actions, userAddressConnector: UserAddressConnector, userService: UserService, messageService: GlobalMessageService);
    /**
     * Show global confirmation message with provided text
     */
    private showGlobalMessage;
    private loadAddresses;
}
