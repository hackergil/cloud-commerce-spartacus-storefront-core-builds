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
export class NavigationEntryItemEffects {
    /**
     * @param {?} actions$
     * @param {?} occCmsService
     * @param {?} routingService
     */
    constructor(actions$, occCmsService, routingService) {
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(navigationItemActions.LOAD_NAVIGATION_ITEMS), map((action) => action.payload), map(payload => {
            return {
                ids: this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId
            };
        }), mergeMap(data => {
            if (data.ids.componentIds.idList.length > 0) {
                return this.routingService.getRouterState().pipe(filter(routerState => routerState !== undefined), map(routerState => routerState.state.context), take(1), mergeMap(pageContext => {
                    // download all items in one request
                    return this.occCmsService
                        .loadListComponents(data.ids.componentIds, pageContext, 'DEFAULT', 0, data.ids.componentIds.idList.length)
                        .pipe(map(res => new navigationItemActions.LoadNavigationItemsSuccess({
                        nodeId: data.nodeId,
                        components: res.component
                    })), catchError(error => of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, error))));
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
    /**
     * @param {?} itemList
     * @return {?}
     */
    getIdListByItemType(itemList) {
        /** @type {?} */
        const pageIds = { idList: [] };
        /** @type {?} */
        const componentIds = { idList: [] };
        /** @type {?} */
        const mediaIds = { idList: [] };
        itemList.forEach(item => {
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
    }
}
NavigationEntryItemEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NavigationEntryItemEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccCmsService },
    { type: RoutingService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEtBQUsscUJBQXFCLE1BQU0seUNBQXlDLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUd4RCxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7SUFpRnJDLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsY0FBOEI7UUFGOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsRnhDLHlCQUFvQixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLEVBQ25ELEdBQUcsQ0FBQyxDQUFDLE1BQWlELEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDMUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1osT0FBTztnQkFDTCxHQUFHLEVB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QUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQzlFLENBQUM7OztZQWhGRixVQUFVOzs7O1lBVE0sT0FBTztZQUtmLGFBQWE7WUFFYixjQUFjOztBQUtyQjtJQURDLE1BQU0sRUFBRTtzQ0FDYSxVQUFVO3dFQTJEOUI7OztJQTVERiwwREE0REU7Ozs7O0lBcUJBLDhDQUF5Qjs7Ozs7SUFDekIsbURBQW9DOzs7OztJQUNwQyxvREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBmaWx0ZXIsIG1lcmdlTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uJztcbmltcG9ydCB7IE9jY0Ntc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLWNtcy5zZXJ2aWNlJztcbmltcG9ydCB7IElkTGlzdCB9IGZyb20gJy4uLy4uL21vZGVsL2lkTGlzdC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkVudHJ5SXRlbUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZE5hdmlnYXRpb25JdGVtcyQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUobmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxPQURfTkFWSUdBVElPTl9JVEVNUyksXG4gICAgbWFwKChhY3Rpb246IG5hdmlnYXRpb25JdGVtQWN0aW9ucy5Mb2FkTmF2aWdhdGlvbkl0ZW1zKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWRzOiB0aGlzLmdldElkTGlzdEJ5SXRlbVR5cGUocGF5bG9hZC5pdGVtcyksXG4gICAgICAgIG5vZGVJZDogcGF5bG9hZC5ub2RlSWRcbiAgICAgIH07XG4gICAgfSksXG4gICAgbWVyZ2VNYXAoZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5pZHMuY29tcG9uZW50SWRzLmlkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgICBmaWx0ZXIocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUgIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgbWFwKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpLFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWVyZ2VNYXAocGFnZUNvbnRleHQgPT4ge1xuICAgICAgICAgICAgLy8gZG93bmxvYWQgYWxsIGl0ZW1zIGluIG9uZSByZXF1ZXN0XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vY2NDbXNTZXJ2aWNlXG4gICAgICAgICAgICAgIC5sb2FkTGlzdENvbXBvbmVudHMoXG4gICAgICAgICAgICAgICAgZGF0YS5pZHMuY29tcG9uZW50SWRzLFxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICdERUZBVUxUJyxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIGRhdGEuaWRzLmNvbXBvbmVudElkcy5pZExpc3QubGVuZ3RoXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgICAgcmVzID0+XG4gICAgICAgICAgICAgICAgICAgIG5ldyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czogcmVzLmNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc0ZhaWwoXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLmlkcy5wYWdlSWRzLmlkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIGRpc3BhdGNoIGFjdGlvbiB0byBsb2FkIGNtcyBwYWdlIG9uZSBieSBvbmVcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMubWVkaWFJZHMuaWRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVE9ETzogZnV0dXJlIHdvcmtcbiAgICAgICAgLy8gc2VuZCByZXF1ZXN0IHRvIGdldCBsaXN0IG9mIG1lZGlhXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgbmV3IG5hdmlnYXRpb25JdGVtQWN0aW9ucy5Mb2FkTmF2aWdhdGlvbkl0ZW1zRmFpbChcbiAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgJ25hdmlnYXRpb24gbm9kZXMgYXJlIGVtcHR5J1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIC8vIFdlIG9ubHkgY29uc2lkZXIgMyBpdGVtIHR5cGVzOiBjbXMgcGFnZSwgY21zIGNvbXBvbmVudCwgYW5kIG1lZGlhLlxuICBnZXRJZExpc3RCeUl0ZW1UeXBlKGl0ZW1MaXN0OiBhbnlbXSkge1xuICAgIGNvbnN0IHBhZ2VJZHM6IElkTGlzdCA9IHsgaWRMaXN0OiBbXSB9O1xuICAgIGNvbnN0IGNvbXBvbmVudElkczogSWRMaXN0ID0geyBpZExpc3Q6IFtdIH07XG4gICAgY29uc3QgbWVkaWFJZHM6IElkTGlzdCA9IHsgaWRMaXN0OiBbXSB9O1xuXG4gICAgaXRlbUxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0Q01TQ29tcG9uZW50Jykge1xuICAgICAgICBjb21wb25lbnRJZHMuaWRMaXN0LnB1c2goaXRlbS5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RQYWdlJykge1xuICAgICAgICBwYWdlSWRzLmlkTGlzdC5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0TWVkaWEnKSB7XG4gICAgICAgIG1lZGlhSWRzLmlkTGlzdC5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHBhZ2VJZHM6IHBhZ2VJZHMsIGNvbXBvbmVudElkczogY29tcG9uZW50SWRzLCBtZWRpYUlkczogbWVkaWFJZHMgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NDbXNTZXJ2aWNlOiBPY2NDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==