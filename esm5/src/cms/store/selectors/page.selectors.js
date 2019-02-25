/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getCmsState } from './feature.selectors';
/** @type {?} */
export var getPageEntitiesSelector = function (state) { return state.entities; };
/** @type {?} */
export var getPageCount = function (state) { return state.count; };
/** @type {?} */
export var getLatestPageKeySelector = function (state) {
    return state.latestPageKey;
};
/** @type {?} */
export var getPageState = createSelector(getCmsState, function (state) { return state.page; });
/** @type {?} */
export var getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
export var getLatestPageKey = createSelector(getPageState, getLatestPageKeySelector);
/** @type {?} */
export var getLatestPage = createSelector(getPageEntities, getLatestPageKey, function (entities, key) {
    return entities[key];
});
/** @type {?} */
export var currentSlotSelectorFactory = function (position) {
    return createSelector(getLatestPage, function (entity) {
        if (entity) {
            return entity.slots[position];
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFNL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVsRCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjOztBQUMzRSxNQUFNLEtBQU8sWUFBWSxHQUFHLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVzs7QUFDN0QsTUFBTSxLQUFPLHdCQUF3QixHQUFHLFVBQUMsS0FBZ0I7SUFDdkQsT0FBQSxLQUFLLENBQUMsYUFBYTtBQUFuQixDQUFtQjs7QUFFckIsTUFBTSxLQUFPLFlBQVksR0FHckIsY0FBYyxDQUNoQixXQUFXLEVBQ1gsVUFBQyxLQUFlLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FDaEM7O0FBRUQsTUFBTSxLQUFPLGVBQWUsR0FHeEIsY0FBYyxDQUNoQixZQUFZLEVBQ1osdUJBQXVCLENBQ3hCOztBQUVELE1BQU0sS0FBTyxnQkFBZ0IsR0FHekIsY0FBYyxDQUNoQixZQUFZLEVBQ1osd0JBQXdCLENBQ3pCOztBQUVELE1BQU0sS0FBTyxhQUFhLEdBR3RCLGNBQWMsQ0FDaEIsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixVQUFDLFFBQVEsRUFBRSxHQUFHO0lBQ1osT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUNGOztBQUVELE1BQU0sS0FBTywwQkFBMEIsR0FBRyxVQUN4QyxRQUFnQjtJQUVoQixPQUFPLGNBQWMsQ0FDbkIsYUFBYSxFQUNiLFVBQUEsTUFBTTtRQUNKLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IENtc1N0YXRlLCBQYWdlU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmltcG9ydCB7IGdldENtc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogUGFnZVN0YXRlKSA9PiBzdGF0ZS5lbnRpdGllcztcbmV4cG9ydCBjb25zdCBnZXRQYWdlQ291bnQgPSAoc3RhdGU6IFBhZ2VTdGF0ZSkgPT4gc3RhdGUuY291bnQ7XG5leHBvcnQgY29uc3QgZ2V0TGF0ZXN0UGFnZUtleVNlbGVjdG9yID0gKHN0YXRlOiBQYWdlU3RhdGUpID0+XG4gIHN0YXRlLmxhdGVzdFBhZ2VLZXk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgUGFnZVN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5wYWdlXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIHsgW2NvbnRleHQ6IHN0cmluZ106IFBhZ2UgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYWdlU3RhdGUsXG4gIGdldFBhZ2VFbnRpdGllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0TGF0ZXN0UGFnZUtleTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBzdHJpbmdcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UGFnZVN0YXRlLFxuICBnZXRMYXRlc3RQYWdlS2V5U2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRMYXRlc3RQYWdlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIFBhZ2Vcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UGFnZUVudGl0aWVzLFxuICBnZXRMYXRlc3RQYWdlS2V5LFxuICAoZW50aXRpZXMsIGtleSk6IFBhZ2UgPT4ge1xuICAgIHJldHVybiBlbnRpdGllc1trZXldO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgY3VycmVudFNsb3RTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHBvc2l0aW9uOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDb250ZW50U2xvdERhdGE+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldExhdGVzdFBhZ2UsXG4gICAgZW50aXR5ID0+IHtcbiAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eS5zbG90c1twb3NpdGlvbl07XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcbiJdfQ==