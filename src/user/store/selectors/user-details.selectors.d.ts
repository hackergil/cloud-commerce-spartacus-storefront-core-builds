import { MemoizedSelector } from '@ngrx/store';
import { UserDetailsState, StateWithUser } from '../user-state';
import { User } from '../../../occ/occ-models/index';
export declare const getDetailsState: MemoizedSelector<StateWithUser, UserDetailsState>;
export declare const getDetails: MemoizedSelector<StateWithUser, User>;
