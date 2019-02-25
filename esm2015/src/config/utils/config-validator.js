/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const ConfigValidatorToken = new InjectionToken('ConfigurationValidator');
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
    for (const validate of configValidators) {
        /** @type {?} */
        const warning = validate(config);
        if (warning) {
            console.warn(warning);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvY29uZmlnLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUNwRCx3QkFBd0IsQ0FDekI7Ozs7O0FBSUQsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxlQUFnQztJQUVoQyxPQUFPO1FBQ0wsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixRQUFRLEVBQUUsZUFBZTtRQUN6QixLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixNQUFXLEVBQ1gsZ0JBQW1DO0lBRW5DLEtBQUssTUFBTSxRQUFRLElBQUksZ0JBQWdCLEVBQUU7O2NBQ2pDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnVmFsaWRhdG9yVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oXG4gICdDb25maWd1cmF0aW9uVmFsaWRhdG9yJ1xuKTtcblxuZXhwb3J0IHR5cGUgQ29uZmlnVmFsaWRhdG9yID0gKGNvbmZpZzogYW55KSA9PiBzdHJpbmcgfCB2b2lkO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihcbiAgY29uZmlnVmFsaWRhdG9yOiBDb25maWdWYWxpZGF0b3Jcbik6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBDb25maWdWYWxpZGF0b3JUb2tlbixcbiAgICB1c2VWYWx1ZTogY29uZmlnVmFsaWRhdG9yLFxuICAgIG11bHRpOiB0cnVlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbmZpZyhcbiAgY29uZmlnOiBhbnksXG4gIGNvbmZpZ1ZhbGlkYXRvcnM6IENvbmZpZ1ZhbGlkYXRvcltdXG4pIHtcbiAgZm9yIChjb25zdCB2YWxpZGF0ZSBvZiBjb25maWdWYWxpZGF0b3JzKSB7XG4gICAgY29uc3Qgd2FybmluZyA9IHZhbGlkYXRlKGNvbmZpZyk7XG4gICAgaWYgKHdhcm5pbmcpIHtcbiAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==