import { InjectionToken, Provider } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { CmsState } from '../cms-state';
export declare function getReducers(): ActionReducerMap<CmsState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<CmsState>>;
export declare const reducerProvider: Provider;
export declare function clearCmsState(reducer: ActionReducer<any, Action>): ActionReducer<any, Action>;
export declare const metaReducers: MetaReducer<any>[];
