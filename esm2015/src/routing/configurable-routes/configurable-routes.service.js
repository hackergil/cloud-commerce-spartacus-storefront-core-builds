/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConfig } from '../../config/server-config/server-config';
import { RoutesConfigLoader } from './routes-config-loader';
export class ConfigurableRoutesService {
    /**
     * @param {?} config
     * @param {?} injector
     * @param {?} routesConfigLoader
     */
    constructor(config, injector, routesConfigLoader) {
        this.config = config;
        this.injector = injector;
        this.routesConfigLoader = routesConfigLoader;
        this.currentLanguageCode = 'en'; // TODO: hardcoded! should be removed when more languages are supported by localized routes
        this.initCalled = false; // guard not to call init() more than once
    }
    /**
     * @private
     * @return {?}
     */
    get currentRoutesTranslations() {
        return (/** @type {?} */ (this.allRoutesTranslations[this.currentLanguageCode]));
    }
    // guard not to call init() more than once
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     * @return {?}
     */
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.initCalled) {
                this.initCalled = true;
                yield this.routesConfigLoader.load();
                this.allRoutesTranslations = this.routesConfigLoader.routesConfig.translations;
                this.translateRouterConfig();
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    translateRouterConfig() {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        /** @type {?} */
        const router = this.injector.get(Router);
        /** @type {?} */
        let translatedRoutes = this.translateRoutes(router.config, this.currentRoutesTranslations);
        translatedRoutes = this.moveWildcardRouteToEnd(translatedRoutes);
        router.resetConfig(translatedRoutes);
    }
    /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     * @private
     * @param {?} routes
     * @return {?}
     */
    moveWildcardRouteToEnd(routes) {
        /** @type {?} */
        const firstWildcardRoute = routes.find(route => route.path === '**');
        return firstWildcardRoute
            ? routes.filter(route => route.path !== '**').concat(firstWildcardRoute)
            : routes;
    }
    /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     * @param {?} nestedRouteNames
     * @param {?=} routesTranslations
     * @return {?}
     */
    getNestedRoutesTranslations(nestedRouteNames, routesTranslations = this.currentRoutesTranslations) {
        return this.getNestedRoutesTranslationsRecursive(nestedRouteNames, routesTranslations, []);
    }
    /**
     * @private
     * @param {?} nestedRoutesNames
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    getNestedRoutesTranslationsRecursive(nestedRoutesNames, routesTranslations, accResult) {
        if (!nestedRoutesNames.length) {
            return accResult;
        }
        const [routeName, ...remainingRouteNames] = nestedRoutesNames;
        /** @type {?} */
        const translation = this.getRouteTranslation(routeName, routesTranslations);
        if (!translation) {
            return null;
        }
        if (remainingRouteNames.length) {
            /** @type {?} */
            const childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (!childrenTranslations) {
                this.warn(`No children routes translations were configured for page '${routeName}' in language '${this.currentLanguageCode}'!`);
                return null;
            }
            return this.getNestedRoutesTranslationsRecursive(remainingRouteNames, childrenTranslations, accResult.concat(translation));
        }
        return accResult.concat(translation);
    }
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    getChildrenRoutesTranslations(routeName, routesTranslations) {
        /** @type {?} */
        const routeTranslation = this.getRouteTranslation(routeName, routesTranslations);
        return routeTranslation && routeTranslation.children;
    }
    /**
     * @private
     * @param {?} routes
     * @param {?} routesTranslations
     * @return {?}
     */
    translateRoutes(routes, routesTranslations) {
        /** @type {?} */
        const result = [];
        routes.forEach(route => {
            /** @type {?} */
            const translatedRouteAliases = this.translateRoute(route, routesTranslations);
            if (route.children && route.children.length) {
                /** @type {?} */
                const translatedChildrenRoutes = this.translateChildrenRoutes(route, routesTranslations);
                translatedRouteAliases.forEach(translatedRouteAlias => {
                    translatedRouteAlias.children = translatedChildrenRoutes;
                });
            }
            result.push(...translatedRouteAliases);
        });
        return result;
    }
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    translateChildrenRoutes(route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            /** @type {?} */
            const routeName = this.getConfigurable(route, 'cxPath');
            /** @type {?} */
            const childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (childrenTranslations === undefined) {
                this.warn(`Could not translate children routes of route '${routeName}'`, route, `due to undefined 'children' key for '${routeName}' route in routes translations`, routesTranslations);
                return [];
            }
            // null switches off the children routes:
            if (childrenTranslations === null) {
                return [];
            }
            return this.translateRoutes(route.children, childrenTranslations);
        }
        return null;
    }
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    translateRoute(route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            // we assume that 'path' and 'redirectTo' cannot be both configured for one route
            if (this.isConfigurable(route, 'cxRedirectTo')) {
                this.warn(`A path should not have set both "cxPath" and "cxRedirectTo" properties! Route: '${route}`);
            }
            return this.translateRoutePath(route, routesTranslations);
        }
        if (this.isConfigurable(route, 'cxRedirectTo')) {
            return this.translateRouteRedirectTo(route, routesTranslations);
        }
        return [route]; // if nothing is configurable, just pass the original route
    }
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    isConfigurable(route, key) {
        return !!this.getConfigurable(route, key);
    }
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    getConfigurable(route, key) {
        return route.data && route.data[key];
    }
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    translateRoutePath(route, routesTranslations) {
        return this.getTranslatedPaths(route, 'cxPath', routesTranslations).map(translatedPath => {
            return Object.assign({}, route, { path: translatedPath });
        });
    }
    /**
     * @private
     * @param {?} route
     * @param {?} translations
     * @return {?}
     */
    translateRouteRedirectTo(route, translations) {
        /** @type {?} */
        const translatedPaths = this.getTranslatedPaths(route, 'cxRedirectTo', translations);
        return translatedPaths.length
            ? [Object.assign({}, route, { redirectTo: translatedPaths[0] })] // take the first path from list by convention
            : [];
    }
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    getRouteTranslation(routeName, routesTranslations) {
        /** @type {?} */
        const result = routesTranslations && routesTranslations[routeName];
        if (!routesTranslations || result === undefined) {
            this.warn(`No route translation was configured for page '${routeName}' in language '${this.currentLanguageCode}'!`);
        }
        return result;
    }
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @param {?} routesTranslations
     * @return {?}
     */
    getTranslatedPaths(route, key, routesTranslations) {
        /** @type {?} */
        const routeName = this.getConfigurable(route, key);
        /** @type {?} */
        const translation = this.getRouteTranslation(routeName, routesTranslations);
        if (translation === undefined) {
            this.warn(`Could not translate key '${key}' of route '${routeName}'`, route, `due to undefined key '${routeName}' in routes translations`, routesTranslations);
            return [];
        }
        if (translation && translation.paths === undefined) {
            this.warn(`Could not translate key '${key}' of route '${routeName}'`, route, `due to undefined 'paths' key for '${routeName}' route in routes translations`, routesTranslations);
            return [];
        }
        // translation or translation.paths can be null - which means switching off the route
        return (translation && translation.paths) || [];
    }
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.config.production) {
            console.warn(...args);
        }
    }
}
ConfigurableRoutesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigurableRoutesService.ctorParameters = () => [
    { type: ServerConfig },
    { type: Injector },
    { type: RoutesConfigLoader }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.currentLanguageCode;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.allRoutesTranslations;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.initCalled;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.routesConfigLoader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzVELE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQUNwQyxZQUNVLE1BQW9CLEVBQ3BCLFFBQWtCLEVBQ2xCLGtCQUFzQztRQUZ0QyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUcvQix3QkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQywyRkFBMkY7UUFVaEksZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQVpuRSxDQUFDOzs7OztJQU1KLElBQVkseUJBQXlCO1FBQ25DLE9BQU8sbUJBQUEsSUFBSSxDQUFDLHFCQUFxQixDQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQ3pCLEVBQXNCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBT0ssSUFBSTs7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFD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QUksQ0FDUCw0QkFBNEIsR0FBRyxlQUFlLFNBQVMsR0FBRyxFQUMxRCxLQUFLLEVBQ0wscUNBQXFDLFNBQVMsZ0NBQWdDLEVBQzlFLGtCQUFrQixDQUNuQixDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELHFGQUFxRjtRQUNyRixPQUFPLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRU8sSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBelJGLFVBQVU7Ozs7WUFWRixZQUFZO1lBRkEsUUFBUTtZQVFwQixrQkFBa0I7Ozs7Ozs7SUFZekIsd0RBQTRDOzs7OztJQUU1QywwREFBNEQ7Ozs7O0lBUTVELCtDQUEyQjs7Ozs7SUFmekIsMkNBQTRCOzs7OztJQUM1Qiw2Q0FBMEI7Ozs7O0lBQzFCLHVEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlciwgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VydmVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZyc7XG5pbXBvcnQge1xuICBSb3V0ZXNUcmFuc2xhdGlvbnMsXG4gIFJvdXRlVHJhbnNsYXRpb24sXG4gIFJvdXRlc0NvbmZpZ1xufSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnLWxvYWRlcic7XG5cbnR5cGUgQ29uZmlndXJhYmxlUm91dGVLZXkgPSAnY3hQYXRoJyB8ICdjeFJlZGlyZWN0VG8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXNDb25maWdMb2FkZXI6IFJvdXRlc0NvbmZpZ0xvYWRlclxuICApIHt9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gJ2VuJzsgLy8gVE9ETzogaGFyZGNvZGVkISBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIG1vcmUgbGFuZ3VhZ2VzIGFyZSBzdXBwb3J0ZWQgYnkgbG9jYWxpemVkIHJvdXRlc1xuXG4gIHByaXZhdGUgYWxsUm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNDb25maWdbJ3RyYW5zbGF0aW9ucyddO1xuXG4gIHByaXZhdGUgZ2V0IGN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnMoKTogUm91dGVzVHJhbnNsYXRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnNbXG4gICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUNvZGVcbiAgICBdIGFzIFJvdXRlc1RyYW5zbGF0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENhbGxlZCA9IGZhbHNlOyAvLyBndWFyZCBub3QgdG8gY2FsbCBpbml0KCkgbW9yZSB0aGFuIG9uY2VcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgc2VydmljZSB3aXRoIGdpdmVuIHRyYW5zbGF0aW9ucyBhbmQgdHJhbnNsYXRlcyBhbGwgZXhpc3RpbmcgUm91dGVzIGluIHRoZSBSb3V0ZXIuXG4gICAqL1xuICBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5pbml0Q2FsbGVkKSB7XG4gICAgICB0aGlzLmluaXRDYWxsZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXNDb25maWdMb2FkZXIubG9hZCgpO1xuICAgICAgdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLnJvdXRlc0NvbmZpZ0xvYWRlci5yb3V0ZXNDb25maWcudHJhbnNsYXRpb25zO1xuICAgICAgdGhpcy50cmFuc2xhdGVSb3V0ZXJDb25maWcoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlckNvbmZpZygpIHtcbiAgICAvLyBSb3V0ZXIgY291bGQgbm90IGJlIGluamVjdGVkIGluIGNvbnN0cnVjdG9yIGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeSB3aXRoIEFQUF9JTklUSUFMSVpFUjpcbiAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhcbiAgICAgIHJvdXRlci5jb25maWcsXG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICApO1xuICAgIHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLm1vdmVXaWxkY2FyZFJvdXRlVG9FbmQodHJhbnNsYXRlZFJvdXRlcyk7XG5cbiAgICByb3V0ZXIucmVzZXRDb25maWcodHJhbnNsYXRlZFJvdXRlcyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgUm91dGUgd2l0aCBkb3VibGUgYXN0ZXJpc2sgKCoqKSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKiBJZiB0aGVyZSBhcmUgbW9yZSBSb3V0ZXMgd2l0aCAqKiwgb25seSB0aGUgZmlyc3Qgd2lsbCBiZSBsZWZ0IGFuZCBvdGhlciByZW1vdmVkLlxuICAgKlxuICAgKiBSZWFzb246IFdoZW4gc29tZSBjdXN0b20gUm91dGVzIGFyZSBpbmplY3RlZCBhZnRlciBTcGFydGFjdXMnIG9uZXMsXG4gICAqICAgICAgICAgIHRoZW4gdGhlIFNwYXJ0YWN1cycgd2lsZGNhcmQgUm91dGUgbmVlZHMgYmVpbmcgbW92ZWQgdG8gdGhlIGVuZCAtXG4gICAqICAgICAgICAgIGV2ZW4gYWZ0ZXIgY3VzdG9tIFJvdXRlcyAtIHRvIG1ha2UgY3VzdG9tIFJvdXRlcyBkaXNjb3ZlcmFibGUuXG4gICAqICAgICAgICAgIE1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgUm91dGUgaXMgYSBzaWduIG9mIGJhZCBjb25maWcsIHNvIHJlZHVuZGFudCBjb3BpZXMgYXJlIHJlbW92ZWQuXG4gICAqL1xuICBwcml2YXRlIG1vdmVXaWxkY2FyZFJvdXRlVG9FbmQocm91dGVzOiBSb3V0ZXMpOiBSb3V0ZXMge1xuICAgIGNvbnN0IGZpcnN0V2lsZGNhcmRSb3V0ZSA9IHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGggPT09ICcqKicpO1xuICAgIHJldHVybiBmaXJzdFdpbGRjYXJkUm91dGVcbiAgICAgID8gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5wYXRoICE9PSAnKionKS5jb25jYXQoZmlyc3RXaWxkY2FyZFJvdXRlKVxuICAgICAgOiByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGlzdCBvZiByb3V0ZXMgdHJhbnNsYXRpb25zIGZvciBnaXZlbiBsaXN0IG9mIG5lc3RlZCByb3V0ZXNcbiAgICogdXNpbmcgZ2l2ZW4gb2JqZWN0IG9mIHJvdXRlcyB0cmFuc2xhdGlvbnMuXG4gICAqL1xuICBnZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMoXG4gICAgbmVzdGVkUm91dGVOYW1lczogc3RyaW5nW10sXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVUcmFuc2xhdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5nZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNSZWN1cnNpdmUoXG4gICAgICBuZXN0ZWRSb3V0ZU5hbWVzLFxuICAgICAgcm91dGVzVHJhbnNsYXRpb25zLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNSZWN1cnNpdmUoXG4gICAgbmVzdGVkUm91dGVzTmFtZXM6IHN0cmluZ1tdLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zLFxuICAgIGFjY1Jlc3VsdDogUm91dGVUcmFuc2xhdGlvbltdXG4gICk6IFJvdXRlVHJhbnNsYXRpb25bXSB7XG4gICAgaWYgKCFuZXN0ZWRSb3V0ZXNOYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBhY2NSZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IFtyb3V0ZU5hbWUsIC4uLnJlbWFpbmluZ1JvdXRlTmFtZXNdID0gbmVzdGVkUm91dGVzTmFtZXM7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldFJvdXRlVHJhbnNsYXRpb24ocm91dGVOYW1lLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIGlmICghdHJhbnNsYXRpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChyZW1haW5pbmdSb3V0ZU5hbWVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgY2hpbGRyZW5UcmFuc2xhdGlvbnMgPSB0aGlzLmdldENoaWxkcmVuUm91dGVzVHJhbnNsYXRpb25zKFxuICAgICAgICByb3V0ZU5hbWUsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIGlmICghY2hpbGRyZW5UcmFuc2xhdGlvbnMpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBObyBjaGlsZHJlbiByb3V0ZXMgdHJhbnNsYXRpb25zIHdlcmUgY29uZmlndXJlZCBmb3IgcGFnZSAnJHtyb3V0ZU5hbWV9JyBpbiBsYW5ndWFnZSAnJHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlQ29kZVxuICAgICAgICAgIH0nIWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdldE5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uc1JlY3Vyc2l2ZShcbiAgICAgICAgcmVtYWluaW5nUm91dGVOYW1lcyxcbiAgICAgICAgY2hpbGRyZW5UcmFuc2xhdGlvbnMsXG4gICAgICAgIGFjY1Jlc3VsdC5jb25jYXQodHJhbnNsYXRpb24pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gYWNjUmVzdWx0LmNvbmNhdCh0cmFuc2xhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuUm91dGVzVHJhbnNsYXRpb25zKFxuICAgIHJvdXRlTmFtZTogc3RyaW5nLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlc1RyYW5zbGF0aW9ucyB7XG4gICAgY29uc3Qgcm91dGVUcmFuc2xhdGlvbiA9IHRoaXMuZ2V0Um91dGVUcmFuc2xhdGlvbihcbiAgICAgIHJvdXRlTmFtZSxcbiAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIHJvdXRlVHJhbnNsYXRpb24gJiYgcm91dGVUcmFuc2xhdGlvbi5jaGlsZHJlbjtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVzKFxuICAgIHJvdXRlczogUm91dGVzLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgcm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRlZFJvdXRlQWxpYXNlcyA9IHRoaXMudHJhbnNsYXRlUm91dGUoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRDaGlsZHJlblJvdXRlcyA9IHRoaXMudHJhbnNsYXRlQ2hpbGRyZW5Sb3V0ZXMoXG4gICAgICAgICAgcm91dGUsXG4gICAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHRyYW5zbGF0ZWRSb3V0ZUFsaWFzZXMuZm9yRWFjaCh0cmFuc2xhdGVkUm91dGVBbGlhcyA9PiB7XG4gICAgICAgICAgdHJhbnNsYXRlZFJvdXRlQWxpYXMuY2hpbGRyZW4gPSB0cmFuc2xhdGVkQ2hpbGRyZW5Sb3V0ZXM7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goLi4udHJhbnNsYXRlZFJvdXRlQWxpYXNlcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlQ2hpbGRyZW5Sb3V0ZXMoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKSkge1xuICAgICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKTtcbiAgICAgIGNvbnN0IGNoaWxkcmVuVHJhbnNsYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlblJvdXRlc1RyYW5zbGF0aW9ucyhcbiAgICAgICAgcm91dGVOYW1lLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG5cbiAgICAgIGlmIChjaGlsZHJlblRyYW5zbGF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgQ291bGQgbm90IHRyYW5zbGF0ZSBjaGlsZHJlbiByb3V0ZXMgb2Ygcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdjaGlsZHJlbicga2V5IGZvciAnJHtyb3V0ZU5hbWV9JyByb3V0ZSBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBudWxsIHN3aXRjaGVzIG9mZiB0aGUgY2hpbGRyZW4gcm91dGVzOlxuICAgICAgaWYgKGNoaWxkcmVuVHJhbnNsYXRpb25zID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgY2hpbGRyZW5UcmFuc2xhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGUoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKSkge1xuICAgICAgLy8gd2UgYXNzdW1lIHRoYXQgJ3BhdGgnIGFuZCAncmVkaXJlY3RUbycgY2Fubm90IGJlIGJvdGggY29uZmlndXJlZCBmb3Igb25lIHJvdXRlXG4gICAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UmVkaXJlY3RUbycpKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgQSBwYXRoIHNob3VsZCBub3QgaGF2ZSBzZXQgYm90aCBcImN4UGF0aFwiIGFuZCBcImN4UmVkaXJlY3RUb1wiIHByb3BlcnRpZXMhIFJvdXRlOiAnJHtyb3V0ZX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVSb3V0ZVBhdGgocm91dGUsIHJvdXRlc1RyYW5zbGF0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFJlZGlyZWN0VG8nKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlUm91dGVSZWRpcmVjdFRvKHJvdXRlLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBbcm91dGVdOyAvLyBpZiBub3RoaW5nIGlzIGNvbmZpZ3VyYWJsZSwganVzdCBwYXNzIHRoZSBvcmlnaW5hbCByb3V0ZVxuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbmZpZ3VyYWJsZShyb3V0ZTogUm91dGUsIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldENvbmZpZ3VyYWJsZShyb3V0ZSwga2V5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlndXJhYmxlKHJvdXRlOiBSb3V0ZSwga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YVtrZXldO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZVBhdGgoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlW10ge1xuICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0ZWRQYXRocyhyb3V0ZSwgJ2N4UGF0aCcsIHJvdXRlc1RyYW5zbGF0aW9ucykubWFwKFxuICAgICAgdHJhbnNsYXRlZFBhdGggPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5yb3V0ZSwgcGF0aDogdHJhbnNsYXRlZFBhdGggfTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZVJlZGlyZWN0VG8oXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHRyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlW10ge1xuICAgIGNvbnN0IHRyYW5zbGF0ZWRQYXRocyA9IHRoaXMuZ2V0VHJhbnNsYXRlZFBhdGhzKFxuICAgICAgcm91dGUsXG4gICAgICAnY3hSZWRpcmVjdFRvJyxcbiAgICAgIHRyYW5zbGF0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZWRQYXRocy5sZW5ndGhcbiAgICAgID8gW3sgLi4ucm91dGUsIHJlZGlyZWN0VG86IHRyYW5zbGF0ZWRQYXRoc1swXSB9XSAvLyB0YWtlIHRoZSBmaXJzdCBwYXRoIGZyb20gbGlzdCBieSBjb252ZW50aW9uXG4gICAgICA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZVRyYW5zbGF0aW9uKFxuICAgIHJvdXRlTmFtZTogc3RyaW5nLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlVHJhbnNsYXRpb24ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHJvdXRlc1RyYW5zbGF0aW9ucyAmJiByb3V0ZXNUcmFuc2xhdGlvbnNbcm91dGVOYW1lXTtcbiAgICBpZiAoIXJvdXRlc1RyYW5zbGF0aW9ucyB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgTm8gcm91dGUgdHJhbnNsYXRpb24gd2FzIGNvbmZpZ3VyZWQgZm9yIHBhZ2UgJyR7cm91dGVOYW1lfScgaW4gbGFuZ3VhZ2UgJyR7XG4gICAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2VDb2RlXG4gICAgICAgIH0nIWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldFRyYW5zbGF0ZWRQYXRocyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsIGtleSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldFJvdXRlVHJhbnNsYXRpb24ocm91dGVOYW1lLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIGlmICh0cmFuc2xhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgdHJhbnNsYXRlIGtleSAnJHtrZXl9JyBvZiByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCBrZXkgJyR7cm91dGVOYW1lfScgaW4gcm91dGVzIHRyYW5zbGF0aW9uc2AsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnBhdGhzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCB0cmFuc2xhdGUga2V5ICcke2tleX0nIG9mIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdwYXRocycga2V5IGZvciAnJHtyb3V0ZU5hbWV9JyByb3V0ZSBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8vIHRyYW5zbGF0aW9uIG9yIHRyYW5zbGF0aW9uLnBhdGhzIGNhbiBiZSBudWxsIC0gd2hpY2ggbWVhbnMgc3dpdGNoaW5nIG9mZiB0aGUgcm91dGVcbiAgICByZXR1cm4gKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnBhdGhzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=