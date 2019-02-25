/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromCurrencies from '../actions/currencies.action';
/** @type {?} */
export const initialState = {
    entities: null,
    activeCurrency: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromCurrencies.LOAD_CURRENCIES_SUCCESS: {
            /** @type {?} */
            const currencies = action.payload;
            /** @type {?} */
            const entities = currencies.reduce((currEntities, currency) => {
                return Object.assign({}, currEntities, { [currency.isocode]: currency });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case fromCurrencies.SET_ACTIVE_CURRENCY: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeCurrency: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zdG9yZS9yZWR1Y2Vycy9jdXJyZW5jaWVzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxjQUFjLE1BQU0sOEJBQThCLENBQUM7O0FBSS9ELE1BQU0sT0FBTyxZQUFZLEdBQW9CO0lBQzNDLFFBQVEsRUFBRSxJQUFJO0lBQ2QsY0FBYyxFQUFFLElBQUk7Q0FDckI7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXVDO0lBRXZDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztrQkFDckMsVUFBVSxHQUFlLE1BQU0sQ0FBQyxPQUFPOztrQkFDdkMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQ2hDLENBQUMsWUFBNkMsRUFBRSxRQUFrQixFQUFFLEVBQUU7Z0JBQ3BFLHlCQUNLLFlBQVksSUFDZixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLElBQzVCO1lBQ0osQ0FBQyxvQkFFSSxLQUFLLENBQUMsUUFBUSxFQUVwQjtZQUVELHlCQUNLLEtBQUssSUFDUixRQUFRLElBQ1I7U0FDSDtRQUVELEtBQUssY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2tCQUNqQyxPQUFPLEdBQVcsTUFBTSxDQUFDLE9BQU87WUFFdEMseUJBQ0ssS0FBSyxJQUNSLGNBQWMsRUFBRSxPQUFPLElBQ3ZCO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21DdXJyZW5jaWVzIGZyb20gJy4uL2FjdGlvbnMvY3VycmVuY2llcy5hY3Rpb24nO1xuaW1wb3J0IHsgQ3VycmVuY2llc1N0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ3VycmVuY2llc1N0YXRlID0ge1xuICBlbnRpdGllczogbnVsbCxcbiAgYWN0aXZlQ3VycmVuY3k6IG51bGxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQ3VycmVuY2llcy5DdXJyZW5jaWVzQWN0aW9uXG4pOiBDdXJyZW5jaWVzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQ3VycmVuY2llcy5MT0FEX0NVUlJFTkNJRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY3VycmVuY2llczogQ3VycmVuY3lbXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBjdXJyZW5jaWVzLnJlZHVjZShcbiAgICAgICAgKGN1cnJFbnRpdGllczogeyBbaXNvY29kZTogc3RyaW5nXTogQ3VycmVuY3kgfSwgY3VycmVuY3k6IEN1cnJlbmN5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmN1cnJFbnRpdGllcyxcbiAgICAgICAgICAgIFtjdXJyZW5jeS5pc29jb2RlXTogY3VycmVuY3lcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXNcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUN1cnJlbmNpZXMuU0VUX0FDVElWRV9DVVJSRU5DWToge1xuICAgICAgY29uc3QgaXNvY29kZTogc3RyaW5nID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVDdXJyZW5jeTogaXNvY29kZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=