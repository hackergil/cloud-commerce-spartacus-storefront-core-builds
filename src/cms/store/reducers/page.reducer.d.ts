import * as fromPageData from '../actions/page.action';
import { PageState } from '../cms-state';
export declare const initialState: PageState;
export declare function reducer(state: PageState, action: fromPageData.PageAction): PageState;
