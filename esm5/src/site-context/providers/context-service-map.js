/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LanguageService } from '../facade/language.service';
import { CurrencyService } from '../facade/currency.service';
/**
 * @abstract
 */
var /**
 * @abstract
 */
ContextServiceMap = /** @class */ (function () {
    function ContextServiceMap() {
    }
    return ContextServiceMap;
}());
/**
 * @abstract
 */
export { ContextServiceMap };
/** @type {?} */
export var LANGUAGE_CONTEXT_ID = 'LANGUAGE';
/** @type {?} */
export var CURRENCY_CONTEXT_ID = 'CURRENCY';
/**
 * @return {?}
 */
export function serviceMapFactory() {
    var _a;
    return _a = {},
        _a[LANGUAGE_CONTEXT_ID] = LanguageService,
        _a[CURRENCY_CONTEXT_ID] = CurrencyService,
        _a;
}
/** @type {?} */
export var contextServiceMapProvider = {
    provide: ContextServiceMap,
    useFactory: serviceMapFactory
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFHN0Q7Ozs7SUFBQTtJQUVBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7Ozs7QUFFRCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsVUFBVTs7QUFDN0MsTUFBTSxLQUFPLG1CQUFtQixHQUFHLFVBQVU7Ozs7QUFFN0MsTUFBTSxVQUFVLGlCQUFpQjs7SUFDL0I7UUFDRSxHQUFDLG1CQUFtQixJQUFHLGVBQWU7UUFDdEMsR0FBQyxtQkFBbUIsSUFBRyxlQUFlO1dBQ3RDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8seUJBQXlCLEdBQWE7SUFDakQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixVQUFVLEVBQUUsaUJBQWlCO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vZmFjYWRlL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udGV4dFNlcnZpY2VNYXAge1xuICBbY29udGV4dDogc3RyaW5nXTogVHlwZTxTaXRlQ29udGV4dDxhbnk+Pjtcbn1cblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFX0NPTlRFWFRfSUQgPSAnTEFOR1VBR0UnO1xuZXhwb3J0IGNvbnN0IENVUlJFTkNZX0NPTlRFWFRfSUQgPSAnQ1VSUkVOQ1knO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZU1hcEZhY3RvcnkoKSB7XG4gIHJldHVybiB7XG4gICAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiBDdXJyZW5jeVNlcnZpY2VcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRleHRTZXJ2aWNlTWFwUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBDb250ZXh0U2VydmljZU1hcCxcbiAgdXNlRmFjdG9yeTogc2VydmljZU1hcEZhY3Rvcnlcbn07XG4iXX0=