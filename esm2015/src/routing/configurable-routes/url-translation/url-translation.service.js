/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ConfigurableRoutesService } from '../configurable-routes.service';
import { RouteRecognizerService } from './route-recognizer.service';
import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { getParamName, isParam } from './path-utils';
export class UrlTranslationService {
    /**
     * @param {?} configurableRoutesService
     * @param {?} routeRecognizer
     * @param {?} urlParser
     * @param {?} config
     */
    constructor(configurableRoutesService, routeRecognizer, urlParser, config) {
        this.configurableRoutesService = configurableRoutesService;
        this.routeRecognizer = routeRecognizer;
        this.urlParser = urlParser;
        this.config = config;
        this.ROOT_URL = ['/'];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    translate(options) {
        // if options are invalid, return the root url
        if (!this.validateOptions(options)) {
            return this.ROOT_URL;
        }
        if (typeof options.url === 'string') {
            /** @type {?} */
            const recognizedRoute = this.routeRecognizer.recognizeByDefaultUrl(options.url);
            return recognizedRoute ? this.generateUrl(recognizedRoute) : options.url;
        }
        return this.generateUrl(options.route);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    validateOptions(options) {
        if (!options || typeof options !== 'object') {
            this.warn(`Incorrect options for translating url. Options have to be an object. Options: `, options);
            return false;
        }
        /** @type {?} */
        const urlDefined = Boolean(options.url) || options.url === '';
        /** @type {?} */
        const routeDefined = Boolean(options.route);
        if (!urlDefined && !routeDefined) {
            this.warn(`Incorrect options for translating url. Options must have 'url' string or 'route' array property. Options: `, options);
            return false;
        }
        if (urlDefined && routeDefined) {
            this.warn(`Incorrect options for translating url. Options cannot have both 'url' and 'route' property. Options: `, options);
            return false;
        }
        if (urlDefined) {
            return this.validateOptionsUrl(options.url);
        }
        if (routeDefined) {
            return this.validateOptionsRoute(options.route);
        }
        return true;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    validateOptionsUrl(url) {
        if (typeof url !== 'string') {
            this.warn(`Incorrect options for translating url.`, `'url' property should be a string. Url: `, url);
            return false;
        }
        return true;
    }
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    validateOptionsRoute(nestedRoutes) {
        if (!Array.isArray(nestedRoutes)) {
            this.warn(`Incorrect options for translating url.`, `'route' property should be an array. Route: `, nestedRoutes);
            return false;
        }
        /** @type {?} */
        const length = nestedRoutes.length;
        if (!length) {
            this.warn(`Incorrect options for translating url.`, `'route' array should not be empty. Route: `, nestedRoutes);
            return false;
        }
        for (let i = 0; i < length; i++) {
            /** @type {?} */
            const nestedRoute = nestedRoutes[i];
            if (typeof nestedRoute !== 'string' && !nestedRoute.name) {
                this.warn(`Incorrect options for translating url.`, `'route' array can contain only elements which are string or object with 'name' property. Route: `, nestedRoutes);
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    generateUrl(nestedRoutes) {
        /** @type {?} */
        const standarizedNestedRoutes = this.standarizeNestedRoutes(nestedRoutes);
        // if no routes given, return root url
        if (!standarizedNestedRoutes.length) {
            return this.ROOT_URL;
        }
        const { nestedRoutesNames, nestedRoutesParams } = this.splitRoutesNamesAndParams(standarizedNestedRoutes);
        /** @type {?} */
        const nestedRoutesTranslations = this.configurableRoutesService.getNestedRoutesTranslations(nestedRoutesNames);
        // if no routes translations were configured, return root url:
        if (!nestedRoutesTranslations) {
            return this.ROOT_URL;
        }
        const [leafNestedRouteTranslation] = nestedRoutesTranslations.slice(-1);
        // if leaf route was disabled in config (set to null), return root url:
        if (!leafNestedRouteTranslation.paths) {
            return this.ROOT_URL;
        }
        // find first path for every nested route that can satisfy it's parameters with given parameters
        /** @type {?} */
        const nestedRoutesPaths = this.findPathsWithFillableParams(nestedRoutesTranslations, nestedRoutesParams);
        // if not every nested route had configured path that can be satisfied with given params, return root url
        if (!nestedRoutesPaths) {
            return this.ROOT_URL;
        }
        /** @type {?} */
        const result = this.provideParamsValues(nestedRoutesPaths, nestedRoutesParams, nestedRoutesTranslations.map(routTranslation => routTranslation.paramsMapping));
        result.unshift(''); // ensure absolute path ( leading '' in path array is equvalent to leading '/' in string)
        return result;
    }
    /**
     * Converts all elements to objects
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    standarizeNestedRoutes(nestedRoutes) {
        return (nestedRoutes || []).map(route => typeof route === 'string'
            ? { name: route, params: {} }
            : { name: route.name, params: route.params || {} });
    }
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    splitRoutesNamesAndParams(nestedRoutes) {
        return (nestedRoutes || []).reduce(({ nestedRoutesNames, nestedRoutesParams }, route) => ({
            nestedRoutesNames: [...nestedRoutesNames, route.name],
            nestedRoutesParams: [...nestedRoutesParams, route.params]
        }), { nestedRoutesNames: [], nestedRoutesParams: [] });
    }
    /**
     * @private
     * @param {?} nestedRoutesPaths
     * @param {?} nestedRoutesParams
     * @param {?} nestedRoutesParamsMappings
     * @return {?}
     */
    provideParamsValues(nestedRoutesPaths, nestedRoutesParams, nestedRoutesParamsMappings) {
        /** @type {?} */
        const length = nestedRoutesPaths.length;
        /** @type {?} */
        const result = [];
        for (let i = 0; i < length; i++) {
            /** @type {?} */
            const path = nestedRoutesPaths[i];
            /** @type {?} */
            const paramsObject = nestedRoutesParams[i];
            /** @type {?} */
            const paramsMapping = nestedRoutesParamsMappings[i];
            /** @type {?} */
            const pathSegments = this.provideParamsValuesForSingleRoute(path, paramsObject, paramsMapping);
            result.push(...pathSegments);
        }
        return result;
    }
    /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    provideParamsValuesForSingleRoute(path, params, paramsMapping) {
        return this.urlParser.getPrimarySegments(path).map(segment => {
            if (isParam(segment)) {
                /** @type {?} */
                const paramName = getParamName(segment);
                /** @type {?} */
                const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        });
    }
    /**
     * @private
     * @param {?} nestedRoutesTranslations
     * @param {?} nestedRoutesParams
     * @return {?}
     */
    findPathsWithFillableParams(nestedRoutesTranslations, nestedRoutesParams) {
        /** @type {?} */
        const length = nestedRoutesTranslations.length;
        /** @type {?} */
        const result = [];
        for (let i = 0; i < length; i++) {
            /** @type {?} */
            const routeTranslation = nestedRoutesTranslations[i];
            /** @type {?} */
            const paramsObject = nestedRoutesParams[i];
            /** @type {?} */
            const path = this.findPartialPathWithFillableParams(routeTranslation.paths, paramsObject, routeTranslation.paramsMapping);
            if (path === undefined || path === null) {
                this.warn(`No configured path matches all its params to given object. `, `Route translation: `, routeTranslation, `(in nested routes translations list`, nestedRoutesTranslations, `). Params object: `, paramsObject, `(in params objects list`, nestedRoutesParams, `)`);
                return null;
            }
            result.push(path);
        }
        return result;
    }
    // find first path that can fill all its params with values from given object
    /**
     * @private
     * @param {?} paths
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    findPartialPathWithFillableParams(paths, params, paramsMapping) {
        return paths.find(path => this.getParams(path).every(paramName => {
            /** @type {?} */
            const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
            return params[mappedParamName] !== undefined;
        }));
    }
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    getParams(path) {
        return this.urlParser
            .getPrimarySegments(path)
            .filter(isParam)
            .map(getParamName);
    }
    /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    getMappedParamName(paramName, paramsMapping) {
        if (paramsMapping) {
            return paramsMapping[paramName] || paramName;
        }
        return paramName;
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
UrlTranslationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UrlTranslationService.ctorParameters = () => [
    { type: ConfigurableRoutesService },
    { type: RouteRecognizerService },
    { type: UrlParsingService },
    { type: ServerConfig }
];
if (false) {
    /** @type {?} */
    UrlTranslationService.prototype.ROOT_URL;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.configurableRoutesService;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.routeRecognizer;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.urlParser;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFRckQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQUdoQyxZQUNVLHlCQUFvRCxFQUNwRCxlQUF1QyxFQUN2QyxTQUE0QixFQUM1QixNQUFvQjtRQUhwQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBTnJCLGFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBT3ZCLENBQUM7Ozs7O0lBRUosU0FBUyxDQUFDLE9BQTRCO1FBQ3BDLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7UUFFRCxJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7O2tCQUM3QixlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FDaEUsT0FBTyxDQUFDLEdBQUcsQ0FDWjtZQUNELE9BQU8sZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQzFFO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsT0FBNEI7UUFDbEQsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FDUCxnRkFBZ0YsRUFDaEYsT0FBTyxDQUNSLENBQUM7WUFDRixPQUFPLEtBQUssQ0FBQztTQUNkOztjQUVLLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRTs7Y0FDdkQsWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FDUCw0R0FBNEcsRUFDNUcsT0FBTyxDQUNSLENBQUM7WUFDRixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxVQUFVLElBQUksWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQ1AsdUdBQXVHLEVBQ3ZHLE9BQU8sQ0FDUixDQUFDO1lBQ0YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxHQUFXO1FBQ3BDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQ1Asd0NBQXdDLEVBQ3hDLDBDQUEwQyxFQUMxQyxHQUFHLENBQ0osQ0FBQztZQUNGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUMxQixZQUF3QztRQUV4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUNQLHdDQUF3QyxFQUN4Qyw4Q0FBOEMsRUFDOUMsWUFBWSxDQUNiLENBQUM7WUFDRixPQUFPLEtBQUssQ0FBQztTQUNkOztjQUVLLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTTtRQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FDUCx3Q0FBd0MsRUFDeEMsNENBQTRDLEVBQzVDLFlBQVksQ0FDYixDQUFDO1lBQ0YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUN6QixXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQ1Asd0NBQXdDLEVBQ3hDLGtHQUFrRyxFQUNsRyxZQUFZLENBQ2IsQ0FBQztnQkFDRixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxZQUF3Qzs7Y0FDcEQsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQztRQUV6RSxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Y0FFSyxFQUNKLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbkIsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUM7O2NBRXJELHdCQUF3QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQywyQkFBMkIsQ0FDekYsaUJBQWlCLENBQ2xCO1FBRUQsOERBQThEO1FBQzlELElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Y0FFSyxDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZFLHVFQUF1RTtRQUN2RSxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7O2NBR0ssaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUN4RCx3QkFBd0IsRUFDeEIsa0JBQWtCLENBQ25CO1FBRUQseUdBQXlHO1FBQ3pHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7O2NBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FDckMsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQix3QkFBd0IsQ0FBQyxHQUFHLENBQzFCLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FDakQsQ0FDRjtRQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyx5RkFBeUY7UUFDN0csT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUtPLHNCQUFzQixDQUM1QixZQUF3QztRQUV4QyxPQUFPLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUN0QyxPQUFPLEtBQUssS0FBSyxRQUFRO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUM3QixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FDckQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLHlCQUF5QixDQUMvQixZQUE4QztRQUs5QyxPQUFPLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FDaEMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELGlCQUFpQixFQUFFLENBQUMsR0FBRyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3JELGtCQUFrQixFQUFFLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzFELENBQUMsRUFDRixFQUFFLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsQ0FDbEQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBRU8sbUJBQW1CLENBQ3pCLGlCQUEyQixFQUMzQixrQkFBNEIsRUFDNUIsMEJBQTJDOztjQUVyQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7Y0FDakMsTUFBTSxHQUFHLEVBQUU7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQ3pCLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7O2tCQUMzQixZQUFZLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOztrQkFDcEMsYUFBYSxHQUFHLDBCQUEwQixDQUFDLENBQUMsQ0FBQzs7a0JBQzdDLFlBQVksR0FBRyxJQUFJLENBQUMsaUNBQWlDLENBQ3pELElBQUksRUFDSixZQUFZLEVBQ1osYUFBYSxDQUNkO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7SUFFTyxpQ0FBaUMsQ0FDdkMsSUFBWSxFQUNaLE1BQWMsRUFDZCxhQUE0QjtRQUU1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFOztzQkFDZCxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7c0JBQ2pDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQzdDLFNBQVMsRUFDVCxhQUFhLENBQ2Q7Z0JBQ0QsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDaEM7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTywyQkFBMkIsQ0FDakMsd0JBQTRDLEVBQzVDLGtCQUE0Qjs7Y0FFdEIsTUFBTSxHQUFHLHdCQUF3QixDQUFDLE1BQU07O2NBQ3hDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUN6QixnQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7O2tCQUM5QyxZQUFZLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOztrQkFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxpQ0FBaUMsQ0FDakQsZ0JBQWdCLENBQUMsS0FBSyxFQUN0QixZQUFZLEVBQ1osZ0JBQWdCLENBQUMsYUFBYSxDQUMvQjtZQUNELElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsSUFBSSxDQUNQLDZEQUE2RCxFQUM3RCxxQkFBcUIsRUFDckIsZ0JBQWdCLEVBQ2hCLHFDQUFxQyxFQUNyQyx3QkFBd0IsRUFDeEIsb0JBQW9CLEVBQ3BCLFlBQVksRUFDWix5QkFBeUIsRUFDekIsa0JBQWtCLEVBQ2xCLEdBQUcsQ0FDSixDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7O0lBR08saUNBQWlDLENBQ3ZDLEtBQWUsRUFDZixNQUFjLEVBQ2QsYUFBNEI7UUFFNUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFOztrQkFDL0IsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FDN0MsU0FBUyxFQUNULGFBQWEsQ0FDZDtZQUVELE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLFNBQVMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUzthQUNsQixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7YUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNmLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsU0FBaUIsRUFBRSxhQUFxQjtRQUNqRSxJQUFJLGFBQWEsRUFBRTtZQUNqQixPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUM7U0FDOUM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTyxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUExU0YsVUFBVTs7OztZQVpGLHlCQUF5QjtZQUN6QixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLFlBQVk7Ozs7SUFXbkIseUNBQTBCOzs7OztJQUd4QiwwREFBNEQ7Ozs7O0lBQzVELGdEQUErQzs7Ozs7SUFDL0MsMENBQW9DOzs7OztJQUNwQyx1Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlUmVjb2duaXplclNlcnZpY2UgfSBmcm9tICcuL3JvdXRlLXJlY29nbml6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVcmxQYXJzaW5nU2VydmljZSB9IGZyb20gJy4vdXJsLXBhcnNpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7IFJvdXRlVHJhbnNsYXRpb24sIFBhcmFtc01hcHBpbmcgfSBmcm9tICcuLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IGdldFBhcmFtTmFtZSwgaXNQYXJhbSB9IGZyb20gJy4vcGF0aC11dGlscyc7XG5pbXBvcnQge1xuICBUcmFuc2xhdGVVcmxPcHRpb25zLFxuICBUcmFuc2xhdGVVcmxPcHRpb25zUm91dGUsXG4gIFRyYW5zbGF0ZVVybE9wdGlvbnNSb3V0ZU9iamVjdFxufSBmcm9tICcuL3RyYW5zbGF0ZS11cmwtb3B0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcmxUcmFuc2xhdGlvblNlcnZpY2Uge1xuICByZWFkb25seSBST09UX1VSTCA9IFsnLyddO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlndXJhYmxlUm91dGVzU2VydmljZTogQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlUmVjb2duaXplcjogUm91dGVSZWNvZ25pemVyU2VydmljZSxcbiAgICBwcml2YXRlIHVybFBhcnNlcjogVXJsUGFyc2luZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IFNlcnZlckNvbmZpZ1xuICApIHt9XG5cbiAgdHJhbnNsYXRlKG9wdGlvbnM6IFRyYW5zbGF0ZVVybE9wdGlvbnMpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgLy8gaWYgb3B0aW9ucyBhcmUgaW52YWxpZCwgcmV0dXJuIHRoZSByb290IHVybFxuICAgIGlmICghdGhpcy52YWxpZGF0ZU9wdGlvbnMob3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB0aGlzLlJPT1RfVVJMO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCByZWNvZ25pemVkUm91dGUgPSB0aGlzLnJvdXRlUmVjb2duaXplci5yZWNvZ25pemVCeURlZmF1bHRVcmwoXG4gICAgICAgIG9wdGlvbnMudXJsXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlY29nbml6ZWRSb3V0ZSA/IHRoaXMuZ2VuZXJhdGVVcmwocmVjb2duaXplZFJvdXRlKSA6IG9wdGlvbnMudXJsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVXJsKG9wdGlvbnMucm91dGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZU9wdGlvbnMob3B0aW9uczogVHJhbnNsYXRlVXJsT3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYEluY29ycmVjdCBvcHRpb25zIGZvciB0cmFuc2xhdGluZyB1cmwuIE9wdGlvbnMgaGF2ZSB0byBiZSBhbiBvYmplY3QuIE9wdGlvbnM6IGAsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsRGVmaW5lZCA9IEJvb2xlYW4ob3B0aW9ucy51cmwpIHx8IG9wdGlvbnMudXJsID09PSAnJztcbiAgICBjb25zdCByb3V0ZURlZmluZWQgPSBCb29sZWFuKG9wdGlvbnMucm91dGUpO1xuICAgIGlmICghdXJsRGVmaW5lZCAmJiAhcm91dGVEZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBJbmNvcnJlY3Qgb3B0aW9ucyBmb3IgdHJhbnNsYXRpbmcgdXJsLiBPcHRpb25zIG11c3QgaGF2ZSAndXJsJyBzdHJpbmcgb3IgJ3JvdXRlJyBhcnJheSBwcm9wZXJ0eS4gT3B0aW9uczogYCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHVybERlZmluZWQgJiYgcm91dGVEZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBJbmNvcnJlY3Qgb3B0aW9ucyBmb3IgdHJhbnNsYXRpbmcgdXJsLiBPcHRpb25zIGNhbm5vdCBoYXZlIGJvdGggJ3VybCcgYW5kICdyb3V0ZScgcHJvcGVydHkuIE9wdGlvbnM6IGAsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh1cmxEZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZU9wdGlvbnNVcmwob3B0aW9ucy51cmwpO1xuICAgIH1cbiAgICBpZiAocm91dGVEZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZU9wdGlvbnNSb3V0ZShvcHRpb25zLnJvdXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlT3B0aW9uc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgSW5jb3JyZWN0IG9wdGlvbnMgZm9yIHRyYW5zbGF0aW5nIHVybC5gLFxuICAgICAgICBgJ3VybCcgcHJvcGVydHkgc2hvdWxkIGJlIGEgc3RyaW5nLiBVcmw6IGAsXG4gICAgICAgIHVybFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlT3B0aW9uc1JvdXRlKFxuICAgIG5lc3RlZFJvdXRlczogVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5lc3RlZFJvdXRlcykpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYEluY29ycmVjdCBvcHRpb25zIGZvciB0cmFuc2xhdGluZyB1cmwuYCxcbiAgICAgICAgYCdyb3V0ZScgcHJvcGVydHkgc2hvdWxkIGJlIGFuIGFycmF5LiBSb3V0ZTogYCxcbiAgICAgICAgbmVzdGVkUm91dGVzXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IG5lc3RlZFJvdXRlcy5sZW5ndGg7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYEluY29ycmVjdCBvcHRpb25zIGZvciB0cmFuc2xhdGluZyB1cmwuYCxcbiAgICAgICAgYCdyb3V0ZScgYXJyYXkgc2hvdWxkIG5vdCBiZSBlbXB0eS4gUm91dGU6IGAsXG4gICAgICAgIG5lc3RlZFJvdXRlc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXN0ZWRSb3V0ZSA9IG5lc3RlZFJvdXRlc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgbmVzdGVkUm91dGUgIT09ICdzdHJpbmcnICYmICFuZXN0ZWRSb3V0ZS5uYW1lKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgSW5jb3JyZWN0IG9wdGlvbnMgZm9yIHRyYW5zbGF0aW5nIHVybC5gLFxuICAgICAgICAgIGAncm91dGUnIGFycmF5IGNhbiBjb250YWluIG9ubHkgZWxlbWVudHMgd2hpY2ggYXJlIHN0cmluZyBvciBvYmplY3Qgd2l0aCAnbmFtZScgcHJvcGVydHkuIFJvdXRlOiBgLFxuICAgICAgICAgIG5lc3RlZFJvdXRlc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVVybChuZXN0ZWRSb3V0ZXM6IFRyYW5zbGF0ZVVybE9wdGlvbnNSb3V0ZVtdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHN0YW5kYXJpemVkTmVzdGVkUm91dGVzID0gdGhpcy5zdGFuZGFyaXplTmVzdGVkUm91dGVzKG5lc3RlZFJvdXRlcyk7XG5cbiAgICAvLyBpZiBubyByb3V0ZXMgZ2l2ZW4sIHJldHVybiByb290IHVybFxuICAgIGlmICghc3RhbmRhcml6ZWROZXN0ZWRSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBuZXN0ZWRSb3V0ZXNOYW1lcyxcbiAgICAgIG5lc3RlZFJvdXRlc1BhcmFtc1xuICAgIH0gPSB0aGlzLnNwbGl0Um91dGVzTmFtZXNBbmRQYXJhbXMoc3RhbmRhcml6ZWROZXN0ZWRSb3V0ZXMpO1xuXG4gICAgY29uc3QgbmVzdGVkUm91dGVzVHJhbnNsYXRpb25zID0gdGhpcy5jb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlLmdldE5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucyhcbiAgICAgIG5lc3RlZFJvdXRlc05hbWVzXG4gICAgKTtcblxuICAgIC8vIGlmIG5vIHJvdXRlcyB0cmFuc2xhdGlvbnMgd2VyZSBjb25maWd1cmVkLCByZXR1cm4gcm9vdCB1cmw6XG4gICAgaWYgKCFuZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLlJPT1RfVVJMO1xuICAgIH1cblxuICAgIGNvbnN0IFtsZWFmTmVzdGVkUm91dGVUcmFuc2xhdGlvbl0gPSBuZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMuc2xpY2UoLTEpO1xuXG4gICAgLy8gaWYgbGVhZiByb3V0ZSB3YXMgZGlzYWJsZWQgaW4gY29uZmlnIChzZXQgdG8gbnVsbCksIHJldHVybiByb290IHVybDpcbiAgICBpZiAoIWxlYWZOZXN0ZWRSb3V0ZVRyYW5zbGF0aW9uLnBhdGhzKSB7XG4gICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGZpcnN0IHBhdGggZm9yIGV2ZXJ5IG5lc3RlZCByb3V0ZSB0aGF0IGNhbiBzYXRpc2Z5IGl0J3MgcGFyYW1ldGVycyB3aXRoIGdpdmVuIHBhcmFtZXRlcnNcbiAgICBjb25zdCBuZXN0ZWRSb3V0ZXNQYXRocyA9IHRoaXMuZmluZFBhdGhzV2l0aEZpbGxhYmxlUGFyYW1zKFxuICAgICAgbmVzdGVkUm91dGVzVHJhbnNsYXRpb25zLFxuICAgICAgbmVzdGVkUm91dGVzUGFyYW1zXG4gICAgKTtcblxuICAgIC8vIGlmIG5vdCBldmVyeSBuZXN0ZWQgcm91dGUgaGFkIGNvbmZpZ3VyZWQgcGF0aCB0aGF0IGNhbiBiZSBzYXRpc2ZpZWQgd2l0aCBnaXZlbiBwYXJhbXMsIHJldHVybiByb290IHVybFxuICAgIGlmICghbmVzdGVkUm91dGVzUGF0aHMpIHtcbiAgICAgIHJldHVybiB0aGlzLlJPT1RfVVJMO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucHJvdmlkZVBhcmFtc1ZhbHVlcyhcbiAgICAgIG5lc3RlZFJvdXRlc1BhdGhzLFxuICAgICAgbmVzdGVkUm91dGVzUGFyYW1zLFxuICAgICAgbmVzdGVkUm91dGVzVHJhbnNsYXRpb25zLm1hcChcbiAgICAgICAgcm91dFRyYW5zbGF0aW9uID0+IHJvdXRUcmFuc2xhdGlvbi5wYXJhbXNNYXBwaW5nXG4gICAgICApXG4gICAgKTtcblxuICAgIHJlc3VsdC51bnNoaWZ0KCcnKTsgLy8gZW5zdXJlIGFic29sdXRlIHBhdGggKCBsZWFkaW5nICcnIGluIHBhdGggYXJyYXkgaXMgZXF1dmFsZW50IHRvIGxlYWRpbmcgJy8nIGluIHN0cmluZylcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFsbCBlbGVtZW50cyB0byBvYmplY3RzXG4gICAqL1xuICBwcml2YXRlIHN0YW5kYXJpemVOZXN0ZWRSb3V0ZXMoXG4gICAgbmVzdGVkUm91dGVzOiBUcmFuc2xhdGVVcmxPcHRpb25zUm91dGVbXVxuICApOiBUcmFuc2xhdGVVcmxPcHRpb25zUm91dGVPYmplY3RbXSB7XG4gICAgcmV0dXJuIChuZXN0ZWRSb3V0ZXMgfHwgW10pLm1hcChyb3V0ZSA9PlxuICAgICAgdHlwZW9mIHJvdXRlID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHsgbmFtZTogcm91dGUsIHBhcmFtczoge30gfVxuICAgICAgICA6IHsgbmFtZTogcm91dGUubmFtZSwgcGFyYW1zOiByb3V0ZS5wYXJhbXMgfHwge30gfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNwbGl0Um91dGVzTmFtZXNBbmRQYXJhbXMoXG4gICAgbmVzdGVkUm91dGVzOiBUcmFuc2xhdGVVcmxPcHRpb25zUm91dGVPYmplY3RbXVxuICApOiB7XG4gICAgbmVzdGVkUm91dGVzTmFtZXM6IHN0cmluZ1tdO1xuICAgIG5lc3RlZFJvdXRlc1BhcmFtczogb2JqZWN0W107XG4gIH0ge1xuICAgIHJldHVybiAobmVzdGVkUm91dGVzIHx8IFtdKS5yZWR1Y2UoXG4gICAgICAoeyBuZXN0ZWRSb3V0ZXNOYW1lcywgbmVzdGVkUm91dGVzUGFyYW1zIH0sIHJvdXRlKSA9PiAoe1xuICAgICAgICBuZXN0ZWRSb3V0ZXNOYW1lczogWy4uLm5lc3RlZFJvdXRlc05hbWVzLCByb3V0ZS5uYW1lXSxcbiAgICAgICAgbmVzdGVkUm91dGVzUGFyYW1zOiBbLi4ubmVzdGVkUm91dGVzUGFyYW1zLCByb3V0ZS5wYXJhbXNdXG4gICAgICB9KSxcbiAgICAgIHsgbmVzdGVkUm91dGVzTmFtZXM6IFtdLCBuZXN0ZWRSb3V0ZXNQYXJhbXM6IFtdIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm92aWRlUGFyYW1zVmFsdWVzKFxuICAgIG5lc3RlZFJvdXRlc1BhdGhzOiBzdHJpbmdbXSxcbiAgICBuZXN0ZWRSb3V0ZXNQYXJhbXM6IG9iamVjdFtdLFxuICAgIG5lc3RlZFJvdXRlc1BhcmFtc01hcHBpbmdzOiBQYXJhbXNNYXBwaW5nW11cbiAgKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGxlbmd0aCA9IG5lc3RlZFJvdXRlc1BhdGhzLmxlbmd0aDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXRoID0gbmVzdGVkUm91dGVzUGF0aHNbaV07XG4gICAgICBjb25zdCBwYXJhbXNPYmplY3QgPSBuZXN0ZWRSb3V0ZXNQYXJhbXNbaV07XG4gICAgICBjb25zdCBwYXJhbXNNYXBwaW5nID0gbmVzdGVkUm91dGVzUGFyYW1zTWFwcGluZ3NbaV07XG4gICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSB0aGlzLnByb3ZpZGVQYXJhbXNWYWx1ZXNGb3JTaW5nbGVSb3V0ZShcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcGFyYW1zT2JqZWN0LFxuICAgICAgICBwYXJhbXNNYXBwaW5nXG4gICAgICApO1xuICAgICAgcmVzdWx0LnB1c2goLi4ucGF0aFNlZ21lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgcHJvdmlkZVBhcmFtc1ZhbHVlc0ZvclNpbmdsZVJvdXRlKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwYXJhbXM6IG9iamVjdCxcbiAgICBwYXJhbXNNYXBwaW5nOiBQYXJhbXNNYXBwaW5nXG4gICk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy51cmxQYXJzZXIuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpLm1hcChzZWdtZW50ID0+IHtcbiAgICAgIGlmIChpc1BhcmFtKHNlZ21lbnQpKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IGdldFBhcmFtTmFtZShzZWdtZW50KTtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtc1ttYXBwZWRQYXJhbU5hbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXRoc1dpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICBuZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlVHJhbnNsYXRpb25bXSxcbiAgICBuZXN0ZWRSb3V0ZXNQYXJhbXM6IG9iamVjdFtdXG4gICk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBsZW5ndGggPSBuZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdXRlVHJhbnNsYXRpb24gPSBuZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNbaV07XG4gICAgICBjb25zdCBwYXJhbXNPYmplY3QgPSBuZXN0ZWRSb3V0ZXNQYXJhbXNbaV07XG4gICAgICBjb25zdCBwYXRoID0gdGhpcy5maW5kUGFydGlhbFBhdGhXaXRoRmlsbGFibGVQYXJhbXMoXG4gICAgICAgIHJvdXRlVHJhbnNsYXRpb24ucGF0aHMsXG4gICAgICAgIHBhcmFtc09iamVjdCxcbiAgICAgICAgcm91dGVUcmFuc2xhdGlvbi5wYXJhbXNNYXBwaW5nXG4gICAgICApO1xuICAgICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCB8fCBwYXRoID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgTm8gY29uZmlndXJlZCBwYXRoIG1hdGNoZXMgYWxsIGl0cyBwYXJhbXMgdG8gZ2l2ZW4gb2JqZWN0LiBgLFxuICAgICAgICAgIGBSb3V0ZSB0cmFuc2xhdGlvbjogYCxcbiAgICAgICAgICByb3V0ZVRyYW5zbGF0aW9uLFxuICAgICAgICAgIGAoaW4gbmVzdGVkIHJvdXRlcyB0cmFuc2xhdGlvbnMgbGlzdGAsXG4gICAgICAgICAgbmVzdGVkUm91dGVzVHJhbnNsYXRpb25zLFxuICAgICAgICAgIGApLiBQYXJhbXMgb2JqZWN0OiBgLFxuICAgICAgICAgIHBhcmFtc09iamVjdCxcbiAgICAgICAgICBgKGluIHBhcmFtcyBvYmplY3RzIGxpc3RgLFxuICAgICAgICAgIG5lc3RlZFJvdXRlc1BhcmFtcyxcbiAgICAgICAgICBgKWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGZpbmQgZmlyc3QgcGF0aCB0aGF0IGNhbiBmaWxsIGFsbCBpdHMgcGFyYW1zIHdpdGggdmFsdWVzIGZyb20gZ2l2ZW4gb2JqZWN0XG4gIHByaXZhdGUgZmluZFBhcnRpYWxQYXRoV2l0aEZpbGxhYmxlUGFyYW1zKFxuICAgIHBhdGhzOiBzdHJpbmdbXSxcbiAgICBwYXJhbXM6IG9iamVjdCxcbiAgICBwYXJhbXNNYXBwaW5nOiBQYXJhbXNNYXBwaW5nXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHBhdGhzLmZpbmQocGF0aCA9PlxuICAgICAgdGhpcy5nZXRQYXJhbXMocGF0aCkuZXZlcnkocGFyYW1OYW1lID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkUGFyYW1OYW1lID0gdGhpcy5nZXRNYXBwZWRQYXJhbU5hbWUoXG4gICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgIHBhcmFtc01hcHBpbmdcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYW1zKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnVybFBhcnNlclxuICAgICAgLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKVxuICAgICAgLmZpbHRlcihpc1BhcmFtKVxuICAgICAgLm1hcChnZXRQYXJhbU5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXBwZWRQYXJhbU5hbWUocGFyYW1OYW1lOiBzdHJpbmcsIHBhcmFtc01hcHBpbmc6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgaWYgKHBhcmFtc01hcHBpbmcpIHtcbiAgICAgIHJldHVybiBwYXJhbXNNYXBwaW5nW3BhcmFtTmFtZV0gfHwgcGFyYW1OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1OYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==