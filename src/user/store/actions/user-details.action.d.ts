import { Action } from '@ngrx/store';
import { User } from '../../../occ/occ-models/index';
export declare const LOAD_USER_DETAILS = "[User] Load User Details";
export declare const LOAD_USER_DETAILS_FAIL = "[User] Load User Details Fail";
export declare const LOAD_USER_DETAILS_SUCCESS = "[User] Load User Details Success";
export declare class LoadUserDetails implements Action {
    payload: string;
    readonly type = "[User] Load User Details";
    constructor(payload: string);
}
export declare class LoadUserDetailsFail implements Action {
    payload: any;
    readonly type = "[User] Load User Details Fail";
    constructor(payload: any);
}
export declare class LoadUserDetailsSuccess implements Action {
    payload: User;
    readonly type = "[User] Load User Details Success";
    constructor(payload: User);
}
export declare type UserDetailsAction = LoadUserDetails | LoadUserDetailsFail | LoadUserDetailsSuccess;
