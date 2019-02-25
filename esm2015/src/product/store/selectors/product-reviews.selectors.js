/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getProductsState } from './feature.selector';
/** @type {?} */
export const getProductReviewsState = createSelector(getProductsState, (state) => state.reviews);
/** @type {?} */
export const getSelectedProductReviewsFactory = (productCode) => {
    return createSelector(getProductReviewsState, reviewData => {
        if (reviewData.productCode === productCode) {
            return reviewData.list;
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3NlbGVjdG9ycy9wcm9kdWN0LXJldmlld3Muc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFdEQsTUFBTSxPQUFPLHNCQUFzQixHQUcvQixjQUFjLENBQ2hCLGdCQUFnQixFQUNoQixDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3hDOztBQUVELE1BQU0sT0FBTyxnQ0FBZ0MsR0FBRyxDQUM5QyxXQUFXLEVBQ21DLEVBQUU7SUFDaEQsT0FBTyxjQUFjLENBQ25CLHNCQUFzQixFQUN0QixVQUFVLENBQUMsRUFBRTtRQUNYLElBQUksVUFBVSxDQUFDLFdBQVcsS0FBSyxXQUFXLEVBQUU7WUFDMUMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7XG4gIFByb2R1Y3RSZXZpZXdzU3RhdGUsXG4gIFByb2R1Y3RzU3RhdGUsXG4gIFN0YXRlV2l0aFByb2R1Y3Rcbn0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuaW1wb3J0IHsgZ2V0UHJvZHVjdHNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmV2aWV3c1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBQcm9kdWN0UmV2aWV3c1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RzU3RhdGUsXG4gIChzdGF0ZTogUHJvZHVjdHNTdGF0ZSkgPT4gc3RhdGUucmV2aWV3c1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFJldmlld3NGYWN0b3J5ID0gKFxuICBwcm9kdWN0Q29kZVxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBSZXZpZXdbXT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UHJvZHVjdFJldmlld3NTdGF0ZSxcbiAgICByZXZpZXdEYXRhID0+IHtcbiAgICAgIGlmIChyZXZpZXdEYXRhLnByb2R1Y3RDb2RlID09PSBwcm9kdWN0Q29kZSkge1xuICAgICAgICByZXR1cm4gcmV2aWV3RGF0YS5saXN0O1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=