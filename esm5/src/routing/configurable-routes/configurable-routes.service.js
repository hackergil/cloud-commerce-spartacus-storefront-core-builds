/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConfig } from '../../config/server-config/server-config';
import { RoutesConfigLoader } from './routes-config-loader';
var ConfigurableRoutesService = /** @class */ (function () {
    function ConfigurableRoutesService(config, injector, routesConfigLoader) {
        this.config = config;
        this.injector = injector;
        this.routesConfigLoader = routesConfigLoader;
        this.currentLanguageCode = 'en'; // TODO: hardcoded! should be removed when more languages are supported by localized routes
        this.initCalled = false; // guard not to call init() more than once
    }
    Object.defineProperty(ConfigurableRoutesService.prototype, "currentRoutesTranslations", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.allRoutesTranslations[this.currentLanguageCode]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     */
    // guard not to call init() more than once
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     * @return {?}
     */
    ConfigurableRoutesService.prototype.init = 
    // guard not to call init() more than once
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initCalled) return [3 /*break*/, 2];
                        this.initCalled = true;
                        return [4 /*yield*/, this.routesConfigLoader.load()];
                    case 1:
                        _a.sent();
                        this.allRoutesTranslations = this.routesConfigLoader.routesConfig.translations;
                        this.translateRouterConfig();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRouterConfig = /**
     * @private
     * @return {?}
     */
    function () {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var translatedRoutes = this.translateRoutes(router.config, this.currentRoutesTranslations);
        translatedRoutes = this.moveWildcardRouteToEnd(translatedRoutes);
        router.resetConfig(translatedRoutes);
    };
    /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     */
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
    ConfigurableRoutesService.prototype.moveWildcardRouteToEnd = /**
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
    function (routes) {
        /** @type {?} */
        var firstWildcardRoute = routes.find(function (route) { return route.path === '**'; });
        return firstWildcardRoute
            ? routes.filter(function (route) { return route.path !== '**'; }).concat(firstWildcardRoute)
            : routes;
    };
    /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     */
    /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     * @param {?} nestedRouteNames
     * @param {?=} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getNestedRoutesTranslations = /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     * @param {?} nestedRouteNames
     * @param {?=} routesTranslations
     * @return {?}
     */
    function (nestedRouteNames, routesTranslations) {
        if (routesTranslations === void 0) { routesTranslations = this.currentRoutesTranslations; }
        return this.getNestedRoutesTranslationsRecursive(nestedRouteNames, routesTranslations, []);
    };
    /**
     * @private
     * @param {?} nestedRoutesNames
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getNestedRoutesTranslationsRecursive = /**
     * @private
     * @param {?} nestedRoutesNames
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    function (nestedRoutesNames, routesTranslations, accResult) {
        if (!nestedRoutesNames.length) {
            return accResult;
        }
        var _a = tslib_1.__read(nestedRoutesNames), routeName = _a[0], remainingRouteNames = _a.slice(1);
        /** @type {?} */
        var translation = this.getRouteTranslation(routeName, routesTranslations);
        if (!translation) {
            return null;
        }
        if (remainingRouteNames.length) {
            /** @type {?} */
            var childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (!childrenTranslations) {
                this.warn("No children routes translations were configured for page '" + routeName + "' in language '" + this.currentLanguageCode + "'!");
                return null;
            }
            return this.getNestedRoutesTranslationsRecursive(remainingRouteNames, childrenTranslations, accResult.concat(translation));
        }
        return accResult.concat(translation);
    };
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getChildrenRoutesTranslations = /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    function (routeName, routesTranslations) {
        /** @type {?} */
        var routeTranslation = this.getRouteTranslation(routeName, routesTranslations);
        return routeTranslation && routeTranslation.children;
    };
    /**
     * @private
     * @param {?} routes
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRoutes = /**
     * @private
     * @param {?} routes
     * @param {?} routesTranslations
     * @return {?}
     */
    function (routes, routesTranslations) {
        var _this = this;
        /** @type {?} */
        var result = [];
        routes.forEach(function (route) {
            /** @type {?} */
            var translatedRouteAliases = _this.translateRoute(route, routesTranslations);
            if (route.children && route.children.length) {
                /** @type {?} */
                var translatedChildrenRoutes_1 = _this.translateChildrenRoutes(route, routesTranslations);
                translatedRouteAliases.forEach(function (translatedRouteAlias) {
                    translatedRouteAlias.children = translatedChildrenRoutes_1;
                });
            }
            result.push.apply(result, tslib_1.__spread(translatedRouteAliases));
        });
        return result;
    };
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateChildrenRoutes = /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            /** @type {?} */
            var routeName = this.getConfigurable(route, 'cxPath');
            /** @type {?} */
            var childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (childrenTranslations === undefined) {
                this.warn("Could not translate children routes of route '" + routeName + "'", route, "due to undefined 'children' key for '" + routeName + "' route in routes translations", routesTranslations);
                return [];
            }
            // null switches off the children routes:
            if (childrenTranslations === null) {
                return [];
            }
            return this.translateRoutes(route.children, childrenTranslations);
        }
        return null;
    };
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRoute = /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            // we assume that 'path' and 'redirectTo' cannot be both configured for one route
            if (this.isConfigurable(route, 'cxRedirectTo')) {
                this.warn("A path should not have set both \"cxPath\" and \"cxRedirectTo\" properties! Route: '" + route);
            }
            return this.translateRoutePath(route, routesTranslations);
        }
        if (this.isConfigurable(route, 'cxRedirectTo')) {
            return this.translateRouteRedirectTo(route, routesTranslations);
        }
        return [route]; // if nothing is configurable, just pass the original route
    };
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    ConfigurableRoutesService.prototype.isConfigurable = /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    function (route, key) {
        return !!this.getConfigurable(route, key);
    };
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getConfigurable = /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    function (route, key) {
        return route.data && route.data[key];
    };
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRoutePath = /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, routesTranslations) {
        return this.getTranslatedPaths(route, 'cxPath', routesTranslations).map(function (translatedPath) {
            return tslib_1.__assign({}, route, { path: translatedPath });
        });
    };
    /**
     * @private
     * @param {?} route
     * @param {?} translations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRouteRedirectTo = /**
     * @private
     * @param {?} route
     * @param {?} translations
     * @return {?}
     */
    function (route, translations) {
        /** @type {?} */
        var translatedPaths = this.getTranslatedPaths(route, 'cxRedirectTo', translations);
        return translatedPaths.length
            ? [tslib_1.__assign({}, route, { redirectTo: translatedPaths[0] })] // take the first path from list by convention
            : [];
    };
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getRouteTranslation = /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    function (routeName, routesTranslations) {
        /** @type {?} */
        var result = routesTranslations && routesTranslations[routeName];
        if (!routesTranslations || result === undefined) {
            this.warn("No route translation was configured for page '" + routeName + "' in language '" + this.currentLanguageCode + "'!");
        }
        return result;
    };
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getTranslatedPaths = /**
     * @private
     * @param {?} route
     * @param {?} key
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, key, routesTranslations) {
        /** @type {?} */
        var routeName = this.getConfigurable(route, key);
        /** @type {?} */
        var translation = this.getRouteTranslation(routeName, routesTranslations);
        if (translation === undefined) {
            this.warn("Could not translate key '" + key + "' of route '" + routeName + "'", route, "due to undefined key '" + routeName + "' in routes translations", routesTranslations);
            return [];
        }
        if (translation && translation.paths === undefined) {
            this.warn("Could not translate key '" + key + "' of route '" + routeName + "'", route, "due to undefined 'paths' key for '" + routeName + "' route in routes translations", routesTranslations);
            return [];
        }
        // translation or translation.paths can be null - which means switching off the route
        return (translation && translation.paths) || [];
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    ConfigurableRoutesService.prototype.warn = /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.config.production) {
            console.warn.apply(console, tslib_1.__spread(args));
        }
    };
    ConfigurableRoutesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigurableRoutesService.ctorParameters = function () { return [
        { type: ServerConfig },
        { type: Injector },
        { type: RoutesConfigLoader }
    ]; };
    return ConfigurableRoutesService;
}());
export { ConfigurableRoutesService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTVEO0lBRUUsbUNBQ1UsTUFBb0IsRUFDcEIsUUFBa0IsRUFDbEIsa0JBQXNDO1FBRnRDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRy9CLHdCQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLDJGQUEyRjtRQVVoSSxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBWm5FLENBQUM7SUFNSixzQkFBWSxnRUFBeUI7Ozs7O1FBQXJDO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMscUJBQXFCLENBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsRUFBc0IsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUlEOztPQUVHOzs7Ozs7SUFDRyx3Q0FBSTs7Ozs7O0lBQVY7Ozs7OzZCQUNNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBaEIsd0JBQWdCO3dCQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FB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bSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlciwgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VydmVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZyc7XG5pbXBvcnQge1xuICBSb3V0ZXNUcmFuc2xhdGlvbnMsXG4gIFJvdXRlVHJhbnNsYXRpb24sXG4gIFJvdXRlc0NvbmZpZ1xufSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnLWxvYWRlcic7XG5cbnR5cGUgQ29uZmlndXJhYmxlUm91dGVLZXkgPSAnY3hQYXRoJyB8ICdjeFJlZGlyZWN0VG8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXNDb25maWdMb2FkZXI6IFJvdXRlc0NvbmZpZ0xvYWRlclxuICApIHt9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gJ2VuJzsgLy8gVE9ETzogaGFyZGNvZGVkISBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIG1vcmUgbGFuZ3VhZ2VzIGFyZSBzdXBwb3J0ZWQgYnkgbG9jYWxpemVkIHJvdXRlc1xuXG4gIHByaXZhdGUgYWxsUm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNDb25maWdbJ3RyYW5zbGF0aW9ucyddO1xuXG4gIHByaXZhdGUgZ2V0IGN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnMoKTogUm91dGVzVHJhbnNsYXRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnNbXG4gICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUNvZGVcbiAgICBdIGFzIFJvdXRlc1RyYW5zbGF0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENhbGxlZCA9IGZhbHNlOyAvLyBndWFyZCBub3QgdG8gY2FsbCBpbml0KCkgbW9yZSB0aGFuIG9uY2VcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgc2VydmljZSB3aXRoIGdpdmVuIHRyYW5zbGF0aW9ucyBhbmQgdHJhbnNsYXRlcyBhbGwgZXhpc3RpbmcgUm91dGVzIGluIHRoZSBSb3V0ZXIuXG4gICAqL1xuICBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5pbml0Q2FsbGVkKSB7XG4gICAgICB0aGlzLmluaXRDYWxsZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXNDb25maWdMb2FkZXIubG9hZCgpO1xuICAgICAgdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLnJvdXRlc0NvbmZpZ0xvYWRlci5yb3V0ZXNDb25maWcudHJhbnNsYXRpb25zO1xuICAgICAgdGhpcy50cmFuc2xhdGVSb3V0ZXJDb25maWcoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlckNvbmZpZygpIHtcbiAgICAvLyBSb3V0ZXIgY291bGQgbm90IGJlIGluamVjdGVkIGluIGNvbnN0cnVjdG9yIGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeSB3aXRoIEFQUF9JTklUSUFMSVpFUjpcbiAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhcbiAgICAgIHJvdXRlci5jb25maWcsXG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICApO1xuICAgIHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLm1vdmVXaWxkY2FyZFJvdXRlVG9FbmQodHJhbnNsYXRlZFJvdXRlcyk7XG5cbiAgICByb3V0ZXIucmVzZXRDb25maWcodHJhbnNsYXRlZFJvdXRlcyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgUm91dGUgd2l0aCBkb3VibGUgYXN0ZXJpc2sgKCoqKSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKiBJZiB0aGVyZSBhcmUgbW9yZSBSb3V0ZXMgd2l0aCAqKiwgb25seSB0aGUgZmlyc3Qgd2lsbCBiZSBsZWZ0IGFuZCBvdGhlciByZW1vdmVkLlxuICAgKlxuICAgKiBSZWFzb246IFdoZW4gc29tZSBjdXN0b20gUm91dGVzIGFyZSBpbmplY3RlZCBhZnRlciBTcGFydGFjdXMnIG9uZXMsXG4gICAqICAgICAgICAgIHRoZW4gdGhlIFNwYXJ0YWN1cycgd2lsZGNhcmQgUm91dGUgbmVlZHMgYmVpbmcgbW92ZWQgdG8gdGhlIGVuZCAtXG4gICAqICAgICAgICAgIGV2ZW4gYWZ0ZXIgY3VzdG9tIFJvdXRlcyAtIHRvIG1ha2UgY3VzdG9tIFJvdXRlcyBkaXNjb3ZlcmFibGUuXG4gICAqICAgICAgICAgIE1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgUm91dGUgaXMgYSBzaWduIG9mIGJhZCBjb25maWcsIHNvIHJlZHVuZGFudCBjb3BpZXMgYXJlIHJlbW92ZWQuXG4gICAqL1xuICBwcml2YXRlIG1vdmVXaWxkY2FyZFJvdXRlVG9FbmQocm91dGVzOiBSb3V0ZXMpOiBSb3V0ZXMge1xuICAgIGNvbnN0IGZpcnN0V2lsZGNhcmRSb3V0ZSA9IHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGggPT09ICcqKicpO1xuICAgIHJldHVybiBmaXJzdFdpbGRjYXJkUm91dGVcbiAgICAgID8gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5wYXRoICE9PSAnKionKS5jb25jYXQoZmlyc3RXaWxkY2FyZFJvdXRlKVxuICAgICAgOiByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGlzdCBvZiByb3V0ZXMgdHJhbnNsYXRpb25zIGZvciBnaXZlbiBsaXN0IG9mIG5lc3RlZCByb3V0ZXNcbiAgICogdXNpbmcgZ2l2ZW4gb2JqZWN0IG9mIHJvdXRlcyB0cmFuc2xhdGlvbnMuXG4gICAqL1xuICBnZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMoXG4gICAgbmVzdGVkUm91dGVOYW1lczogc3RyaW5nW10sXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVUcmFuc2xhdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5nZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNSZWN1cnNpdmUoXG4gICAgICBuZXN0ZWRSb3V0ZU5hbWVzLFxuICAgICAgcm91dGVzVHJhbnNsYXRpb25zLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNSZWN1cnNpdmUoXG4gICAgbmVzdGVkUm91dGVzTmFtZXM6IHN0cmluZ1tdLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zLFxuICAgIGFjY1Jlc3VsdDogUm91dGVUcmFuc2xhdGlvbltdXG4gICk6IFJvdXRlVHJhbnNsYXRpb25bXSB7XG4gICAgaWYgKCFuZXN0ZWRSb3V0ZXNOYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBhY2NSZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IFtyb3V0ZU5hbWUsIC4uLnJlbWFpbmluZ1JvdXRlTmFtZXNdID0gbmVzdGVkUm91dGVzTmFtZXM7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldFJvdXRlVHJhbnNsYXRpb24ocm91dGVOYW1lLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIGlmICghdHJhbnNsYXRpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChyZW1haW5pbmdSb3V0ZU5hbWVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgY2hpbGRyZW5UcmFuc2xhdGlvbnMgPSB0aGlzLmdldENoaWxkcmVuUm91dGVzVHJhbnNsYXRpb25zKFxuICAgICAgICByb3V0ZU5hbWUsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIGlmICghY2hpbGRyZW5UcmFuc2xhdGlvbnMpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBObyBjaGlsZHJlbiByb3V0ZXMgdHJhbnNsYXRpb25zIHdlcmUgY29uZmlndXJlZCBmb3IgcGFnZSAnJHtyb3V0ZU5hbWV9JyBpbiBsYW5ndWFnZSAnJHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlQ29kZVxuICAgICAgICAgIH0nIWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdldE5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uc1JlY3Vyc2l2ZShcbiAgICAgICAgcmVtYWluaW5nUm91dGVOYW1lcyxcbiAgICAgICAgY2hpbGRyZW5UcmFuc2xhdGlvbnMsXG4gICAgICAgIGFjY1Jlc3VsdC5jb25jYXQodHJhbnNsYXRpb24pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gYWNjUmVzdWx0LmNvbmNhdCh0cmFuc2xhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuUm91dGVzVHJhbnNsYXRpb25zKFxuICAgIHJvdXRlTmFtZTogc3RyaW5nLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlc1RyYW5zbGF0aW9ucyB7XG4gICAgY29uc3Qgcm91dGVUcmFuc2xhdGlvbiA9IHRoaXMuZ2V0Um91dGVUcmFuc2xhdGlvbihcbiAgICAgIHJvdXRlTmFtZSxcbiAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIHJvdXRlVHJhbnNsYXRpb24gJiYgcm91dGVUcmFuc2xhdGlvbi5jaGlsZHJlbjtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVzKFxuICAgIHJvdXRlczogUm91dGVzLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgcm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRlZFJvdXRlQWxpYXNlcyA9IHRoaXMudHJhbnNsYXRlUm91dGUoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRDaGlsZHJlblJvdXRlcyA9IHRoaXMudHJhbnNsYXRlQ2hpbGRyZW5Sb3V0ZXMoXG4gICAgICAgICAgcm91dGUsXG4gICAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHRyYW5zbGF0ZWRSb3V0ZUFsaWFzZXMuZm9yRWFjaCh0cmFuc2xhdGVkUm91dGVBbGlhcyA9PiB7XG4gICAgICAgICAgdHJhbnNsYXRlZFJvdXRlQWxpYXMuY2hpbGRyZW4gPSB0cmFuc2xhdGVkQ2hpbGRyZW5Sb3V0ZXM7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goLi4udHJhbnNsYXRlZFJvdXRlQWxpYXNlcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlQ2hpbGRyZW5Sb3V0ZXMoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKSkge1xuICAgICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKTtcbiAgICAgIGNvbnN0IGNoaWxkcmVuVHJhbnNsYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlblJvdXRlc1RyYW5zbGF0aW9ucyhcbiAgICAgICAgcm91dGVOYW1lLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG5cbiAgICAgIGlmIChjaGlsZHJlblRyYW5zbGF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgQ291bGQgbm90IHRyYW5zbGF0ZSBjaGlsZHJlbiByb3V0ZXMgb2Ygcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdjaGlsZHJlbicga2V5IGZvciAnJHtyb3V0ZU5hbWV9JyByb3V0ZSBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBudWxsIHN3aXRjaGVzIG9mZiB0aGUgY2hpbGRyZW4gcm91dGVzOlxuICAgICAgaWYgKGNoaWxkcmVuVHJhbnNsYXRpb25zID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgY2hpbGRyZW5UcmFuc2xhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGUoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKSkge1xuICAgICAgLy8gd2UgYXNzdW1lIHRoYXQgJ3BhdGgnIGFuZCAncmVkaXJlY3RUbycgY2Fubm90IGJlIGJvdGggY29uZmlndXJlZCBmb3Igb25lIHJvdXRlXG4gICAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UmVkaXJlY3RUbycpKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgQSBwYXRoIHNob3VsZCBub3QgaGF2ZSBzZXQgYm90aCBcImN4UGF0aFwiIGFuZCBcImN4UmVkaXJlY3RUb1wiIHByb3BlcnRpZXMhIFJvdXRlOiAnJHtyb3V0ZX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVSb3V0ZVBhdGgocm91dGUsIHJvdXRlc1RyYW5zbGF0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFJlZGlyZWN0VG8nKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlUm91dGVSZWRpcmVjdFRvKHJvdXRlLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBbcm91dGVdOyAvLyBpZiBub3RoaW5nIGlzIGNvbmZpZ3VyYWJsZSwganVzdCBwYXNzIHRoZSBvcmlnaW5hbCByb3V0ZVxuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbmZpZ3VyYWJsZShyb3V0ZTogUm91dGUsIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldENvbmZpZ3VyYWJsZShyb3V0ZSwga2V5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlndXJhYmxlKHJvdXRlOiBSb3V0ZSwga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YVtrZXldO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZVBhdGgoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlW10ge1xuICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0ZWRQYXRocyhyb3V0ZSwgJ2N4UGF0aCcsIHJvdXRlc1RyYW5zbGF0aW9ucykubWFwKFxuICAgICAgdHJhbnNsYXRlZFBhdGggPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5yb3V0ZSwgcGF0aDogdHJhbnNsYXRlZFBhdGggfTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZVJlZGlyZWN0VG8oXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHRyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlW10ge1xuICAgIGNvbnN0IHRyYW5zbGF0ZWRQYXRocyA9IHRoaXMuZ2V0VHJhbnNsYXRlZFBhdGhzKFxuICAgICAgcm91dGUsXG4gICAgICAnY3hSZWRpcmVjdFRvJyxcbiAgICAgIHRyYW5zbGF0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZWRQYXRocy5sZW5ndGhcbiAgICAgID8gW3sgLi4ucm91dGUsIHJlZGlyZWN0VG86IHRyYW5zbGF0ZWRQYXRoc1swXSB9XSAvLyB0YWtlIHRoZSBmaXJzdCBwYXRoIGZyb20gbGlzdCBieSBjb252ZW50aW9uXG4gICAgICA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZVRyYW5zbGF0aW9uKFxuICAgIHJvdXRlTmFtZTogc3RyaW5nLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlVHJhbnNsYXRpb24ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHJvdXRlc1RyYW5zbGF0aW9ucyAmJiByb3V0ZXNUcmFuc2xhdGlvbnNbcm91dGVOYW1lXTtcbiAgICBpZiAoIXJvdXRlc1RyYW5zbGF0aW9ucyB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgTm8gcm91dGUgdHJhbnNsYXRpb24gd2FzIGNvbmZpZ3VyZWQgZm9yIHBhZ2UgJyR7cm91dGVOYW1lfScgaW4gbGFuZ3VhZ2UgJyR7XG4gICAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2VDb2RlXG4gICAgICAgIH0nIWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldFRyYW5zbGF0ZWRQYXRocyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsIGtleSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldFJvdXRlVHJhbnNsYXRpb24ocm91dGVOYW1lLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIGlmICh0cmFuc2xhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgdHJhbnNsYXRlIGtleSAnJHtrZXl9JyBvZiByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCBrZXkgJyR7cm91dGVOYW1lfScgaW4gcm91dGVzIHRyYW5zbGF0aW9uc2AsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnBhdGhzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCB0cmFuc2xhdGUga2V5ICcke2tleX0nIG9mIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdwYXRocycga2V5IGZvciAnJHtyb3V0ZU5hbWV9JyByb3V0ZSBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8vIHRyYW5zbGF0aW9uIG9yIHRyYW5zbGF0aW9uLnBhdGhzIGNhbiBiZSBudWxsIC0gd2hpY2ggbWVhbnMgc3dpdGNoaW5nIG9mZiB0aGUgcm91dGVcbiAgICByZXR1cm4gKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnBhdGhzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=