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
var PageEffects = /** @class */ (function () {
    function PageEffects(actions$, occCmsService, defaultPageService, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.defaultPageService = defaultPageService;
        this.routingService = routingService;
        this.loadPage$ = this.actions$.pipe(ofType(pageActions.LOAD_PAGEDATA, pageActions.REFRESH_LATEST_PAGE, '[Site-context] Language Change', '[Auth] Logout', '[Auth] Login'), map(function (action) { return action.payload; }), switchMap(function (pageContext) {
            if (pageContext === undefined) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState && routerState.state; }), filter(function (routerState) { return routerState.state.cmsRequired; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (context) {
                    return _this.occCmsService.loadPageData(context).pipe(mergeMap(function (data) {
                        return [
                            new pageActions.LoadPageDataSuccess(_this.getPageData(data, context)),
                            new componentActions.GetComponentFromPage(_this.getComponents(data))
                        ];
                    }), catchError(function (error) { return of(new pageActions.LoadPageDataFail(error)); }));
                }));
            }
            else {
                return _this.occCmsService.loadPageData(pageContext).pipe(mergeMap(function (data) {
                    return [
                        new pageActions.LoadPageDataSuccess(_this.getPageData(data, pageContext)),
                        new componentActions.GetComponentFromPage(_this.getComponents(data))
                    ];
                }), catchError(function (error) { return of(new pageActions.LoadPageDataFail(error)); }));
            }
        }));
    }
    /**
     * @private
     * @param {?} res
     * @param {?} pageContext
     * @return {?}
     */
    PageEffects.prototype.getPageData = /**
     * @private
     * @param {?} res
     * @param {?} pageContext
     * @return {?}
     */
    function (res, pageContext) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var page = {
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
        try {
            for (var _c = tslib_1.__values(res.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                var slot = _d.value;
                page.slots[slot.position] = (/** @type {?} */ ({
                    uid: slot.slotId,
                    uuid: slot.slotUuid,
                    catalogUuid: this.getCatalogUuid(slot),
                    components: []
                }));
                if (slot.components.component &&
                    Array.isArray(slot.components.component)) {
                    try {
                        for (var _e = tslib_1.__values(slot.components.component), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var component = _f.value;
                            page.slots[slot.position].components.push({
                                uid: component.uid,
                                uuid: component.uuid,
                                catalogUuid: this.getCatalogUuid(component),
                                typeCode: component.typeCode
                            });
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return { key: this.getPageKey(pageContext, page), value: page };
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} page
     * @return {?}
     */
    PageEffects.prototype.getPageKey = /**
     * @private
     * @param {?} pageContext
     * @param {?} page
     * @return {?}
     */
    function (pageContext, page) {
        switch (pageContext.type) {
            case PageType.CATEGORY_PAGE:
            case PageType.CATALOG_PAGE:
            case PageType.PRODUCT_PAGE: {
                /** @type {?} */
                var defaultPageIds = this.defaultPageService.getDefaultPageIdsBytype(pageContext.type);
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
    };
    /**
     * @private
     * @param {?} cmsItem
     * @return {?}
     */
    PageEffects.prototype.getCatalogUuid = /**
     * @private
     * @param {?} cmsItem
     * @return {?}
     */
    function (cmsItem) {
        if (cmsItem.properties && cmsItem.properties.smartedit) {
            /** @type {?} */
            var smartEditProp = cmsItem.properties.smartedit;
            if (smartEditProp.catalogVersionUuid) {
                return smartEditProp.catalogVersionUuid;
            }
            else if (smartEditProp.classes) {
                /** @type {?} */
                var catalogUuid_1;
                /** @type {?} */
                var seClass = smartEditProp.classes.split(' ');
                seClass.forEach(function (item) {
                    if (item.indexOf('smartedit-catalog-version-uuid') > -1) {
                        catalogUuid_1 = item.substr('smartedit-catalog-version-uuid-'.length);
                    }
                });
                return catalogUuid_1;
            }
        }
    };
    /**
     * @private
     * @param {?} pageData
     * @return {?}
     */
    PageEffects.prototype.getComponents = /**
     * @private
     * @param {?} pageData
     * @return {?}
     */
    function (pageData) {
        var e_3, _a, e_4, _b;
        /** @type {?} */
        var components = [];
        if (pageData) {
            try {
                for (var _c = tslib_1.__values(pageData.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var slot = _d.value;
                    if (slot.components.component &&
                        Array.isArray(slot.components.component)) {
                        try {
                            for (var _e = tslib_1.__values((/** @type {?} */ (slot.components.component))), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var component = _f.value;
                                // we dont put smartedit properties into store
                                if (component.properties) {
                                    component.properties = undefined;
                                }
                                components.push(component);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return components;
    };
    PageEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCmsService },
        { type: DefaultPageService },
        { type: RoutingService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], PageEffects.prototype, "loadPage$", void 0);
    return PageEffects;
}());
export { PageEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsR0FBRyxFQUNILFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0wsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLekUsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQVcsTUFBTSwrQkFBK0IsQ0FBQztBQUVsRTtJQXFERSxxQkFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixrQkFBc0MsRUFDdEMsY0FBOEI7UUFKeEMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdER4QyxjQUFTLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxNQUFNLENBQ0osV0FBVyxD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O0lBZ0hKLGtCQUFDO0NBQUEsQUFuS0QsSUFtS0M7U0FsS1ksV0FBVzs7O0lBQ3RCLGdDQWlERTs7Ozs7SUFHQSwrQkFBeUI7Ozs7O0lBQ3pCLG9DQUFvQzs7Ozs7SUFDcEMseUNBQThDOzs7OztJQUM5QyxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBjYXRjaEVycm9yLFxuICBzd2l0Y2hNYXAsXG4gIG1lcmdlTWFwLFxuICBmaWx0ZXIsXG4gIHRha2Vcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBwYWdlQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3BhZ2UuYWN0aW9uJztcbmltcG9ydCAqIGFzIGNvbXBvbmVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jb21wb25lbnQuYWN0aW9uJztcbmltcG9ydCB7IE9jY0Ntc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLWNtcy5zZXJ2aWNlJztcbmltcG9ydCB7IERlZmF1bHRQYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RlZmF1bHQtcGFnZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuXG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFBhZ2VUeXBlLCBDTVNQYWdlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnZUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFBhZ2UkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgcGFnZUFjdGlvbnMuTE9BRF9QQUdFREFUQSxcbiAgICAgIHBhZ2VBY3Rpb25zLlJFRlJFU0hfTEFURVNUX1BBR0UsXG4gICAgICAnW1NpdGUtY29udGV4dF0gTGFuZ3VhZ2UgQ2hhbmdlJyxcbiAgICAgICdbQXV0aF0gTG9nb3V0JyxcbiAgICAgICdbQXV0aF0gTG9naW4nXG4gICAgKSxcbiAgICBtYXAoKGFjdGlvbjogcGFnZUFjdGlvbnMuTG9hZFBhZ2VEYXRhKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+IHtcbiAgICAgIGlmIChwYWdlQ29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgICBmaWx0ZXIocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUgJiYgcm91dGVyU3RhdGUuc3RhdGUpLFxuICAgICAgICAgIGZpbHRlcihyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jbXNSZXF1aXJlZCksXG4gICAgICAgICAgbWFwKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpLFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWVyZ2VNYXAoY29udGV4dCA9PlxuICAgICAgICAgICAgdGhpcy5vY2NDbXNTZXJ2aWNlLmxvYWRQYWdlRGF0YShjb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgICBtZXJnZU1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgbmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YVN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZURhdGEoZGF0YSwgY29udGV4dClcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBuZXcgY29tcG9uZW50QWN0aW9ucy5HZXRDb21wb25lbnRGcm9tUGFnZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzKGRhdGEpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YUZhaWwoZXJyb3IpKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5vY2NDbXNTZXJ2aWNlLmxvYWRQYWdlRGF0YShwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICBtZXJnZU1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGFTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZURhdGEoZGF0YSwgcGFnZUNvbnRleHQpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBjb21wb25lbnRBY3Rpb25zLkdldENvbXBvbmVudEZyb21QYWdlKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50cyhkYXRhKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YUZhaWwoZXJyb3IpKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NDbXNTZXJ2aWNlOiBPY2NDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGVmYXVsdFBhZ2VTZXJ2aWNlOiBEZWZhdWx0UGFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0UGFnZURhdGEoXG4gICAgcmVzOiBhbnksXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiBQYWdlIH0ge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSB7XG4gICAgICBsb2FkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgIHV1aWQ6IHJlcy51dWlkLFxuICAgICAgbmFtZTogcmVzLm5hbWUsXG4gICAgICB0eXBlOiByZXMudHlwZUNvZGUsXG4gICAgICB0aXRsZTogcmVzLnRpdGxlLFxuICAgICAgY2F0YWxvZ1V1aWQ6IHRoaXMuZ2V0Q2F0YWxvZ1V1aWQocmVzKSxcbiAgICAgIHBhZ2VJZDogcmVzLnVpZCxcbiAgICAgIHRlbXBsYXRlOiByZXMudGVtcGxhdGUsXG4gICAgICBzZWVuOiBuZXcgQXJyYXk8c3RyaW5nPigpLFxuICAgICAgc2xvdHM6IHt9XG4gICAgfTtcbiAgICBwYWdlLnNlZW4ucHVzaChwYWdlQ29udGV4dC5pZCk7XG5cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgcmVzLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgcGFnZS5zbG90c1tzbG90LnBvc2l0aW9uXSA9IHtcbiAgICAgICAgdWlkOiBzbG90LnNsb3RJZCxcbiAgICAgICAgdXVpZDogc2xvdC5zbG90VXVpZCxcbiAgICAgICAgY2F0YWxvZ1V1aWQ6IHRoaXMuZ2V0Q2F0YWxvZ1V1aWQoc2xvdCksXG4gICAgICAgIGNvbXBvbmVudHM6IFtdXG4gICAgICB9IGFzIENvbnRlbnRTbG90RGF0YTtcblxuICAgICAgaWYgKFxuICAgICAgICBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50ICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudClcbiAgICAgICkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50KSB7XG4gICAgICAgICAgcGFnZS5zbG90c1tzbG90LnBvc2l0aW9uXS5jb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgICAgdWlkOiBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgdXVpZDogY29tcG9uZW50LnV1aWQsXG4gICAgICAgICAgICBjYXRhbG9nVXVpZDogdGhpcy5nZXRDYXRhbG9nVXVpZChjb21wb25lbnQpLFxuICAgICAgICAgICAgdHlwZUNvZGU6IGNvbXBvbmVudC50eXBlQ29kZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsga2V5OiB0aGlzLmdldFBhZ2VLZXkocGFnZUNvbnRleHQsIHBhZ2UpLCB2YWx1ZTogcGFnZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdlS2V5KHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgcGFnZTogUGFnZSk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwYWdlQ29udGV4dC50eXBlKSB7XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEFMT0dfUEFHRTpcbiAgICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQYWdlSWRzID0gdGhpcy5kZWZhdWx0UGFnZVNlcnZpY2UuZ2V0RGVmYXVsdFBhZ2VJZHNCeXR5cGUoXG4gICAgICAgICAgcGFnZUNvbnRleHQudHlwZVxuICAgICAgICApO1xuICAgICAgICBpZiAoZGVmYXVsdFBhZ2VJZHMuaW5kZXhPZihwYWdlLnBhZ2VJZCkgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBwYWdlLnBhZ2VJZCArICdfJyArIHBhZ2VDb250ZXh0LnR5cGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHBhZ2VDb250ZXh0LmlkICsgJ18nICsgcGFnZUNvbnRleHQudHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYXNlIFBhZ2VUeXBlLkNPTlRFTlRfUEFHRToge1xuICAgICAgICByZXR1cm4gcGFnZS5wYWdlSWQgKyAnXycgKyBwYWdlQ29udGV4dC50eXBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2F0YWxvZ1V1aWQoY21zSXRlbTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoY21zSXRlbS5wcm9wZXJ0aWVzICYmIGNtc0l0ZW0ucHJvcGVydGllcy5zbWFydGVkaXQpIHtcbiAgICAgIGNvbnN0IHNtYXJ0RWRpdFByb3AgPSBjbXNJdGVtLnByb3BlcnRpZXMuc21hcnRlZGl0O1xuICAgICAgaWYgKHNtYXJ0RWRpdFByb3AuY2F0YWxvZ1ZlcnNpb25VdWlkKSB7XG4gICAgICAgIHJldHVybiBzbWFydEVkaXRQcm9wLmNhdGFsb2dWZXJzaW9uVXVpZDtcbiAgICAgIH0gZWxzZSBpZiAoc21hcnRFZGl0UHJvcC5jbGFzc2VzKSB7XG4gICAgICAgIGxldCBjYXRhbG9nVXVpZDogc3RyaW5nO1xuICAgICAgICBjb25zdCBzZUNsYXNzID0gc21hcnRFZGl0UHJvcC5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHNlQ2xhc3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5pbmRleE9mKCdzbWFydGVkaXQtY2F0YWxvZy12ZXJzaW9uLXV1aWQnKSA+IC0xKSB7XG4gICAgICAgICAgICBjYXRhbG9nVXVpZCA9IGl0ZW0uc3Vic3RyKCdzbWFydGVkaXQtY2F0YWxvZy12ZXJzaW9uLXV1aWQtJy5sZW5ndGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjYXRhbG9nVXVpZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBvbmVudHMocGFnZURhdGE6IENNU1BhZ2UpOiBhbnlbXSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIGlmIChwYWdlRGF0YSkge1xuICAgICAgZm9yIChjb25zdCBzbG90IG9mIHBhZ2VEYXRhLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudClcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCBhcyBhbnkpIHtcbiAgICAgICAgICAgIC8vIHdlIGRvbnQgcHV0IHNtYXJ0ZWRpdCBwcm9wZXJ0aWVzIGludG8gc3RvcmVcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQucHJvcGVydGllcykge1xuICAgICAgICAgICAgICBjb21wb25lbnQucHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxufVxuIl19