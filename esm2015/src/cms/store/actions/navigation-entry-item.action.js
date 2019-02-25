/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NAVIGATION_DETAIL_ENTITY } from '../cms-state';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
/** @type {?} */
export const LOAD_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
/** @type {?} */
export const LOAD_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
/** @type {?} */
export const LOAD_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
export class LoadNavigationItems extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS;
    }
}
if (false) {
    /** @type {?} */
    LoadNavigationItems.prototype.type;
    /** @type {?} */
    LoadNavigationItems.prototype.payload;
}
export class LoadNavigationItemsFail extends EntityFailAction {
    /**
     * @param {?} nodeId
     * @param {?} payload
     */
    constructor(nodeId, payload) {
        super(NAVIGATION_DETAIL_ENTITY, nodeId, payload);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadNavigationItemsFail.prototype.type;
    /** @type {?} */
    LoadNavigationItemsFail.prototype.payload;
}
export class LoadNavigationItemsSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadNavigationItemsSuccess.prototype.type;
    /** @type {?} */
    LoadNavigationItemsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ3BCLE1BQU0seURBQXlELENBQUM7O0FBRWpFLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxrQ0FBa0M7O0FBQ3ZFLE1BQU0sT0FBTywwQkFBMEIsR0FDckMsdUNBQXVDOztBQUN6QyxNQUFNLE9BQU8sNkJBQTZCLEdBQ3hDLDBDQUEwQztBQUU1QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCOzs7O0lBRXZELFlBQW1CLE9BQXlDO1FBQzFELEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFEL0IsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7UUFEbkQsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXNDOztJQUMxQixzQ0FBZ0Q7O0FBSzlELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7Ozs7O0lBRTNELFlBQVksTUFBYyxFQUFTLE9BQVk7UUFDN0MsS0FBSyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQURoQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRDLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQUczQyxDQUFDO0NBQ0Y7OztJQUpDLHVDQUEyQzs7SUFDZiwwQ0FBbUI7O0FBS2pELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxtQkFBbUI7Ozs7SUFFakUsWUFBbUIsT0FBOEM7UUFDL0QsS0FBSyxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUQvQixZQUFPLEdBQVAsT0FBTyxDQUF1QztRQUR4RCxTQUFJLEdBQUcsNkJBQTZCLENBQUM7SUFHOUMsQ0FBQztDQUNGOzs7SUFKQywwQ0FBOEM7O0lBQ2xDLDZDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5BVklHQVRJT05fREVUQUlMX0VOVElUWSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTE9BRF9OQVZJR0FUSU9OX0lURU1TID0gJ1tDbXNdIExvYWQgTmF2aWdhdGlvbkVudHJ5IGl0ZW1zJztcbmV4cG9ydCBjb25zdCBMT0FEX05BVklHQVRJT05fSVRFTVNfRkFJTCA9XG4gICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUyA9XG4gICdbQ21zXSBMb2FkIE5hdmlnYXRpb25FbnRyeSBpdGVtcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWROYXZpZ2F0aW9uSXRlbXMgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTkFWSUdBVElPTl9JVEVNUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgbm9kZUlkOiBzdHJpbmc7IGl0ZW1zOiBhbnlbXSB9KSB7XG4gICAgc3VwZXIoTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLCBwYXlsb2FkLm5vZGVJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWROYXZpZ2F0aW9uSXRlbXNGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX05BVklHQVRJT05fSVRFTVNfRkFJTDtcbiAgY29uc3RydWN0b3Iobm9kZUlkOiBzdHJpbmcsIHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFksIG5vZGVJZCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWROYXZpZ2F0aW9uSXRlbXNTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgbm9kZUlkOiBzdHJpbmc7IGNvbXBvbmVudHM6IGFueVtdIH0pIHtcbiAgICBzdXBlcihOQVZJR0FUSU9OX0RFVEFJTF9FTlRJVFksIHBheWxvYWQubm9kZUlkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIE5hdmlnYXRpb25FbnRyeUl0ZW1BY3Rpb24gPVxuICB8IExvYWROYXZpZ2F0aW9uSXRlbXNcbiAgfCBMb2FkTmF2aWdhdGlvbkl0ZW1zRmFpbFxuICB8IExvYWROYXZpZ2F0aW9uSXRlbXNTdWNjZXNzO1xuIl19