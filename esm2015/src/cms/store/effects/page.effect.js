/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, mergeMap, filter, take } from 'rxjs/operators';
import * as pageActions from '../actions/page.action';
import * as componentActions from '../actions/component.action';
import { OccCmsService } from '../../occ/occ-cms.service';
import { DefaultPageService } from '../../services/default-page.service';
import { RoutingService } from '../../../routing/index';
import { PageType } from '../../../occ/occ-models/index';
export class PageEffects {
    /**
     * @param {?} actions$
     * @param {?} occCmsService
     * @param {?} defaultPageService
     * @param {?} routingService
     */
    constructor(actions$, occCmsService, defaultPageService, routingService) {
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.defaultPageService = defaultPageService;
        this.routingService = routingService;
        this.loadPage$ = this.actions$.pipe(ofType(pageActions.LOAD_PAGEDATA, pageActions.REFRESH_LATEST_PAGE, '[Site-context] Language Change', '[Auth] Logout', '[Auth] Login'), map((action) => action.payload), switchMap(pageContext => {
            if (pageContext === undefined) {
                return this.routingService.getRouterState().pipe(filter(routerState => routerState && routerState.state), filter(routerState => routerState.state.cmsRequired), map(routerState => routerState.state.context), take(1), mergeMap(context => this.occCmsService.loadPageData(context).pipe(mergeMap(data => {
                    return [
                        new pageActions.LoadPageDataSuccess(this.getPageData(data, context)),
                        new componentActions.GetComponentFromPage(this.getComponents(data))
                    ];
                }), catchError(error => of(new pageActions.LoadPageDataFail(error))))));
            }
            else {
                return this.occCmsService.loadPageData(pageContext).pipe(mergeMap(data => {
                    return [
                        new pageActions.LoadPageDataSuccess(this.getPageData(data, pageContext)),
                        new componentActions.GetComponentFromPage(this.getComponents(data))
                    ];
                }), catchError(error => of(new pageActions.LoadPageDataFail(error))));
            }
        }));
    }
    /**
     * @private
     * @param {?} res
     * @param {?} pageContext
     * @return {?}
     */
    getPageData(res, pageContext) {
        /** @type {?} */
        const page = {
            loadTime: Date.now(),
            uuid: res.uuid,
            name: res.name,
            type: res.typeCode,
            title: res.title,
            catalogUuid: this.getCatalogUuid(res),
            pageId: res.uid,
            template: res.template,
            seen: new Array(),
            slots: {}
        };
        page.seen.push(pageContext.id);
        for (const slot of res.contentSlots.contentSlot) {
            page.slots[slot.position] = (/** @type {?} */ ({
                uid: slot.slotId,
                uuid: slot.slotUuid,
                catalogUuid: this.getCatalogUuid(slot),
                components: []
            }));
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of slot.components.component) {
                    page.slots[slot.position].components.push({
                        uid: component.uid,
                        uuid: component.uuid,
                        catalogUuid: this.getCatalogUuid(component),
                        typeCode: component.typeCode
                    });
                }
            }
        }
        return { key: this.getPageKey(pageContext, page), value: page };
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} page
     * @return {?}
     */
    getPageKey(pageContext, page) {
        switch (pageContext.type) {
            case PageType.CATEGORY_PAGE:
            case PageType.CATALOG_PAGE:
            case PageType.PRODUCT_PAGE: {
                /** @type {?} */
                const defaultPageIds = this.defaultPageService.getDefaultPageIdsBytype(pageContext.type);
                if (defaultPageIds.indexOf(page.pageId) > -1) {
                    return page.pageId + '_' + pageContext.type;
                }
                else {
                    return pageContext.id + '_' + pageContext.type;
                }
            }
            case PageType.CONTENT_PAGE: {
                return page.pageId + '_' + pageContext.type;
            }
        }
    }
    /**
     * @private
     * @param {?} cmsItem
     * @return {?}
     */
    getCatalogUuid(cmsItem) {
        if (cmsItem.properties && cmsItem.properties.smartedit) {
            /** @type {?} */
            const smartEditProp = cmsItem.properties.smartedit;
            if (smartEditProp.catalogVersionUuid) {
                return smartEditProp.catalogVersionUuid;
            }
            else if (smartEditProp.classes) {
                /** @type {?} */
                let catalogUuid;
                /** @type {?} */
                const seClass = smartEditProp.classes.split(' ');
                seClass.forEach(item => {
                    if (item.indexOf('smartedit-catalog-version-uuid') > -1) {
                        catalogUuid = item.substr('smartedit-catalog-version-uuid-'.length);
                    }
                });
                return catalogUuid;
            }
        }
    }
    /**
     * @private
     * @param {?} pageData
     * @return {?}
     */
    getComponents(pageData) {
        /** @type {?} */
        const components = [];
        if (pageData) {
            for (const slot of pageData.contentSlots.contentSlot) {
                if (slot.components.component &&
                    Array.isArray(slot.components.component)) {
                    for (const component of (/** @type {?} */ (slot.components.component))) {
                        // we dont put smartedit properties into store
                        if (component.properties) {
                            component.properties = undefined;
                        }
                        components.push(component);
                    }
                }
            }
        }
        return components;
    }
}
PageEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccCmsService },
    { type: DefaultPageService },
    { type: RoutingService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], PageEffects.prototype, "loadPage$", void 0);
if (false) {
    /** @type {?} */
    PageEffects.prototype.loadPage$;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.occCmsService;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.defaultPageService;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsR0FBRyxFQUNILFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0wsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLekUsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQVcsTUFBTSwrQkFBK0IsQ0FBQztBQUdsRSxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQW9EdEIsWUFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixrQkFBc0MsRUFDdEMsY0FBOEI7UUFIOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXREeEMsY0FBUyxHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0MsTUFBTSxD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ckU7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxXQUFXLENBQUM7YUFDcEI7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxRQUFpQjs7Y0FDL0IsVUFBVSxHQUFHLEVBQUU7UUFDckIsSUFBSSxRQUFRLEVBQUU7WUFDWixLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO2dCQUNwRCxJQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztvQkFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUN4QztvQkFDQSxLQUFLLE1BQU0sU0FBUyxJQUFJLG1CQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFPLEVBQUU7d0JBQ3hELDhDQUE4Qzt3QkFDOUMsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFOzRCQUN4QixTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzt5QkFDbEM7d0JBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7O1lBbEtGLFVBQVU7Ozs7WUF0Qk0sT0FBTztZQWFmLGFBQWE7WUFDYixrQkFBa0I7WUFLbEIsY0FBYzs7QUFNckI7SUFEQyxNQUFNLEVBQUU7c0NBQ0UsVUFBVTs4Q0FnRG5COzs7SUFqREYsZ0NBaURFOzs7OztJQUdBLCtCQUF5Qjs7Ozs7SUFDekIsb0NBQW9DOzs7OztJQUNwQyx5Q0FBOEM7Ozs7O0lBQzlDLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIGNhdGNoRXJyb3IsXG4gIHN3aXRjaE1hcCxcbiAgbWVyZ2VNYXAsXG4gIGZpbHRlcixcbiAgdGFrZVxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIHBhZ2VBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcGFnZS5hY3Rpb24nO1xuaW1wb3J0ICogYXMgY29tcG9uZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NvbXBvbmVudC5hY3Rpb24nO1xuaW1wb3J0IHsgT2NjQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGVmYXVsdFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVmYXVsdC1wYWdlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5cbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZVR5cGUsIENNU1BhZ2UgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUGFnZSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBwYWdlQWN0aW9ucy5MT0FEX1BBR0VEQVRBLFxuICAgICAgcGFnZUFjdGlvbnMuUkVGUkVTSF9MQVRFU1RfUEFHRSxcbiAgICAgICdbU2l0ZS1jb250ZXh0XSBMYW5ndWFnZSBDaGFuZ2UnLFxuICAgICAgJ1tBdXRoXSBMb2dvdXQnLFxuICAgICAgJ1tBdXRoXSBMb2dpbidcbiAgICApLFxuICAgIG1hcCgoYWN0aW9uOiBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGEpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT4ge1xuICAgICAgaWYgKHBhZ2VDb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgICAgIGZpbHRlcihyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZSAmJiByb3V0ZXJTdGF0ZS5zdGF0ZSksXG4gICAgICAgICAgZmlsdGVyKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNtc1JlcXVpcmVkKSxcbiAgICAgICAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBtZXJnZU1hcChjb250ZXh0ID0+XG4gICAgICAgICAgICB0aGlzLm9jY0Ntc1NlcnZpY2UubG9hZFBhZ2VEYXRhKGNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgIG1lcmdlTWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBuZXcgcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhU3VjY2VzcyhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlRGF0YShkYXRhLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIG5ldyBjb21wb25lbnRBY3Rpb25zLkdldENvbXBvbmVudEZyb21QYWdlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudHMoZGF0YSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhRmFpbChlcnJvcikpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9jY0Ntc1NlcnZpY2UubG9hZFBhZ2VEYXRhKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YVN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlRGF0YShkYXRhLCBwYWdlQ29udGV4dClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IGNvbXBvbmVudEFjdGlvbnMuR2V0Q29tcG9uZW50RnJvbVBhZ2UoXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzKGRhdGEpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhRmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY0Ntc1NlcnZpY2U6IE9jY0Ntc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWZhdWx0UGFnZVNlcnZpY2U6IERlZmF1bHRQYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRQYWdlRGF0YShcbiAgICByZXM6IGFueSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogeyBrZXk6IHN0cmluZzsgdmFsdWU6IFBhZ2UgfSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IHtcbiAgICAgIGxvYWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgdXVpZDogcmVzLnV1aWQsXG4gICAgICBuYW1lOiByZXMubmFtZSxcbiAgICAgIHR5cGU6IHJlcy50eXBlQ29kZSxcbiAgICAgIHRpdGxlOiByZXMudGl0bGUsXG4gICAgICBjYXRhbG9nVXVpZDogdGhpcy5nZXRDYXRhbG9nVXVpZChyZXMpLFxuICAgICAgcGFnZUlkOiByZXMudWlkLFxuICAgICAgdGVtcGxhdGU6IHJlcy50ZW1wbGF0ZSxcbiAgICAgIHNlZW46IG5ldyBBcnJheTxzdHJpbmc+KCksXG4gICAgICBzbG90czoge31cbiAgICB9O1xuICAgIHBhZ2Uuc2Vlbi5wdXNoKHBhZ2VDb250ZXh0LmlkKTtcblxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiByZXMuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICBwYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dID0ge1xuICAgICAgICB1aWQ6IHNsb3Quc2xvdElkLFxuICAgICAgICB1dWlkOiBzbG90LnNsb3RVdWlkLFxuICAgICAgICBjYXRhbG9nVXVpZDogdGhpcy5nZXRDYXRhbG9nVXVpZChzbG90KSxcbiAgICAgICAgY29tcG9uZW50czogW11cbiAgICAgIH0gYXMgQ29udGVudFNsb3REYXRhO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheShzbG90LmNvbXBvbmVudHMuY29tcG9uZW50KVxuICAgICAgKSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQpIHtcbiAgICAgICAgICBwYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLmNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgICB1aWQ6IGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICB1dWlkOiBjb21wb25lbnQudXVpZCxcbiAgICAgICAgICAgIGNhdGFsb2dVdWlkOiB0aGlzLmdldENhdGFsb2dVdWlkKGNvbXBvbmVudCksXG4gICAgICAgICAgICB0eXBlQ29kZTogY29tcG9uZW50LnR5cGVDb2RlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBrZXk6IHRoaXMuZ2V0UGFnZUtleShwYWdlQ29udGV4dCwgcGFnZSksIHZhbHVlOiBwYWdlIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VLZXkocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBwYWdlOiBQYWdlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHBhZ2VDb250ZXh0LnR5cGUpIHtcbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FURUdPUllfUEFHRTpcbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOlxuICAgICAgY2FzZSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U6IHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFBhZ2VJZHMgPSB0aGlzLmRlZmF1bHRQYWdlU2VydmljZS5nZXREZWZhdWx0UGFnZUlkc0J5dHlwZShcbiAgICAgICAgICBwYWdlQ29udGV4dC50eXBlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChkZWZhdWx0UGFnZUlkcy5pbmRleE9mKHBhZ2UucGFnZUlkKSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHBhZ2UucGFnZUlkICsgJ18nICsgcGFnZUNvbnRleHQudHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcGFnZUNvbnRleHQuaWQgKyAnXycgKyBwYWdlQ29udGV4dC50eXBlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ09OVEVOVF9QQUdFOiB7XG4gICAgICAgIHJldHVybiBwYWdlLnBhZ2VJZCArICdfJyArIHBhZ2VDb250ZXh0LnR5cGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXRhbG9nVXVpZChjbXNJdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChjbXNJdGVtLnByb3BlcnRpZXMgJiYgY21zSXRlbS5wcm9wZXJ0aWVzLnNtYXJ0ZWRpdCkge1xuICAgICAgY29uc3Qgc21hcnRFZGl0UHJvcCA9IGNtc0l0ZW0ucHJvcGVydGllcy5zbWFydGVkaXQ7XG4gICAgICBpZiAoc21hcnRFZGl0UHJvcC5jYXRhbG9nVmVyc2lvblV1aWQpIHtcbiAgICAgICAgcmV0dXJuIHNtYXJ0RWRpdFByb3AuY2F0YWxvZ1ZlcnNpb25VdWlkO1xuICAgICAgfSBlbHNlIGlmIChzbWFydEVkaXRQcm9wLmNsYXNzZXMpIHtcbiAgICAgICAgbGV0IGNhdGFsb2dVdWlkOiBzdHJpbmc7XG4gICAgICAgIGNvbnN0IHNlQ2xhc3MgPSBzbWFydEVkaXRQcm9wLmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgc2VDbGFzcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmluZGV4T2YoJ3NtYXJ0ZWRpdC1jYXRhbG9nLXZlcnNpb24tdXVpZCcpID4gLTEpIHtcbiAgICAgICAgICAgIGNhdGFsb2dVdWlkID0gaXRlbS5zdWJzdHIoJ3NtYXJ0ZWRpdC1jYXRhbG9nLXZlcnNpb24tdXVpZC0nLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNhdGFsb2dVdWlkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50cyhwYWdlRGF0YTogQ01TUGFnZSk6IGFueVtdIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgaWYgKHBhZ2VEYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgcGFnZURhdGEuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50ICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShzbG90LmNvbXBvbmVudHMuY29tcG9uZW50KVxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50IGFzIGFueSkge1xuICAgICAgICAgICAgLy8gd2UgZG9udCBwdXQgc21hcnRlZGl0IHByb3BlcnRpZXMgaW50byBzdG9yZVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG59XG4iXX0=