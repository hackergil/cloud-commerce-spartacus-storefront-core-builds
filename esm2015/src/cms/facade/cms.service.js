/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as fromStore from '../store';
import { filter, tap, map, take, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { DefaultPageService } from '../services/default-page.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../services/default-page.service";
export class CmsService {
    /**
     * @param {?} store
     * @param {?} defaultPageService
     */
    constructor(store, defaultPageService) {
        this.store = store;
        this.defaultPageService = defaultPageService;
        this._launchInSmartEdit = false;
    }
    /**
     * Set _launchInSmartEdit value
     * @param {?} value
     * @return {?}
     */
    set launchInSmartEdit(value) {
        this._launchInSmartEdit = value;
    }
    /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    isLaunchInSmartEdit() {
        return this._launchInSmartEdit;
    }
    /**
     * Get current CMS page data
     * @return {?}
     */
    getCurrentPage() {
        return this.store.pipe(select(fromStore.getLatestPage));
    }
    /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    getComponentData(uid) {
        return this.store.pipe(select(fromStore.componentStateSelectorFactory(uid)), withLatestFrom(this.getCurrentPage()), tap(([componentState, currentPage]) => {
            /** @type {?} */
            const attemptedLoad = componentState.loading ||
                componentState.success ||
                componentState.error;
            if (!attemptedLoad && currentPage) {
                this.store.dispatch(new fromStore.LoadComponent(uid));
            }
        }), map(([productState]) => productState.value), filter(Boolean));
    }
    /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    getContentSlot(position) {
        return this.store.pipe(select(fromStore.currentSlotSelectorFactory(position)), filter(Boolean));
    }
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    getNavigationEntryItems(navigationNodeUid) {
        return this.store.pipe(select(fromStore.itemsSelectorFactory(navigationNodeUid)));
    }
    /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    loadNavigationItems(rootUid, itemList) {
        this.store.dispatch(new fromStore.LoadNavigationItems({
            nodeId: rootUid,
            items: itemList
        }));
    }
    /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    refreshLatestPage() {
        this.store.dispatch(new fromStore.RefreshLatestPage());
    }
    /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    refreshComponent(uid) {
        this.store.dispatch(new fromStore.LoadComponent(uid));
    }
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @return {?}
     */
    hasPage(pageContext) {
        /** @type {?} */
        let tryTimes = 0;
        return this.store.pipe(select(fromStore.getPageEntities), map((entities) => {
            /** @type {?} */
            let key = pageContext.id + '_' + pageContext.type;
            /** @type {?} */
            let found = !!entities[key];
            if (!found) {
                /** @type {?} */
                const defaultPageIds = this.defaultPageService.getDefaultPageIdsBytype(pageContext.type);
                if (defaultPageIds) {
                    for (let i = 0, len = defaultPageIds.length; i < len; i++) {
                        key = defaultPageIds[i] + '_' + pageContext.type;
                        found =
                            entities[key] &&
                                entities[key].seen.indexOf(pageContext.id) > -1;
                        if (found) {
                            break;
                        }
                    }
                }
            }
            // found page directly from store
            if (found && tryTimes === 0) {
                this.store.dispatch(new fromStore.UpdateLatestPageKey(key));
            }
            return found;
        }), tap(found => {
            // if not found, load this cms page
            if (!found) {
                tryTimes = tryTimes + 1;
                this.store.dispatch(new fromStore.LoadPageData(pageContext));
            }
        }), filter(found => found || tryTimes === 3), take(1));
    }
}
CmsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CmsService.ctorParameters = () => [
    { type: Store },
    { type: DefaultPageService }
];
/** @nocollapse */ CmsService.ngInjectableDef = i0.defineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.inject(i1.Store), i0.inject(i2.DefaultPageService)); }, token: CmsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsService.prototype._launchInSmartEdit;
    /**
     * @type {?}
     * @private
     */
    CmsService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    CmsService.prototype.defaultPageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7O0FBT3RFLE1BQU0sT0FBTyxVQUFVOzs7OztJQUdyQixZQUNVLEtBQTBCLEVBQzFCLGtCQUFzQztRQUR0QyxVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSnhDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztJQUtoQyxDQUFDOzs7Ozs7SUFLSixJQUFJLGlCQUFpQixDQUFDLEtBQUs7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7OztJQUtELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUtELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7O0lBTUQsZ0JBQWdCLENBQXlCLEdBQVc7UUFDbEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIs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VyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNsRCxJQUFJLEtBQUssRUFBRTs0QkFDVCxNQUFNO3lCQUNQO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxpQ0FBaUM7WUFDakMsSUFBSSxLQUFLLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM3RDtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1YsbUNBQW1DO1lBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzlEO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFDeEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUM7SUFDSixDQUFDOzs7WUF2SkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVGdCLEtBQUs7WUFHYixrQkFBa0I7Ozs7Ozs7O0lBUXpCLHdDQUFtQzs7Ozs7SUFHakMsMkJBQWtDOzs7OztJQUNsQyx3Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAsIG1hcCwgdGFrZSwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgRGVmYXVsdFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGVmYXVsdC1wYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vc3RvcmUvY21zLXN0YXRlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2Ntcy1jb21wb25lbnQubW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ21zU2VydmljZSB7XG4gIHByaXZhdGUgX2xhdW5jaEluU21hcnRFZGl0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ21zPixcbiAgICBwcml2YXRlIGRlZmF1bHRQYWdlU2VydmljZTogRGVmYXVsdFBhZ2VTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2V0IF9sYXVuY2hJblNtYXJ0RWRpdCB2YWx1ZVxuICAgKi9cbiAgc2V0IGxhdW5jaEluU21hcnRFZGl0KHZhbHVlKSB7XG4gICAgdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhcHAgbGF1bmNoZWQgaW4gc21hcnQgZWRpdFxuICAgKi9cbiAgaXNMYXVuY2hJblNtYXJ0RWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgQ01TIHBhZ2UgZGF0YVxuICAgKi9cbiAgZ2V0Q3VycmVudFBhZ2UoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldExhdGVzdFBhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgKiBAcGFyYW0gdWlkIDogQ01TIGNvbXBvbmV0IHVpZFxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50Pih1aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmNvbXBvbmVudFN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCkpLFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5nZXRDdXJyZW50UGFnZSgpKSxcbiAgICAgIHRhcCgoW2NvbXBvbmVudFN0YXRlLCBjdXJyZW50UGFnZV0pID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgY29tcG9uZW50U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgIGNvbXBvbmVudFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICBjb21wb25lbnRTdGF0ZS5lcnJvcjtcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRDb21wb25lbnQodWlkKSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbcHJvZHVjdFN0YXRlXSkgPT4gcHJvZHVjdFN0YXRlLnZhbHVlKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIHBvc2l0aW9uLCBnZXQgdGhlIGNvbnRlbnQgc2xvdCBkYXRhXG4gICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgKi9cbiAgZ2V0Q29udGVudFNsb3QocG9zaXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuY3VycmVudFNsb3RTZWxlY3RvckZhY3RvcnkocG9zaXRpb24pKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gbmF2aWdhdGlvbiBub2RlIHVpZCwgZ2V0IGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gZW50cmllc1xuICAgKiBAcGFyYW0gbmF2aWdhdGlvbk5vZGVVaWQgOiB1aWQgb2YgdGhlIG5hdmlnYXRpb24gbm9kZVxuICAgKi9cbiAgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuaXRlbXNTZWxlY3RvckZhY3RvcnkobmF2aWdhdGlvbk5vZGVVaWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBuYXZpZ2F0aW9uIGl0ZW1zIGRhdGFcbiAgICogQHBhcmFtIHJvb3RVaWQgOiB0aGUgdWlkIG9mIHRoZSByb290IG5hdmlnYXRpb24gbm9kZVxuICAgKiBAcGFyYW0gaXRlbUxpc3QgOiBsaXN0IG9mIGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKVxuICAgKi9cbiAgbG9hZE5hdmlnYXRpb25JdGVtcyhcbiAgICByb290VWlkOiBzdHJpbmcsXG4gICAgaXRlbUxpc3Q6IHsgaWQ6IHN0cmluZzsgc3VwZXJUeXBlOiBzdHJpbmcgfVtdXG4gICkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkxvYWROYXZpZ2F0aW9uSXRlbXMoe1xuICAgICAgICBub2RlSWQ6IHJvb3RVaWQsXG4gICAgICAgIGl0ZW1zOiBpdGVtTGlzdFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNvbnRlbnQgb2YgdGhlIGxhdGVzdCBjbXMgcGFnZVxuICAgKi9cbiAgcmVmcmVzaExhdGVzdFBhZ2UoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlJlZnJlc2hMYXRlc3RQYWdlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggY21zIGNvbXBvbmVudCdzIGNvbnRlbnRcbiAgICogQHBhcmFtIHVpZCA6IGNvbXBvbmVudCB1aWRcbiAgICovXG4gIHJlZnJlc2hDb21wb25lbnQodWlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZENvbXBvbmVudCh1aWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHdoZXRoZXIgdGhlIENNUyBwYWdlIGRhdGEgZXhpc3RzIG9yIG5vdFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGhhc1BhZ2UocGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBsZXQgdHJ5VGltZXMgPSAwO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0UGFnZUVudGl0aWVzKSxcbiAgICAgIG1hcCgoZW50aXRpZXM6IHsgW2tleTogc3RyaW5nXTogUGFnZSB9KSA9PiB7XG4gICAgICAgIGxldCBrZXkgPSBwYWdlQ29udGV4dC5pZCArICdfJyArIHBhZ2VDb250ZXh0LnR5cGU7XG4gICAgICAgIGxldCBmb3VuZCA9ICEhZW50aXRpZXNba2V5XTtcbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHRQYWdlSWRzID0gdGhpcy5kZWZhdWx0UGFnZVNlcnZpY2UuZ2V0RGVmYXVsdFBhZ2VJZHNCeXR5cGUoXG4gICAgICAgICAgICBwYWdlQ29udGV4dC50eXBlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoZGVmYXVsdFBhZ2VJZHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBkZWZhdWx0UGFnZUlkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICBrZXkgPSBkZWZhdWx0UGFnZUlkc1tpXSArICdfJyArIHBhZ2VDb250ZXh0LnR5cGU7XG4gICAgICAgICAgICAgIGZvdW5kID1cbiAgICAgICAgICAgICAgICBlbnRpdGllc1trZXldICYmXG4gICAgICAgICAgICAgICAgZW50aXRpZXNba2V5XS5zZWVuLmluZGV4T2YocGFnZUNvbnRleHQuaWQpID4gLTE7XG4gICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGZvdW5kIHBhZ2UgZGlyZWN0bHkgZnJvbSBzdG9yZVxuICAgICAgICBpZiAoZm91bmQgJiYgdHJ5VGltZXMgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuVXBkYXRlTGF0ZXN0UGFnZUtleShrZXkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICB9KSxcbiAgICAgIHRhcChmb3VuZCA9PiB7XG4gICAgICAgIC8vIGlmIG5vdCBmb3VuZCwgbG9hZCB0aGlzIGNtcyBwYWdlXG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICB0cnlUaW1lcyA9IHRyeVRpbWVzICsgMTtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGZvdW5kID0+IGZvdW5kIHx8IHRyeVRpbWVzID09PSAzKSxcbiAgICAgIHRha2UoMSlcbiAgICApO1xuICB9XG59XG4iXX0=