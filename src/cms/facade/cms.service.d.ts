import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Page } from '../model/page.model';
import { ContentSlotData } from '../model/content-slot-data.model';
import { DefaultPageService } from '../services/default-page.service';
import { StateWithCms } from '../store/cms-state';
import { CmsComponent } from '../../occ/occ-models/cms-component.models';
export declare class CmsService {
    private store;
    private defaultPageService;
    private _launchInSmartEdit;
    constructor(store: Store<StateWithCms>, defaultPageService: DefaultPageService);
    /**
     * Set _launchInSmartEdit value
     */
    launchInSmartEdit: any;
    /**
     * Whether the app launched in smart edit
     */
    isLaunchInSmartEdit(): boolean;
    /**
     * Get current CMS page data
     */
    getCurrentPage(): Observable<Page>;
    /**
     * Get CMS component data by uid
     * @param uid : CMS componet uid
     */
    getComponentData<T extends CmsComponent>(uid: string): Observable<T>;
    /**
     * Given the position, get the content slot data
     * @param position : content slot position
     */
    getContentSlot(position: string): Observable<ContentSlotData>;
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param navigationNodeUid : uid of the navigation node
     */
    getNavigationEntryItems(navigationNodeUid: string): Observable<any>;
    /**
     * Load navigation items data
     * @param rootUid : the uid of the root navigation node
     * @param itemList : list of items (with id and type)
     */
    loadNavigationItems(rootUid: string, itemList: {
        id: string;
        superType: string;
    }[]): void;
    /**
     * Refresh the content of the latest cms page
     */
    refreshLatestPage(): void;
    /**
     * Refresh cms component's content
     * @param uid : component uid
     */
    refreshComponent(uid: string): void;
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param pageContext
     */
    hasPage(pageContext: any): Observable<boolean>;
}
