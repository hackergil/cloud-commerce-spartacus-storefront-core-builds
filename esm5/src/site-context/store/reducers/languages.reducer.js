/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromLanguages from '../actions/languages.action';
/** @type {?} */
export var initialState = {
    entities: null,
    activeLanguage: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromLanguages.LOAD_LANGUAGES_SUCCESS: {
            /** @type {?} */
            var languages = action.payload;
            /** @type {?} */
            var entities = languages.reduce(function (langEntities, language) {
                var _a;
                return tslib_1.__assign({}, langEntities, (_a = {}, _a[language.isocode] = language, _a));
            }, tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromLanguages.SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            var isocode = action.payload;
            return tslib_1.__assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2xhbmd1YWdlcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLGFBQWEsTUFBTSw2QkFBNkIsQ0FBQzs7QUFJN0QsTUFBTSxLQUFPLFlBQVksR0FBbUI7SUFDMUMsUUFBUSxFQUFFLElBQUk7SUFDZCxjQUFjLEVBQUUsSUFBSTtDQUNyQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBcUM7SUFEckMsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7O2dCQUNuQyxTQUFTLEdBQWUsTUFBTSxDQUFDLE9BQU87O2dCQUN0QyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDL0IsVUFBQyxZQUE2QyxFQUFFLFFBQWtCOztnQkFDaEUsNEJBQ0ssWUFBWSxlQUNkLFFBQVEsQ0FBQyxPQUFPLElBQUcsUUFBUSxPQUM1QjtZQUNKLENBQUMsdUJBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtRQUVELEtBQUssYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2dCQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFFOUIsNEJBQ0ssS0FBSyxJQUNSLGNBQWMsRUFBRSxPQUFPLElBQ3ZCO1NBQ0g7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21MYW5ndWFnZXMgZnJvbSAnLi4vYWN0aW9ucy9sYW5ndWFnZXMuYWN0aW9uJztcbmltcG9ydCB7IExhbmd1YWdlc1N0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogTGFuZ3VhZ2VzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBudWxsLFxuICBhY3RpdmVMYW5ndWFnZTogbnVsbFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21MYW5ndWFnZXMuTGFuZ3VhZ2VzQWN0aW9uXG4pOiBMYW5ndWFnZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21MYW5ndWFnZXMuTE9BRF9MQU5HVUFHRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgbGFuZ3VhZ2VzOiBMYW5ndWFnZVtdID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGxhbmd1YWdlcy5yZWR1Y2UoXG4gICAgICAgIChsYW5nRW50aXRpZXM6IHsgW2lzb2NvZGU6IHN0cmluZ106IExhbmd1YWdlIH0sIGxhbmd1YWdlOiBMYW5ndWFnZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5sYW5nRW50aXRpZXMsXG4gICAgICAgICAgICBbbGFuZ3VhZ2UuaXNvY29kZV06IGxhbmd1YWdlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21MYW5ndWFnZXMuU0VUX0FDVElWRV9MQU5HVUFHRToge1xuICAgICAgY29uc3QgaXNvY29kZSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlTGFuZ3VhZ2U6IGlzb2NvZGVcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==