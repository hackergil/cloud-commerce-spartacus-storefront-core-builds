/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
/** @type {?} */
export const getBillingCountriesState = createSelector(getUserState, (state) => state.billingCountries);
/** @type {?} */
export const getBillingCountriesEntites = createSelector(getBillingCountriesState, (state) => state.entities);
/** @type {?} */
export const getAllBillingCountries = createSelector(getBillingCountriesEntites, entites => Object.keys(entites).map(isocode => entites[isocode]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL2JpbGxpbmctY291bnRyaWVzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUdsRCxNQUFNLE9BQU8sd0JBQXdCLEdBR2pDLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUM3Qzs7QUFFRCxNQUFNLE9BQU8sMEJBQTBCLEdBR25DLGNBQWMsQ0FDaEIsd0JBQXdCLEVBQ3hCLENBQUMsS0FBNEIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakQ7O0FBRUQsTUFBTSxPQUFPLHNCQUFzQixHQUcvQixjQUFjLENBQ2hCLDBCQUEwQixFQUMxQixPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVtb2l6ZWRTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBVc2VyU3RhdGUsXG4gIEJpbGxpbmdDb3VudHJpZXNTdGF0ZSxcbiAgU3RhdGVXaXRoVXNlcixcbiAgQmlsbGluZ0NvdW50cnlFbnRpdGllc1xufSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBnZXRCaWxsaW5nQ291bnRyaWVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIEJpbGxpbmdDb3VudHJpZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5iaWxsaW5nQ291bnRyaWVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QmlsbGluZ0NvdW50cmllc0VudGl0ZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIEJpbGxpbmdDb3VudHJ5RW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QmlsbGluZ0NvdW50cmllc1N0YXRlLFxuICAoc3RhdGU6IEJpbGxpbmdDb3VudHJpZXNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxCaWxsaW5nQ291bnRyaWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBDb3VudHJ5W11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QmlsbGluZ0NvdW50cmllc0VudGl0ZXMsXG4gIGVudGl0ZXMgPT4gT2JqZWN0LmtleXMoZW50aXRlcykubWFwKGlzb2NvZGUgPT4gZW50aXRlc1tpc29jb2RlXSlcbik7XG4iXX0=