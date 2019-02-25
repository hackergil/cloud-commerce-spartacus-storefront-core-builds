import { MemoizedSelector } from '@ngrx/store';
import { PageState, StateWithCms } from '../cms-state';
import { ContentSlotData } from '../../model/content-slot-data.model';
import { Page } from '../../model/page.model';
export declare const getPageEntitiesSelector: (state: PageState) => {
    [context: string]: Page;
};
export declare const getPageCount: (state: PageState) => number;
export declare const getLatestPageKeySelector: (state: PageState) => string;
export declare const getPageState: MemoizedSelector<StateWithCms, PageState>;
export declare const getPageEntities: MemoizedSelector<StateWithCms, {
    [context: string]: Page;
}>;
export declare const getLatestPageKey: MemoizedSelector<StateWithCms, string>;
export declare const getLatestPage: MemoizedSelector<StateWithCms, Page>;
export declare const currentSlotSelectorFactory: (position: string) => MemoizedSelector<StateWithCms, ContentSlotData>;
