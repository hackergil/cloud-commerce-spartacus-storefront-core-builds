import { Action } from '@ngrx/store';
import { Page } from '../../model/page.model';
import { PageContext } from '../../../routing/index';
export declare const LOAD_PAGEDATA = "[Cms] Load PageData";
export declare const LOAD_PAGEDATA_FAIL = "[Cms] Load PageData Fail";
export declare const LOAD_PAGEDATA_SUCCESS = "[Cms] Load PageData Success";
export declare const REFRESH_LATEST_PAGE = "[Cms] Refresh latest page";
export declare const UPDATE_LATEST_PAGE_KEY = "[Cms] Update latest page key";
export declare const CLEAN_PAGE_STATE = "[Cms] Clean Page State;";
export declare class LoadPageData implements Action {
    payload: PageContext;
    readonly type = "[Cms] Load PageData";
    constructor(payload: PageContext);
}
export declare class LoadPageDataFail implements Action {
    payload: any;
    readonly type = "[Cms] Load PageData Fail";
    constructor(payload: any);
}
export declare class LoadPageDataSuccess implements Action {
    payload: {
        key: string;
        value: Page;
    };
    readonly type = "[Cms] Load PageData Success";
    constructor(payload: {
        key: string;
        value: Page;
    });
}
export declare class RefreshLatestPage implements Action {
    readonly type = "[Cms] Refresh latest page";
}
export declare class UpdateLatestPageKey implements Action {
    payload: string;
    readonly type = "[Cms] Update latest page key";
    constructor(payload: string);
}
export declare class CleanPageState implements Action {
    readonly type = "[Cms] Clean Page State;";
    constructor();
}
export declare type PageAction = LoadPageData | LoadPageDataFail | LoadPageDataSuccess | RefreshLatestPage | UpdateLatestPageKey | CleanPageState;
