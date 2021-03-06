/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getAuthState } from './feature.selector';
/** @type {?} */
export const getUserTokenSelector = (state) => state.token;
/** @type {?} */
export const getUserTokenState = createSelector(getAuthState, (state) => state.userToken);
/** @type {?} */
export const getUserToken = createSelector(getUserTokenState, getUserTokenSelector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9zZWxlY3RvcnMvdXNlci10b2tlbi5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFbEQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUs7O0FBRTFFLE1BQU0sT0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixZQUFZLEVBQ1osQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUN0Qzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUFxQyxjQUFjLENBQzFFLGlCQUFpQixFQUNqQixvQkFBb0IsQ0FDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoU3RhdGUsIFN0YXRlV2l0aEF1dGgsIFVzZXJUb2tlblN0YXRlIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRBdXRoU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlclRva2VuU2VsZWN0b3IgPSAoc3RhdGU6IFVzZXJUb2tlblN0YXRlKSA9PiBzdGF0ZS50b2tlbjtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJUb2tlblN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBdXRoLFxuICBVc2VyVG9rZW5TdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBdXRoU3RhdGUsXG4gIChzdGF0ZTogQXV0aFN0YXRlKSA9PiBzdGF0ZS51c2VyVG9rZW5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyVG9rZW46IE1lbW9pemVkU2VsZWN0b3I8YW55LCBVc2VyVG9rZW4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJUb2tlblN0YXRlLFxuICBnZXRVc2VyVG9rZW5TZWxlY3RvclxuKTtcbiJdfQ==