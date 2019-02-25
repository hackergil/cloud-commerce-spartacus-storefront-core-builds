/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, filter, mergeMap, take } from 'rxjs/operators';
import * as navigationItemActions from '../actions/navigation-entry-item.action';
import { OccCmsService } from '../../occ/occ-cms.service';
import { RoutingService } from '../../../routing/index';
var NavigationEntryItemEffects = /** @class */ (function () {
    function NavigationEntryItemEffects(actions$, occCmsService, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(navigationItemActions.LOAD_NAVIGATION_ITEMS), map(function (action) { return action.payload; }), map(function (payload) {
            return {
                ids: _this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId
            };
        }), mergeMap(function (data) {
            if (data.ids.componentIds.idList.length > 0) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState !== undefined; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (pageContext) {
                    // download all items in one request
                    return _this.occCmsService
                        .loadListComponents(data.ids.componentIds, pageContext, 'DEFAULT', 0, data.ids.componentIds.idList.length)
                        .pipe(map(function (res) {
                        return new navigationItemActions.LoadNavigationItemsSuccess({
                            nodeId: data.nodeId,
                            components: res.component
                        });
                    }), catchError(function (error) {
                        return of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, error));
                    }));
                }));
            }
            else if (data.ids.pageIds.idList.length > 0) {
                // TODO: future work
                // dispatch action to load cms page one by one
            }
            else if (data.ids.mediaIds.idList.length > 0) {
                // TODO: future work
                // send request to get list of media
            }
            else {
                return of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
            }
        }));
    }
    // We only consider 3 item types: cms page, cms component, and media.
    // We only consider 3 item types: cms page, cms component, and media.
    /**
     * @param {?} itemList
     * @return {?}
     */
    NavigationEntryItemEffects.prototype.getIdListByItemType = 
    // We only consider 3 item types: cms page, cms component, and media.
    /**
     * @param {?} itemList
     * @return {?}
     */
    function (itemList) {
        /** @type {?} */
        var pageIds = { idList: [] };
        /** @type {?} */
        var componentIds = { idList: [] };
        /** @type {?} */
        var mediaIds = { idList: [] };
        itemList.forEach(function (item) {
            if (item.superType === 'AbstractCMSComponent') {
                componentIds.idList.push(item.id);
            }
            else if (item.superType === 'AbstractPage') {
                pageIds.idList.push(item.id);
            }
            else if (item.superType === 'AbstractMedia') {
                mediaIds.idList.push(item.id);
            }
        });
        return { pageIds: pageIds, componentIds: componentIds, mediaIds: mediaIds };
    };
    NavigationEntryItemEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NavigationEntryItemEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCmsService },
        { type: RoutingService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
    return NavigationEntryItemEffects;
}());
export { NavigationEntryItemEffects };
if (false) {
    /** @type {?} */
    NavigationEntryItemEffects.prototype.loadNavigationItems$;
    /**
     * @type {?}
     * @private
     */
    NavigationEntryItemEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    NavigationEntryItemEffects.prototype.occCmsService;
    /**
     * @type {?}
     * @private
     */
    NavigationEntryItemEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEtBQUsscUJBQXFCLE1BQU0seUNBQXlDLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RDtJQWtGRSxvQ0FDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixjQUE4QjtRQUh4QyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbEZ4Qyx5QkFBb0IsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxFQUNuRCxHQUFHLENBQUMsVUFBQyxNQUFpRCxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDMUUsR0FBRyxDQUFDLFVBQUEsT0FBTztZQUNULE9BQU87Z0JBQ0wsR0FBRyxFQUFFLEtBQUksQ0FB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QUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUM5RSxDQUFDOztnQkFoRkYsVUFBVTs7OztnQkFUTSxPQUFPO2dCQUtmLGFBQWE7Z0JBRWIsY0FBYzs7SUFLckI7UUFEQyxNQUFNLEVBQUU7MENBQ2EsVUFBVTs0RUEyRDlCO0lBeUJKLGlDQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0F0RlksMEJBQTBCOzs7SUFDckMsMERBNERFOzs7OztJQXFCQSw4Q0FBeUI7Ozs7O0lBQ3pCLG1EQUFvQzs7Ozs7SUFDcEMsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgZmlsdGVyLCBtZXJnZU1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgbmF2aWdhdGlvbkl0ZW1BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbic7XG5pbXBvcnQgeyBPY2NDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBJZExpc3QgfSBmcm9tICcuLi8uLi9tb2RlbC9pZExpc3QubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25FbnRyeUl0ZW1FZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWROYXZpZ2F0aW9uSXRlbXMkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKG5hdmlnYXRpb25JdGVtQWN0aW9ucy5MT0FEX05BVklHQVRJT05fSVRFTVMpLFxuICAgIG1hcCgoYWN0aW9uOiBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkczogdGhpcy5nZXRJZExpc3RCeUl0ZW1UeXBlKHBheWxvYWQuaXRlbXMpLFxuICAgICAgICBub2RlSWQ6IHBheWxvYWQubm9kZUlkXG4gICAgICB9O1xuICAgIH0pLFxuICAgIG1lcmdlTWFwKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEuaWRzLmNvbXBvbmVudElkcy5pZExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIG1lcmdlTWFwKHBhZ2VDb250ZXh0ID0+IHtcbiAgICAgICAgICAgIC8vIGRvd25sb2FkIGFsbCBpdGVtcyBpbiBvbmUgcmVxdWVzdFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2NjQ21zU2VydmljZVxuICAgICAgICAgICAgICAubG9hZExpc3RDb21wb25lbnRzKFxuICAgICAgICAgICAgICAgIGRhdGEuaWRzLmNvbXBvbmVudElkcyxcbiAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgICAnREVGQVVMVCcsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICBkYXRhLmlkcy5jb21wb25lbnRJZHMuaWRMaXN0Lmxlbmd0aFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICAgICAgIHJlcyA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgbmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxvYWROYXZpZ2F0aW9uSXRlbXNTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHJlcy5jb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgICAgICBuZXcgbmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxvYWROYXZpZ2F0aW9uSXRlbXNGYWlsKFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMucGFnZUlkcy5pZExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUT0RPOiBmdXR1cmUgd29ya1xuICAgICAgICAvLyBkaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBjbXMgcGFnZSBvbmUgYnkgb25lXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuaWRzLm1lZGlhSWRzLmlkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIHNlbmQgcmVxdWVzdCB0byBnZXQgbGlzdCBvZiBtZWRpYVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgIG5ldyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc0ZhaWwoXG4gICAgICAgICAgICBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICduYXZpZ2F0aW9uIG5vZGVzIGFyZSBlbXB0eSdcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcblxuICAvLyBXZSBvbmx5IGNvbnNpZGVyIDMgaXRlbSB0eXBlczogY21zIHBhZ2UsIGNtcyBjb21wb25lbnQsIGFuZCBtZWRpYS5cbiAgZ2V0SWRMaXN0QnlJdGVtVHlwZShpdGVtTGlzdDogYW55W10pIHtcbiAgICBjb25zdCBwYWdlSWRzOiBJZExpc3QgPSB7IGlkTGlzdDogW10gfTtcbiAgICBjb25zdCBjb21wb25lbnRJZHM6IElkTGlzdCA9IHsgaWRMaXN0OiBbXSB9O1xuICAgIGNvbnN0IG1lZGlhSWRzOiBJZExpc3QgPSB7IGlkTGlzdDogW10gfTtcblxuICAgIGl0ZW1MaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdENNU0NvbXBvbmVudCcpIHtcbiAgICAgICAgY29tcG9uZW50SWRzLmlkTGlzdC5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0UGFnZScpIHtcbiAgICAgICAgcGFnZUlkcy5pZExpc3QucHVzaChpdGVtLmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdE1lZGlhJykge1xuICAgICAgICBtZWRpYUlkcy5pZExpc3QucHVzaChpdGVtLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyBwYWdlSWRzOiBwYWdlSWRzLCBjb21wb25lbnRJZHM6IGNvbXBvbmVudElkcywgbWVkaWFJZHM6IG1lZGlhSWRzIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjQ21zU2VydmljZTogT2NjQ21zU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG59XG4iXX0=