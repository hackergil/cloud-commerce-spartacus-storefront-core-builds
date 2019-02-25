/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromLanguages from '../actions/languages.action';
/** @type {?} */
export const initialState = {
    entities: null,
    activeLanguage: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromLanguages.LOAD_LANGUAGES_SUCCESS: {
            /** @type {?} */
            const languages = action.payload;
            /** @type {?} */
            const entities = languages.reduce((langEntities, language) => {
                return Object.assign({}, langEntities, { [language.isocode]: language });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case fromLanguages.SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2xhbmd1YWdlcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssYUFBYSxNQUFNLDZCQUE2QixDQUFDOztBQUk3RCxNQUFNLE9BQU8sWUFBWSxHQUFtQjtJQUMxQyxRQUFRLEVBQUUsSUFBSTtJQUNkLGNBQWMsRUFBRSxJQUFJO0NBQ3JCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUFxQztJQUVyQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7a0JBQ25DLFNBQVMsR0FBZSxNQUFNLENBQUMsT0FBTzs7a0JBQ3RDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUMvQixDQUFDLFlBQTZDLEVBQUUsUUFBa0IsRUFBRSxFQUFFO2dCQUNwRSx5QkFDSyxZQUFZLElBQ2YsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxJQUM1QjtZQUNKLENBQUMsb0JBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCx5QkFDSyxLQUFLLElBQ1IsUUFBUSxJQUNSO1NBQ0g7UUFFRCxLQUFLLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztrQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBRTlCLHlCQUNLLEtBQUssSUFDUixjQUFjLEVBQUUsT0FBTyxJQUN2QjtTQUNIO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tTGFuZ3VhZ2VzIGZyb20gJy4uL2FjdGlvbnMvbGFuZ3VhZ2VzLmFjdGlvbic7XG5pbXBvcnQgeyBMYW5ndWFnZXNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IExhbmd1YWdlc1N0YXRlID0ge1xuICBlbnRpdGllczogbnVsbCxcbiAgYWN0aXZlTGFuZ3VhZ2U6IG51bGxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tTGFuZ3VhZ2VzLkxhbmd1YWdlc0FjdGlvblxuKTogTGFuZ3VhZ2VzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tTGFuZ3VhZ2VzLkxPQURfTEFOR1VBR0VTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGxhbmd1YWdlczogTGFuZ3VhZ2VbXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBsYW5ndWFnZXMucmVkdWNlKFxuICAgICAgICAobGFuZ0VudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBMYW5ndWFnZSB9LCBsYW5ndWFnZTogTGFuZ3VhZ2UpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubGFuZ0VudGl0aWVzLFxuICAgICAgICAgICAgW2xhbmd1YWdlLmlzb2NvZGVdOiBsYW5ndWFnZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllc1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tTGFuZ3VhZ2VzLlNFVF9BQ1RJVkVfTEFOR1VBR0U6IHtcbiAgICAgIGNvbnN0IGlzb2NvZGUgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUxhbmd1YWdlOiBpc29jb2RlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=