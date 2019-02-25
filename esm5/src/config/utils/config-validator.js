/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var ConfigValidatorToken = new InjectionToken('ConfigurationValidator');
/**
 * @param {?} configValidator
 * @return {?}
 */
export function provideConfigValidator(configValidator) {
    return {
        provide: ConfigValidatorToken,
        useValue: configValidator,
        multi: true
    };
}
/**
 * @param {?} config
 * @param {?} configValidators
 * @return {?}
 */
export function validateConfig(config, configValidators) {
    var e_1, _a;
    try {
        for (var configValidators_1 = tslib_1.__values(configValidators), configValidators_1_1 = configValidators_1.next(); !configValidators_1_1.done; configValidators_1_1 = configValidators_1.next()) {
            var validate = configValidators_1_1.value;
            /** @type {?} */
            var warning = validate(config);
            if (warning) {
                console.warn(warning);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configValidators_1_1 && !configValidators_1_1.done && (_a = configValidators_1.return)) _a.call(configValidators_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvY29uZmlnLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7O0FBRXpELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FDcEQsd0JBQXdCLENBQ3pCOzs7OztBQUlELE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsZUFBZ0M7SUFFaEMsT0FBTztRQUNMLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsUUFBUSxFQUFFLGVBQWU7UUFDekIsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsTUFBVyxFQUNYLGdCQUFtQzs7O1FBRW5DLEtBQXVCLElBQUEscUJBQUEsaUJBQUEsZ0JBQWdCLENBQUEsa0RBQUEsZ0ZBQUU7WUFBcEMsSUFBTSxRQUFRLDZCQUFBOztnQkFDWCxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7Ozs7Ozs7OztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ1ZhbGlkYXRvclRva2VuID0gbmV3IEluamVjdGlvblRva2VuKFxuICAnQ29uZmlndXJhdGlvblZhbGlkYXRvcidcbik7XG5cbmV4cG9ydCB0eXBlIENvbmZpZ1ZhbGlkYXRvciA9IChjb25maWc6IGFueSkgPT4gc3RyaW5nIHwgdm9pZDtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWdWYWxpZGF0b3IoXG4gIGNvbmZpZ1ZhbGlkYXRvcjogQ29uZmlnVmFsaWRhdG9yXG4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogQ29uZmlnVmFsaWRhdG9yVG9rZW4sXG4gICAgdXNlVmFsdWU6IGNvbmZpZ1ZhbGlkYXRvcixcbiAgICBtdWx0aTogdHJ1ZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb25maWcoXG4gIGNvbmZpZzogYW55LFxuICBjb25maWdWYWxpZGF0b3JzOiBDb25maWdWYWxpZGF0b3JbXVxuKSB7XG4gIGZvciAoY29uc3QgdmFsaWRhdGUgb2YgY29uZmlnVmFsaWRhdG9ycykge1xuICAgIGNvbnN0IHdhcm5pbmcgPSB2YWxpZGF0ZShjb25maWcpO1xuICAgIGlmICh3YXJuaW5nKSB7XG4gICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgfVxuICB9XG59XG4iXX0=