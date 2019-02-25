/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { failMeta, loadMeta, resetMeta, successMeta } from '../loader/loader.action';
import { entityMeta } from '../entity/entity.action';
/** @type {?} */
export var ENTITY_LOAD_ACTION = '[ENTITY] LOAD';
/** @type {?} */
export var ENTITY_FAIL_ACTION = '[ENTITY] LOAD FAIL';
/** @type {?} */
export var ENTITY_SUCCESS_ACTION = '[ENTITY] LOAD SUCCESS';
/** @type {?} */
export var ENTITY_RESET_ACTION = '[ENTITY] RESET';
/**
 * @record
 */
export function EntityLoaderMeta() { }
/**
 * @record
 */
export function EntityLoaderAction() { }
if (false) {
    /** @type {?|undefined} */
    EntityLoaderAction.prototype.payload;
    /** @type {?|undefined} */
    EntityLoaderAction.prototype.meta;
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityLoadMeta(entityType, id) {
    return tslib_1.__assign({}, loadMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @param {?=} error
 * @return {?}
 */
export function entityFailMeta(entityType, id, error) {
    return tslib_1.__assign({}, failMeta(entityType, error), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entitySuccessMeta(entityType, id) {
    return tslib_1.__assign({}, successMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
export function entityResetMeta(entityType, id) {
    return tslib_1.__assign({}, resetMeta(entityType), entityMeta(entityType, id));
}
var EntityLoadAction = /** @class */ (function () {
    function EntityLoadAction(entityType, id) {
        this.type = ENTITY_LOAD_ACTION;
        this.meta = entityLoadMeta(entityType, id);
    }
    return EntityLoadAction;
}());
export { EntityLoadAction };
if (false) {
    /** @type {?} */
    EntityLoadAction.prototype.type;
    /** @type {?} */
    EntityLoadAction.prototype.meta;
}
var EntityFailAction = /** @class */ (function () {
    function EntityFailAction(entityType, id, error) {
        this.type = ENTITY_FAIL_ACTION;
        this.meta = entityFailMeta(entityType, id, error);
    }
    return EntityFailAction;
}());
export { EntityFailAction };
if (false) {
    /** @type {?} */
    EntityFailAction.prototype.type;
    /** @type {?} */
    EntityFailAction.prototype.meta;
}
var EntitySuccessAction = /** @class */ (function () {
    function EntitySuccessAction(entityType, id) {
        this.type = ENTITY_SUCCESS_ACTION;
        this.meta = entitySuccessMeta(entityType, id);
    }
    return EntitySuccessAction;
}());
export { EntitySuccessAction };
if (false) {
    /** @type {?} */
    EntitySuccessAction.prototype.type;
    /** @type {?} */
    EntitySuccessAction.prototype.meta;
}
var EntityResetAction = /** @class */ (function () {
    function EntityResetAction(entityType, id) {
        this.type = ENTITY_RESET_ACTION;
        this.meta = entityResetMeta(entityType, id);
    }
    return EntityResetAction;
}());
export { EntityResetAction };
if (false) {
    /** @type {?} */
    EntityResetAction.prototype.type;
    /** @type {?} */
    EntityResetAction.prototype.meta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxvYWRlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxRQUFRLEVBRVIsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1osTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0seUJBQXlCLENBQUM7O0FBR2pFLE1BQU0sS0FBTyxrQkFBa0IsR0FBRyxlQUFlOztBQUNqRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsb0JBQW9COztBQUN0RCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsdUJBQXVCOztBQUM1RCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsZ0JBQWdCOzs7O0FBRW5ELHNDQUFtRTs7OztBQUVuRSx3Q0FHQzs7O0lBRkMscUNBQXVCOztJQUN2QixrQ0FBaUM7Ozs7Ozs7QUFHbkMsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsVUFBa0IsRUFDbEIsRUFBcUI7SUFFckIsNEJBQ0ssUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUNwQixVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUM3QjtBQUNKLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixVQUFrQixFQUNsQixFQUFxQixFQUNyQixLQUFXO0lBRVgsNEJBQ0ssUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFDM0IsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFDN0I7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLFVBQWtCLEVBQ2xCLEVBQXFCO0lBRXJCLDRCQUNLLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFDdkIsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFDN0I7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUM3QixVQUFrQixFQUNsQixFQUFxQjtJQUVyQiw0QkFDSyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQ3JCLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQzdCO0FBQ0osQ0FBQztBQUVEO0lBR0UsMEJBQVksVUFBa0IsRUFBRSxFQUFxQjtRQUZyRCxTQUFJLEdBQUcsa0JBQWtCLENBQUM7UUFHeEIsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsZ0NBQTBCOztJQUMxQixnQ0FBZ0M7O0FBTWxDO0lBR0UsMEJBQVksVUFBa0IsRUFBRSxFQUFxQixFQUFFLEtBQVc7UUFGbEUsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1FBR3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxnQ0FBMEI7O0lBQzFCLGdDQUFnQzs7QUFNbEM7SUFHRSw2QkFBWSxVQUFrQixFQUFFLEVBQXFCO1FBRnJELFNBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUczQixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLG1DQUE2Qjs7SUFDN0IsbUNBQWdDOztBQU1sQztJQUdFLDJCQUFZLFVBQWtCLEVBQUUsRUFBcUI7UUFGckQsU0FBSSxHQUFHLG1CQUFtQixDQUFDO1FBR3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLGlDQUEyQjs7SUFDM0IsaUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZmFpbE1ldGEsXG4gIExvYWRlck1ldGEsXG4gIGxvYWRNZXRhLFxuICByZXNldE1ldGEsXG4gIHN1Y2Nlc3NNZXRhXG59IGZyb20gJy4uL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IGVudGl0eU1ldGEsIEVudGl0eU1ldGEgfSBmcm9tICcuLi9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBFTlRJVFlfTE9BRF9BQ1RJT04gPSAnW0VOVElUWV0gTE9BRCc7XG5leHBvcnQgY29uc3QgRU5USVRZX0ZBSUxfQUNUSU9OID0gJ1tFTlRJVFldIExPQUQgRkFJTCc7XG5leHBvcnQgY29uc3QgRU5USVRZX1NVQ0NFU1NfQUNUSU9OID0gJ1tFTlRJVFldIExPQUQgU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgRU5USVRZX1JFU0VUX0FDVElPTiA9ICdbRU5USVRZXSBSRVNFVCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5TG9hZGVyTWV0YSBleHRlbmRzIEVudGl0eU1ldGEsIExvYWRlck1ldGEge31cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlMb2FkZXJBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICByZWFkb25seSBwYXlsb2FkPzogYW55O1xuICByZWFkb25seSBtZXRhPzogRW50aXR5TG9hZGVyTWV0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUxvYWRNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogRW50aXR5TG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgLi4ubG9hZE1ldGEoZW50aXR5VHlwZSksXG4gICAgLi4uZW50aXR5TWV0YShlbnRpdHlUeXBlLCBpZClcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUZhaWxNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgZXJyb3I/OiBhbnlcbik6IEVudGl0eUxvYWRlck1ldGEge1xuICByZXR1cm4ge1xuICAgIC4uLmZhaWxNZXRhKGVudGl0eVR5cGUsIGVycm9yKSxcbiAgICAuLi5lbnRpdHlNZXRhKGVudGl0eVR5cGUsIGlkKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5U3VjY2Vzc01ldGEoXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyB8IHN0cmluZ1tdXG4pOiBFbnRpdHlMb2FkZXJNZXRhIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdWNjZXNzTWV0YShlbnRpdHlUeXBlKSxcbiAgICAuLi5lbnRpdHlNZXRhKGVudGl0eVR5cGUsIGlkKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UmVzZXRNZXRhKFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogRW50aXR5TG9hZGVyTWV0YSB7XG4gIHJldHVybiB7XG4gICAgLi4ucmVzZXRNZXRhKGVudGl0eVR5cGUpLFxuICAgIC4uLmVudGl0eU1ldGEoZW50aXR5VHlwZSwgaWQpXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlMb2FkQWN0aW9uIGltcGxlbWVudHMgRW50aXR5TG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9MT0FEX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogRW50aXR5TG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlMb2FkTWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVudGl0eUZhaWxBY3Rpb24gaW1wbGVtZW50cyBFbnRpdHlMb2FkZXJBY3Rpb24ge1xuICB0eXBlID0gRU5USVRZX0ZBSUxfQUNUSU9OO1xuICByZWFkb25seSBtZXRhOiBFbnRpdHlMb2FkZXJNZXRhO1xuICBjb25zdHJ1Y3RvcihlbnRpdHlUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcgfCBzdHJpbmdbXSwgZXJyb3I/OiBhbnkpIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlGYWlsTWV0YShlbnRpdHlUeXBlLCBpZCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlTdWNjZXNzQWN0aW9uIGltcGxlbWVudHMgRW50aXR5TG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9TVUNDRVNTX0FDVElPTjtcbiAgcmVhZG9ubHkgbWV0YTogRW50aXR5TG9hZGVyTWV0YTtcbiAgY29uc3RydWN0b3IoZW50aXR5VHlwZTogc3RyaW5nLCBpZDogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB0aGlzLm1ldGEgPSBlbnRpdHlTdWNjZXNzTWV0YShlbnRpdHlUeXBlLCBpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVudGl0eVJlc2V0QWN0aW9uIGltcGxlbWVudHMgRW50aXR5TG9hZGVyQWN0aW9uIHtcbiAgdHlwZSA9IEVOVElUWV9SRVNFVF9BQ1RJT047XG4gIHJlYWRvbmx5IG1ldGE6IEVudGl0eUxvYWRlck1ldGE7XG4gIGNvbnN0cnVjdG9yKGVudGl0eVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5tZXRhID0gZW50aXR5UmVzZXRNZXRhKGVudGl0eVR5cGUsIGlkKTtcbiAgfVxufVxuIl19