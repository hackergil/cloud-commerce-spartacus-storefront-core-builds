import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { UserState } from '../user-state';
export declare function getReducers(): ActionReducerMap<UserState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<UserState>>;
export declare const reducerProvider: Provider;
export declare function clearUserState(reducer: ActionReducer<any>): ActionReducer<any>;
export declare const metaReducers: MetaReducer<any>[];
