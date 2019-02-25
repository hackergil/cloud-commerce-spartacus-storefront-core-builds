/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
/** @type {?} */
export var getDeliveryCountriesState = createSelector(getUserState, function (state) { return state.countries; });
/** @type {?} */
export var getDeliveryCountriesEntites = createSelector(getDeliveryCountriesState, function (state) { return state.entities; });
/** @type {?} */
export var getAllDeliveryCountries = createSelector(getDeliveryCountriesEntites, function (entites) { return Object.keys(entites).map(function (isocode) { return entites[isocode]; }); });
/** @type {?} */
export var countrySelectorFactory = function (isocode) {
    return createSelector(getDeliveryCountriesEntites, function (entities) { return (Object.keys(entities).length !== 0 ? entities[isocode] : null); });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy9kZWxpdmVyeS1jb3VudHJpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRWxELE1BQU0sS0FBTyx5QkFBeUIsR0FHbEMsY0FBYyxDQUNoQixZQUFZLEVBQ1osVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBZixDQUFlLENBQ3RDOztBQUVELE1BQU0sS0FBTywyQkFBMkIsR0FHcEMsY0FBYyxDQUNoQix5QkFBeUIsRUFDekIsVUFBQyxLQUE2QixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjLENBQ2xEOztBQUVELE1BQU0sS0FBTyx1QkFBdUIsR0FHaEMsY0FBYyxDQUNoQiwyQkFBMkIsRUFDM0IsVUFBQSxPQUFPLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUFyRCxDQUFxRCxDQUNqRTs7QUFFRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsVUFDcEMsT0FBZTtJQUVmLE9BQUEsY0FBYyxDQUNaLDJCQUEyQixFQUMzQixVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUEvRCxDQUErRCxDQUM1RTtBQUhELENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW1vaXplZFNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIFVzZXJTdGF0ZSxcbiAgRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSxcbiAgU3RhdGVXaXRoVXNlcixcbiAgRGVsaXZlcnlDb3VudHJ5RW50aXRpZXNcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0VXNlclN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldERlbGl2ZXJ5Q291bnRyaWVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIERlbGl2ZXJ5Q291bnRyaWVzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0VXNlclN0YXRlLFxuICAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUuY291bnRyaWVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0RGVsaXZlcnlDb3VudHJpZXNFbnRpdGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBEZWxpdmVyeUNvdW50cnlFbnRpdGllc1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXREZWxpdmVyeUNvdW50cmllc1N0YXRlLFxuICAoc3RhdGU6IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsRGVsaXZlcnlDb3VudHJpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIENvdW50cnlbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXREZWxpdmVyeUNvdW50cmllc0VudGl0ZXMsXG4gIGVudGl0ZXMgPT4gT2JqZWN0LmtleXMoZW50aXRlcykubWFwKGlzb2NvZGUgPT4gZW50aXRlc1tpc29jb2RlXSlcbik7XG5cbmV4cG9ydCBjb25zdCBjb3VudHJ5U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBpc29jb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoVXNlciwgQ291bnRyeT4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0RGVsaXZlcnlDb3VudHJpZXNFbnRpdGVzLFxuICAgIGVudGl0aWVzID0+IChPYmplY3Qua2V5cyhlbnRpdGllcykubGVuZ3RoICE9PSAwID8gZW50aXRpZXNbaXNvY29kZV0gOiBudWxsKVxuICApO1xuIl19