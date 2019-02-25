/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as fromStore from '../store';
import { filter, tap, map, take, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { DefaultPageService } from '../services/default-page.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../services/default-page.service";
var CmsService = /** @class */ (function () {
    function CmsService(store, defaultPageService) {
        this.store = store;
        this.defaultPageService = defaultPageService;
        this._launchInSmartEdit = false;
    }
    Object.defineProperty(CmsService.prototype, "launchInSmartEdit", {
        /**
         * Set _launchInSmartEdit value
         */
        set: /**
         * Set _launchInSmartEdit value
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._launchInSmartEdit = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Whether the app launched in smart edit
     */
    /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    CmsService.prototype.isLaunchInSmartEdit = /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    function () {
        return this._launchInSmartEdit;
    };
    /**
     * Get current CMS page data
     */
    /**
     * Get current CMS page data
     * @return {?}
     */
    CmsService.prototype.getCurrentPage = /**
     * Get current CMS page data
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getLatestPage));
    };
    /**
     * Get CMS component data by uid
     * @param uid : CMS componet uid
     */
    /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    CmsService.prototype.getComponentData = /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    function (uid) {
        var _this = this;
        return this.store.pipe(select(fromStore.componentStateSelectorFactory(uid)), withLatestFrom(this.getCurrentPage()), tap(function (_a) {
            var _b = tslib_1.__read(_a, 2), componentState = _b[0], currentPage = _b[1];
            /** @type {?} */
            var attemptedLoad = componentState.loading ||
                componentState.success ||
                componentState.error;
            if (!attemptedLoad && currentPage) {
                _this.store.dispatch(new fromStore.LoadComponent(uid));
            }
        }), map(function (_a) {
            var _b = tslib_1.__read(_a, 1), productState = _b[0];
            return productState.value;
        }), filter(Boolean));
    };
    /**
     * Given the position, get the content slot data
     * @param position : content slot position
     */
    /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    CmsService.prototype.getContentSlot = /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    function (position) {
        return this.store.pipe(select(fromStore.currentSlotSelectorFactory(position)), filter(Boolean));
    };
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param navigationNodeUid : uid of the navigation node
     */
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    CmsService.prototype.getNavigationEntryItems = /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    function (navigationNodeUid) {
        return this.store.pipe(select(fromStore.itemsSelectorFactory(navigationNodeUid)));
    };
    /**
     * Load navigation items data
     * @param rootUid : the uid of the root navigation node
     * @param itemList : list of items (with id and type)
     */
    /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    CmsService.prototype.loadNavigationItems = /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    function (rootUid, itemList) {
        this.store.dispatch(new fromStore.LoadNavigationItems({
            nodeId: rootUid,
            items: itemList
        }));
    };
    /**
     * Refresh the content of the latest cms page
     */
    /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    CmsService.prototype.refreshLatestPage = /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.RefreshLatestPage());
    };
    /**
     * Refresh cms component's content
     * @param uid : component uid
     */
    /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    CmsService.prototype.refreshComponent = /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    function (uid) {
        this.store.dispatch(new fromStore.LoadComponent(uid));
    };
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param pageContext
     */
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @return {?}
     */
    CmsService.prototype.hasPage = /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        var _this = this;
        /** @type {?} */
        var tryTimes = 0;
        return this.store.pipe(select(fromStore.getPageEntities), map(function (entities) {
            /** @type {?} */
            var key = pageContext.id + '_' + pageContext.type;
            /** @type {?} */
            var found = !!entities[key];
            if (!found) {
                /** @type {?} */
                var defaultPageIds = _this.defaultPageService.getDefaultPageIdsBytype(pageContext.type);
                if (defaultPageIds) {
                    for (var i = 0, len = defaultPageIds.length; i < len; i++) {
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
                _this.store.dispatch(new fromStore.UpdateLatestPageKey(key));
            }
            return found;
        }), tap(function (found) {
            // if not found, load this cms page
            if (!found) {
                tryTimes = tryTimes + 1;
                _this.store.dispatch(new fromStore.LoadPageData(pageContext));
            }
        }), filter(function (found) { return found || tryTimes === 3; }), take(1));
    };
    CmsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CmsService.ctorParameters = function () { return [
        { type: Store },
        { type: DefaultPageService }
    ]; };
    /** @nocollapse */ CmsService.ngInjectableDef = i0.defineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.inject(i1.Store), i0.inject(i2.DefaultPageService)); }, token: CmsService, providedIn: "root" });
    return CmsService;
}());
export { CmsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLFNBQVMsTUFBTSxVQUFVLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7OztBQUl0RTtJQU1FLG9CQUNVLEtBQTBCLEVBQzFCLGtCQUFzQztRQUR0QyxVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSnhDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztJQUtoQyxDQUFDO0lBS0osc0JBQUkseUNBQWlCO1FBSHJCOztXQUVHOzs7Ozs7UUFDSCxVQUFzQixLQUFLO1lBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRzs7Ozs7SUFDSCx3Q0FBbUI7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsbUNBQWM7Ozs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCxxQ0FBZ0I7Ozs7OztJQUFoQixVQUF5QyxHQUFX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QUFLO2dCQUdiLGtCQUFrQjs7O3FCQVAzQjtDQW1LQyxBQXhKRCxJQXdKQztTQXJKWSxVQUFVOzs7Ozs7SUFDckIsd0NBQW1DOzs7OztJQUdqQywyQkFBa0M7Ozs7O0lBQ2xDLHdDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCwgbWFwLCB0YWtlLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBEZWZhdWx0UGFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kZWZhdWx0LXBhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9zdG9yZS9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvY21zLWNvbXBvbmVudC5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDbXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbGF1bmNoSW5TbWFydEVkaXQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+LFxuICAgIHByaXZhdGUgZGVmYXVsdFBhZ2VTZXJ2aWNlOiBEZWZhdWx0UGFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgX2xhdW5jaEluU21hcnRFZGl0IHZhbHVlXG4gICAqL1xuICBzZXQgbGF1bmNoSW5TbWFydEVkaXQodmFsdWUpIHtcbiAgICB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGFwcCBsYXVuY2hlZCBpbiBzbWFydCBlZGl0XG4gICAqL1xuICBpc0xhdW5jaEluU21hcnRFZGl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBDTVMgcGFnZSBkYXRhXG4gICAqL1xuICBnZXRDdXJyZW50UGFnZSgpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0TGF0ZXN0UGFnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBDTVMgY29tcG9uZW50IGRhdGEgYnkgdWlkXG4gICAqIEBwYXJhbSB1aWQgOiBDTVMgY29tcG9uZXQgdWlkXG4gICAqL1xuICBnZXRDb21wb25lbnREYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KHVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkodWlkKSksXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmdldEN1cnJlbnRQYWdlKCkpLFxuICAgICAgdGFwKChbY29tcG9uZW50U3RhdGUsIGN1cnJlbnRQYWdlXSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBjb21wb25lbnRTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgY29tcG9uZW50U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgIGNvbXBvbmVudFN0YXRlLmVycm9yO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZENvbXBvbmVudCh1aWQpKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFtwcm9kdWN0U3RhdGVdKSA9PiBwcm9kdWN0U3RhdGUudmFsdWUpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgcG9zaXRpb24sIGdldCB0aGUgY29udGVudCBzbG90IGRhdGFcbiAgICogQHBhcmFtIHBvc2l0aW9uIDogY29udGVudCBzbG90IHBvc2l0aW9uXG4gICAqL1xuICBnZXRDb250ZW50U2xvdChwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5jdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeShwb3NpdGlvbikpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBuYXZpZ2F0aW9uIG5vZGUgdWlkLCBnZXQgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBlbnRyaWVzXG4gICAqIEBwYXJhbSBuYXZpZ2F0aW9uTm9kZVVpZCA6IHVpZCBvZiB0aGUgbmF2aWdhdGlvbiBub2RlXG4gICAqL1xuICBnZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uTm9kZVVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5pdGVtc1NlbGVjdG9yRmFjdG9yeShuYXZpZ2F0aW9uTm9kZVVpZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG5hdmlnYXRpb24gaXRlbXMgZGF0YVxuICAgKiBAcGFyYW0gcm9vdFVpZCA6IHRoZSB1aWQgb2YgdGhlIHJvb3QgbmF2aWdhdGlvbiBub2RlXG4gICAqIEBwYXJhbSBpdGVtTGlzdCA6IGxpc3Qgb2YgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpXG4gICAqL1xuICBsb2FkTmF2aWdhdGlvbkl0ZW1zKFxuICAgIHJvb3RVaWQ6IHN0cmluZyxcbiAgICBpdGVtTGlzdDogeyBpZDogc3RyaW5nOyBzdXBlclR5cGU6IHN0cmluZyB9W11cbiAgKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuTG9hZE5hdmlnYXRpb25JdGVtcyh7XG4gICAgICAgIG5vZGVJZDogcm9vdFVpZCxcbiAgICAgICAgaXRlbXM6IGl0ZW1MaXN0XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAqL1xuICByZWZyZXNoTGF0ZXN0UGFnZSgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuUmVmcmVzaExhdGVzdFBhZ2UoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBjbXMgY29tcG9uZW50J3MgY29udGVudFxuICAgKiBAcGFyYW0gdWlkIDogY29tcG9uZW50IHVpZFxuICAgKi9cbiAgcmVmcmVzaENvbXBvbmVudCh1aWQ6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkQ29tcG9uZW50KHVpZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gd2hldGhlciB0aGUgQ01TIHBhZ2UgZGF0YSBleGlzdHMgb3Igbm90XG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgaGFzUGFnZShwYWdlQ29udGV4dCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGxldCB0cnlUaW1lcyA9IDA7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5nZXRQYWdlRW50aXRpZXMpLFxuICAgICAgbWFwKChlbnRpdGllczogeyBba2V5OiBzdHJpbmddOiBQYWdlIH0pID0+IHtcbiAgICAgICAgbGV0IGtleSA9IHBhZ2VDb250ZXh0LmlkICsgJ18nICsgcGFnZUNvbnRleHQudHlwZTtcbiAgICAgICAgbGV0IGZvdW5kID0gISFlbnRpdGllc1trZXldO1xuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgY29uc3QgZGVmYXVsdFBhZ2VJZHMgPSB0aGlzLmRlZmF1bHRQYWdlU2VydmljZS5nZXREZWZhdWx0UGFnZUlkc0J5dHlwZShcbiAgICAgICAgICAgIHBhZ2VDb250ZXh0LnR5cGVcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChkZWZhdWx0UGFnZUlkcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGRlZmF1bHRQYWdlSWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIGtleSA9IGRlZmF1bHRQYWdlSWRzW2ldICsgJ18nICsgcGFnZUNvbnRleHQudHlwZTtcbiAgICAgICAgICAgICAgZm91bmQgPVxuICAgICAgICAgICAgICAgIGVudGl0aWVzW2tleV0gJiZcbiAgICAgICAgICAgICAgICBlbnRpdGllc1trZXldLnNlZW4uaW5kZXhPZihwYWdlQ29udGV4dC5pZCkgPiAtMTtcbiAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm91bmQgcGFnZSBkaXJlY3RseSBmcm9tIHN0b3JlXG4gICAgICAgIGlmIChmb3VuZCAmJiB0cnlUaW1lcyA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5VcGRhdGVMYXRlc3RQYWdlS2V5KGtleSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgIH0pLFxuICAgICAgdGFwKGZvdW5kID0+IHtcbiAgICAgICAgLy8gaWYgbm90IGZvdW5kLCBsb2FkIHRoaXMgY21zIHBhZ2VcbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgIHRyeVRpbWVzID0gdHJ5VGltZXMgKyAxO1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoZm91bmQgPT4gZm91bmQgfHwgdHJ5VGltZXMgPT09IDMpLFxuICAgICAgdGFrZSgxKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==