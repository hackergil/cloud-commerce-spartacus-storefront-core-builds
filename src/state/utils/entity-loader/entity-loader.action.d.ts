import { LoaderMeta } from '../loader/loader.action';
import { EntityMeta } from '../entity/entity.action';
import { Action } from '@ngrx/store';
export declare const ENTITY_LOAD_ACTION = "[ENTITY] LOAD";
export declare const ENTITY_FAIL_ACTION = "[ENTITY] LOAD FAIL";
export declare const ENTITY_SUCCESS_ACTION = "[ENTITY] LOAD SUCCESS";
export declare const ENTITY_RESET_ACTION = "[ENTITY] RESET";
export interface EntityLoaderMeta extends EntityMeta, LoaderMeta {
}
export interface EntityLoaderAction extends Action {
    readonly payload?: any;
    readonly meta?: EntityLoaderMeta;
}
export declare function entityLoadMeta(entityType: string, id: string | string[]): EntityLoaderMeta;
export declare function entityFailMeta(entityType: string, id: string | string[], error?: any): EntityLoaderMeta;
export declare function entitySuccessMeta(entityType: string, id: string | string[]): EntityLoaderMeta;
export declare function entityResetMeta(entityType: string, id: string | string[]): EntityLoaderMeta;
export declare class EntityLoadAction implements EntityLoaderAction {
    type: string;
    readonly meta: EntityLoaderMeta;
    constructor(entityType: string, id: string | string[]);
}
export declare class EntityFailAction implements EntityLoaderAction {
    type: string;
    readonly meta: EntityLoaderMeta;
    constructor(entityType: string, id: string | string[], error?: any);
}
export declare class EntitySuccessAction implements EntityLoaderAction {
    type: string;
    readonly meta: EntityLoaderMeta;
    constructor(entityType: string, id: string | string[]);
}
export declare class EntityResetAction implements EntityLoaderAction {
    type: string;
    readonly meta: EntityLoaderMeta;
    constructor(entityType: string, id: string | string[]);
}
