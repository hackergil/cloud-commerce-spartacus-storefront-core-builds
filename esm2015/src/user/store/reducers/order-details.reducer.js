/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromOrderDetailsAction from '../actions/order-details.action';
/** @type {?} */
export const initialState = {
    order: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromOrderDetailsAction.LOAD_ORDER_DETAILS_SUCCESS: {
            /** @type {?} */
            const order = action.payload;
            return Object.assign({}, state, { order });
        }
        case fromOrderDetailsAction.CLEAR_ORDER_DETAILS: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvb3JkZXItZGV0YWlscy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssc0JBQXNCLE1BQU0saUNBQWlDLENBQUM7O0FBSTFFLE1BQU0sT0FBTyxZQUFZLEdBQXNCO0lBQzdDLEtBQUssRUFBRSxFQUFFO0NBQ1Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQWlEO0lBRWpELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUM7O2tCQUNoRCxLQUFLLEdBQVUsTUFBTSxDQUFDLE9BQU87WUFFbkMseUJBQ0ssS0FBSyxJQUNSLEtBQUssSUFDTDtTQUNIO1FBQ0QsS0FBSyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvb3JkZXItZGV0YWlscy5hY3Rpb24nO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBPcmRlckRldGFpbHNTdGF0ZSA9IHtcbiAgb3JkZXI6IHt9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5PcmRlckRldGFpbHNBY3Rpb25cbik6IE9yZGVyRGV0YWlsc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5MT0FEX09SREVSX0RFVEFJTFNfU1VDQ0VTUzoge1xuICAgICAgY29uc3Qgb3JkZXI6IE9yZGVyID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcmRlclxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkNMRUFSX09SREVSX0RFVEFJTFM6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==