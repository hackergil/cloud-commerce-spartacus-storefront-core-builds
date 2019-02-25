/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entityStateSelector(state, id) {
    return state.entities[id] || {};
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entityValueSelector(state, id) {
    /** @type {?} */
    var entityState = entityStateSelector(state, id);
    return entityState.value;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entityLoadingSelector(state, id) {
    /** @type {?} */
    var entityState = entityStateSelector(state, id);
    return entityState.loading;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entityErrorSelector(state, id) {
    /** @type {?} */
    var entityState = entityStateSelector(state, id);
    return entityState.error;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entitySuccessSelector(state, id) {
    /** @type {?} */
    var entityState = entityStateSelector(state, id);
    return entityState.success;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxvYWRlci5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxLQUEyQixFQUMzQixFQUFVO0lBRVYsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxLQUEyQixFQUMzQixFQUFVOztRQUVKLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ2xELE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztBQUMzQixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxLQUEyQixFQUMzQixFQUFVOztRQUVKLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ2xELE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUM3QixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxLQUEyQixFQUMzQixFQUFVOztRQUVKLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ2xELE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztBQUMzQixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxLQUEyQixFQUMzQixFQUFVOztRQUVKLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ2xELE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuL2VudGl0eS1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi9sb2FkZXIvbG9hZGVyLXN0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVN0YXRlU2VsZWN0b3I8VD4oXG4gIHN0YXRlOiBFbnRpdHlMb2FkZXJTdGF0ZTxUPixcbiAgaWQ6IHN0cmluZ1xuKTogTG9hZGVyU3RhdGU8VD4ge1xuICByZXR1cm4gc3RhdGUuZW50aXRpZXNbaWRdIHx8IHt9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5VmFsdWVTZWxlY3RvcjxUPihcbiAgc3RhdGU6IEVudGl0eUxvYWRlclN0YXRlPFQ+LFxuICBpZDogc3RyaW5nXG4pOiBUIHtcbiAgY29uc3QgZW50aXR5U3RhdGUgPSBlbnRpdHlTdGF0ZVNlbGVjdG9yKHN0YXRlLCBpZCk7XG4gIHJldHVybiBlbnRpdHlTdGF0ZS52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUxvYWRpbmdTZWxlY3RvcjxUPihcbiAgc3RhdGU6IEVudGl0eUxvYWRlclN0YXRlPFQ+LFxuICBpZDogc3RyaW5nXG4pOiBib29sZWFuIHtcbiAgY29uc3QgZW50aXR5U3RhdGUgPSBlbnRpdHlTdGF0ZVNlbGVjdG9yKHN0YXRlLCBpZCk7XG4gIHJldHVybiBlbnRpdHlTdGF0ZS5sb2FkaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5RXJyb3JTZWxlY3RvcjxUPihcbiAgc3RhdGU6IEVudGl0eUxvYWRlclN0YXRlPFQ+LFxuICBpZDogc3RyaW5nXG4pOiBib29sZWFuIHtcbiAgY29uc3QgZW50aXR5U3RhdGUgPSBlbnRpdHlTdGF0ZVNlbGVjdG9yKHN0YXRlLCBpZCk7XG4gIHJldHVybiBlbnRpdHlTdGF0ZS5lcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVN1Y2Nlc3NTZWxlY3RvcjxUPihcbiAgc3RhdGU6IEVudGl0eUxvYWRlclN0YXRlPFQ+LFxuICBpZDogc3RyaW5nXG4pOiBib29sZWFuIHtcbiAgY29uc3QgZW50aXR5U3RhdGUgPSBlbnRpdHlTdGF0ZVNlbGVjdG9yKHN0YXRlLCBpZCk7XG4gIHJldHVybiBlbnRpdHlTdGF0ZS5zdWNjZXNzO1xufVxuIl19