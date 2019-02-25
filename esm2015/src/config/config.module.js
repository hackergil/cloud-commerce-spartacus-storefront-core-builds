/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defaultServerConfig, ServerConfig } from './server-config/server-config';
import { deepMerge } from './utils/deep-merge';
import { serverConfigValidator } from './server-config/server-config-validator';
import { ConfigValidatorToken, provideConfigValidator, validateConfig } from './utils/config-validator';
/** @type {?} */
export const Config = new InjectionToken('Configuration');
/** @type {?} */
export const ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * @param {?=} config
 * @return {?}
 */
export function provideConfig(config = {}) {
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
    const config = deepMerge({}, ...configChunks);
    if (!config.production) {
        validateConfig(config, configValidators);
    }
    return config;
}
export class ConfigModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfig(config)]
        };
    }
    /**
     * @param {?} configFactory
     * @param {?=} deps
     * @return {?}
     */
    static withConfigFactory(configFactory, deps) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfigFactory(configFactory, deps)]
        };
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
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
    }
}
ConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFFZCxRQUFRLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsWUFBWSxFQUNiLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFFTCxvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLGNBQWMsRUFDZixNQUFNLDBCQUEwQixDQUFDOztBQUVsQyxNQUFNLE9BQU8sTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQzs7QUFDekQsTUFBTSxPQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQzs7Ozs7QUFFbkUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxTQUFjLEVBQUU7SUFDNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDakUsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxhQUF1QixFQUN2QixJQUFZO0lBRVosT0FBTztRQUNMLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxZQUFtQixFQUNuQixnQkFBbUM7O1VBRTdCLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsWUFBWSxDQUFDO0lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1FBQ3RCLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztLQUMxQztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFNRCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFDdkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFjO1FBQzlCLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxpQkFBaUIsQ0FDdEIsYUFBdUIsRUFDdkIsSUFBWTtRQUVaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFjLEVBQUU7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDOUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDO2dCQUNsQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUNyQjtvQkFDRSxPQUFPLEVBQUUsTUFBTTtvQkFDZixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUM7aUJBQzFDO2dCQUNELHNCQUFzQixDQUFDLHFCQUFxQixDQUFDO2FBQzlDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXJDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsRUFBRTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGlvblRva2VuLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgUHJvdmlkZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgZGVmYXVsdFNlcnZlckNvbmZpZyxcbiAgU2VydmVyQ29uZmlnXG59IGZyb20gJy4vc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4vdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBzZXJ2ZXJDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHtcbiAgQ29uZmlnVmFsaWRhdG9yLFxuICBDb25maWdWYWxpZGF0b3JUb2tlbixcbiAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcixcbiAgdmFsaWRhdGVDb25maWdcbn0gZnJvbSAnLi91dGlscy9jb25maWctdmFsaWRhdG9yJztcblxuZXhwb3J0IGNvbnN0IENvbmZpZyA9IG5ldyBJbmplY3Rpb25Ub2tlbignQ29uZmlndXJhdGlvbicpO1xuZXhwb3J0IGNvbnN0IENvbmZpZ0NodW5rID0gbmV3IEluamVjdGlvblRva2VuKCdDb25maWd1cmF0aW9uQ2h1bmsnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWcoY29uZmlnOiBhbnkgPSB7fSk6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHsgcHJvdmlkZTogQ29uZmlnQ2h1bmssIHVzZVZhbHVlOiBjb25maWcsIG11bHRpOiB0cnVlIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnRmFjdG9yeShcbiAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gIGRlcHM/OiBhbnlbXVxuKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IENvbmZpZ0NodW5rLFxuICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0ZhY3RvcnksXG4gICAgbXVsdGk6IHRydWUsXG4gICAgZGVwczogZGVwc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJhdGlvbkZhY3RvcnkoXG4gIGNvbmZpZ0NodW5rczogYW55W10sXG4gIGNvbmZpZ1ZhbGlkYXRvcnM6IENvbmZpZ1ZhbGlkYXRvcltdXG4pIHtcbiAgY29uc3QgY29uZmlnID0gZGVlcE1lcmdlKHt9LCAuLi5jb25maWdDaHVua3MpO1xuICBpZiAoIWNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgdmFsaWRhdGVDb25maWcoY29uZmlnLCBjb25maWdWYWxpZGF0b3JzKTtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IG9iamVjdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgd2l0aENvbmZpZ0ZhY3RvcnkoXG4gICAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gICAgZGVwcz86IGFueVtdXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoY29uZmlnRmFjdG9yeSwgZGVwcyldXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogYW55ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFNlcnZlckNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRTZXJ2ZXJDb25maWcpLFxuICAgICAgICBwcm92aWRlQ29uZmlnKGNvbmZpZyksXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDb25maWcsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY29uZmlndXJhdGlvbkZhY3RvcnksXG4gICAgICAgICAgZGVwczogW0NvbmZpZ0NodW5rLCBDb25maWdWYWxpZGF0b3JUb2tlbl1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvcihzZXJ2ZXJDb25maWdWYWxpZGF0b3IpXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19