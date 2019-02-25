import { NodeItem } from '../model/node-item.model';
import { Page } from '../model/page.model';
import { EntityLoaderState } from '../../state/utils/entity-loader/entity-loader-state';
export declare const CMS_FEATURE = "cms";
export declare const NAVIGATION_DETAIL_ENTITY = "[Cms] Navigation Entity";
export declare const COMPONENT_ENTITY = "[Cms[ Component Entity";
export interface StateWithCms {
    [CMS_FEATURE]: CmsState;
}
export declare type ComponentState = EntityLoaderState<any>;
export interface NavigationNodes {
    [nodeId: string]: NodeItem;
}
export interface PageState {
    entities: {
        [context: string]: Page;
    };
    count: number;
    latestPageKey: string;
}
export interface CmsState {
    page: PageState;
    component: ComponentState;
    navigation: EntityLoaderState<NodeItem>;
}
