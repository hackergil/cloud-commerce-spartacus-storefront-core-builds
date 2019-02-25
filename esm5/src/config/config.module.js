/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defaultServerConfig, ServerConfig } from './server-config/server-config';
import { deepMerge } from './utils/deep-merge';
import { serverConfigValidator } from './server-config/server-config-validator';
import { ConfigValidatorToken, provideConfigValidator, validateConfig } from './utils/config-validator';
/** @type {?} */
export var Config = new InjectionToken('Configuration');
/** @type {?} */
export var ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * @param {?=} config
 * @return {?}
 */
export function provideConfig(config) {
    if (config === void 0) { config = {}; }
    return { provide: ConfigChunk, useValue: config, multi: true };
}
/**
 * @param {?} configFactory
 * @param {?=} deps
 * @return {?}
 */
export function provideConfigFactory(configFactory, deps) {
    return {
        provide: ConfigChunk,
        useFactory: configFactory,
        multi: true,
        deps: deps
    };
}
/**
 * @param {?} configChunks
 * @param {?} configValidators
 * @return {?}
 */
export function configurationFactory(configChunks, configValidators) {
    /** @type {?} */
    var config = deepMerge.apply(void 0, tslib_1.__spread([{}], configChunks));
    if (!config.production) {
        validateConfig(config, configValidators);
    }
    return config;
}
var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    ConfigModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfig(config)]
        };
    };
    /**
     * @param {?} configFactory
     * @param {?=} deps
     * @return {?}
     */
    ConfigModule.withConfigFactory = /**
     * @param {?} configFactory
     * @param {?=} deps
     * @return {?}
     */
    function (configFactory, deps) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfigFactory(configFactory, deps)]
        };
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    ConfigModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ConfigModule,
            providers: [
                { provide: ServerConfig, useExisting: Config },
                provideConfig(defaultServerConfig),
                provideConfig(config),
                {
                    provide: Config,
                    useFactory: configurationFactory,
                    deps: [ConfigChunk, ConfigValidatorToken]
                },
                provideConfigValidator(serverConfigValidator)
            ]
        };
    };
    ConfigModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: []
                },] }
    ];
    return ConfigModule;
}());
export { ConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxjQUFjLEVBRWQsUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFlBQVksRUFDYixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0QixjQUFjLEVBQ2YsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFbEMsTUFBTSxLQUFPLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxlQUFlLENBQUM7O0FBQ3pELE1BQU0sS0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsb0JBQW9CLENBQUM7Ozs7O0FBRW5FLE1BQU0sVUFBVSxhQUFhLENBQUMsTUFBZ0I7SUFBaEIsdUJBQUEsRUFBQSxXQUFnQjtJQUM1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNqRSxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGFBQXVCLEVBQ3ZCLElBQVk7SUFFWixPQUFPO1FBQ0wsT0FBTyxFQUFFLFdBQVc7UUFDcEIsVUFBVSxFQUFFLGFBQWE7UUFDekIsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLFlBQW1CLEVBQ25CLGdCQUFtQzs7UUFFN0IsTUFBTSxHQUFHLFNBQVMsaUNBQUMsRUFBRSxHQUFLLFlBQVksRUFBQztJQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUN0QixjQUFjLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7S0FDMUM7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQXNDQSxDQUFDOzs7OztJQWpDUSx1QkFBVTs7OztJQUFqQixVQUFrQixNQUFjO1FBQzlCLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVNLDhCQUFpQjs7Ozs7SUFBeEIsVUFDRSxhQUF1QixFQUN2QixJQUFZO1FBRVosT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxvQkFBTzs7OztJQUFkLFVBQWUsTUFBZ0I7UUFBaEIsdUJBQUEsRUFBQSxXQUFnQjtRQUM3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUM5QyxhQUFhLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2xDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCO29CQUNFLE9BQU8sRUFBRSxNQUFNO29CQUNmLFVBQVUsRUFBRSxvQkFBb0I7b0JBQ2hDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQztpQkFDMUM7Z0JBQ0Qsc0JBQXNCLENBQUMscUJBQXFCLENBQUM7YUFDOUM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBckNGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxFQUFFO2lCQUNqQjs7SUFtQ0QsbUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQWxDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBkZWZhdWx0U2VydmVyQ29uZmlnLFxuICBTZXJ2ZXJDb25maWdcbn0gZnJvbSAnLi9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IHNlcnZlckNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnLXZhbGlkYXRvcic7XG5pbXBvcnQge1xuICBDb25maWdWYWxpZGF0b3IsXG4gIENvbmZpZ1ZhbGlkYXRvclRva2VuLFxuICBwcm92aWRlQ29uZmlnVmFsaWRhdG9yLFxuICB2YWxpZGF0ZUNvbmZpZ1xufSBmcm9tICcuL3V0aWxzL2NvbmZpZy12YWxpZGF0b3InO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnID0gbmV3IEluamVjdGlvblRva2VuKCdDb25maWd1cmF0aW9uJyk7XG5leHBvcnQgY29uc3QgQ29uZmlnQ2h1bmsgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NvbmZpZ3VyYXRpb25DaHVuaycpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZyhjb25maWc6IGFueSA9IHt9KTogUHJvdmlkZXIge1xuICByZXR1cm4geyBwcm92aWRlOiBDb25maWdDaHVuaywgdXNlVmFsdWU6IGNvbmZpZywgbXVsdGk6IHRydWUgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWdGYWN0b3J5KFxuICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgZGVwcz86IGFueVtdXG4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogQ29uZmlnQ2h1bmssXG4gICAgdXNlRmFjdG9yeTogY29uZmlnRmFjdG9yeSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgICBkZXBzOiBkZXBzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmF0aW9uRmFjdG9yeShcbiAgY29uZmlnQ2h1bmtzOiBhbnlbXSxcbiAgY29uZmlnVmFsaWRhdG9yczogQ29uZmlnVmFsaWRhdG9yW11cbikge1xuICBjb25zdCBjb25maWcgPSBkZWVwTWVyZ2Uoe30sIC4uLmNvbmZpZ0NodW5rcyk7XG4gIGlmICghY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICB2YWxpZGF0ZUNvbmZpZyhjb25maWcsIGNvbmZpZ1ZhbGlkYXRvcnMpO1xuICB9XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ01vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogb2JqZWN0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB3aXRoQ29uZmlnRmFjdG9yeShcbiAgICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgICBkZXBzPzogYW55W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnRmFjdG9yeShjb25maWdGYWN0b3J5LCBkZXBzKV1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBhbnkgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU2VydmVyQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdFNlcnZlckNvbmZpZyksXG4gICAgICAgIHByb3ZpZGVDb25maWcoY29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbQ29uZmlnQ2h1bmssIENvbmZpZ1ZhbGlkYXRvclRva2VuXVxuICAgICAgICB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnVmFsaWRhdG9yKHNlcnZlckNvbmZpZ1ZhbGlkYXRvcilcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=