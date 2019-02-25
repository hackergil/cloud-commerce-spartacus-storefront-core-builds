import { ROUTER_NAVIGATION, ROUTER_ERROR, ROUTER_CANCEL, StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, PRIMARY_OUTLET, RouterModule, DefaultUrlSerializer, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, UrlSerializer } from '@angular/router';
import { __decorate, __metadata, __awaiter } from 'tslib';
import { Observable, of, throwError, Subscription, combineLatest } from 'rxjs';
import { tap, map, retry, filter, switchMap, take, catchError, mergeMap, exhaustMap, groupBy, withLatestFrom, takeWhile } from 'rxjs/operators';
import { CommonModule, Location, DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse, HTTP_INTERCEPTORS, HttpParams, HttpClientModule } from '@angular/common/http';
import { createSelector, createFeatureSelector, select, Store, StoreModule, META_REDUCERS } from '@ngrx/store';
import { Effect, Actions, ofType, EffectsModule } from '@ngrx/effects';
import { InjectionToken, NgModule, Injectable, Injector, Inject, Optional, PLATFORM_ID, Pipe, ComponentFactoryResolver, APP_INITIALIZER, defineInjectable, inject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOADER_LOAD_ACTION = '[LOADER] LOAD';
/** @type {?} */
const LOADER_FAIL_ACTION = '[LOADER] FAIL';
/** @type {?} */
const LOADER_SUCCESS_ACTION = '[LOADER] SUCCESS';
/** @type {?} */
const LOADER_RESET_ACTION = '[LOADER] RESET';
/**
 * @param {?} entityType
 * @return {?}
 */
function loadMeta(entityType) {
    return {
        entityType: entityType,
        loader: {
            load: true
        }
    };
}
/**
 * @param {?} entityType
 * @param {?=} error
 * @return {?}
 */
function failMeta(entityType, error) {
    return {
        entityType: entityType,
        loader: {
            error: error ? error : true
        }
    };
}
/**
 * @param {?} entityType
 * @return {?}
 */
function successMeta(entityType) {
    return {
        entityType: entityType,
        loader: {
            success: true
        }
    };
}
/**
 * @param {?} entityType
 * @return {?}
 */
function resetMeta(entityType) {
    return {
        entityType: entityType,
        loader: {}
    };
}
class LoaderLoadAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = LOADER_LOAD_ACTION;
        this.meta = loadMeta(entityType);
    }
}
class LoaderFailAction {
    /**
     * @param {?} entityType
     * @param {?=} error
     */
    constructor(entityType, error) {
        this.type = LOADER_FAIL_ACTION;
        this.meta = failMeta(entityType, error);
    }
}
class LoaderSuccessAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = LOADER_SUCCESS_ACTION;
        this.meta = successMeta(entityType);
    }
}
class LoaderResetAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = LOADER_RESET_ACTION;
        this.meta = resetMeta(entityType);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CART_FEATURE = 'cart';
/** @type {?} */
const CART_DATA = '[Cart] Cart Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CREATE_CART = '[Cart] Create Cart';
/** @type {?} */
const CREATE_CART_FAIL = '[Cart] Create Cart Fail';
/** @type {?} */
const CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
/** @type {?} */
const LOAD_CART = '[Cart] Load Cart';
/** @type {?} */
const LOAD_CART_FAIL = '[Cart] Load Cart Fail';
/** @type {?} */
const LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
/** @type {?} */
const MERGE_CART = '[Cart] Merge Cart';
/** @type {?} */
const MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
class CreateCart extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CREATE_CART;
    }
}
class CreateCartFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = CREATE_CART_FAIL;
    }
}
class CreateCartSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = CREATE_CART_SUCCESS;
    }
}
class LoadCart extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = LOAD_CART;
    }
}
class LoadCartFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = LOAD_CART_FAIL;
    }
}
class LoadCartSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = LOAD_CART_SUCCESS;
    }
}
class MergeCart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
}
class MergeCartSuccess {
    constructor() {
        this.type = MERGE_CART_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ADD_ENTRY = '[Cart-entry] Add Entry';
/** @type {?} */
const ADD_ENTRY_SUCCESS = '[Cart-entry] Add Entry Success';
/** @type {?} */
const ADD_ENTRY_FAIL = '[Cart-entry] Add Entry Fail';
/** @type {?} */
const REMOVE_ENTRY = '[Cart-entry] Remove Entry';
/** @type {?} */
const REMOVE_ENTRY_SUCCESS = '[Cart-entry] Remove Entry Success';
/** @type {?} */
const REMOVE_ENTRY_FAIL = '[Cart-entry] Remove Entry Fail';
/** @type {?} */
const UPDATE_ENTRY = '[Cart-entry] Update Entry';
/** @type {?} */
const UPDATE_ENTRY_SUCCESS = '[Cart-entry] Update Entry Success';
/** @type {?} */
const UPDATE_ENTRY_FAIL = '[Cart-entry] Update Entry Fail';
class AddEntry extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = ADD_ENTRY;
    }
}
class AddEntrySuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = ADD_ENTRY_SUCCESS;
    }
}
class AddEntryFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = ADD_ENTRY_FAIL;
    }
}
class RemoveEntry extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = REMOVE_ENTRY;
    }
}
class RemoveEntrySuccess extends LoaderSuccessAction {
    constructor() {
        super(CART_DATA);
        this.type = REMOVE_ENTRY_SUCCESS;
    }
}
class RemoveEntryFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = REMOVE_ENTRY_FAIL;
    }
}
class UpdateEntry extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA);
        this.payload = payload;
        this.type = UPDATE_ENTRY;
    }
}
class UpdateEntrySuccess extends LoaderSuccessAction {
    constructor() {
        super(CART_DATA);
        this.type = UPDATE_ENTRY_SUCCESS;
    }
}
class UpdateEntryFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CART_DATA, payload);
        this.payload = payload;
        this.type = UPDATE_ENTRY_FAIL;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} state
 * @return {?}
 */
function loaderValueSelector(state) {
    return state.value;
}
/**
 * @template T
 * @param {?} state
 * @return {?}
 */
function loaderLoadingSelector(state) {
    return state.loading;
}
/**
 * @template T
 * @param {?} state
 * @return {?}
 */
function loaderErrorSelector(state) {
    return state.error;
}
/**
 * @template T
 * @param {?} state
 * @return {?}
 */
function loaderSuccessSelector(state) {
    return state.success;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getCartContentSelector = (state) => state.content;
/** @type {?} */
const getRefreshSelector = (state) => state.refresh;
/** @type {?} */
const getEntriesSelector = (state) => state.entries;
/** @type {?} */
const getCartMergeCompleteSelector = (state) => state.cartMergeComplete;
/** @type {?} */
const getCartsState = createFeatureSelector(CART_FEATURE);
/** @type {?} */
const getActiveCartState = createSelector(getCartsState, (cartsState) => cartsState.active);
/** @type {?} */
const getCartState = createSelector(getActiveCartState, state => loaderValueSelector(state));
/** @type {?} */
const getCartContent = createSelector(getCartState, getCartContentSelector);
/** @type {?} */
const getRefresh = createSelector(getCartState, getRefreshSelector);
/** @type {?} */
const getLoaded = createSelector(getActiveCartState, state => loaderSuccessSelector(state) &&
    !loaderLoadingSelector(state) &&
    !loaderValueSelector(state).refresh);
/** @type {?} */
const getCartMergeComplete = createSelector(getCartState, getCartMergeCompleteSelector);
/** @type {?} */
const getEntriesMap = createSelector(getCartState, getEntriesSelector);
/** @type {?} */
const getEntrySelectorFactory = (productCode) => {
    return createSelector(getEntriesMap, entries => {
        if (entries) {
            return entries[productCode];
        }
    });
};
/** @type {?} */
const getEntries = createSelector(getEntriesMap, entities => {
    return Object.keys(entities).map(code => entities[code]);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ServerConfig {
}
/** @type {?} */
const defaultServerConfig = {
    server: {
        occPrefix: '/rest/v2/'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * @param {?=} target
 * @param {...?} sources
 * @return {?}
 */
function deepMerge(target = {}, ...sources) {
    if (!sources.length) {
        return target;
    }
    /** @type {?} */
    const source = sources.shift() || {};
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                deepMerge(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return deepMerge(target, ...sources);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function serverConfigValidator(config) {
    if (config.server.baseUrl === undefined) {
        return 'Please configure server.baseUrl before using storefront library!';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ConfigValidatorToken = new InjectionToken('ConfigurationValidator');
/**
 * @param {?} configValidator
 * @return {?}
 */
function provideConfigValidator(configValidator) {
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
function validateConfig(config, configValidators) {
    for (const validate of configValidators) {
        /** @type {?} */
        const warning = validate(config);
        if (warning) {
            console.warn(warning);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const Config = new InjectionToken('Configuration');
/** @type {?} */
const ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * @param {?=} config
 * @return {?}
 */
function provideConfig(config = {}) {
    return { provide: ConfigChunk, useValue: config, multi: true };
}
/**
 * @param {?} configFactory
 * @param {?=} deps
 * @return {?}
 */
function provideConfigFactory(configFactory, deps) {
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
function configurationFactory(configChunks, configValidators) {
    /** @type {?} */
    const config = deepMerge({}, ...configChunks);
    if (!config.production) {
        validateConfig(config, configValidators);
    }
    return config;
}
class ConfigModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PriceType = {
    BUY: 'BUY',
    FROM: 'FROM',
};
/** @enum {string} */
const ImageType = {
    PRIMARY: 'PRIMARY',
    GALLERY: 'GALLERY',
};
/** @enum {string} */
const Fields = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields1 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields2 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields3 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields4 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields5 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields6 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const PageType = {
    CONTENT_PAGE: 'ContentPage',
    PRODUCT_PAGE: 'ProductPage',
    CATEGORY_PAGE: 'CategoryPage',
    CATALOG_PAGE: 'CatalogPage',
};
/** @enum {string} */
const Fields7 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields8 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields9 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields10 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields11 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields12 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields13 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields14 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields15 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields16 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const SortEnum = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields17 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields18 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields19 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields20 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields21 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields22 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields23 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields24 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields25 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields26 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields27 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields28 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields29 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields30 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields31 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields32 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields33 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields34 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields35 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields36 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields37 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields38 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields39 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields40 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields41 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields42 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields43 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields44 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields45 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields46 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields47 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields48 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields49 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields50 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields51 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields52 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields53 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields54 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields55 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields56 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields57 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields58 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields59 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields60 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Fields61 = {
    BASIC: 'BASIC',
    DEFAULT: 'DEFAULT',
    FULL: 'FULL',
};
/** @enum {string} */
const Type = {
    All: 'all',
    Product: 'product',
    Order: 'order',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const GO = '[Router] Go';
/** @type {?} */
const GO_BY_URL = '[Router] Go By Url';
/** @type {?} */
const BACK = '[Router] Back';
/** @type {?} */
const FORWARD = '[Router] Forward';
/** @type {?} */
const SAVE_REDIRECT_URL = '[Router] Save Redirect Url';
/** @type {?} */
const CLEAR_REDIRECT_URL = '[Router] Clear Redirect Url';
class Go {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GO;
    }
}
class GoByUrl {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GO_BY_URL;
    }
}
class Back {
    constructor() {
        this.type = BACK;
    }
}
class Forward {
    constructor() {
        this.type = FORWARD;
    }
}
class SaveRedirectUrl {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SAVE_REDIRECT_URL;
    }
}
class ClearRedirectUrl {
    constructor() {
        this.type = CLEAR_REDIRECT_URL;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ROUTING_FEATURE = 'router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState = {
    redirectUrl: '',
    navigationId: 0,
    state: {
        url: '',
        queryParams: {},
        params: {},
        context: {
            id: ''
        },
        cmsRequired: false
    }
};
/**
 * @return {?}
 */
function getReducers() {
    return {
        router: reducer
    };
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_REDIRECT_URL: {
            return Object.assign({}, state, { redirectUrl: action.payload });
        }
        case CLEAR_REDIRECT_URL: {
            return Object.assign({}, state, { redirectUrl: '' });
        }
        case ROUTER_NAVIGATION:
        case ROUTER_ERROR:
        case ROUTER_CANCEL: {
            /** @type {?} */
            const currentUrl = action.payload.routerState
                ? action.payload.routerState.url
                : '';
            /** @type {?} */
            const contextId = action.payload.routerState
                ? action.payload.routerState.context.id
                : '';
            /** @type {?} */
            let redirectUrl;
            if (contextId === 'login' ||
                contextId === 'register' ||
                currentUrl === state.redirectUrl) {
                redirectUrl = state.redirectUrl;
            }
            else {
                redirectUrl = '';
            }
            return {
                redirectUrl: redirectUrl,
                state: action.payload.routerState,
                navigationId: action.payload.event.id
            };
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
const reducerToken = new InjectionToken('RouterReducers');
/** @type {?} */
const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers
};
/** @type {?} */
const getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
/** @type {?} */
const getRouterState = createSelector(getRouterFeatureState, (state) => state[ROUTING_FEATURE]);
/** @type {?} */
const getRedirectUrl = createSelector(getRouterState, state => state.redirectUrl);
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
class CustomSerializer {
    /**
     * @param {?} routerState
     * @return {?}
     */
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        /** @type {?} */
        let state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        /** @type {?} */
        let cmsRequired = false;
        if (state.routeConfig &&
            state.routeConfig.canActivate &&
            state.routeConfig.canActivate.find(x => x && x.guardName === 'CmsPageGuards')) {
            cmsRequired = true;
        }
        /** @type {?} */
        let context;
        if (params['productCode']) {
            context = { id: params['productCode'], type: PageType.PRODUCT_PAGE };
        }
        else if (params['categoryCode']) {
            context = { id: params['categoryCode'], type: PageType.CATEGORY_PAGE };
        }
        else if (params['brandCode']) {
            context = { id: params['brandCode'], type: PageType.CATEGORY_PAGE };
        }
        else if (params['query']) {
            context = { id: 'search', type: PageType.CONTENT_PAGE };
        }
        else if (state.data.pageLabel !== undefined) {
            context = { id: state.data.pageLabel, type: PageType.CONTENT_PAGE };
        }
        else if (state.url.length > 0) {
            context = {
                id: state.url[state.url.length - 1].path,
                type: PageType.CONTENT_PAGE
            };
        }
        else {
            context = {
                id: 'homepage',
                type: PageType.CONTENT_PAGE
            };
        }
        return { url, queryParams, params, context, cmsRequired };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouterEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} location
     */
    constructor(actions$, router, location) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(ofType(GO), map((action) => action.payload), tap(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, Object.assign({ queryParams }, extras));
        }));
        this.navigateBuUrl$ = this.actions$.pipe(ofType(GO_BY_URL), map((action) => action.payload), tap(url => {
            this.router.navigateByUrl(url);
        }));
        this.navigateBack$ = this.actions$.pipe(ofType(BACK), tap(() => this.location.back()));
        this.navigateForward$ = this.actions$.pipe(ofType(FORWARD), tap(() => this.location.forward()));
    }
}
RouterEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouterEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: Location }
];
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Observable)
], RouterEffects.prototype, "navigate$", void 0);
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Observable)
], RouterEffects.prototype, "navigateBuUrl$", void 0);
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Observable)
], RouterEffects.prototype, "navigateBack$", void 0);
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Observable)
], RouterEffects.prototype, "navigateForward$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects = [RouterEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ConfigurableRoutesConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ENDPOINT_ROUTES_CONFIG = 'routes-config';
class RoutesConfigLoader {
    /**
     * @param {?} http
     * @param {?} serverConfig
     * @param {?} configurableRoutesConfig
     */
    constructor(http, serverConfig, configurableRoutesConfig) {
        this.http = http;
        this.serverConfig = serverConfig;
        this.configurableRoutesConfig = configurableRoutesConfig;
    }
    /**
     * @return {?}
     */
    get routesConfig() {
        return this._routesConfig;
    }
    /**
     * @return {?}
     */
    get endpoint() {
        return ((this.serverConfig.server.baseUrl || '') + '/' + ENDPOINT_ROUTES_CONFIG);
    }
    /**
     * @return {?}
     */
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const shouldFetch = this.configurableRoutesConfig.routesConfig.fetch;
            /** @type {?} */
            const fetchedRoutesConfig = shouldFetch
                ? yield this.fetch(this.endpoint)
                : null;
            this._routesConfig = this.extendStaticWith(fetchedRoutesConfig);
        });
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    fetch(url) {
        return this.http
            .get(url)
            .pipe(retry(2))
            .toPromise()
            .catch(() => {
            throw new Error(`Could not get routes configuration from url ${url}!`);
        });
    }
    /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    extendStaticWith(routesConfig) {
        /** @type {?} */
        const mergedRoutesConfig = deepMerge({}, this.configurableRoutesConfig.routesConfig, routesConfig);
        return this.extendLanguagesTranslationsWithDefault(mergedRoutesConfig);
    }
    /**
     * @private
     * @param {?} routesConfig
     * @return {?}
     */
    extendLanguagesTranslationsWithDefault(routesConfig) {
        /** @type {?} */
        const defaultTranslations = routesConfig.translations.default;
        Object.keys(routesConfig.translations).forEach(languageCode => {
            /** @type {?} */
            const languageTranslations = routesConfig.translations[languageCode];
            routesConfig.translations[languageCode] = deepMerge({}, defaultTranslations, languageTranslations);
        });
        return routesConfig;
    }
}
RoutesConfigLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RoutesConfigLoader.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerConfig },
    { type: ConfigurableRoutesConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigurableRoutesService {
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
        return __awaiter(this, void 0, void 0, function* () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UrlParsingService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getPrimarySegments(url) {
        /** @type {?} */
        const urlTree = this.router.parseUrl(url);
        return this._getPrimarySegmentsFromUrlTree(urlTree.root);
    }
    /**
     * @private
     * @param {?} tree
     * @return {?}
     */
    _getPrimarySegmentsFromUrlTree(tree) {
        /** @type {?} */
        const segments = tree.segments.map(s => s.path);
        /** @type {?} */
        const childrenSegments = tree.children[PRIMARY_OUTLET]
            ? this._getPrimarySegmentsFromUrlTree(tree.children[PRIMARY_OUTLET])
            : [];
        return segments.concat(childrenSegments);
    }
}
UrlParsingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UrlParsingService.ctorParameters = () => [
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const isParam = (segment) => segment.startsWith(':');
/** @type {?} */
const getParamName = (segment) => segment.slice(1);
/** @type {?} */
const removeLeadingSlash = (path) => path.startsWith('/') ? path.slice(1) : path;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouteRecognizerService {
    /**
     * @param {?} routesConfigLoader
     * @param {?} urlParser
     */
    constructor(routesConfigLoader, urlParser) {
        this.routesConfigLoader = routesConfigLoader;
        this.urlParser = urlParser;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    recognizeByDefaultUrl(url) {
        url = removeLeadingSlash(url); // url will be compared with paths translations which do not have leading slash
        // url will be compared with paths translations which do not have leading slash
        /** @type {?} */
        const routesTranslations = this.defaultRoutesTranslations;
        /** @type {?} */
        const urlSegments = this.urlParser.getPrimarySegments(url);
        /** @type {?} */
        const recognizedNestedRoutes = this.getNestedRoutesRecursive(urlSegments, routesTranslations, []);
        return recognizedNestedRoutes;
    }
    /**
     * @private
     * @param {?} remainingUrlSegments
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    getNestedRoutesRecursive(remainingUrlSegments, routesTranslations, accResult) {
        if (!routesTranslations) {
            return remainingUrlSegments.length ? null : accResult;
        }
        /** @type {?} */
        const routeNames = Object.keys(routesTranslations);
        /** @type {?} */
        const routeNamesLength = routeNames.length;
        for (let i = 0; i < routeNamesLength; i++) {
            /** @type {?} */
            const routeName = routeNames[i];
            /** @type {?} */
            const routeTranslation = routesTranslations && routesTranslations[routeName];
            /** @type {?} */
            const paths = routeTranslation.paths || [];
            /** @type {?} */
            const pathsLength = paths.length;
            for (let j = 0; j < pathsLength; j++) {
                /** @type {?} */
                const path = paths[j];
                /** @type {?} */
                const pathSegments = this.urlParser.getPrimarySegments(path);
                /** @type {?} */
                const params = this.extractParamsIfPathMatchesUrlPrefix(remainingUrlSegments, pathSegments);
                // if some path is matching, try to recognize remaining segments
                if (params) {
                    /** @type {?} */
                    const result = this.getNestedRoutesRecursive(remainingUrlSegments.slice(pathSegments.length), routeTranslation.children, accResult.concat({ name: routeName, params }));
                    // if remaining segments were successfuly matched, return result. otherwise continue loop for other paths and routes
                    if (result) {
                        return result;
                    }
                }
            }
        }
        return remainingUrlSegments.length ? null : accResult;
    }
    /**
     * @private
     * @param {?} urlSegments
     * @param {?} pathSegments
     * @return {?}
     */
    extractParamsIfPathMatchesUrlPrefix(urlSegments, pathSegments) {
        /** @type {?} */
        const params = {};
        /** @type {?} */
        const pathSegmentsLength = pathSegments.length;
        /** @type {?} */
        const urlSegmentsLength = urlSegments.length;
        if (urlSegmentsLength < pathSegmentsLength) {
            return null;
        }
        for (let i = 0; i < pathSegmentsLength; i++) {
            /** @type {?} */
            const pathSegment = pathSegments[i];
            /** @type {?} */
            const urlSegment = urlSegments[i];
            if (isParam(pathSegment)) {
                /** @type {?} */
                const paramName = getParamName(pathSegment);
                params[paramName] = urlSegment;
            }
            else {
                if (pathSegment !== urlSegment) {
                    return null;
                }
            }
        }
        return params;
    }
    /**
     * @private
     * @return {?}
     */
    get defaultRoutesTranslations() {
        return (/** @type {?} */ (this.routesConfigLoader.routesConfig.translations
            .default));
    }
}
RouteRecognizerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouteRecognizerService.ctorParameters = () => [
    { type: RoutesConfigLoader },
    { type: UrlParsingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UrlTranslationService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WindowRef {
    /**
     * @param {?} document
     */
    constructor(document) {
        // it's a workaround to have document property properly typed
        // see: https://github.com/angular/angular/issues/15640
        this.document = document;
    }
    /**
     * @return {?}
     */
    get nativeWindow() {
        return typeof window !== 'undefined' ? window : undefined;
    }
    /**
     * @return {?}
     */
    get sessionStorage() {
        return this.nativeWindow ? this.nativeWindow.sessionStorage : undefined;
    }
    /**
     * @return {?}
     */
    get localStorage() {
        return this.nativeWindow ? this.nativeWindow.localStorage : undefined;
    }
}
WindowRef.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ WindowRef.ngInjectableDef = defineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(inject(DOCUMENT)); }, token: WindowRef, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RoutingService {
    /**
     * @param {?} store
     * @param {?} winRef
     * @param {?} urlTranslator
     */
    constructor(store, winRef, urlTranslator) {
        this.store = store;
        this.winRef = winRef;
        this.urlTranslator = urlTranslator;
    }
    /**
     * Get the current router state
     * @return {?}
     */
    getRouterState() {
        return this.store.pipe(select(getRouterState));
    }
    /**
     * Navigation with a new state into history
     * @param {?} pathOrTranslateUrlOptions
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    go(pathOrTranslateUrlOptions, query, extras) {
        /** @type {?} */
        let path;
        if (Array.isArray(pathOrTranslateUrlOptions)) {
            path = pathOrTranslateUrlOptions;
        }
        else {
            /** @type {?} */
            const translateUrlOptions = pathOrTranslateUrlOptions;
            /** @type {?} */
            const translatedPath = this.urlTranslator.translate(translateUrlOptions);
            path = Array.isArray(translatedPath) ? translatedPath : [translatedPath];
        }
        return this.navigate(path, query, extras);
    }
    /**
     * Navigation using URL
     * @param {?} url
     * @return {?}
     */
    goByUrl(url) {
        this.store.dispatch(new GoByUrl(url));
    }
    /**
     * Navigating back
     * @return {?}
     */
    back() {
        /** @type {?} */
        const isLastPageInApp = this.winRef.document.referrer.indexOf(this.winRef.nativeWindow.location.origin) > -1;
        if (isLastPageInApp) {
            this.store.dispatch(new Back());
            return;
        }
        this.go(['/']);
        return;
    }
    /**
     * Navigating forward
     * @return {?}
     */
    forward() {
        this.store.dispatch(new Forward());
    }
    /**
     * Get the redirect url from store
     * @return {?}
     */
    getRedirectUrl() {
        return this.store.pipe(select(getRedirectUrl));
    }
    /**
     * Remove the redirect url from store
     * @return {?}
     */
    clearRedirectUrl() {
        this.store.dispatch(new ClearRedirectUrl());
    }
    /**
     * Put redirct url into store
     * @param {?} url
     * @return {?}
     */
    saveRedirectUrl(url) {
        this.store.dispatch(new SaveRedirectUrl(url));
    }
    /**
     * Navigation with a new state into history
     * @private
     * @param {?} path
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    navigate(path, query, extras) {
        this.store.dispatch(new Go({
            path,
            query,
            extras
        }));
    }
}
RoutingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RoutingService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: UrlTranslationService }
];
/** @nocollapse */ RoutingService.ngInjectableDef = defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(inject(Store), inject(WindowRef), inject(UrlTranslationService)); }, token: RoutingService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultStorefrontRoutesTranslations = {
    default: {
        home: { paths: ['', 'cx-preview'] },
        cart: { paths: ['cart'] },
        search: { paths: ['search/:query'] },
        login: { paths: ['login'] },
        register: { paths: ['register'] },
        resetPassword: { paths: ['reset-new-password/:token'] },
        forgotPassword: { paths: ['reset-password'] },
        checkout: { paths: ['checkout'] },
        orderConfirmation: { paths: ['order-confirmation'] },
        product: {
            paths: ['product/:productCode'],
            paramsMapping: { productCode: 'code' }
        },
        category: {
            paths: ['category/:categoryCode'],
            paramsMapping: { categoryCode: 'code' }
        },
        brand: { paths: ['Brands/:brandName/c/:brandCode'] },
        storeFinder: {
            paths: ['store-finder'],
            children: {
                searchResults: { paths: ['find-stores'] },
                allStores: { paths: ['view-all-stores'] },
                listStores: {
                    paths: ['country/:country/region/:region', 'country/:country']
                },
                storeDescription: {
                    paths: ['country/:country/region/:region/:store']
                }
            }
        },
        termsAndConditions: { paths: ['terms-and-conditions'] },
        contact: { paths: ['contact'] },
        help: { paths: ['faq'] },
        sale: { paths: ['sale'] },
        orders: { paths: ['my-account/orders'] },
        orderDetails: {
            paths: ['my-account/orders/:orderCode'],
            paramsMapping: { orderCode: 'code' }
        },
        addressBook: { paths: ['my-account/address-book'] },
        paymentManagement: { paths: ['my-account/payment-details'] },
        pageNotFound: { paths: ['**'] }
    },
    en: (/** @type {?} */ ({}))
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultConfigurableRoutesConfig = {
    routesConfig: {
        translations: defaultStorefrontRoutesTranslations,
        fetch: false
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} service
 * @return {?}
 */
function initConfigurableRoutes(service) {
    /** @type {?} */
    const result = () => service.init();
    return result;
}
class ConfigurableRoutesModule {
}
ConfigurableRoutesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig(defaultConfigurableRoutesConfig)
                ],
                declarations: [],
                exports: [],
                providers: [
                    ConfigurableRoutesService,
                    RoutesConfigLoader,
                    UrlTranslationService,
                    RouteRecognizerService,
                    UrlParsingService,
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initConfigurableRoutes,
                        deps: [ConfigurableRoutesService],
                        multi: true
                    },
                    { provide: ConfigurableRoutesConfig, useExisting: Config }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RoutingModule {
}
RoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigurableRoutesModule,
                    RouterModule.forRoot([], {
                        scrollPositionRestoration: 'enabled',
                        anchorScrolling: 'enabled'
                    }),
                    StoreModule.forFeature(ROUTING_FEATURE, reducerToken),
                    EffectsModule.forFeature(effects),
                    StoreRouterConnectingModule.forRoot({
                        stateKey: ROUTING_FEATURE // name of reducer key
                    })
                ],
                providers: [
                    RoutingService,
                    reducerProvider,
                    {
                        provide: RouterStateSerializer,
                        useClass: CustomSerializer
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class OccConfig extends ServerConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AuthConfig extends OccConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultAuthConfig = {
    authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AUTH_FEATURE = 'auth';
/** @type {?} */
const CLIENT_TOKEN_DATA = '[Auth] Client Token Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_CLIENT_TOKEN = '[Token] Create Client Token';
/** @type {?} */
const LOAD_CLIENT_TOKEN_FAIL = '[Token] Create Client Token Fail';
/** @type {?} */
const LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Create Client Token Success';
class LoadClientToken extends LoaderLoadAction {
    constructor() {
        super(CLIENT_TOKEN_DATA);
        this.type = LOAD_CLIENT_TOKEN;
    }
}
class LoadClientTokenFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CLIENT_TOKEN_DATA, payload);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_FAIL;
    }
}
class LoadClientTokenSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CLIENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOGIN = '[Auth] Login';
/** @type {?} */
const LOGOUT = '[Auth] Logout';
class Login {
    constructor() {
        this.type = LOGIN;
    }
}
class Logout {
    constructor() {
        this.type = LOGOUT;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_TOKEN = '[Auth] Load User Token';
/** @type {?} */
const LOAD_USER_TOKEN_FAIL = '[Auth] Load User Token Fail';
/** @type {?} */
const LOAD_USER_TOKEN_SUCCESS = '[Auth] Load User Token Success';
/** @type {?} */
const REFRESH_USER_TOKEN = '[Auth] Refresh User Token';
/** @type {?} */
const REFRESH_USER_TOKEN_FAIL = '[Auth] Refresh User Token Fail';
/** @type {?} */
const REFRESH_USER_TOKEN_SUCCESS = '[Auth] Refresh User Token Success';
class LoadUserToken {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN;
    }
}
class LoadUserTokenFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_FAIL;
    }
}
class LoadUserTokenSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_SUCCESS;
    }
}
class RefreshUserToken {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN;
    }
}
class RefreshUserTokenSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_SUCCESS;
    }
}
class RefreshUserTokenFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_FAIL;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getAuthState = createFeatureSelector(AUTH_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getClientTokenState = createSelector(getAuthState, (state) => state.clientToken);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getUserTokenSelector = (state) => state.token;
/** @type {?} */
const getUserTokenState = createSelector(getAuthState, (state) => state.userToken);
/** @type {?} */
const getUserToken = createSelector(getUserTokenState, getUserTokenSelector);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Loads a new user token
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    authorize(userId, password) {
        this.store.dispatch(new LoadUserToken({
            userId: userId,
            password: password
        }));
    }
    /**
     * Returns the user's token
     * @return {?}
     */
    getUserToken() {
        return this.store.pipe(select(getUserToken));
    }
    /**
     * Refreshes the user token
     * @param {?} token a user token to refresh
     * @return {?}
     */
    refreshUserToken(token) {
        this.store.dispatch(new RefreshUserToken({
            userId: token.userId,
            refreshToken: token.refresh_token
        }));
    }
    /**
     * Store the provided token
     * @param {?} token
     * @return {?}
     */
    authorizeWithToken(token) {
        this.store.dispatch(new LoadUserTokenSuccess(token));
    }
    /**
     * Login
     * @return {?}
     */
    login() {
        this.store.dispatch(new Login());
    }
    /**
     * Logout
     * @return {?}
     */
    logout() {
        this.store.dispatch(new Logout());
    }
    /**
     * Returns a client token.  The client token from the store is returned if there is one.
     * Otherwise, an new token is fetched from the backend and saved in the store.
     * @return {?}
     */
    getClientToken() {
        return this.store.pipe(select(getClientTokenState), filter((state) => {
            if (this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    this.store.dispatch(new LoadClientToken());
                }
                return false;
            }
        }), map((state) => state.value));
    }
    /**
     * Fetches a clientToken from the backend ans saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     * @return {?}
     */
    refreshClientToken() {
        this.store.dispatch(new LoadClientToken());
        return this.store.pipe(select(getClientTokenState), filter((state) => this.isClientTokenLoaded(state)), map((state) => state.value));
    }
    /**
     * @protected
     * @param {?} state
     * @return {?}
     */
    isClientTokenLoaded(state) {
        return (state.success || state.error) && !state.loading;
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(Store)); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClientErrorHandlingService {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    handleExpiredClientToken(request, next) {
        return this.authService.refreshClientToken().pipe(take(1), switchMap((token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        }));
    }
    /**
     * @private
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    createNewRequestWithNewToken(request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: `${token.token_type} ${token.access_token}`
            }
        });
        return request;
    }
}
ClientErrorHandlingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientErrorHandlingService.ctorParameters = () => [
    { type: AuthService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserErrorHandlingService {
    /**
     * @param {?} authService
     * @param {?} routingService
     */
    constructor(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    handleExpiredUserToken(request, next) {
        return this.handleExpiredToken().pipe(switchMap((token) => {
            return next.handle(this.createNewRequestWithNewToken(request, token));
        }));
    }
    /**
     * @return {?}
     */
    handleExpiredRefreshToken() {
        // Logout user
        this.authService.logout();
    }
    /**
     * @private
     * @return {?}
     */
    handleExpiredToken() {
        /** @type {?} */
        let oldToken;
        return this.authService.getUserToken().pipe(tap((token) => {
            if (token.access_token && token.refresh_token && !oldToken) {
                this.authService.refreshUserToken(token);
            }
            else if (!token.access_token && !token.refresh_token) {
                this.routingService.go({ route: ['login'] });
            }
            oldToken = oldToken || token;
        }), filter((token) => oldToken.access_token !== token.access_token), take(1));
    }
    /**
     * @private
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    createNewRequestWithNewToken(request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: `${token.token_type} ${token.access_token}`
            }
        });
        return request;
    }
}
UserErrorHandlingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserErrorHandlingService.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USE_CLIENT_TOKEN = 'cx-use-client-token';
class InterceptorUtil {
    /**
     * @template T
     * @param {?} headerName
     * @param {?} interceptorParam
     * @param {?=} headers
     * @return {?}
     */
    static createHeader(headerName, interceptorParam, headers) {
        if (headers) {
            return headers.append(headerName, JSON.stringify(interceptorParam));
        }
        headers = new HttpHeaders().set(headerName, JSON.stringify(interceptorParam));
        return headers;
    }
    /**
     * @param {?} headerName
     * @param {?} request
     * @return {?}
     */
    static removeHeader(headerName, request) {
        /** @type {?} */
        const updatedHeaders = request.headers.delete(headerName);
        return request.clone({ headers: updatedHeaders });
    }
    /**
     * @template T
     * @param {?} headerName
     * @param {?} headers
     * @return {?}
     */
    static getInterceptorParam(headerName, headers) {
        /** @type {?} */
        const rawValue = headers.get(headerName);
        if (rawValue) {
            return JSON.parse(rawValue);
        }
        return undefined;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
class AuthErrorInterceptor {
    /**
     * @param {?} userErrorHandlingService
     * @param {?} clientErrorHandlingService
     * @param {?} authService
     */
    constructor(userErrorHandlingService, clientErrorHandlingService, authService) {
        this.userErrorHandlingService = userErrorHandlingService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        const isClientTokenRequest = this.isClientTokenRequest(request);
        if (isClientTokenRequest) {
            request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
        }
        return next.handle(request).pipe(catchError((errResponse) => {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 401: // Unauthorized
                        if (isClientTokenRequest) {
                            if (this.isExpiredToken(errResponse)) {
                                return this.clientErrorHandlingService.handleExpiredClientToken(request, next);
                            }
                            // user token request
                        }
                        else {
                            if (this.isExpiredToken(errResponse)) {
                                return this.userErrorHandlingService.handleExpiredUserToken(request, next);
                            }
                            else if (
                            // Refresh expired token
                            // Check that the OAUTH endpoint was called and the error is for refresh token is expired
                            errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                                errResponse.error.error === 'invalid_token') {
                                this.userErrorHandlingService.handleExpiredRefreshToken();
                                return of();
                            }
                        }
                        break;
                    case 400: // Bad Request
                        if (errResponse.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'refresh_token') {
                                // refresh token fail, force user logout
                                this.authService.logout();
                            }
                        }
                        break;
                }
            }
            return throwError(errResponse);
        }));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    isClientTokenRequest(request) {
        /** @type {?} */
        const isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    }
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    isExpiredToken(resp) {
        if (resp.error &&
            resp.error.errors &&
            resp.error.errors instanceof Array &&
            resp.error.errors[0]) {
            return resp.error.errors[0].type === 'InvalidTokenError';
        }
        return false;
    }
}
AuthErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthErrorInterceptor.ctorParameters = () => [
    { type: UserErrorHandlingService },
    { type: ClientErrorHandlingService },
    { type: AuthService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClientTokenInterceptor {
    /**
     * @param {?} config
     * @param {?} authService
     */
    constructor(config, authService) {
        this.config = config;
        this.authService = authService;
        this.baseReqString = (this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return this.getClientToken(request).pipe(take(1), switchMap((token) => {
            if (token && request.url.indexOf(this.baseReqString) > -1) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type} ${token.access_token}`
                    }
                });
            }
            return next.handle(request);
        }));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    getClientToken(request) {
        if (InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers)) {
            return this.authService.getClientToken();
        }
        return of(null);
    }
}
ClientTokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientTokenInterceptor.ctorParameters = () => [
    { type: AuthConfig },
    { type: AuthService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserTokenInterceptor {
    /**
     * @param {?} config
     * @param {?} authService
     */
    constructor(config, authService) {
        this.config = config;
        this.authService = authService;
        this.baseReqString = (this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite;
        this.authService.getUserToken().subscribe((token) => {
            this.userToken = token;
        });
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (this.userToken &&
            request.url.indexOf(this.baseReqString) > -1 &&
            !request.headers.get('Authorization')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${this.userToken.token_type} ${this.userToken.access_token}`
                }
            });
        }
        return next.handle(request);
    }
}
UserTokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserTokenInterceptor.ctorParameters = () => [
    { type: AuthConfig },
    { type: AuthService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ClientTokenInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: UserTokenInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthErrorInterceptor,
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OAUTH_ENDPOINT$1 = '/authorizationserver/oauth/token';
class ClientAuthenticationTokenService {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    /**
     * @return {?}
     */
    loadClientAuthenticationToken() {
        /** @type {?} */
        const url = this.getOAuthEndpoint();
        /** @type {?} */
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('grant_type', 'client_credentials');
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @private
     * @return {?}
     */
    getOAuthEndpoint() {
        return (this.config.server.baseUrl || '') + OAUTH_ENDPOINT$1;
    }
}
ClientAuthenticationTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientAuthenticationTokenService.ctorParameters = () => [
    { type: AuthConfig },
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OAUTH_ENDPOINT$2 = '/authorizationserver/oauth/token';
class UserAuthenticationTokenService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} userId
     * @param {?} password
     * @return {?}
     */
    loadToken(userId, password) {
        /** @type {?} */
        const url = this.getOAuthEndpoint();
        /** @type {?} */
        const params = new HttpParams()
            .set('client_id', this.config.authentication.client_id)
            .set('client_secret', this.config.authentication.client_secret)
            .set('grant_type', 'password') // authorization_code, client_credentials, password
            .set('username', userId)
            .set('password', password);
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} refreshToken
     * @return {?}
     */
    refreshToken(refreshToken) {
        /** @type {?} */
        const url = this.getOAuthEndpoint();
        /** @type {?} */
        const params = new HttpParams()
            .set('client_id', encodeURIComponent(this.config.authentication.client_id))
            .set('client_secret', encodeURIComponent(this.config.authentication.client_secret))
            .set('refresh_token', encodeURI(refreshToken))
            .set('grant_type', 'refresh_token');
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, params, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @protected
     * @return {?}
     */
    getOAuthEndpoint() {
        return (this.config.server.baseUrl || '') + OAUTH_ENDPOINT$2;
    }
}
UserAuthenticationTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserAuthenticationTokenService.ctorParameters = () => [
    { type: HttpClient },
    { type: AuthConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    ClientAuthenticationTokenService,
    ClientErrorHandlingService,
    UserAuthenticationTokenService,
    UserErrorHandlingService
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialLoaderState = {
    loading: false,
    error: false,
    success: false,
    value: undefined
};
/**
 * Higher order reducer that adds generic loading flag to chunk of the state
 *
 * Utilizes "loader" meta field of actions to set specific flags for specific
 * action (LOAD, SUCCESS, FAIL, RESET)
 * @template T
 * @param {?} loadActionType
 * @param {?=} reducer
 * @return {?}
 */
function loaderReducer(loadActionType, reducer) {
    return (state = initialLoaderState, action) => {
        if (action.meta &&
            action.meta.loader &&
            action.meta.entityType === loadActionType) {
            /** @type {?} */
            const entity = action.meta.loader;
            if (entity.load) {
                return Object.assign({}, state, { loading: true, value: reducer ? reducer(state.value, action) : state.value });
            }
            else if (entity.error) {
                return Object.assign({}, state, { loading: false, error: true, success: false, value: reducer ? reducer(state.value, action) : undefined });
            }
            else if (entity.success) {
                return Object.assign({}, state, { value: reducer ? reducer(state.value, action) : action.payload, loading: false, error: false, success: true });
            }
            else {
                // reset state action
                return Object.assign({}, initialLoaderState, { value: reducer
                        ? reducer(initialLoaderState.value, action)
                        : initialLoaderState.value });
            }
        }
        if (reducer) {
            /** @type {?} */
            const newValue = reducer(state.value, action);
            if (newValue !== state.value) {
                return Object.assign({}, state, { value: newValue });
            }
        }
        return state;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$1 = {
    token: (/** @type {?} */ ({}))
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$1(state = initialState$1, action) {
    switch (action.type) {
        case LOAD_USER_TOKEN:
        case REFRESH_USER_TOKEN: {
            return Object.assign({}, state);
        }
        case LOAD_USER_TOKEN_SUCCESS:
        case REFRESH_USER_TOKEN_SUCCESS: {
            /** @type {?} */
            const token = action.payload;
            return Object.assign({}, state, { token });
        }
        case LOAD_USER_TOKEN_FAIL:
        case REFRESH_USER_TOKEN_FAIL: {
            return Object.assign({}, state);
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$1() {
    return {
        userToken: reducer$1,
        clientToken: loaderReducer(CLIENT_TOKEN_DATA)
    };
}
/** @type {?} */
const reducerToken$1 = new InjectionToken('AuthReducers');
/** @type {?} */
const reducerProvider$1 = {
    provide: reducerToken$1,
    useFactory: getReducers$1
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearAuthState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = Object.assign({}, state, { userToken: undefined });
        }
        return reducer(state, action);
    };
}
/** @type {?} */
const metaReducers = [clearAuthState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserTokenEffects {
    /**
     * @param {?} actions$
     * @param {?} userTokenService
     */
    constructor(actions$, userTokenService) {
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN), map((action) => action.payload), mergeMap(({ userId, password }) => {
            return this.userTokenService.loadToken(userId, password).pipe(map((token) => {
                /** @type {?} */
                const date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new LoadUserTokenSuccess(token);
            }), catchError(error => of(new LoadUserTokenFail(error))));
        }));
        this.refreshUserToken$ = this.actions$.pipe(ofType(REFRESH_USER_TOKEN), map((action) => action.payload), switchMap(({ userId, refreshToken }) => {
            return this.userTokenService.refreshToken(refreshToken).pipe(map((token) => {
                token.userId = userId;
                /** @type {?} */
                const date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.userId = userId;
                token.expiration_time = date;
                return new RefreshUserTokenSuccess(token);
            }, catchError(error => of(new RefreshUserTokenFail(error)))));
        }));
    }
}
UserTokenEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserTokenEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAuthenticationTokenService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserTokenEffects.prototype, "loadUserToken$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserTokenEffects.prototype, "refreshUserToken$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClientTokenEffect {
    /**
     * @param {?} actions$
     * @param {?} clientAuthenticationTokenService
     */
    constructor(actions$, clientAuthenticationTokenService) {
        this.actions$ = actions$;
        this.clientAuthenticationTokenService = clientAuthenticationTokenService;
        this.loadClientToken$ = this.actions$.pipe(ofType(LOAD_CLIENT_TOKEN), exhaustMap(() => {
            return this.clientAuthenticationTokenService
                .loadClientAuthenticationToken()
                .pipe(map((token) => {
                return new LoadClientTokenSuccess(token);
            }), catchError(error => of(new LoadClientTokenFail(error))));
        }));
    }
}
ClientTokenEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientTokenEffect.ctorParameters = () => [
    { type: Actions },
    { type: ClientAuthenticationTokenService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ClientTokenEffect.prototype, "loadClientToken$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$1 = [UserTokenEffects, ClientTokenEffect];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const StorageSyncType = {
    NO_STORAGE: 'NO_STORAGE',
    LOCAL_STORAGE: 'LOCAL_STORAGE',
    SESSION_STORAGE: 'SESSION_STORAGE',
};
/**
 * @abstract
 */
class StateConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @param {?} winRef
 * @return {?}
 */
function storageConfig(config, winRef) {
    /** @type {?} */
    let storage;
    switch (config.state.storageSync.type) {
        case StorageSyncType.LOCAL_STORAGE: {
            storage = winRef.localStorage;
            break;
        }
        case StorageSyncType.SESSION_STORAGE: {
            storage = winRef.sessionStorage;
            break;
        }
    }
    return {
        keys: config.state.storageSync.keys,
        rehydrate: true,
        storage: storage ? storage : winRef.sessionStorage
    };
}
/**
 * @param {?} winRef
 * @param {?=} config
 * @return {?}
 */
function getStorageSyncReducer(winRef, config) {
    if (!winRef.nativeWindow ||
        !config ||
        !config.state ||
        !config.state.storageSync ||
        config.state.storageSync.type === StorageSyncType.NO_STORAGE ||
        !config.state.storageSync.keys) {
        return undefined;
    }
    /** @type {?} */
    const storage = storageConfig(config, winRef);
    return function (reducer) {
        return localStorageSync(storage)(reducer);
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const META_REDUCER = new InjectionToken('metaReducer');
/**
 * @param {?} metaReducers
 * @return {?}
 */
function metaReducersFactory(metaReducers) {
    return (metaReducers || []).filter(Boolean);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?} keys
 * @return {?}
 */
function getStateSlice(state, keys) {
    return Object.keys(keys).reduce((acc, key) => {
        /** @type {?} */
        const keyValue = keys[key];
        if (state.hasOwnProperty(key)) {
            if (typeof keyValue === 'object') {
                acc[key] = getStateSlice(state[key], keyValue);
            }
            else if (keyValue) {
                acc[key] = state[key];
            }
        }
        return acc;
    }, {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const INIT_ACTION = '@ngrx/store/init';
/** @type {?} */
const CX_KEY = makeStateKey('cx-state');
/**
 * @param {?} platformId
 * @param {?=} transferState
 * @param {?=} config
 * @return {?}
 */
function getTransferStateReducer(platformId, transferState, config) {
    if (transferState &&
        config &&
        config.state &&
        config.state.ssrTransfer &&
        config.state.ssrTransfer.keys) {
        if (isPlatformBrowser(platformId)) {
            return getBrowserTransferStateReducer(transferState, config.state.ssrTransfer.keys);
        }
        else if (isPlatformServer(platformId)) {
            return getServerTransferStateReducer(transferState, config.state.ssrTransfer.keys);
        }
    }
    return undefined;
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
function getServerTransferStateReducer(transferState, keys) {
    return function (reducer) {
        return function (state, action) {
            /** @type {?} */
            const newState = reducer(state, action);
            if (newState) {
                transferState.set(CX_KEY, getStateSlice(newState, keys));
            }
            return newState;
        };
    };
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
function getBrowserTransferStateReducer(transferState, keys) {
    return function (reducer) {
        return function (state, action) {
            if (action.type === INIT_ACTION && transferState.hasKey(CX_KEY)) {
                /** @type {?} */
                const transferedState = getStateSlice(transferState.get(CX_KEY, {}), keys);
                state = deepMerge({}, state, transferedState);
            }
            return reducer(state, action);
        };
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const stateMetaReducers = [
    {
        provide: META_REDUCER,
        useFactory: getStorageSyncReducer,
        deps: [WindowRef, [new Optional(), Config]],
        multi: true
    },
    {
        provide: META_REDUCER,
        useFactory: getTransferStateReducer,
        deps: [
            PLATFORM_ID,
            [new Optional(), TransferState],
            [new Optional(), Config]
        ],
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultStateConfig = {
    state: {
        storageSync: {
            type: StorageSyncType.SESSION_STORAGE
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = metaReducersFactory;
class StateModule {
}
StateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forRoot({}),
                    EffectsModule.forRoot([]),
                    ConfigModule.withConfig(defaultStateConfig)
                ],
                providers: [
                    ...stateMetaReducers,
                    {
                        provide: META_REDUCERS,
                        useFactory: ɵ0,
                        deps: [[new Optional(), META_REDUCER]]
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function authStoreConfigFactory() {
    // if we want to reuse AUTH_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: {
            storageSync: {
                keys: [{ [AUTH_FEATURE]: ['userToken', 'clientToken'] }]
            }
        }
    };
    return config;
}
class AuthStoreModule {
}
AuthStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StateModule,
                    StoreModule.forFeature(AUTH_FEATURE, reducerToken$1, { metaReducers }),
                    EffectsModule.forFeature(effects$1),
                    ConfigModule.withConfigFactory(authStoreConfigFactory)
                ],
                providers: [reducerProvider$1]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AuthModule,
            providers: [...interceptors]
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    RoutingModule,
                    AuthStoreModule,
                    ConfigModule.withConfig(defaultAuthConfig)
                ],
                providers: [...services, { provide: AuthConfig, useExisting: Config }]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuard {
    /**
     * @param {?} routingService
     * @param {?} authService
     */
    constructor(routingService, authService) {
        this.routingService = routingService;
        this.authService = authService;
    }
    /**
     * @param {?} _route
     * @param {?} state
     * @return {?}
     */
    canActivate(_route, state) {
        return this.authService.getUserToken().pipe(map((token) => {
            if (!token.access_token) {
                this.routingService.go({ route: ['login'] });
                this.routingService.saveRedirectUrl(state.url);
            }
            return !!token.access_token;
        }));
    }
}
AuthGuard.GUARD_NAME = 'AuthGuard';
AuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(inject(RoutingService), inject(AuthService)); }, token: AuthGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotAuthGuard {
    /**
     * @param {?} routingService
     * @param {?} authService
     */
    constructor(routingService, authService) {
        this.routingService = routingService;
        this.authService = authService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.authService.getUserToken().pipe(map(token => {
            if (token.access_token) {
                this.routingService.go({ route: ['home'] });
            }
            return !token.access_token;
        }));
    }
}
NotAuthGuard.GUARD_NAME = 'NotAuthGuard';
NotAuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NotAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService }
];
/** @nocollapse */ NotAuthGuard.ngInjectableDef = defineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(inject(RoutingService), inject(AuthService)); }, token: NotAuthGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANONYMOUS_USERID = 'anonymous';
class CartDataService {
    constructor() {
        this._userId = ANONYMOUS_USERID;
        this._getDetails = false;
    }
    /**
     * @return {?}
     */
    get hasCart() {
        return !!this._cart;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set userId(val) {
        this._userId = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set cart(val) {
        this._cart = val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set getDetails(val) {
        this._getDetails = val;
    }
    /**
     * @return {?}
     */
    get userId() {
        return this._userId;
    }
    /**
     * @return {?}
     */
    get cart() {
        return this._cart;
    }
    /**
     * @return {?}
     */
    get getDetails() {
        return this._getDetails;
    }
    /**
     * @return {?}
     */
    get cartId() {
        if (this.hasCart) {
            return this.userId === ANONYMOUS_USERID ? this.cart.guid : this.cart.code;
        }
    }
}
CartDataService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartDataService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartService {
    /**
     * @param {?} store
     * @param {?} cartData
     * @param {?} authService
     */
    constructor(store, cartData, authService) {
        this.store = store;
        this.cartData = cartData;
        this.authService = authService;
        this.init();
    }
    /**
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(getCartContent));
    }
    /**
     * @return {?}
     */
    getEntries() {
        return this.store.pipe(select(getEntries));
    }
    /**
     * @return {?}
     */
    getCartMergeComplete() {
        return this.store.pipe(select(getCartMergeComplete));
    }
    /**
     * @return {?}
     */
    getLoaded() {
        return this.store.pipe(select(getLoaded));
    }
    /**
     * @protected
     * @return {?}
     */
    init() {
        this.store.pipe(select(getCartContent)).subscribe(cart => {
            this.cartData.cart = cart;
            if (this.callback) {
                this.callback();
                this.callback = null;
            }
        });
        this.authService
            .getUserToken()
            .pipe(filter(userToken => this.cartData.userId !== userToken.userId))
            .subscribe(userToken => {
            this.setUserId(userToken);
            this.loadOrMerge();
        });
        this.refresh();
    }
    /**
     * @protected
     * @param {?} userToken
     * @return {?}
     */
    setUserId(userToken) {
        if (Object.keys(userToken).length !== 0) {
            this.cartData.userId = userToken.userId;
        }
        else {
            this.cartData.userId = ANONYMOUS_USERID;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    loadOrMerge() {
        this.cartData.getDetails = true;
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (this.cartData.userId !== ANONYMOUS_USERID) {
            if (!this.isCreated(this.cartData.cart)) {
                this.store.dispatch(new LoadCart({
                    userId: this.cartData.userId,
                    cartId: 'current'
                }));
            }
            else {
                this.store.dispatch(new MergeCart({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cart.guid
                }));
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    refresh() {
        this.store.pipe(select(getRefresh)).subscribe(refresh => {
            if (refresh) {
                this.store.dispatch(new LoadCart({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cartId,
                    details: true
                }));
            }
        });
    }
    /**
     * @return {?}
     */
    loadDetails() {
        this.cartData.getDetails = true;
        if (this.cartData.userId !== ANONYMOUS_USERID) {
            this.store.dispatch(new LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId ? this.cartData.cartId : 'current',
                details: true
            }));
        }
        else if (this.cartData.cartId) {
            this.store.dispatch(new LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                details: true
            }));
        }
    }
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    addEntry(productCode, quantity) {
        if (!this.isCreated(this.cartData.cart)) {
            this.store.dispatch(new CreateCart({ userId: this.cartData.userId }));
            this.callback = function () {
                this.store.dispatch(new AddEntry({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cartId,
                    productCode: productCode,
                    quantity: quantity
                }));
            };
        }
        else {
            this.store.dispatch(new AddEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                productCode: productCode,
                quantity: quantity
            }));
        }
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    removeEntry(entry) {
        this.store.dispatch(new RemoveEntry({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            entry: entry.entryNumber
        }));
    }
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    updateEntry(entryNumber, quantity) {
        if (+quantity > 0) {
            this.store.dispatch(new UpdateEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
                qty: quantity
            }));
        }
        else {
            this.store.dispatch(new RemoveEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber
            }));
        }
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    getEntry(productCode) {
        return this.store.pipe(select(getEntrySelectorFactory(productCode)));
    }
    /**
     * @param {?} cart
     * @return {?}
     */
    isCreated(cart) {
        return cart && !!Object.keys(cart).length;
    }
    /**
     * @param {?} cart
     * @return {?}
     */
    isEmpty(cart) {
        return cart && !cart.totalItems;
    }
}
CartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService },
    { type: AuthService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services$1 = [CartService, CartDataService];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEncoder {
    /**
     * @param {?} key
     * @return {?}
     */
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// for mini cart
/** @type {?} */
const BASIC_PARAMS = 'DEFAULT,deliveryItemsQuantity,totalPrice(formattedValue),' +
    'entries(totalPrice(formattedValue),product(images(FULL)))';
// for cart details page
/** @type {?} */
const DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,totalTax(formattedValue),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue)';
class OccCartService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getCartEndpoint(userId) {
        /** @type {?} */
        const cartEndpoint = 'users/' + userId + '/carts/';
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            cartEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?=} details
     * @return {?}
     */
    loadAllCarts(userId, details) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId);
        /** @type {?} */
        const params = details
            ? new HttpParams({
                fromString: 'fields=carts(' + DETAILS_PARAMS + ',saveTime)'
            })
            : new HttpParams({
                fromString: 'fields=carts(' + BASIC_PARAMS + ',saveTime)'
            });
        return this.http
            .get(url, { params: params })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    loadCart(userId, cartId, details) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        const params = details
            ? new HttpParams({
                fromString: 'fields=' + DETAILS_PARAMS
            })
            : new HttpParams({
                fromString: 'fields=' + BASIC_PARAMS
            });
        if (cartId === 'current') {
            return this.loadAllCarts(userId, details).pipe(map(cartsData => {
                if (cartsData && cartsData.carts) {
                    /** @type {?} */
                    const activeCart = cartsData.carts.find(cart => {
                        return cart['saveTime'] === undefined;
                    });
                    return activeCart;
                }
                else {
                    return null;
                }
            }));
        }
        else {
            return this.http
                .get(url, { params: params })
                .pipe(catchError((error) => throwError(error)));
        }
    }
    /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    createCart(userId, oldCartId, toMergeCartGuid) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId);
        /** @type {?} */
        const toAdd = JSON.stringify({});
        /** @type {?} */
        let queryString = 'fields=' + BASIC_PARAMS;
        if (oldCartId) {
            queryString = queryString + '&oldCartId=' + oldCartId;
        }
        if (toMergeCartGuid) {
            queryString = queryString + '&toMergeCartGuid=' + toMergeCartGuid;
        }
        /** @type {?} */
        const params = new HttpParams({
            fromString: queryString
        });
        return this.http
            .post(url, toAdd, { params: params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    addEntry(userId, cartId, productCode, quantity = 1) {
        /** @type {?} */
        const toAdd = JSON.stringify({});
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries';
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'code=' + productCode + '&qty=' + quantity
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, toAdd, { headers, params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    updateEntry(userId, cartId, entryNumber, qty, pickupStore) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        let queryString = 'qty=' + qty;
        if (pickupStore) {
            queryString = queryString + '&pickupStore=' + pickupStore;
        }
        /** @type {?} */
        const params = new HttpParams({
            fromString: queryString
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .patch(url, {}, { headers, params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    removeEntry(userId, cartId, entryNumber) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    createAddressOnCart(userId, cartId, address) {
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', address, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    setDeliveryAddress(userId, cartId, addressId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', {}, {
            params: { addressId: addressId }
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    setDeliveryMode(userId, cartId, deliveryModeId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/deliverymode', {}, {
            params: { deliveryModeId: deliveryModeId }
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getDeliveryMode(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymode')
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getSupportedDeliveryModes(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymodes')
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getPaymentProviderSubInfo(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl')
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    createSubWithPaymentProvider(postUrl, parameters) {
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html'
        });
        /** @type {?} */
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(key => {
            httpParams = httpParams.append(key, parameters[key]);
        });
        return this.http.post(postUrl, httpParams, {
            headers,
            responseType: 'text'
        });
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} parameters
     * @return {?}
     */
    createPaymentDetails(userId, cartId, parameters) {
        /** @type {?} */
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(key => {
            httpParams = httpParams.append(key, parameters[key]);
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    setPaymentDetails(userId, cartId, paymentDetailsId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId }
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
}
OccCartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultOccConfig = {
    site: {
        baseSite: 'electronics',
        language: 'en',
        currency: 'USD'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccModule {
}
OccModule.decorators = [
    { type: NgModule, args: [{
                imports: [ConfigModule.withConfig(defaultOccConfig)],
                providers: [{ provide: OccConfig, useExisting: Config }]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartOccModule {
}
CartOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, OccModule],
                providers: [OccCartService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$2 = {
    content: {},
    entries: {},
    refresh: false,
    cartMergeComplete: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$2(state = initialState$2, action) {
    switch (action.type) {
        case MERGE_CART: {
            return Object.assign({}, state, { cartMergeComplete: false });
        }
        case MERGE_CART_SUCCESS: {
            return Object.assign({}, state, { cartMergeComplete: true });
        }
        case LOAD_CART_SUCCESS:
        case CREATE_CART_SUCCESS: {
            /** @type {?} */
            const content = Object.assign({}, action.payload);
            /** @type {?} */
            let entries = {};
            if (content.entries) {
                entries = content.entries.reduce((entryMap, entry) => {
                    return Object.assign({}, entryMap, { [entry.product.code]: state.entries[entry.product.code]
                            ? Object.assign({}, state.entries[entry.product.code], entry) : entry });
                }, Object.assign({}, entries));
                delete content['entries'];
            }
            return Object.assign({}, state, { content,
                entries, refresh: false });
        }
        case REMOVE_ENTRY_SUCCESS:
        case UPDATE_ENTRY_SUCCESS:
        case ADD_ENTRY_SUCCESS: {
            return Object.assign({}, state, { refresh: true });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$2() {
    return {
        active: loaderReducer(CART_DATA, reducer$2)
    };
}
/** @type {?} */
const reducerToken$2 = new InjectionToken('CartReducers');
/** @type {?} */
const reducerProvider$2 = {
    provide: reducerToken$2,
    useFactory: getReducers$2
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearCartState(reducer$$1) {
    return function (state, action) {
        if (action.type === '[Auth] Logout' ||
            action.type === '[Checkout] Place Order Success') {
            state = undefined;
        }
        return reducer$$1(state, action);
    };
}
/** @type {?} */
const metaReducers$1 = [clearCartState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ENDPOINT_PRODUCT = 'products';
class OccProductService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @return {?}
     */
    getProductEndpoint() {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            ENDPOINT_PRODUCT);
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    loadProduct(productCode) {
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'fields=DEFAULT,averageRating,images(FULL),classifications,numberOfReviews'
        });
        return this.http
            .get(this.getProductEndpoint() + `/${productCode}`, { params: params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} productCode
     * @param {?=} maxCount
     * @return {?}
     */
    loadProductReviews(productCode, maxCount) {
        /** @type {?} */
        let url = this.getProductEndpoint() + `/${productCode}/reviews`;
        if (maxCount && maxCount > 0) {
            url += `?maxCount=${maxCount}`;
        }
        return this.http
            .get(url)
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    postProductReview(productCode, review) {
        /** @type {?} */
        const url = this.getProductEndpoint() + `/${productCode}/reviews`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        /** @type {?} */
        const body = new URLSearchParams();
        body.append('headline', review.headline);
        body.append('comment', review.comment);
        body.append('rating', review.rating.toString());
        body.append('alias', review.alias);
        return this.http
            .post(url, body.toString(), { headers })
            .pipe(catchError((error) => throwError(error.json())));
    }
}
OccProductService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ENDPOINT_PRODUCT$1 = 'products';
/** @type {?} */
const DEFAULT_SEARCH_CONFIG = {
    pageSize: 20
};
class OccProductSearchService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @return {?}
     */
    getProductEndpoint() {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            ENDPOINT_PRODUCT$1);
    }
    /**
     * @param {?} fullQuery
     * @param {?=} searchConfig
     * @return {?}
     */
    query(fullQuery, searchConfig = DEFAULT_SEARCH_CONFIG) {
        /** @type {?} */
        let params = new HttpParams({
            fromString: '&fields=' +
                'products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),' +
                'facets,' +
                'breadcrumbs,' +
                'pagination(DEFAULT),' +
                'sorts(DEFAULT)'
        });
        params = params.set('query', fullQuery);
        if (searchConfig.pageSize) {
            params = params.set('pageSize', searchConfig.pageSize.toString());
        }
        if (searchConfig.currentPage) {
            params = params.set('currentPage', searchConfig.currentPage.toString());
        }
        if (searchConfig.sortCode) {
            params = params.set('sort', searchConfig.sortCode);
        }
        return this.http
            .get(this.getProductEndpoint() + '/search', { params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    queryProductSuggestions(term, pageSize = 3) {
        return this.http
            .get(this.getProductEndpoint() + '/suggestions', {
            params: new HttpParams()
                .set('term', term)
                .set('max', pageSize.toString())
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
}
OccProductSearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductSearchService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductOccModule {
}
ProductOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, OccModule],
                providers: [OccProductService, OccProductSearchService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PRODUCT_FEATURE = 'product';
/** @type {?} */
const PRODUCT_DETAIL_ENTITY = '[Product] Detail Entity';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ENDPOINT_COUNTRIES = 'countries';
/** @type {?} */
const ENDPOINT_TITLES = 'titles';
/** @type {?} */
const ENDPOINT_CARD_TYPES = 'cardtypes';
/** @type {?} */
const ENDPOINT_REGIONS = 'regions';
/** @type {?} */
const COUNTRIES_TYPE_SHIPPING = 'SHIPPING';
/** @type {?} */
const COUNTRIES_TYPE_BILLING = 'BILLING';
class OccMiscsService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @param {?} endpoint
     * @return {?}
     */
    getEndpoint(endpoint) {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            endpoint);
    }
    /**
     * @return {?}
     */
    loadDeliveryCountries() {
        return this.http
            .get(this.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_SHIPPING)
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @return {?}
     */
    loadBillingCountries() {
        return this.http
            .get(this.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_BILLING)
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @return {?}
     */
    loadTitles() {
        return this.http
            .get(this.getEndpoint(ENDPOINT_TITLES))
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @return {?}
     */
    loadCardTypes() {
        return this.http
            .get(this.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        return this.http
            .get(this.getEndpoint(this.buildRegionsUrl(countryIsoCode)))
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @private
     * @param {?} countryIsoCode
     * @return {?}
     */
    buildRegionsUrl(countryIsoCode) {
        return `${ENDPOINT_COUNTRIES}/${countryIsoCode}/${ENDPOINT_REGIONS}`;
    }
}
OccMiscsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccMiscsService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductImageConverterService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    convertList(list) {
        if (!list) {
            return;
        }
        for (const product of list) {
            this.convertProduct(product);
        }
    }
    /**
     * @param {?} product
     * @return {?}
     */
    convertProduct(product) {
        if (product.images) {
            product.images = this.populate(product.images);
        }
    }
    /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     * @param {?} source
     * @return {?}
     */
    populate(source) {
        /** @type {?} */
        const images = {};
        if (source) {
            for (const image of source) {
                /** @type {?} */
                const isList = image.hasOwnProperty('galleryIndex');
                if (!images.hasOwnProperty(image.imageType)) {
                    images[image.imageType] = isList ? [] : {};
                }
                /** @type {?} */
                let imageContainer;
                if (isList && !images[image.imageType][image.galleryIndex]) {
                    images[image.imageType][image.galleryIndex] = {};
                }
                if (isList) {
                    imageContainer = images[image.imageType][image.galleryIndex];
                }
                else {
                    imageContainer = images[image.imageType];
                }
                // set full image URL path
                image.url = (this.config.server.baseUrl || '') + image.url;
                imageContainer[image.format] = image;
            }
        }
        return images;
    }
}
ProductImageConverterService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductImageConverterService.ctorParameters = () => [
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReferenceConverterService {
    /**
     * @param {?} product
     * @return {?}
     */
    convertProduct(product) {
        if (product.productReferences) {
            product.productReferences = this.populate(product.productReferences);
        }
    }
    /**
     * @desc
     * Creates the reference structue we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     * @protected
     * @param {?} source
     * @return {?}
     */
    populate(source) {
        /** @type {?} */
        const references = {};
        if (source) {
            for (const reference of source) {
                if (!references.hasOwnProperty(reference.referenceType)) {
                    references[reference.referenceType] = [];
                }
                references[reference.referenceType].push(reference);
            }
        }
        return references;
    }
}
ProductReferenceConverterService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductConverterModule {
}
ProductConverterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [ProductImageConverterService, ProductReferenceConverterService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SEARCH_PRODUCTS = '[Product] Search Products';
/** @type {?} */
const SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
/** @type {?} */
const SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
/** @type {?} */
const GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
/** @type {?} */
const GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
/** @type {?} */
const GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
/** @type {?} */
const CLEAN_PRODUCT_SEARCH = '[Product] Clean Product Search State';
class SearchProducts {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS;
    }
}
class SearchProductsFail {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_FAIL;
    }
}
class SearchProductsSuccess {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_SUCCESS;
    }
}
class GetProductSuggestions {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS;
    }
}
class GetProductSuggestionsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    }
}
class GetProductSuggestionsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    }
}
class CleanProductSearchState {
    constructor() {
        this.type = CLEAN_PRODUCT_SEARCH;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ENTITY_REMOVE_ACTION = '[ENTITY] REMOVE';
/** @type {?} */
const ENTITY_REMOVE_ALL_ACTION = '[ENTITY] REMOVE ALL';
/**
 * @param {?} type
 * @param {?} id
 * @return {?}
 */
function entityMeta(type, id) {
    return {
        entityType: type,
        entityId: id
    };
}
/**
 * @param {?} type
 * @param {?} id
 * @return {?}
 */
function entityRemoveMeta(type, id) {
    return {
        entityId: id,
        entityType: type,
        entityRemove: true
    };
}
/**
 * @param {?} type
 * @return {?}
 */
function entityRemoveAllMeta(type) {
    return {
        entityId: null,
        entityType: type,
        entityRemove: true
    };
}
class EntityRemoveAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_REMOVE_ACTION;
        this.meta = entityRemoveMeta(entityType, id);
    }
}
class EntityRemoveAllAction {
    /**
     * @param {?} entityType
     */
    constructor(entityType) {
        this.type = ENTITY_REMOVE_ALL_ACTION;
        this.meta = entityRemoveAllMeta(entityType);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ENTITY_LOAD_ACTION = '[ENTITY] LOAD';
/** @type {?} */
const ENTITY_FAIL_ACTION = '[ENTITY] LOAD FAIL';
/** @type {?} */
const ENTITY_SUCCESS_ACTION = '[ENTITY] LOAD SUCCESS';
/** @type {?} */
const ENTITY_RESET_ACTION = '[ENTITY] RESET';
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
function entityLoadMeta(entityType, id) {
    return Object.assign({}, loadMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @param {?=} error
 * @return {?}
 */
function entityFailMeta(entityType, id, error) {
    return Object.assign({}, failMeta(entityType, error), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
function entitySuccessMeta(entityType, id) {
    return Object.assign({}, successMeta(entityType), entityMeta(entityType, id));
}
/**
 * @param {?} entityType
 * @param {?} id
 * @return {?}
 */
function entityResetMeta(entityType, id) {
    return Object.assign({}, resetMeta(entityType), entityMeta(entityType, id));
}
class EntityLoadAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_LOAD_ACTION;
        this.meta = entityLoadMeta(entityType, id);
    }
}
class EntityFailAction {
    /**
     * @param {?} entityType
     * @param {?} id
     * @param {?=} error
     */
    constructor(entityType, id, error) {
        this.type = ENTITY_FAIL_ACTION;
        this.meta = entityFailMeta(entityType, id, error);
    }
}
class EntitySuccessAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_SUCCESS_ACTION;
        this.meta = entitySuccessMeta(entityType, id);
    }
}
class EntityResetAction {
    /**
     * @param {?} entityType
     * @param {?} id
     */
    constructor(entityType, id) {
        this.type = ENTITY_RESET_ACTION;
        this.meta = entityResetMeta(entityType, id);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_PRODUCT = '[Product] Load Product Data';
/** @type {?} */
const LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
/** @type {?} */
const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
class LoadProduct extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_DETAIL_ENTITY, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT;
    }
}
class LoadProductFail extends EntityFailAction {
    /**
     * @param {?} productCode
     * @param {?} payload
     */
    constructor(productCode, payload) {
        super(PRODUCT_DETAIL_ENTITY, productCode, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT_FAIL;
    }
}
class LoadProductSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_DETAIL_ENTITY, payload.code);
        this.payload = payload;
        this.type = LOAD_PRODUCT_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_PRODUCT_REVIEWS = '[Product] Load Product Reviews Data';
/** @type {?} */
const LOAD_PRODUCT_REVIEWS_FAIL = '[Product] Load Product Reviews Data Fail';
/** @type {?} */
const LOAD_PRODUCT_REVIEWS_SUCCESS = '[Product] Load Product Reviews Data Success';
/** @type {?} */
const POST_PRODUCT_REVIEW = '[Product] Post Product Review';
/** @type {?} */
const POST_PRODUCT_REVIEW_FAIL = '[Product] Post Product Review Fail';
/** @type {?} */
const POST_PRODUCT_REVIEW_SUCCESS = '[Product] Post Product Review Success';
class LoadProductReviews {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS;
    }
}
class LoadProductReviewsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_FAIL;
    }
}
class LoadProductReviewsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REVIEWS_SUCCESS;
    }
}
class PostProductReview {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW;
    }
}
class PostProductReviewFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_FAIL;
    }
}
class PostProductReviewSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = POST_PRODUCT_REVIEW_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getProductsState = createFeatureSelector(PRODUCT_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entityStateSelector(state, id) {
    return state.entities[id] || {};
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entityValueSelector(state, id) {
    /** @type {?} */
    const entityState = entityStateSelector(state, id);
    return entityState.value;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entityLoadingSelector(state, id) {
    /** @type {?} */
    const entityState = entityStateSelector(state, id);
    return entityState.loading;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entityErrorSelector(state, id) {
    /** @type {?} */
    const entityState = entityStateSelector(state, id);
    return entityState.error;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entitySuccessSelector(state, id) {
    /** @type {?} */
    const entityState = entityStateSelector(state, id);
    return entityState.success;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getProductState = createSelector(getProductsState, (state) => state.details);
/** @type {?} */
const getSelectedProductsFactory = (codes) => {
    return createSelector(getProductState, (details) => {
        return codes
            .map(code => details.entities[code] ? details.entities[code].value : undefined)
            .filter(product => product !== undefined);
    });
};
/** @type {?} */
const getSelectedProductStateFactory = (code) => {
    return createSelector(getProductState, details => entityStateSelector(details, code));
};
/** @type {?} */
const getSelectedProductFactory = (code) => {
    return createSelector(getSelectedProductStateFactory(code), productState => loaderValueSelector(productState));
};
/** @type {?} */
const getSelectedProductLoadingFactory = (code) => {
    return createSelector(getSelectedProductStateFactory(code), productState => loaderLoadingSelector(productState));
};
/** @type {?} */
const getSelectedProductSuccessFactory = (code) => {
    return createSelector(getSelectedProductStateFactory(code), productState => loaderSuccessSelector(productState));
};
/** @type {?} */
const getSelectedProductErrorFactory = (code) => {
    return createSelector(getSelectedProductStateFactory(code), productState => loaderErrorSelector(productState));
};
/** @type {?} */
const getAllProductCodes = createSelector(getProductState, details => {
    return Object.keys(details.entities);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$3 = {
    results: {},
    suggestions: [],
    auxResults: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$3(state = initialState$3, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS_SUCCESS: {
            /** @type {?} */
            const results = action.payload;
            /** @type {?} */
            const res = action.auxiliary ? { auxResults: results } : { results };
            return Object.assign({}, state, res);
        }
        case GET_PRODUCT_SUGGESTIONS_SUCCESS: {
            /** @type {?} */
            const suggestions = action.payload;
            return Object.assign({}, state, { suggestions });
        }
        case CLEAN_PRODUCT_SEARCH: {
            return initialState$3;
        }
    }
    return state;
}
/** @type {?} */
const getSearchResults = (state) => state.results;
/** @type {?} */
const getAuxSearchResults = (state) => state.auxResults;
/** @type {?} */
const getProductSuggestions = (state) => state.suggestions;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getProductsSearchState = createSelector(getProductsState, (state) => state.search);
/** @type {?} */
const getSearchResults$1 = createSelector(getProductsSearchState, getSearchResults);
/** @type {?} */
const getAuxSearchResults$1 = createSelector(getProductsSearchState, getAuxSearchResults);
/** @type {?} */
const getProductSuggestions$1 = createSelector(getProductsSearchState, getProductSuggestions);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getProductReviewsState = createSelector(getProductsState, (state) => state.reviews);
/** @type {?} */
const getSelectedProductReviewsFactory = (productCode) => {
    return createSelector(getProductReviewsState, reviewData => {
        if (reviewData.productCode === productCode) {
            return reviewData.list;
        }
    });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$4 = {
    productCode: '',
    list: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$4(state = initialState$4, action) {
    switch (action.type) {
        case LOAD_PRODUCT_REVIEWS_SUCCESS: {
            /** @type {?} */
            const productCode = action.payload.productCode;
            /** @type {?} */
            const list = action.payload.list;
            return Object.assign({}, state, { productCode,
                list });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_LANGUAGES = '[Site-context] Load Languages';
/** @type {?} */
const LOAD_LANGUAGES_FAIL = '[Site-context] Load Languages Fail';
/** @type {?} */
const LOAD_LANGUAGES_SUCCESS = '[Site-context] Load Languages Success';
/** @type {?} */
const SET_ACTIVE_LANGUAGE = '[Site-context] Set Active Language';
/** @type {?} */
const LANGUAGE_CHANGE = '[Site-context] Language Change';
class LoadLanguages {
    constructor() {
        this.type = LOAD_LANGUAGES;
    }
}
class LoadLanguagesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_FAIL;
    }
}
class LoadLanguagesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_SUCCESS;
    }
}
class SetActiveLanguage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_LANGUAGE;
    }
}
class LanguageChange {
    constructor() {
        this.type = LANGUAGE_CHANGE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$5 = {
    entities: null,
    activeLanguage: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$5(state = initialState$5, action) {
    switch (action.type) {
        case LOAD_LANGUAGES_SUCCESS: {
            /** @type {?} */
            const languages = action.payload;
            /** @type {?} */
            const entities = languages.reduce((langEntities, language) => {
                return Object.assign({}, langEntities, { [language.isocode]: language });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_CURRENCIES = '[Site-context] Load Currencies';
/** @type {?} */
const LOAD_CURRENCIES_FAIL = '[Site-context] Load Currencies Fail';
/** @type {?} */
const LOAD_CURRENCIES_SUCCESS = '[Site-context] Load Currencies Success';
/** @type {?} */
const SET_ACTIVE_CURRENCY = '[Site-context] Set Active Currency';
/** @type {?} */
const CURRENCY_CHANGE = '[Site-context] Currency Change';
class LoadCurrencies {
    constructor() {
        this.type = LOAD_CURRENCIES;
    }
}
class LoadCurrenciesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_FAIL;
    }
}
class LoadCurrenciesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_SUCCESS;
    }
}
class SetActiveCurrency {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CURRENCY;
    }
}
class CurrencyChange {
    constructor() {
        this.type = CURRENCY_CHANGE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$6 = {
    entities: null,
    activeCurrency: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$6(state = initialState$6, action) {
    switch (action.type) {
        case LOAD_CURRENCIES_SUCCESS: {
            /** @type {?} */
            const currencies = action.payload;
            /** @type {?} */
            const entities = currencies.reduce((currEntities, currency) => {
                return Object.assign({}, currEntities, { [currency.isocode]: currency });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case SET_ACTIVE_CURRENCY: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeCurrency: isocode });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$3() {
    return {
        languages: reducer$5,
        currencies: reducer$6
    };
}
/** @type {?} */
const reducerToken$3 = new InjectionToken('SiteContextReducers');
/** @type {?} */
const reducerProvider$3 = {
    provide: reducerToken$3,
    useFactory: getReducers$3
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccSiteService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @return {?}
     */
    getBaseEndPoint() {
        if (!this.config || !this.config.server) {
            return '';
        }
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite);
    }
    /**
     * @return {?}
     */
    loadLanguages() {
        return this.http
            .get(this.getBaseEndPoint() + '/languages')
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @return {?}
     */
    loadCurrencies() {
        return this.http
            .get(this.getBaseEndPoint() + '/currencies')
            .pipe(catchError((error) => throwError(error.json())));
    }
}
OccSiteService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OccSiteService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];
/** @nocollapse */ OccSiteService.ngInjectableDef = defineInjectable({ factory: function OccSiteService_Factory() { return new OccSiteService(inject(HttpClient), inject(OccConfig)); }, token: OccSiteService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LanguagesEffects {
    /**
     * @param {?} actions$
     * @param {?} occSiteService
     * @param {?} winRef
     */
    constructor(actions$, occSiteService, winRef) {
        this.actions$ = actions$;
        this.occSiteService = occSiteService;
        this.winRef = winRef;
        this.loadLanguages$ = this.actions$.pipe(ofType(LOAD_LANGUAGES), exhaustMap(() => {
            return this.occSiteService.loadLanguages().pipe(map(data => new LoadLanguagesSuccess(data.languages)), catchError(error => of(new LoadLanguagesFail(error))));
        }));
        this.activateLanguage$ = this.actions$.pipe(ofType(SET_ACTIVE_LANGUAGE), tap((action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('language', action.payload);
            }
        }), map(() => new LanguageChange()));
    }
}
LanguagesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LanguagesEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccSiteService },
    { type: WindowRef }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], LanguagesEffects.prototype, "loadLanguages$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], LanguagesEffects.prototype, "activateLanguage$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrenciesEffects {
    /**
     * @param {?} actions$
     * @param {?} occSiteService
     * @param {?} winRef
     */
    constructor(actions$, occSiteService, winRef) {
        this.actions$ = actions$;
        this.occSiteService = occSiteService;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(LOAD_CURRENCIES), exhaustMap(() => {
            return this.occSiteService.loadCurrencies().pipe(map(data => new LoadCurrenciesSuccess(data.currencies)), catchError(error => of(new LoadCurrenciesFail(error))));
        }));
        this.activateCurrency$ = this.actions$.pipe(ofType(SET_ACTIVE_CURRENCY), tap((action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        }), map(() => new CurrencyChange()));
    }
}
CurrenciesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrenciesEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccSiteService },
    { type: WindowRef }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CurrenciesEffects.prototype, "activateCurrency$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$2 = [LanguagesEffects, CurrenciesEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SITE_CONTEXT_FEATURE = 'siteContext';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getSiteContextState = createFeatureSelector(SITE_CONTEXT_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const activeLanguageSelector = (state) => state.activeLanguage;
/** @type {?} */
const languagesEntitiesSelector = (state) => state.entities;
/** @type {?} */
const getLanguagesState = createSelector(getSiteContextState, (state) => state.languages);
/** @type {?} */
const getLanguagesEntities = createSelector(getLanguagesState, languagesEntitiesSelector);
/** @type {?} */
const getActiveLanguage = createSelector(getLanguagesState, activeLanguageSelector);
/** @type {?} */
const getAllLanguages = createSelector(getLanguagesEntities, entities => {
    return entities
        ? Object.keys(entities).map(isocode => entities[isocode])
        : null;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const currenciesEntitiesSelector = (state) => state.entities;
/** @type {?} */
const activeCurrencySelector = (state) => state.activeCurrency;
/** @type {?} */
const getCurrenciesState = createSelector(getSiteContextState, (state) => state.currencies);
/** @type {?} */
const getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
/** @type {?} */
const getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
/** @type {?} */
const getAllCurrencies = createSelector(getCurrenciesEntities, entities => {
    return entities
        ? Object.keys(entities).map(isocode => entities[isocode])
        : null;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Facade that provides easy access to language state, actions and selectors.
 */
class LanguageService {
    /**
     * @param {?} store
     * @param {?} winRef
     */
    constructor(store, winRef) {
        this.store = store;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the languages supported by the current store.
     * @return {?}
     */
    getAll() {
        return this.store.pipe(select(getAllLanguages), tap(languages => {
            if (!languages) {
                this.store.dispatch(new LoadLanguages());
            }
        }), filter(Boolean));
    }
    /**
     * Represents the isocode of the active language.
     * @return {?}
     */
    getActive() {
        return this.store
            .pipe(select(getActiveLanguage))
            .pipe(filter(Boolean));
    }
    /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    setActive(isocode) {
        return this.store
            .pipe(select(getActiveLanguage), take(1))
            .subscribe(activeLanguage => {
            if (activeLanguage !== isocode) {
                this.store.dispatch(new SetActiveLanguage(isocode));
            }
        });
    }
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     * @param {?} defaultLanguage
     * @return {?}
     */
    initialize(defaultLanguage) {
        if (this.sessionStorage && !!this.sessionStorage.getItem('language')) {
            this.setActive(this.sessionStorage.getItem('language'));
        }
        else {
            this.setActive(defaultLanguage);
        }
    }
}
LanguageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LanguageService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Facade that provides easy access to curreny state, actions and selectors.
 */
class CurrencyService {
    /**
     * @param {?} store
     * @param {?} winRef
     */
    constructor(store, winRef) {
        this.store = store;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the currencies supported by the current store.
     * @return {?}
     */
    getAll() {
        return this.store.pipe(select(getAllCurrencies), tap(currencies => {
            if (!currencies) {
                this.store.dispatch(new LoadCurrencies());
            }
        }), filter(Boolean));
    }
    /**
     * Represents the isocode of the active currency.
     * @return {?}
     */
    getActive() {
        return this.store
            .pipe(select(getActiveCurrency))
            .pipe(filter(Boolean));
    }
    /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    setActive(isocode) {
        return this.store
            .pipe(select(getActiveCurrency), take(1))
            .subscribe(activeCurrency => {
            if (activeCurrency !== isocode) {
                this.store.dispatch(new SetActiveCurrency(isocode));
            }
        });
    }
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     * @param {?} defaultCurrency
     * @return {?}
     */
    initialize(defaultCurrency) {
        if (this.sessionStorage && !!this.sessionStorage.getItem('currency')) {
            this.setActive(this.sessionStorage.getItem('currency'));
        }
        else {
            this.setActive(defaultCurrency);
        }
    }
}
CurrencyService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrencyService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextOccModule {
}
SiteContextOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [OccModule, CommonModule, HttpClientModule],
                providers: [OccModule, OccSiteService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function siteContextStoreConfigFactory() {
    // if we want to reuse SITE_CONTEXT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: { ssrTransfer: { keys: { [SITE_CONTEXT_FEATURE]: true } } }
    };
    return config;
}
class SiteContextStoreModule {
}
SiteContextStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken$3),
                    EffectsModule.forFeature(effects$2),
                    ConfigModule.withConfigFactory(siteContextStoreConfigFactory)
                ],
                providers: [reducerProvider$3]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialEntityState = { entities: {} };
/**
 * Higher order reducer for reusing reducer logic for multiple entities
 *
 * Utilizes entityId meta field to target entity by id in actions
 * @template T
 * @param {?} entityType
 * @param {?} reducer
 * @return {?}
 */
function entityReducer(entityType, reducer) {
    return (state = initialEntityState, action) => {
        /** @type {?} */
        let ids;
        /** @type {?} */
        let partitionPayload = false;
        if (action.meta &&
            action.meta.entityType === entityType &&
            action.meta.entityId !== undefined) {
            ids = [].concat(action.meta.entityId);
            // remove selected entities
            if (action.meta.entityRemove) {
                if (action.meta.entityId === null) {
                    return initialEntityState;
                }
                else {
                    /** @type {?} */
                    let removed = false;
                    /** @type {?} */
                    const newEntities = Object.keys(state.entities).reduce((acc, cur) => {
                        if (ids.indexOf(cur) > -1) {
                            removed = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }, {});
                    return removed ? { entities: newEntities } : state;
                }
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        /** @type {?} */
        const entityUpdates = {};
        for (let i = 0; i < ids.length; i++) {
            /** @type {?} */
            const id = ids[i];
            /** @type {?} */
            const subAction = partitionPayload
                ? Object.assign({}, action, { payload: action.payload[i] }) : action;
            /** @type {?} */
            const newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, entityUpdates) });
        }
        return state;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
function entitySelector(state, id) {
    return state.entities[id] || undefined;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderLoad(entityType) {
    return filter((action) => action.meta &&
        action.meta.loader &&
        action.meta.entityType === entityType &&
        action.meta.loader.load);
}
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderFail(entityType) {
    return filter((action) => action.meta &&
        action.meta.loader &&
        action.meta.entityType === entityType &&
        action.meta.loader.error);
}
/**
 * @param {?} entityType
 * @return {?}
 */
function ofLoaderSuccess(entityType) {
    return filter((action) => action.meta &&
        action.meta.loader &&
        action.meta.entityType === entityType &&
        !action.meta.loader.load &&
        !action.meta.loader.error);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Higher order reducer that wraps LoaderReducer and EntityReducer enhancing
 * single state reducer to support multiple entities with generic loading flags
 * @template T
 * @param {?} entityType
 * @param {?=} reducer
 * @return {?}
 */
function entityLoaderReducer(entityType, reducer) {
    return entityReducer(entityType, loaderReducer(entityType, reducer));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ContextServiceMap {
}
/** @type {?} */
const LANGUAGE_CONTEXT_ID = 'LANGUAGE';
/** @type {?} */
const CURRENCY_CONTEXT_ID = 'CURRENCY';
/**
 * @return {?}
 */
function serviceMapFactory() {
    return {
        [LANGUAGE_CONTEXT_ID]: LanguageService,
        [CURRENCY_CONTEXT_ID]: CurrencyService
    };
}
/** @type {?} */
const contextServiceMapProvider = {
    provide: ContextServiceMap,
    useFactory: serviceMapFactory
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function defaultSiteContextConfigFactory() {
    return {
        siteContext: {
            parameters: {
                [LANGUAGE_CONTEXT_ID]: {
                    persistence: 'route',
                    defaultValue: 'en',
                    values: ['en', 'de', 'ja', 'zh']
                },
                [CURRENCY_CONTEXT_ID]: {
                    persistence: 'route',
                    defaultValue: 'USD',
                    values: ['USD', 'JPY']
                }
            },
            urlEncodingParameters: [LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID]
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class SiteContextConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @param {?} langService
 * @param {?} currService
 * @return {?}
 */
function inititializeContext(config, langService, currService) {
    return () => {
        langService.initialize(config.site.language);
        currService.initialize(config.site.currency);
    };
}
/** @type {?} */
const contextServiceProviders = [
    LanguageService,
    CurrencyService,
    {
        provide: APP_INITIALIZER,
        useFactory: inititializeContext,
        deps: [OccConfig, LanguageService, CurrencyService],
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextParamsService {
    /**
     * @param {?} config
     * @param {?} injector
     * @param {?} serviceMap
     */
    constructor(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    /**
     * @param {?=} persistence
     * @return {?}
     */
    getContextParameters(persistence) {
        /** @type {?} */
        const contextConfig = this.config.siteContext.parameters;
        if (contextConfig) {
            /** @type {?} */
            const params = Object.keys(contextConfig);
            if (persistence) {
                return params.filter(key => contextConfig[key].persistence === persistence);
            }
            else {
                return params;
            }
        }
        return [];
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getParamValues(param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].values
            : undefined;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getParamDefaultValue(param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].defaultValue
            : undefined;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getSiteContextService(param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getValue(param) {
        /** @type {?} */
        let value;
        /** @type {?} */
        const service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe(val => (value = val))
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    }
    /**
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    setValue(param, value) {
        /** @type {?} */
        const service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    }
}
SiteContextParamsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextParamsService.ctorParameters = () => [
    { type: SiteContextConfig },
    { type: Injector },
    { type: ContextServiceMap }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextUrlSerializer extends DefaultUrlSerializer {
    /**
     * @param {?} siteContextParams
     * @param {?} config
     */
    constructor(siteContextParams, config) {
        super();
        this.siteContextParams = siteContextParams;
        this.config = config;
        this.urlEncodingParameters =
            this.config.siteContext.urlEncodingParameters || [];
    }
    /**
     * @return {?}
     */
    get hasContextInRoutes() {
        return this.urlEncodingParameters.length > 0;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    parse(url) {
        if (this.hasContextInRoutes) {
            /** @type {?} */
            const urlWithParams = this.urlExtractContextParameters(url);
            /** @type {?} */
            const parsed = (/** @type {?} */ (super.parse(urlWithParams.url)));
            this.urlTreeIncludeContextParameters(parsed, urlWithParams.params);
            return parsed;
        }
        else {
            return super.parse(url);
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    urlExtractContextParameters(url) {
        /** @type {?} */
        const segments = url.split('/');
        if (segments[0] === '') {
            segments.shift();
        }
        /** @type {?} */
        const params = {};
        /** @type {?} */
        let paramId = 0;
        /** @type {?} */
        let segmentId = 0;
        while (paramId < this.urlEncodingParameters.length &&
            segmentId < segments.length) {
            /** @type {?} */
            const paramName = this.urlEncodingParameters[paramId];
            /** @type {?} */
            const paramValues = this.siteContextParams.getParamValues(paramName);
            if (paramValues.indexOf(segments[segmentId]) > -1) {
                params[paramName] = segments[segmentId];
                segmentId++;
            }
            paramId++;
        }
        url = segments.slice(Object.keys(params).length).join('/');
        return { url, params };
    }
    /**
     * @private
     * @param {?} urlTree
     * @param {?} params
     * @return {?}
     */
    urlTreeIncludeContextParameters(urlTree, params) {
        urlTree.siteContext = params;
    }
    /**
     * @param {?} tree
     * @return {?}
     */
    serialize(tree) {
        /** @type {?} */
        const params = this.urlTreeExtractContextParameters(tree);
        /** @type {?} */
        const url = super.serialize(tree);
        /** @type {?} */
        const serialized = this.urlIncludeContextParameters(url, params);
        return serialized;
    }
    /**
     * @param {?} urlTree
     * @return {?}
     */
    urlTreeExtractContextParameters(urlTree) {
        return urlTree.siteContext ? urlTree.siteContext : {};
    }
    /**
     * @private
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    urlIncludeContextParameters(url, params) {
        /** @type {?} */
        const contextRoutePart = this.urlEncodingParameters
            .map(param => {
            return params[param]
                ? params[param]
                : this.siteContextParams.getValue(param);
        })
            .join('/');
        return contextRoutePart + url;
    }
}
SiteContextUrlSerializer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextUrlSerializer.ctorParameters = () => [
    { type: SiteContextParamsService },
    { type: SiteContextConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextRoutesHandler {
    /**
     * @param {?} siteContextParams
     * @param {?} serializer
     * @param {?} injector
     */
    constructor(siteContextParams, serializer, injector) {
        this.siteContextParams = siteContextParams;
        this.serializer = serializer;
        this.injector = injector;
        this.subscription = new Subscription();
        this.contextValues = {};
        this.isNavigating = false;
    }
    /**
     * @return {?}
     */
    init() {
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
        /** @type {?} */
        const routingParams = this.siteContextParams.getContextParameters('route');
        if (routingParams.length) {
            this.subscribeChanges(routingParams);
            this.subscribeRouting();
        }
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    subscribeChanges(params) {
        params.forEach(param => {
            /** @type {?} */
            const service = this.siteContextParams.getSiteContextService(param);
            if (service) {
                this.subscription.add(service.getActive().subscribe(value => {
                    if (!this.isNavigating &&
                        this.contextValues[param] &&
                        this.contextValues[param] !== value) {
                        /** @type {?} */
                        const parsed = this.router.parseUrl(this.router.url);
                        /** @type {?} */
                        const serialized = this.router.serializeUrl(parsed);
                        this.location.replaceState(serialized);
                    }
                    this.contextValues[param] = value;
                }));
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    subscribeRouting() {
        this.subscription.add(this.router.events
            .pipe(filter(event => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel))
            .subscribe((event) => {
            this.isNavigating = event instanceof NavigationStart;
            if (this.isNavigating) {
                this.setContextParamsFromRoute(event.url);
            }
        }));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    setContextParamsFromRoute(url) {
        const { params } = this.serializer.urlExtractContextParameters(url);
        Object.keys(params).forEach(param => this.siteContextParams.setValue(param, params[param]));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SiteContextRoutesHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SiteContextRoutesHandler.ctorParameters = () => [
    { type: SiteContextParamsService },
    { type: SiteContextUrlSerializer },
    { type: Injector }
];
/** @nocollapse */ SiteContextRoutesHandler.ngInjectableDef = defineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(inject(SiteContextParamsService), inject(SiteContextUrlSerializer), inject(INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} siteContextRoutesHandler
 * @return {?}
 */
function initSiteContextRoutesHandler(siteContextRoutesHandler) {
    return () => {
        siteContextRoutesHandler.init();
    };
}
/** @type {?} */
const siteContextParamsProviders = [
    SiteContextParamsService,
    SiteContextUrlSerializer,
    { provide: UrlSerializer, useExisting: SiteContextUrlSerializer },
    {
        provide: APP_INITIALIZER,
        useFactory: initSiteContextRoutesHandler,
        deps: [SiteContextRoutesHandler],
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextInterceptor {
    /**
     * @param {?} languageService
     * @param {?} currencyService
     * @param {?} config
     */
    constructor(languageService, currencyService, config) {
        this.languageService = languageService;
        this.currencyService = currencyService;
        this.config = config;
        this.activeLang = this.config.site.language;
        this.activeCurr = this.config.site.currency;
        this.baseReqString =
            (this.config.server.baseUrl || '') +
                this.config.server.occPrefix +
                this.config.site.baseSite;
        this.languageService
            .getActive()
            .subscribe(data => (this.activeLang = data));
        this.currencyService
            .getActive()
            .subscribe(data => (this.activeCurr = data));
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (request.url.indexOf(this.baseReqString) > -1) {
            request = request.clone({
                setParams: {
                    lang: this.activeLang,
                    curr: this.activeCurr
                }
            });
        }
        return next.handle(request);
    }
}
SiteContextInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextInterceptor.ctorParameters = () => [
    { type: LanguageService },
    { type: CurrencyService },
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const interceptors$1 = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SiteContextInterceptor,
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class SiteContextModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SiteContextModule,
            providers: [...interceptors$1]
        };
    }
}
SiteContextModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                    StateModule,
                    SiteContextOccModule,
                    SiteContextStoreModule
                ],
                providers: [
                    contextServiceMapProvider,
                    ...contextServiceProviders,
                    ...siteContextParamsProviders,
                    { provide: SiteContextConfig, useExisting: Config }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$4() {
    return {
        search: reducer$3,
        details: entityLoaderReducer(PRODUCT_DETAIL_ENTITY),
        reviews: reducer$4
    };
}
/** @type {?} */
const reducerToken$4 = new InjectionToken('ProductReducers');
/** @type {?} */
const reducerProvider$4 = {
    provide: reducerToken$4,
    useFactory: getReducers$4
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearProductsState(reducer) {
    return function (state, action) {
        if (action.type === CURRENCY_CHANGE || action.type === LANGUAGE_CHANGE) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
const metaReducers$2 = [clearProductsState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductsSearchEffects {
    /**
     * @param {?} actions$
     * @param {?} occProductSearchService
     * @param {?} productImageConverter
     */
    constructor(actions$, occProductSearchService, productImageConverter) {
        this.actions$ = actions$;
        this.occProductSearchService = occProductSearchService;
        this.productImageConverter = productImageConverter;
        this.searchProducts$ = this.actions$.pipe(ofType(SEARCH_PRODUCTS), switchMap((action) => {
            return this.occProductSearchService
                .query(action.payload.queryText, action.payload.searchConfig)
                .pipe(map(data => {
                this.productImageConverter.convertList(data.products);
                return new SearchProductsSuccess(data, action.auxiliary);
            }), catchError(error => of(new SearchProductsFail(error, action.auxiliary))));
        }));
        this.getProductSuggestions$ = this.actions$.pipe(ofType(GET_PRODUCT_SUGGESTIONS), map((action) => action.payload), switchMap(payload => {
            return this.occProductSearchService
                .queryProductSuggestions(payload.term, payload.searchConfig.pageSize)
                .pipe(map(data => {
                if (data.suggestions === undefined) {
                    return new GetProductSuggestionsSuccess([]);
                }
                return new GetProductSuggestionsSuccess(data.suggestions);
            }), catchError(error => of(new GetProductSuggestionsFail(error))));
        }));
    }
}
ProductsSearchEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductsSearchEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccProductSearchService },
    { type: ProductImageConverterService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductsSearchEffects.prototype, "searchProducts$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductsSearchEffects.prototype, "getProductSuggestions$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductEffects {
    /**
     * @param {?} actions$
     * @param {?} occProductService
     * @param {?} productImageConverter
     * @param {?} productReferenceConverterService
     */
    constructor(actions$, occProductService, productImageConverter, productReferenceConverterService) {
        this.actions$ = actions$;
        this.occProductService = occProductService;
        this.productImageConverter = productImageConverter;
        this.productReferenceConverterService = productReferenceConverterService;
        this.loadProduct$ = this.actions$.pipe(ofType(LOAD_PRODUCT), map((action) => action.payload), groupBy(productCode => productCode), mergeMap(group => group.pipe(switchMap(productCode => {
            return this.occProductService.loadProduct(productCode).pipe(map(product => {
                this.productImageConverter.convertProduct(product);
                this.productReferenceConverterService.convertProduct(product);
                return new LoadProductSuccess(product);
            }), catchError(error => of(new LoadProductFail(productCode, error))));
        }))));
    }
}
ProductEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccProductService },
    { type: ProductImageConverterService },
    { type: ProductReferenceConverterService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductEffects.prototype, "loadProduct$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReviewsEffects {
    /**
     * @param {?} actions$
     * @param {?} occProductService
     */
    constructor(actions$, occProductService) {
        this.actions$ = actions$;
        this.occProductService = occProductService;
        this.loadProductReviews$ = this.actions$.pipe(ofType(LOAD_PRODUCT_REVIEWS), map((action) => action.payload), mergeMap(productCode => {
            return this.occProductService.loadProductReviews(productCode).pipe(map(data => {
                return new LoadProductReviewsSuccess({
                    productCode,
                    list: data.reviews
                });
            }), catchError(_error => of(new LoadProductReviewsFail((/** @type {?} */ ({
                message: productCode
            }))))));
        }));
        this.postProductReview = this.actions$.pipe(ofType(POST_PRODUCT_REVIEW), map((action) => action.payload), mergeMap(payload => {
            return this.occProductService
                .postProductReview(payload.productCode, payload.review)
                .pipe(map(reviewResponse => {
                return new PostProductReviewSuccess(reviewResponse);
            }), catchError(_error => of(new PostProductReviewFail(payload.productCode))));
        }));
    }
}
ProductReviewsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReviewsEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccProductService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductReviewsEffects.prototype, "loadProductReviews$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ProductReviewsEffects.prototype, "postProductReview", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$3 = [
    ProductsSearchEffects,
    ProductEffects,
    ProductReviewsEffects
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     * @param {?} productCode
     * @param {?=} forceReload
     * @return {?}
     */
    get(productCode, forceReload = false) {
        return this.store.pipe(select(getSelectedProductStateFactory(productCode)), tap(productState => {
            /** @type {?} */
            const attemptedLoad = productState.loading || productState.success || productState.error;
            if (!attemptedLoad || forceReload) {
                this.store.dispatch(new LoadProduct(productCode));
            }
        }), map(productState => productState.value));
    }
    /**
     * Returns boolean observable for product's loading state
     * @param {?} productCode
     * @return {?}
     */
    isLoading(productCode) {
        return this.store.pipe(select(getSelectedProductLoadingFactory(productCode)));
    }
    /**
     * Returns boolean observable for product's load success state
     * @param {?} productCode
     * @return {?}
     */
    isSuccess(productCode) {
        return this.store.pipe(select(getSelectedProductSuccessFactory(productCode)));
    }
    /**
     * Returns boolean observable for product's load error state
     * @param {?} productCode
     * @return {?}
     */
    hasError(productCode) {
        return this.store.pipe(select(getSelectedProductErrorFactory(productCode)));
    }
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     * @param {?} productCode
     * @return {?}
     */
    reload(productCode) {
        this.store.dispatch(new LoadProduct(productCode));
    }
}
ProductService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductSearchService {
    /**
     * @param {?} store
     * @param {?} router
     */
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig) {
        /** @type {?} */
        const urlTree = this.router.createUrlTree([], {
            queryParams: Object.assign({}, searchConfig, { query }),
            preserveFragment: false
        });
        this.router.navigateByUrl(urlTree);
        this.store.dispatch(new SearchProducts({
            queryText: query,
            searchConfig: searchConfig
        }));
    }
    /**
     * @return {?}
     */
    getSearchResults() {
        return this.store.pipe(select(getSearchResults$1));
    }
    /**
     * @return {?}
     */
    clearSearchResults() {
        this.store.dispatch(new CleanProductSearchState());
    }
    /**
     * @return {?}
     */
    getAuxSearchResults() {
        return this.store.pipe(select(getAuxSearchResults$1), filter(results => Object.keys(results).length > 0));
    }
    /**
     * @return {?}
     */
    getSearchSuggestions() {
        return this.store.pipe(select(getProductSuggestions$1));
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    searchAuxiliary(query, searchConfig) {
        this.store.dispatch(new SearchProducts({
            queryText: query,
            searchConfig: searchConfig
        }, true));
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    getSuggestions(query, searchConfig) {
        this.store.dispatch(new GetProductSuggestions({
            term: query,
            searchConfig: searchConfig
        }));
    }
}
ProductSearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductSearchService.ctorParameters = () => [
    { type: Store },
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReviewService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    getByProductCode(productCode) {
        /** @type {?} */
        const selector = getSelectedProductReviewsFactory(productCode);
        return this.store.pipe(select(selector), tap(reviews => {
            if (reviews === undefined && productCode !== undefined) {
                this.store.dispatch(new LoadProductReviews(productCode));
            }
        }));
    }
    /**
     * @param {?} productCode
     * @param {?} review
     * @return {?}
     */
    add(productCode, review) {
        this.store.dispatch(new PostProductReview({
            productCode: productCode,
            review
        }));
    }
}
ProductReviewService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReviewService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function productStoreConfigFactory() {
    // if we want to reuse PRODUCT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: { ssrTransfer: { keys: { [PRODUCT_FEATURE]: true } } }
    };
    return config;
}
class ProductStoreModule {
}
ProductStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    ProductOccModule,
                    ProductConverterModule,
                    StoreModule.forFeature(PRODUCT_FEATURE, reducerToken$4, { metaReducers: metaReducers$2 }),
                    EffectsModule.forFeature(effects$3),
                    ConfigModule.withConfigFactory(productStoreConfigFactory)
                ],
                providers: [reducerProvider$4]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_PAGEDATA = '[Cms] Load PageData';
/** @type {?} */
const LOAD_PAGEDATA_FAIL = '[Cms] Load PageData Fail';
/** @type {?} */
const LOAD_PAGEDATA_SUCCESS = '[Cms] Load PageData Success';
/** @type {?} */
const REFRESH_LATEST_PAGE = '[Cms] Refresh latest page';
/** @type {?} */
const UPDATE_LATEST_PAGE_KEY = '[Cms] Update latest page key';
/** @type {?} */
const CLEAN_PAGE_STATE = '[Cms] Clean Page State;';
class LoadPageData {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA;
    }
}
class LoadPageDataFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA_FAIL;
    }
}
class LoadPageDataSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PAGEDATA_SUCCESS;
    }
}
class RefreshLatestPage {
    constructor() {
        this.type = REFRESH_LATEST_PAGE;
    }
}
class UpdateLatestPageKey {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_LATEST_PAGE_KEY;
    }
}
class CleanPageState {
    constructor() {
        this.type = CLEAN_PAGE_STATE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$7 = {
    entities: {},
    count: 0,
    latestPageKey: ''
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$7(state = initialState$7, action) {
    switch (action.type) {
        case UPDATE_LATEST_PAGE_KEY: {
            /** @type {?} */
            const pageKey = action.payload;
            return Object.assign({}, state, { latestPageKey: pageKey });
        }
        case LOAD_PAGEDATA_SUCCESS: {
            /** @type {?} */
            let page = action.payload;
            /** @type {?} */
            const existPage = state.entities[page.key];
            if (existPage != null) {
                /** @type {?} */
                let samePage = true;
                for (const position of Object.keys(page.value.slots)) {
                    if (page.value.slots[position].components.length !==
                        existPage.slots[position].components.length) {
                        samePage = false;
                        break;
                    }
                }
                if (samePage) {
                    page = Object.assign({}, page, { value: Object.assign({}, page.value, { seen: [...page.value.seen, ...existPage.seen] }) });
                }
            }
            /** @type {?} */
            const entities = Object.assign({}, state.entities, { [page.key]: page.value });
            return Object.assign({}, state, { entities, count: state.count + 1, latestPageKey: page.key });
        }
        case REFRESH_LATEST_PAGE: {
            /** @type {?} */
            const entities = Object.assign({}, state.entities, { [state.latestPageKey]: null });
            return Object.assign({}, state, { entities });
        }
        case CLEAN_PAGE_STATE: {
            return initialState$7;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CMS_FEATURE = 'cms';
/** @type {?} */
const NAVIGATION_DETAIL_ENTITY = '[Cms] Navigation Entity';
/** @type {?} */
const COMPONENT_ENTITY = '[Cms[ Component Entity';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_NAVIGATION_ITEMS = '[Cms] Load NavigationEntry items';
/** @type {?} */
const LOAD_NAVIGATION_ITEMS_FAIL = '[Cms] Load NavigationEntry items Fail';
/** @type {?} */
const LOAD_NAVIGATION_ITEMS_SUCCESS = '[Cms] Load NavigationEntry items Success';
class LoadNavigationItems extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS;
    }
}
class LoadNavigationItemsFail extends EntityFailAction {
    /**
     * @param {?} nodeId
     * @param {?} payload
     */
    constructor(nodeId, payload) {
        super(NAVIGATION_DETAIL_ENTITY, nodeId, payload);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS_FAIL;
    }
}
class LoadNavigationItemsSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
        this.payload = payload;
        this.type = LOAD_NAVIGATION_ITEMS_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$8 = undefined;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$8(state = initialState$8, action) {
    switch (action.type) {
        case LOAD_NAVIGATION_ITEMS_SUCCESS: {
            if (action.payload.components) {
                /** @type {?} */
                const components = action.payload.components;
                /** @type {?} */
                const newItem = components.reduce((compItems, component) => {
                    return Object.assign({}, compItems, { [`${component.uid}_AbstractCMSComponent`]: component });
                }, Object.assign({}));
                return Object.assign({}, state, newItem);
            }
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$5() {
    return {
        page: reducer$7,
        component: entityLoaderReducer(COMPONENT_ENTITY),
        navigation: entityLoaderReducer(NAVIGATION_DETAIL_ENTITY, reducer$8)
    };
}
/** @type {?} */
const reducerToken$5 = new InjectionToken('CmsReducers');
/** @type {?} */
const reducerProvider$5 = {
    provide: reducerToken$5,
    useFactory: getReducers$5
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearCmsState(reducer) {
    return function (state, action) {
        if (action.type === '[Site-context] Language Change' ||
            action.type === '[Auth] Logout' ||
            action.type === '[Auth] Login') {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
const metaReducers$3 = [clearCmsState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_COMPONENT = '[Cms] Load Component';
/** @type {?} */
const LOAD_COMPONENT_FAIL = '[Cms] Load Component Fail';
/** @type {?} */
const LOAD_COMPONENT_SUCCESS = '[Cms] Load Component Success';
/** @type {?} */
const GET_COMPONENET_FROM_PAGE = '[Cms] Get Component from Page';
class LoadComponent extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload);
        this.payload = payload;
        this.type = LOAD_COMPONENT;
    }
}
class LoadComponentFail extends EntityFailAction {
    /**
     * @param {?} uid
     * @param {?} payload
     */
    constructor(uid, payload) {
        super(COMPONENT_ENTITY, uid, payload);
        this.payload = payload;
        this.type = LOAD_COMPONENT_FAIL;
    }
}
/**
 * @template T
 */
class LoadComponentSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid);
        this.payload = payload;
        this.type = LOAD_COMPONENT_SUCCESS;
    }
}
/**
 * @template T
 */
class GetComponentFromPage extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.map(cmp => cmp.uid));
        this.payload = payload;
        this.type = GET_COMPONENET_FROM_PAGE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
/**
 * @abstract
 */
class CmsConfig extends OccConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OccCmsService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @protected
     * @return {?}
     */
    getBaseEndPoint() {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/cms');
    }
    /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    loadPageData(pageContext, fields) {
        /** @type {?} */
        let httpStringParams = 'pageType=' + pageContext.type;
        if (pageContext.type === PageType.CONTENT_PAGE) {
            httpStringParams = httpStringParams + '&pageLabelOrId=' + pageContext.id;
        }
        else {
            httpStringParams = httpStringParams + '&code=' + pageContext.id;
        }
        if (fields !== undefined) {
            httpStringParams = httpStringParams + '&fields=' + fields;
        }
        return this.http
            .get(this.getBaseEndPoint() + `/pages`, {
            headers: this.headers,
            params: new HttpParams({
                fromString: httpStringParams
            })
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    loadComponent(id, pageContext, fields) {
        return this.http
            .get(this.getBaseEndPoint() + `/components/${id}`, {
            headers: this.headers,
            params: new HttpParams({
                fromString: this.getRequestParams(pageContext, fields)
            })
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} idList
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    loadListComponents(idList, pageContext, fields, currentPage, pageSize, sort) {
        /** @type {?} */
        let requestParams = this.getRequestParams(pageContext, fields);
        if (currentPage !== undefined) {
            requestParams === ''
                ? (requestParams = requestParams + 'currentPage=' + currentPage)
                : (requestParams = requestParams + '&currentPage=' + currentPage);
        }
        if (pageSize !== undefined) {
            requestParams = requestParams + '&pageSize=' + pageSize;
        }
        if (sort !== undefined) {
            requestParams = requestParams + '&sort=' + sort;
        }
        return this.http
            .post(this.getBaseEndPoint() + `/components`, idList, {
            headers: this.headers,
            params: new HttpParams({
                fromString: requestParams
            })
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    getRequestParams(pageContext, fields) {
        /** @type {?} */
        let requestParams = '';
        switch (pageContext.type) {
            case PageType.PRODUCT_PAGE: {
                requestParams = 'productCode=' + pageContext.id;
                break;
            }
            case PageType.CATEGORY_PAGE: {
                requestParams = 'categoryCode=' + pageContext.id;
                break;
            }
            case PageType.CATALOG_PAGE: {
                requestParams = 'catalogCode=' + pageContext.id;
                break;
            }
        }
        if (fields !== undefined) {
            requestParams === ''
                ? (requestParams = requestParams + 'fields=' + fields)
                : (requestParams = requestParams + '&fields=' + fields);
        }
        return requestParams;
    }
    /**
     * @return {?}
     */
    get baseUrl() {
        return this.config.server.baseUrl || '';
    }
}
OccCmsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCmsService.ctorParameters = () => [
    { type: HttpClient },
    { type: CmsConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultPageService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getDefaultPageIdsBytype(type) {
        return this.config.defaultPageIdForType[type];
    }
}
DefaultPageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DefaultPageService.ctorParameters = () => [
    { type: CmsConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageContext {
    /**
     * @param {?} id
     * @param {?=} type
     */
    constructor(id, type) {
        this.id = id;
        this.type = type;
        if (this.type == null) {
            this.type = PageType.CONTENT_PAGE;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateUrlPipe {
    /**
     * @param {?} urlTranslator
     */
    constructor(urlTranslator) {
        this.urlTranslator = urlTranslator;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    transform(options) {
        return this.urlTranslator.translate(options);
    }
}
TranslateUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'cxTranslateUrl'
            },] }
];
/** @nocollapse */
TranslateUrlPipe.ctorParameters = () => [
    { type: UrlTranslationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UrlTranslationModule {
}
UrlTranslationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TranslateUrlPipe],
                exports: [TranslateUrlPipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageEffects {
    /**
     * @param {?} actions$
     * @param {?} occCmsService
     * @param {?} defaultPageService
     * @param {?} routingService
     */
    constructor(actions$, occCmsService, defaultPageService, routingService) {
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.defaultPageService = defaultPageService;
        this.routingService = routingService;
        this.loadPage$ = this.actions$.pipe(ofType(LOAD_PAGEDATA, REFRESH_LATEST_PAGE, '[Site-context] Language Change', '[Auth] Logout', '[Auth] Login'), map((action) => action.payload), switchMap(pageContext => {
            if (pageContext === undefined) {
                return this.routingService.getRouterState().pipe(filter(routerState => routerState && routerState.state), filter(routerState => routerState.state.cmsRequired), map(routerState => routerState.state.context), take(1), mergeMap(context => this.occCmsService.loadPageData(context).pipe(mergeMap(data => {
                    return [
                        new LoadPageDataSuccess(this.getPageData(data, context)),
                        new GetComponentFromPage(this.getComponents(data))
                    ];
                }), catchError(error => of(new LoadPageDataFail(error))))));
            }
            else {
                return this.occCmsService.loadPageData(pageContext).pipe(mergeMap(data => {
                    return [
                        new LoadPageDataSuccess(this.getPageData(data, pageContext)),
                        new GetComponentFromPage(this.getComponents(data))
                    ];
                }), catchError(error => of(new LoadPageDataFail(error))));
            }
        }));
    }
    /**
     * @private
     * @param {?} res
     * @param {?} pageContext
     * @return {?}
     */
    getPageData(res, pageContext) {
        /** @type {?} */
        const page = {
            loadTime: Date.now(),
            uuid: res.uuid,
            name: res.name,
            type: res.typeCode,
            title: res.title,
            catalogUuid: this.getCatalogUuid(res),
            pageId: res.uid,
            template: res.template,
            seen: new Array(),
            slots: {}
        };
        page.seen.push(pageContext.id);
        for (const slot of res.contentSlots.contentSlot) {
            page.slots[slot.position] = (/** @type {?} */ ({
                uid: slot.slotId,
                uuid: slot.slotUuid,
                catalogUuid: this.getCatalogUuid(slot),
                components: []
            }));
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of slot.components.component) {
                    page.slots[slot.position].components.push({
                        uid: component.uid,
                        uuid: component.uuid,
                        catalogUuid: this.getCatalogUuid(component),
                        typeCode: component.typeCode
                    });
                }
            }
        }
        return { key: this.getPageKey(pageContext, page), value: page };
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} page
     * @return {?}
     */
    getPageKey(pageContext, page) {
        switch (pageContext.type) {
            case PageType.CATEGORY_PAGE:
            case PageType.CATALOG_PAGE:
            case PageType.PRODUCT_PAGE: {
                /** @type {?} */
                const defaultPageIds = this.defaultPageService.getDefaultPageIdsBytype(pageContext.type);
                if (defaultPageIds.indexOf(page.pageId) > -1) {
                    return page.pageId + '_' + pageContext.type;
                }
                else {
                    return pageContext.id + '_' + pageContext.type;
                }
            }
            case PageType.CONTENT_PAGE: {
                return page.pageId + '_' + pageContext.type;
            }
        }
    }
    /**
     * @private
     * @param {?} cmsItem
     * @return {?}
     */
    getCatalogUuid(cmsItem) {
        if (cmsItem.properties && cmsItem.properties.smartedit) {
            /** @type {?} */
            const smartEditProp = cmsItem.properties.smartedit;
            if (smartEditProp.catalogVersionUuid) {
                return smartEditProp.catalogVersionUuid;
            }
            else if (smartEditProp.classes) {
                /** @type {?} */
                let catalogUuid;
                /** @type {?} */
                const seClass = smartEditProp.classes.split(' ');
                seClass.forEach(item => {
                    if (item.indexOf('smartedit-catalog-version-uuid') > -1) {
                        catalogUuid = item.substr('smartedit-catalog-version-uuid-'.length);
                    }
                });
                return catalogUuid;
            }
        }
    }
    /**
     * @private
     * @param {?} pageData
     * @return {?}
     */
    getComponents(pageData) {
        /** @type {?} */
        const components = [];
        if (pageData) {
            for (const slot of pageData.contentSlots.contentSlot) {
                if (slot.components.component &&
                    Array.isArray(slot.components.component)) {
                    for (const component of (/** @type {?} */ (slot.components.component))) {
                        // we dont put smartedit properties into store
                        if (component.properties) {
                            component.properties = undefined;
                        }
                        components.push(component);
                    }
                }
            }
        }
        return components;
    }
}
PageEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccCmsService },
    { type: DefaultPageService },
    { type: RoutingService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], PageEffects.prototype, "loadPage$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentEffects {
    /**
     * @param {?} actions$
     * @param {?} occCmsService
     * @param {?} routingService
     */
    constructor(actions$, occCmsService, routingService) {
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.routingService = routingService;
        this.loadComponent$ = this.actions$.pipe(ofType(LOAD_COMPONENT), map((action) => action.payload), switchMap(uid => {
            return this.routingService.getRouterState().pipe(filter(routerState => routerState !== undefined), map(routerState => routerState.state.context), take(1), mergeMap(pageContext => this.occCmsService.loadComponent(uid, pageContext).pipe(map(data => new LoadComponentSuccess(data)), catchError(error => of(new LoadComponentFail(uid, error))))));
        }));
    }
}
ComponentEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccCmsService },
    { type: RoutingService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ComponentEffects.prototype, "loadComponent$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationEntryItemEffects {
    /**
     * @param {?} actions$
     * @param {?} occCmsService
     * @param {?} routingService
     */
    constructor(actions$, occCmsService, routingService) {
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(LOAD_NAVIGATION_ITEMS), map((action) => action.payload), map(payload => {
            return {
                ids: this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId
            };
        }), mergeMap(data => {
            if (data.ids.componentIds.idList.length > 0) {
                return this.routingService.getRouterState().pipe(filter(routerState => routerState !== undefined), map(routerState => routerState.state.context), take(1), mergeMap(pageContext => {
                    // download all items in one request
                    return this.occCmsService
                        .loadListComponents(data.ids.componentIds, pageContext, 'DEFAULT', 0, data.ids.componentIds.idList.length)
                        .pipe(map(res => new LoadNavigationItemsSuccess({
                        nodeId: data.nodeId,
                        components: res.component
                    })), catchError(error => of(new LoadNavigationItemsFail(data.nodeId, error))));
                }));
            }
            else if (data.ids.pageIds.idList.length > 0) ;
            else if (data.ids.mediaIds.idList.length > 0) ;
            else {
                return of(new LoadNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
            }
        }));
    }
    // We only consider 3 item types: cms page, cms component, and media.
    /**
     * @param {?} itemList
     * @return {?}
     */
    getIdListByItemType(itemList) {
        /** @type {?} */
        const pageIds = { idList: [] };
        /** @type {?} */
        const componentIds = { idList: [] };
        /** @type {?} */
        const mediaIds = { idList: [] };
        itemList.forEach(item => {
            if (item.superType === 'AbstractCMSComponent') {
                componentIds.idList.push(item.id);
            }
            else if (item.superType === 'AbstractPage') {
                pageIds.idList.push(item.id);
            }
            else if (item.superType === 'AbstractMedia') {
                mediaIds.idList.push(item.id);
            }
        });
        return { pageIds: pageIds, componentIds: componentIds, mediaIds: mediaIds };
    }
}
NavigationEntryItemEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NavigationEntryItemEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccCmsService },
    { type: RoutingService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$4 = [
    PageEffects,
    ComponentEffects,
    NavigationEntryItemEffects
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getCmsState = createFeatureSelector(CMS_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getPageEntitiesSelector = (state) => state.entities;
/** @type {?} */
const getPageCount = (state) => state.count;
/** @type {?} */
const getLatestPageKeySelector = (state) => state.latestPageKey;
/** @type {?} */
const getPageState = createSelector(getCmsState, (state) => state.page);
/** @type {?} */
const getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
const getLatestPageKey = createSelector(getPageState, getLatestPageKeySelector);
/** @type {?} */
const getLatestPage = createSelector(getPageEntities, getLatestPageKey, (entities, key) => {
    return entities[key];
});
/** @type {?} */
const currentSlotSelectorFactory = (position) => {
    return createSelector(getLatestPage, entity => {
        if (entity) {
            return entity.slots[position];
        }
    });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getComponentEntitiesSelector = (state) => Object.keys(state.entities).reduce((acc, cur) => {
    acc[cur] = state.entities[cur].value;
    return acc;
}, {});
/** @type {?} */
const getComponentState = createSelector(getCmsState, (state) => state.component);
/** @type {?} */
const getComponentEntities = createSelector(getComponentState, getComponentEntitiesSelector);
/** @type {?} */
const componentStateSelectorFactory = (uid) => {
    return createSelector(getComponentState, entities => entityStateSelector(entities, uid));
};
/** @type {?} */
const componentSelectorFactory = (uid) => {
    return createSelector(componentStateSelectorFactory(uid), state => loaderValueSelector(state));
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getNavigationEntryItemState = createSelector(getCmsState, (state) => state.navigation);
/** @type {?} */
const getSelectedNavigationEntryItemState = (nodeId) => {
    return createSelector(getNavigationEntryItemState, nodes => entityStateSelector(nodes, nodeId));
};
/** @type {?} */
const itemsSelectorFactory = (nodeId) => {
    return createSelector(getSelectedNavigationEntryItemState(nodeId), itemState => loaderValueSelector(itemState));
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsService {
    /**
     * @param {?} store
     * @param {?} defaultPageService
     */
    constructor(store, defaultPageService) {
        this.store = store;
        this.defaultPageService = defaultPageService;
        this._launchInSmartEdit = false;
    }
    /**
     * Set _launchInSmartEdit value
     * @param {?} value
     * @return {?}
     */
    set launchInSmartEdit(value) {
        this._launchInSmartEdit = value;
    }
    /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    isLaunchInSmartEdit() {
        return this._launchInSmartEdit;
    }
    /**
     * Get current CMS page data
     * @return {?}
     */
    getCurrentPage() {
        return this.store.pipe(select(getLatestPage));
    }
    /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    getComponentData(uid) {
        return this.store.pipe(select(componentStateSelectorFactory(uid)), withLatestFrom(this.getCurrentPage()), tap(([componentState, currentPage]) => {
            /** @type {?} */
            const attemptedLoad = componentState.loading ||
                componentState.success ||
                componentState.error;
            if (!attemptedLoad && currentPage) {
                this.store.dispatch(new LoadComponent(uid));
            }
        }), map(([productState]) => productState.value), filter(Boolean));
    }
    /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    getContentSlot(position) {
        return this.store.pipe(select(currentSlotSelectorFactory(position)), filter(Boolean));
    }
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    getNavigationEntryItems(navigationNodeUid) {
        return this.store.pipe(select(itemsSelectorFactory(navigationNodeUid)));
    }
    /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    loadNavigationItems(rootUid, itemList) {
        this.store.dispatch(new LoadNavigationItems({
            nodeId: rootUid,
            items: itemList
        }));
    }
    /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    refreshLatestPage() {
        this.store.dispatch(new RefreshLatestPage());
    }
    /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    refreshComponent(uid) {
        this.store.dispatch(new LoadComponent(uid));
    }
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @return {?}
     */
    hasPage(pageContext) {
        /** @type {?} */
        let tryTimes = 0;
        return this.store.pipe(select(getPageEntities), map((entities) => {
            /** @type {?} */
            let key = pageContext.id + '_' + pageContext.type;
            /** @type {?} */
            let found = !!entities[key];
            if (!found) {
                /** @type {?} */
                const defaultPageIds = this.defaultPageService.getDefaultPageIdsBytype(pageContext.type);
                if (defaultPageIds) {
                    for (let i = 0, len = defaultPageIds.length; i < len; i++) {
                        key = defaultPageIds[i] + '_' + pageContext.type;
                        found =
                            entities[key] &&
                                entities[key].seen.indexOf(pageContext.id) > -1;
                        if (found) {
                            break;
                        }
                    }
                }
            }
            // found page directly from store
            if (found && tryTimes === 0) {
                this.store.dispatch(new UpdateLatestPageKey(key));
            }
            return found;
        }), tap(found => {
            // if not found, load this cms page
            if (!found) {
                tryTimes = tryTimes + 1;
                this.store.dispatch(new LoadPageData(pageContext));
            }
        }), filter(found => found || tryTimes === 3), take(1));
    }
}
CmsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CmsService.ctorParameters = () => [
    { type: Store },
    { type: DefaultPageService }
];
/** @nocollapse */ CmsService.ngInjectableDef = defineInjectable({ factory: function CmsService_Factory() { return new CmsService(inject(Store), inject(DefaultPageService)); }, token: CmsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class PageTitleResolver {
    /**
     * @param {?} page
     * @return {?}
     */
    getScore(page) {
        /** @type {?} */
        let score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        return score;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageTitleService {
    /**
     * @param {?} resolvers
     * @param {?} cms
     */
    constructor(resolvers, cms) {
        this.resolvers = resolvers;
        this.cms = cms;
    }
    /**
     * @return {?}
     */
    getTitle() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(page => {
            /** @type {?} */
            const pageTitleResolver = this.getResolver(page);
            if (pageTitleResolver) {
                return pageTitleResolver.resolve();
            }
            else {
                // we do not have a page resolver
                return of('');
            }
        }));
    }
    /**
     * return the title resolver with the best match
     * title resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     * @protected
     * @param {?} page
     * @return {?}
     */
    getResolver(page) {
        /** @type {?} */
        const matchingResolvers = this.resolvers.filter(resolver => resolver.getScore(page) > 0);
        matchingResolvers.sort(function (a, b) {
            return b.getScore(page) - a.getScore(page);
        });
        return matchingResolvers[0];
    }
}
PageTitleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PageTitleService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [PageTitleResolver,] }] },
    { type: CmsService }
];
/** @nocollapse */ PageTitleService.ngInjectableDef = defineInjectable({ factory: function PageTitleService_Factory() { return new PageTitleService(inject(PageTitleResolver), inject(CmsService)); }, token: PageTitleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentMapperService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} config
     * @param {?} document
     * @param {?} platform
     */
    constructor(componentFactoryResolver, config, document, platform) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.config = config;
        this.document = document;
        this.platform = platform;
        this.missingComponents = [];
        this.loadedWebComponents = {};
    }
    /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @protected
     * @param {?} typeCode the component type
     * @return {?}
     */
    getType(typeCode) {
        /** @type {?} */
        const componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (this.missingComponents.indexOf(typeCode) === -1) {
                this.missingComponents.push(typeCode);
                console.warn('No component implementation found for the CMS component type', typeCode, '.\n', 'Make sure you implement a component and register it in the mapper.');
            }
        }
        return componentConfig ? componentConfig.selector : null;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    getFactoryEntryByCode(typeCode) {
        /** @type {?} */
        const alias = this.getType(typeCode);
        if (!alias) {
            return;
        }
        /** @type {?} */
        const factoryEntries = Array.from(this.componentFactoryResolver['_factories'].entries());
        return factoryEntries.find(([, value]) => value.selector === alias);
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    getComponentTypeByCode(typeCode) {
        /** @type {?} */
        const factoryEntry = this.getFactoryEntryByCode(typeCode);
        return factoryEntry ? factoryEntry[0] : null;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    getComponentFactoryByCode(typeCode) {
        /** @type {?} */
        const factoryEntry = this.getFactoryEntryByCode(typeCode);
        return factoryEntry ? factoryEntry[1] : null;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    isWebComponent(typeCode) {
        return (this.getType(typeCode) || '').includes('#');
    }
    /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    initWebComponent(componentType, renderer) {
        return new Promise(resolve => {
            const [path, selector] = this.getType(componentType).split('#');
            /** @type {?} */
            let script = this.loadedWebComponents[path];
            if (!script) {
                script = renderer.createElement('script');
                this.loadedWebComponents[path] = script;
                script.setAttribute('src', path);
                renderer.appendChild(this.document.body, script);
                if (isPlatformBrowser(this.platform)) {
                    script.onload = () => {
                        script.onload = null;
                    };
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                /** @type {?} */
                const chainedOnload = script.onload;
                script.onload = () => {
                    chainedOnload();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    }
}
ComponentMapperService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentMapperService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: CmsConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsOccModule {
}
CmsOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [OccCmsService, ComponentMapperService, DefaultPageService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function cmsStoreConfigFactory() {
    // if we want to reuse CMS_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: { ssrTransfer: { keys: { [CMS_FEATURE]: true } } }
    };
    return config;
}
class CmsStoreModule {
}
CmsStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    CmsOccModule,
                    StateModule,
                    StoreModule.forFeature(CMS_FEATURE, reducerToken$5, { metaReducers: metaReducers$3 }),
                    EffectsModule.forFeature(effects$4),
                    ConfigModule.withConfigFactory(cmsStoreConfigFactory)
                ],
                providers: [reducerProvider$5]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentPageTitleResolver extends PageTitleResolver {
    /**
     * @param {?} cms
     */
    constructor(cms) {
        super();
        this.cms = cms;
        this.pageType = PageType.CONTENT_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), map(page => page.title));
    }
}
ContentPageTitleResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ContentPageTitleResolver.ctorParameters = () => [
    { type: CmsService }
];
/** @nocollapse */ ContentPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function ContentPageTitleResolver_Factory() { return new ContentPageTitleResolver(inject(CmsService)); }, token: ContentPageTitleResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsPageTitleModule {
}
CmsPageTitleModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    {
                        provide: PageTitleResolver,
                        useExisting: ContentPageTitleResolver,
                        multi: true
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsModule {
}
CmsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CmsOccModule, CmsStoreModule, CmsPageTitleModule],
                providers: [CmsService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductPageTitleResolver extends PageTitleResolver {
    /**
     * @param {?} routingService
     * @param {?} productService
     */
    constructor(routingService, productService) {
        super();
        this.routingService = routingService;
        this.productService = productService;
        this.pageType = PageType.PRODUCT_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.routingService.getRouterState().pipe(map(state => state.state.params['productCode']), filter(Boolean), switchMap(code => this.productService.get(code).pipe(filter(Boolean), map(p => p.name))));
    }
}
ProductPageTitleResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ProductPageTitleResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService }
];
/** @nocollapse */ ProductPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function ProductPageTitleResolver_Factory() { return new ProductPageTitleResolver(inject(RoutingService), inject(ProductService)); }, token: ProductPageTitleResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchPageTitleResolver extends PageTitleResolver {
    /**
     * @param {?} routingService
     * @param {?} productSearchService
     */
    constructor(routingService, productSearchService) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'SearchResultsListPageTemplate';
    }
    /**
     * @return {?}
     */
    resolve() {
        return combineLatest(this.productSearchService.getSearchResults().pipe(filter(data => !!(data && data.pagination)), map(results => results.pagination.totalResults)), this.routingService.getRouterState().pipe(map(state => state.state.params['query']), filter(Boolean))).pipe(map(([t, q]) => this.getSearchResultTitle(t, q)));
    }
    /**
     * @protected
     * @param {?} total
     * @param {?} part
     * @return {?}
     */
    getSearchResultTitle(total, part) {
        return `${total} results for "${part}"`;
    }
}
SearchPageTitleResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SearchPageTitleResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService }
];
/** @nocollapse */ SearchPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function SearchPageTitleResolver_Factory() { return new SearchPageTitleResolver(inject(RoutingService), inject(ProductSearchService)); }, token: SearchPageTitleResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CategoryPageTitleResolver extends PageTitleResolver {
    /**
     * @param {?} routingService
     * @param {?} productSearchService
     * @param {?} cms
     */
    constructor(routingService, productSearchService, cms) {
        super();
        this.routingService = routingService;
        this.productSearchService = productSearchService;
        this.cms = cms;
        this.pageType = PageType.CATEGORY_PAGE;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap(page => {
            // only the existence of a plp component tells us if products
            // are rendered or if this is an ordinary content page
            if (this.hasProductListComponent(page)) {
                return this.productSearchService.getSearchResults().pipe(map(data => {
                    if (data.breadcrumbs && data.breadcrumbs.length > 0) {
                        return `${data.pagination.totalResults} results for ${data.breadcrumbs[0].facetValueName}`;
                    }
                }));
            }
            else {
                return of(page.title || page.name);
            }
        }));
    }
    /**
     * @protected
     * @param {?} page
     * @return {?}
     */
    hasProductListComponent(page) {
        // ProductListComponent
        return !!Object.keys(page.slots).find(key => !!page.slots[key].components.find(comp => comp.typeCode === 'CMSProductListComponent'));
    }
}
CategoryPageTitleResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CategoryPageTitleResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductSearchService },
    { type: CmsService }
];
/** @nocollapse */ CategoryPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function CategoryPageTitleResolver_Factory() { return new CategoryPageTitleResolver(inject(RoutingService), inject(ProductSearchService), inject(CmsService)); }, token: CategoryPageTitleResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pageTitleResolvers = [
    {
        provide: PageTitleResolver,
        useExisting: ProductPageTitleResolver,
        multi: true
    },
    {
        provide: PageTitleResolver,
        useExisting: CategoryPageTitleResolver,
        multi: true
    },
    {
        provide: PageTitleResolver,
        useExisting: SearchPageTitleResolver,
        multi: true
    }
];
class ProductModule {
}
ProductModule.decorators = [
    { type: NgModule, args: [{
                imports: [ProductOccModule, ProductStoreModule, CmsModule],
                providers: [
                    ProductService,
                    ProductSearchService,
                    ProductReviewService,
                    ...pageTitleResolvers
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartEffects {
    /**
     * @param {?} actions$
     * @param {?} productImageConverter
     * @param {?} occCartService
     * @param {?} cartData
     */
    constructor(actions$, productImageConverter, occCartService, cartData) {
        this.actions$ = actions$;
        this.productImageConverter = productImageConverter;
        this.occCartService = occCartService;
        this.cartData = cartData;
        this.loadCart$ = this.actions$.pipe(ofType(LOAD_CART, LANGUAGE_CHANGE, CURRENCY_CHANGE), map((action) => action.payload), mergeMap(payload => {
            /** @type {?} */
            const loadCartParams = {
                userId: (payload && payload.userId) || this.cartData.userId,
                cartId: (payload && payload.cartId) || this.cartData.cartId,
                details: payload && payload.details !== undefined
                    ? payload.details
                    : this.cartData.getDetails
            };
            if (this.isMissingData(loadCartParams)) {
                return of(new LoadCartFail({}));
            }
            return this.occCartService
                .loadCart(loadCartParams.userId, loadCartParams.cartId, loadCartParams.details)
                .pipe(map((cart) => {
                if (cart && cart.entries) {
                    for (const entry of cart.entries) {
                        this.productImageConverter.convertProduct(entry.product);
                    }
                }
                return new LoadCartSuccess(cart);
            }), catchError(error => of(new LoadCartFail(error))));
        }));
        this.createCart$ = this.actions$.pipe(ofType(CREATE_CART), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .createCart(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap((cart) => {
                if (cart.entries) {
                    for (const entry of cart.entries) {
                        this.productImageConverter.convertProduct(entry.product);
                    }
                }
                if (payload.toMergeCartGuid) {
                    return [
                        new CreateCartSuccess(cart),
                        new MergeCartSuccess()
                    ];
                }
                return [new CreateCartSuccess(cart)];
            }), catchError(error => of(new CreateCartFail(error))));
        }));
        this.mergeCart$ = this.actions$.pipe(ofType(MERGE_CART), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService.loadCart(payload.userId, 'current').pipe(map(currentCart => {
                return new CreateCart({
                    userId: payload.userId,
                    oldCartId: payload.cartId,
                    toMergeCartGuid: currentCart ? currentCart.guid : undefined
                });
            }));
        }));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    isMissingData(payload) {
        return payload.userId === undefined || payload.cartId === undefined;
    }
}
CartEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductImageConverterService },
    { type: OccCartService },
    { type: CartDataService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CartEffects.prototype, "loadCart$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CartEffects.prototype, "createCart$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CartEffects.prototype, "mergeCart$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartEntryEffects {
    /**
     * @param {?} actions$
     * @param {?} cartService
     */
    constructor(actions$, cartService) {
        this.actions$ = actions$;
        this.cartService = cartService;
        this.addEntry$ = this.actions$.pipe(ofType(ADD_ENTRY), map((action) => action.payload), mergeMap(payload => this.cartService
            .addEntry(payload.userId, payload.cartId, payload.productCode, payload.quantity)
            .pipe(map((entry) => new AddEntrySuccess(entry)), catchError(error => of(new AddEntryFail(error))))));
        this.removeEntry$ = this.actions$.pipe(ofType(REMOVE_ENTRY), map((action) => action.payload), mergeMap(payload => this.cartService
            .removeEntry(payload.userId, payload.cartId, payload.entry)
            .pipe(map(() => {
            return new RemoveEntrySuccess();
        }), catchError(error => of(new RemoveEntryFail(error))))));
        this.updateEntry$ = this.actions$.pipe(ofType(UPDATE_ENTRY), map((action) => action.payload), mergeMap(payload => this.cartService
            .updateEntry(payload.userId, payload.cartId, payload.entry, payload.qty)
            .pipe(map(() => {
            return new UpdateEntrySuccess();
        }), catchError(error => of(new UpdateEntryFail(error))))));
    }
}
CartEntryEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartEntryEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccCartService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CartEntryEffects.prototype, "addEntry$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CartEntryEffects.prototype, "removeEntry$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CartEntryEffects.prototype, "updateEntry$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$5 = [CartEffects, CartEntryEffects];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartStoreModule {
}
CartStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    CartOccModule,
                    StoreModule.forFeature(CART_FEATURE, reducerToken$2, { metaReducers: metaReducers$1 }),
                    EffectsModule.forFeature(effects$5)
                ],
                providers: [reducerProvider$2]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartModule {
}
CartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CartOccModule, CartStoreModule],
                providers: [CartDataService, CartService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SERVER_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
/** @type {?} */
const SERVER_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
/**
 * @param {?} meta
 * @return {?}
 */
function serverConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    const baseUrl = getMetaTagContent(SERVER_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== SERVER_BASE_URL_META_TAG_PLACEHOLDER
        ? { server: { baseUrl } }
        : {};
}
/**
 * @param {?} name
 * @param {?} meta
 * @return {?}
 */
function getMetaTagContent(name, meta) {
    /** @type {?} */
    const metaTag = meta.getTag(`name="${name}"`);
    return metaTag && metaTag.content;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHECKOUT_FEATURE = 'checkout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
/** @type {?} */
const ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
/** @type {?} */
const ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
/** @type {?} */
const SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
/** @type {?} */
const SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
/** @type {?} */
const SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
/** @type {?} */
const LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
/** @type {?} */
const LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
/** @type {?} */
const LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
/** @type {?} */
const CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
/** @type {?} */
const SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
/** @type {?} */
const SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
/** @type {?} */
const SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
/** @type {?} */
const CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
/** @type {?} */
const CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
/** @type {?} */
const CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
/** @type {?} */
const SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
/** @type {?} */
const SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
/** @type {?} */
const SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
/** @type {?} */
const PLACE_ORDER = '[Checkout] Place Order';
/** @type {?} */
const PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
/** @type {?} */
const PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
/** @type {?} */
const CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
/** @type {?} */
const CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
class AddDeliveryAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS;
    }
}
class AddDeliveryAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_FAIL;
    }
}
class AddDeliveryAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
    }
}
class SetDeliveryAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS;
    }
}
class SetDeliveryAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_FAIL;
    }
}
class SetDeliveryAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_SUCCESS;
    }
}
class LoadSupportedDeliveryModes {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES;
    }
}
class LoadSupportedDeliveryModesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
    }
}
class LoadSupportedDeliveryModesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
    }
}
class SetDeliveryMode {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE;
    }
}
class SetDeliveryModeFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_FAIL;
    }
}
class SetDeliveryModeSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_SUCCESS;
    }
}
class CreatePaymentDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS;
    }
}
class CreatePaymentDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_FAIL;
    }
}
class CreatePaymentDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
    }
}
class SetPaymentDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS;
    }
}
class SetPaymentDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_FAIL;
    }
}
class SetPaymentDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_SUCCESS;
    }
}
class PlaceOrder {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER;
    }
}
class PlaceOrderFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_FAIL;
    }
}
class PlaceOrderSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_SUCCESS;
    }
}
class ClearSupportedDeliveryModes {
    constructor() {
        this.type = CLEAR_SUPPORTED_DELIVERY_MODES;
    }
}
class ClearCheckoutStep {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_STEP;
    }
}
class ClearCheckoutData {
    constructor() {
        this.type = CLEAR_CHECKOUT_DATA;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_CARD_TYPES = '[Checkout] Load Card Types';
/** @type {?} */
const LOAD_CARD_TYPES_FAIL = '[Checkout] Load Card Fail';
/** @type {?} */
const LOAD_CARD_TYPES_SUCCESS = '[Checkout] Load Card Success';
class LoadCardTypes {
    constructor() {
        this.type = LOAD_CARD_TYPES;
    }
}
class LoadCardTypesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_FAIL;
    }
}
class LoadCardTypesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VERIFY_ADDRESS = '[Checkout] Verify Address';
/** @type {?} */
const VERIFY_ADDRESS_FAIL = '[Checkout] Verify Address Fail';
/** @type {?} */
const VERIFY_ADDRESS_SUCCESS = '[Checkout] Verify Address Success';
/** @type {?} */
const CLEAR_ADDRESS_VERIFICATION_RESULTS = '[Checkout] Clear Address Verification Results';
class VerifyAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS;
    }
}
class VerifyAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_FAIL;
    }
}
class VerifyAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_SUCCESS;
    }
}
class ClearAddressVerificationResults {
    constructor() {
        this.type = CLEAR_ADDRESS_VERIFICATION_RESULTS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHECKOUT_CLEAR_MISCS_DATA = '[Checkout] Clear Miscs Data';
class CheckoutClearMiscsData {
    constructor() {
        this.type = CHECKOUT_CLEAR_MISCS_DATA;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$9 = {
    address: {},
    deliveryMode: {
        supported: {},
        selected: ''
    },
    paymentDetails: {},
    orderDetails: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$9(state = initialState$9, action) {
    switch (action.type) {
        case ADD_DELIVERY_ADDRESS_SUCCESS:
        case SET_DELIVERY_ADDRESS_SUCCESS: {
            /** @type {?} */
            const address = action.payload;
            return Object.assign({}, state, { address });
        }
        case LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS: {
            /** @type {?} */
            const supportedModes = action.payload.deliveryModes;
            if (!supportedModes) {
                return state;
            }
            /** @type {?} */
            const supported = supportedModes.reduce((modes, mode) => {
                return Object.assign({}, modes, { [mode.code]: mode });
            }, Object.assign({}, state.deliveryMode.supported));
            return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { supported }) });
        }
        case SET_DELIVERY_MODE_SUCCESS: {
            /** @type {?} */
            const selected = action.payload;
            return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { selected }) });
        }
        case CREATE_PAYMENT_DETAILS_SUCCESS:
        case SET_PAYMENT_DETAILS_SUCCESS: {
            return Object.assign({}, state, { paymentDetails: action.payload });
        }
        case CREATE_PAYMENT_DETAILS_FAIL: {
            /** @type {?} */
            const paymentDetails = action.payload;
            if (paymentDetails['hasError']) {
                return Object.assign({}, state, { paymentDetails });
            }
            return state;
        }
        case PLACE_ORDER_SUCCESS: {
            /** @type {?} */
            const orderDetails = action.payload;
            return Object.assign({}, state, { orderDetails });
        }
        case CLEAR_CHECKOUT_DATA: {
            return initialState$9;
        }
        case CLEAR_CHECKOUT_STEP: {
            /** @type {?} */
            const stepNumber = action.payload;
            switch (stepNumber) {
                case 1: {
                    return Object.assign({}, state, { address: {} });
                }
                case 2: {
                    return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { supported: {}, selected: '' }) });
                }
                case 3: {
                    return Object.assign({}, state, { paymentDetails: {} });
                }
            }
            return state;
        }
        case CLEAR_SUPPORTED_DELIVERY_MODES:
        case CHECKOUT_CLEAR_MISCS_DATA: {
            return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { supported: {} }) });
        }
    }
    return state;
}
/** @type {?} */
const getDeliveryAddress = (state) => state.address;
/** @type {?} */
const getDeliveryMode = (state) => state.deliveryMode;
/** @type {?} */
const getPaymentDetails = (state) => state.paymentDetails;
/** @type {?} */
const getOrderDetails = (state) => state.orderDetails;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$a = {
    results: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$a(state = initialState$a, action) {
    switch (action.type) {
        case VERIFY_ADDRESS_SUCCESS: {
            /** @type {?} */
            const results = action.payload;
            return Object.assign({}, state, { results });
        }
        case VERIFY_ADDRESS_FAIL: {
            return Object.assign({}, state, { results: 'FAIL' });
        }
        case CLEAR_ADDRESS_VERIFICATION_RESULTS: {
            return Object.assign({}, state, { results: {} });
        }
    }
    return state;
}
/** @type {?} */
const getAddressVerificationResults = (state) => state.results;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$b = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$b(state = initialState$b, action) {
    switch (action.type) {
        case LOAD_CARD_TYPES_SUCCESS: {
            /** @type {?} */
            const cardTypes = action.payload;
            /** @type {?} */
            const entities = cardTypes.reduce((cardTypesEntities, name) => {
                return Object.assign({}, cardTypesEntities, { [name.code]: name });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CHECKOUT_CLEAR_MISCS_DATA: {
            return initialState$b;
        }
    }
    return state;
}
/** @type {?} */
const getCardTypesEntites = (state) => state.entities;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$6() {
    return {
        steps: reducer$9,
        cardTypes: reducer$b,
        addressVerification: reducer$a
    };
}
/** @type {?} */
const reducerToken$6 = new InjectionToken('CheckoutReducers');
/** @type {?} */
const reducerProvider$6 = {
    provide: reducerToken$6,
    useFactory: getReducers$6
};
/** @type {?} */
const getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
/**
 * @param {?} reducer
 * @return {?}
 */
function clearCheckoutState(reducer) {
    return function (state, action) {
        switch (action.type) {
            case LANGUAGE_CHANGE: {
                action = new CheckoutClearMiscsData();
                break;
            }
            case CURRENCY_CHANGE: {
                action = new ClearSupportedDeliveryModes();
                break;
            }
            case LOGOUT: {
                action = new ClearCheckoutData();
                break;
            }
        }
        return reducer(state, action);
    };
}
/** @type {?} */
const metaReducers$4 = [clearCheckoutState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getCheckoutStepsState = createSelector(getCheckoutState, (state) => state.steps);
/** @type {?} */
const getDeliveryAddress$1 = createSelector(getCheckoutStepsState, getDeliveryAddress);
/** @type {?} */
const getDeliveryMode$1 = createSelector(getCheckoutStepsState, getDeliveryMode);
/** @type {?} */
const getSupportedDeliveryModes = createSelector(getDeliveryMode$1, deliveryMode => {
    return Object.keys(deliveryMode.supported).map(code => deliveryMode.supported[code]);
});
/** @type {?} */
const getSelectedCode = createSelector(getDeliveryMode$1, deliveryMode => {
    return deliveryMode.selected;
});
/** @type {?} */
const getSelectedDeliveryMode = createSelector(getDeliveryMode$1, deliveryMode => {
    if (deliveryMode.selected !== '') {
        if (Object.keys(deliveryMode.supported).length === 0) {
            return null;
        }
        return deliveryMode.supported[deliveryMode.selected];
    }
});
/** @type {?} */
const getPaymentDetails$1 = createSelector(getCheckoutStepsState, getPaymentDetails);
/** @type {?} */
const getCheckoutOrderDetails = createSelector(getCheckoutStepsState, getOrderDetails);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getCardTypesState = createSelector(getCheckoutState, (state) => state.cardTypes);
/** @type {?} */
const getCardTypesEntites$1 = createSelector(getCardTypesState, getCardTypesEntites);
/** @type {?} */
const getAllCardTypes = createSelector(getCardTypesEntites$1, entites => {
    return Object.keys(entites).map(code => entites[code]);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getAddressVerificationResultsState = createSelector(getCheckoutState, (state) => state.addressVerification);
/** @type {?} */
const getAddressVerificationResults$1 = createSelector(getAddressVerificationResultsState, getAddressVerificationResults);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const GLOBAL_MESSAGE_FEATURE = 'global-message';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ADD_MESSAGE = '[Global-message] Add a Message';
/** @type {?} */
const REMOVE_MESSAGE = '[Global-message] Remove a Message';
/** @type {?} */
const REMOVE_MESSAGES_BY_TYPE = '[Global-message] Remove messages by type';
class AddMessage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_MESSAGE;
    }
}
class RemoveMessage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGE;
    }
}
class RemoveMessagesByType {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGES_BY_TYPE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getGlobalMessageState = createFeatureSelector(GLOBAL_MESSAGE_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getGlobalMessageEntities = createSelector(getGlobalMessageState, (state) => state.entities);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$c = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$c(state = initialState$c, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            /** @type {?} */
            const message = action.payload;
            if (state.entities[message.type] === undefined) {
                return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [message.type]: [message.text] }) });
            }
            else {
                /** @type {?} */
                const msgs = state.entities[message.type];
                if (msgs.indexOf(message.text) === -1) {
                    return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [message.type]: [...msgs, message.text] }) });
                }
            }
            return state;
        }
        case REMOVE_MESSAGE: {
            /** @type {?} */
            const msgType = action.payload.type;
            /** @type {?} */
            const msgIndex = action.payload.index;
            if (Object.keys(state.entities).length === 0 ||
                !state.entities[msgType]) {
                return state;
            }
            /** @type {?} */
            const messages = [...state.entities[msgType]];
            messages.splice(msgIndex, 1);
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [msgType]: messages }) });
        }
        case REMOVE_MESSAGES_BY_TYPE: {
            /** @type {?} */
            const entities = Object.assign({}, state.entities, { [action.payload]: [] });
            return Object.assign({}, state, { entities });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$7() {
    return reducer$c;
}
/** @type {?} */
const reducerToken$7 = new InjectionToken('GlobalMessageReducers');
/** @type {?} */
const reducerProvider$7 = {
    provide: reducerToken$7,
    useFactory: getReducers$7
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageStoreModule {
}
GlobalMessageStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StateModule,
                    StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken$7)
                ],
                providers: [reducerProvider$7]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Get all global messages
     * @return {?}
     */
    get() {
        return this.store.pipe(select(getGlobalMessageEntities), filter(data => data !== undefined));
    }
    /**
     * Add one message into store
     * @param {?} message
     * @return {?}
     */
    add(message) {
        this.store.dispatch(new AddMessage(message));
    }
    /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    remove(type, index) {
        if (index !== undefined) {
            this.store.dispatch(new RemoveMessage({
                type: type,
                index: index
            }));
        }
        else {
            this.store.dispatch(new RemoveMessagesByType(type));
        }
    }
}
GlobalMessageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GlobalMessageService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GlobalMessageType = {
    MSG_TYPE_CONFIRMATION: '[GlobalMessage] Confirmation',
    MSG_TYPE_ERROR: '[GlobalMessage] Error',
    MSG_TYPE_INFO: '[GlobalMessage] Information',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const OAUTH_ENDPOINT$3 = '/authorizationserver/oauth/token';
class HttpErrorInterceptor {
    /**
     * @param {?} globalMessageService
     */
    constructor(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return next.handle(request).pipe(catchError((errResponse) => {
            if (errResponse instanceof HttpErrorResponse) {
                switch (errResponse.status) {
                    case 400: // Bad Request
                        if (errResponse.url.indexOf(OAUTH_ENDPOINT$3) !== -1 &&
                            errResponse.error.error === 'invalid_grant') {
                            if (request.body.get('grant_type') === 'password') {
                                this.globalMessageService.add({
                                    type: GlobalMessageType.MSG_TYPE_ERROR,
                                    text: this.getErrorMessage(errResponse) +
                                        '. Please login again.'
                                });
                                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
                            }
                        }
                        else {
                            this.globalMessageService.add({
                                type: GlobalMessageType.MSG_TYPE_ERROR,
                                text: this.getErrorMessage(errResponse)
                            });
                        }
                        break;
                    case 403: // Forbidden
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'You are not authorized to perform this action.'
                        });
                        break;
                    case 404: // Not Found
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'The requested resource could not be found'
                        });
                        break;
                    case 409: // Already Exists
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'Already exists'
                        });
                        break;
                    case 502: // Bad Gateway
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'A server error occurred. Please try again later.'
                        });
                        break;
                    case 504: // Gateway Timeout
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'The server did not responded, please try again later.'
                        });
                        break;
                    default:
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: this.getErrorMessage(errResponse)
                        });
                }
            }
            else {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'An unknown error occured'
                });
            }
            return throwError(errResponse);
        }));
    }
    /**
     * @private
     * @param {?} resp
     * @return {?}
     */
    getErrorMessage(resp) {
        /** @type {?} */
        let errMsg = resp.message;
        if (resp.error) {
            if (resp.error.errors && resp.error.errors instanceof Array) {
                errMsg = resp.error.errors[0].message;
            }
            else if (resp.error.error_description) {
                errMsg = resp.error.error_description;
            }
        }
        return errMsg;
    }
}
HttpErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpErrorInterceptor.ctorParameters = () => [
    { type: GlobalMessageService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const interceptors$2 = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: GlobalMessageModule,
            providers: [...interceptors$2]
        };
    }
}
GlobalMessageModule.decorators = [
    { type: NgModule, args: [{
                imports: [GlobalMessageStoreModule],
                providers: [GlobalMessageService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_ENDPOINT = 'users/';
/** @type {?} */
const ADDRESSES_VERIFICATION_ENDPOINT = '/addresses/verification';
/** @type {?} */
const ADDRESSES_ENDPOINT = '/addresses';
/** @type {?} */
const PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
class OccUserService {
    // some extending from baseservice is not working here...
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadUser(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId;
        return this.http
            .get(url)
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    verifyAddress(userId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_VERIFICATION_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadUserAddresses(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    addUserAddress(userId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    updateUserAddress(userId, addressId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .patch(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    deleteUserAddress(userId, addressId) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadUserPaymentMethods(userId) {
        /** @type {?} */
        const url = `${this.getUserEndpoint()}${userId}${PAYMENT_DETAILS_ENDPOINT}?saved=true`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    deleteUserPaymentMethod(userId, paymentMethodID) {
        /** @type {?} */
        const url = `${this.getUserEndpoint()}${userId}${PAYMENT_DETAILS_ENDPOINT}/${paymentMethodID}`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    setDefaultUserPaymentMethod(userId, paymentMethodID) {
        /** @type {?} */
        const url = `${this.getUserEndpoint()}${userId}${PAYMENT_DETAILS_ENDPOINT}/${paymentMethodID}`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} user
     * @return {?}
     */
    registerUser(user) {
        /** @type {?} */
        const url = this.getUserEndpoint();
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, user, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @protected
     * @return {?}
     */
    getUserEndpoint() {
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            '/' +
            USER_ENDPOINT);
    }
}
OccUserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// To be changed to a more optimised params after ticket: C3PO-1076
/** @type {?} */
const FULL_PARAMS = 'fields=FULL';
class OccOrderService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getOrderEndpoint(userId) {
        /** @type {?} */
        const orderEndpoint = '/users/' + userId + '/orders';
        return ((this.config.server.baseUrl || '') +
            this.config.server.occPrefix +
            this.config.site.baseSite +
            orderEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(userId, cartId) {
        /** @type {?} */
        const url = this.getOrderEndpoint(userId);
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'cartId=' + cartId + '&' + FULL_PARAMS
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http
            .post(url, {}, { headers, params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    getOrders(userId, pageSize, currentPage, sort) {
        /** @type {?} */
        const url = this.getOrderEndpoint(userId);
        /** @type {?} */
        let params = new HttpParams();
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        if (sort) {
            params = params.set('sort', sort);
        }
        return this.http
            .get(url, { params: params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    getOrder(userId, orderCode) {
        /** @type {?} */
        const url = this.getOrderEndpoint(userId);
        /** @type {?} */
        const orderUrl = url + '/' + orderCode;
        /** @type {?} */
        const params = new HttpParams({
            fromString: FULL_PARAMS
        });
        return this.http
            .get(orderUrl, {
            params: params
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
}
OccOrderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccOrderService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserOccModule {
}
UserOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, OccModule],
                providers: [OccUserService, OccOrderService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_DETAILS = '[User] Load User Details';
/** @type {?} */
const LOAD_USER_DETAILS_FAIL = '[User] Load User Details Fail';
/** @type {?} */
const LOAD_USER_DETAILS_SUCCESS = '[User] Load User Details Success';
class LoadUserDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS;
    }
}
class LoadUserDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_FAIL;
    }
}
class LoadUserDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_DETAILS_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USER_FEATURE = 'user';
/** @type {?} */
const USER_PAYMENT_METHODS = '[User] User Payment Methods';
/** @type {?} */
const USER_ORDERS = '[User] User Orders';
/** @type {?} */
const USER_ADDRESSES = '[User] User Addresses';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_ADDRESSES = '[User] Load User Addresses';
/** @type {?} */
const LOAD_USER_ADDRESSES_FAIL = '[User] Load User Addresses Fail';
/** @type {?} */
const LOAD_USER_ADDRESSES_SUCCESS = '[User] Load User Addresses Success';
/** @type {?} */
const ADD_USER_ADDRESS = '[User] Add User Address';
/** @type {?} */
const ADD_USER_ADDRESS_FAIL = '[User] Add User Address Fail';
/** @type {?} */
const ADD_USER_ADDRESS_SUCCESS = '[User] Add User Address Success';
/** @type {?} */
const UPDATE_USER_ADDRESS = '[User] Update User Address';
/** @type {?} */
const UPDATE_USER_ADDRESS_FAIL = '[User] Update User Address Fail';
/** @type {?} */
const UPDATE_USER_ADDRESS_SUCCESS = '[User] Update User Address Success';
/** @type {?} */
const DELETE_USER_ADDRESS = '[User] Delete User Address';
/** @type {?} */
const DELETE_USER_ADDRESS_FAIL = '[User] Delete User Address Fail';
/** @type {?} */
const DELETE_USER_ADDRESS_SUCCESS = '[User] Delete User Address Success';
class LoadUserAddresses extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES;
    }
}
class LoadUserAddressesFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES_FAIL;
    }
}
class LoadUserAddressesSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = LOAD_USER_ADDRESSES_SUCCESS;
    }
}
// Adding address actions
class AddUserAddress extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS;
    }
}
class AddUserAddressFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS_FAIL;
    }
}
class AddUserAddressSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = ADD_USER_ADDRESS_SUCCESS;
    }
}
// Updating address actions
class UpdateUserAddress extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS;
    }
}
class UpdateUserAddressFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS_FAIL;
    }
}
class UpdateUserAddressSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = UPDATE_USER_ADDRESS_SUCCESS;
    }
}
// Deleting address actions
class DeleteUserAddress extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS;
    }
}
class DeleteUserAddressFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES, payload);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS_FAIL;
    }
}
class DeleteUserAddressSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ADDRESSES);
        this.payload = payload;
        this.type = DELETE_USER_ADDRESS_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_PAYMENT_METHODS = '[User] Load User Payment Methods';
/** @type {?} */
const LOAD_USER_PAYMENT_METHODS_FAIL = '[User] Load User Payment Methods Fail';
/** @type {?} */
const LOAD_USER_PAYMENT_METHODS_SUCCESS = '[User] Load User Payment Methods Success';
/** @type {?} */
const SET_DEFAULT_USER_PAYMENT_METHOD = '[User] Set Default User Payment Method';
/** @type {?} */
const SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = '[User] Set Default User Payment Method Fail';
/** @type {?} */
const SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = '[User] Set Default User Payment Method Success';
/** @type {?} */
const DELETE_USER_PAYMENT_METHOD = '[User] Delete User Payment Method';
/** @type {?} */
const DELETE_USER_PAYMENT_METHOD_FAIL = '[User] Delete User Payment Method Fail';
/** @type {?} */
const DELETE_USER_PAYMENT_METHOD_SUCCESS = '[User] Delete User  Payment Method Success';
class LoadUserPaymentMethods extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS;
    }
}
class LoadUserPaymentMethodsFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_FAIL;
    }
}
class LoadUserPaymentMethodsSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_SUCCESS;
    }
}
class SetDefaultUserPaymentMethod extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD;
    }
}
class SetDefaultUserPaymentMethodFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
    }
}
class SetDefaultUserPaymentMethodSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
    }
}
class DeleteUserPaymentMethod extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD;
    }
}
class DeleteUserPaymentMethodFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_FAIL;
    }
}
class DeleteUserPaymentMethodSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const REGISTER_USER = '[User] Register User';
/** @type {?} */
const REGISTER_USER_FAIL = '[User] Register User Fail';
/** @type {?} */
const REGISTER_USER_SUCCESS = '[User] Register User Success';
class RegisterUser {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER;
    }
}
class RegisterUserFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER_FAIL;
    }
}
class RegisterUserSuccess {
    constructor() {
        this.type = REGISTER_USER_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_USER_ORDERS = '[User] Load User Orders';
/** @type {?} */
const LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
/** @type {?} */
const LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
/** @type {?} */
const CLEAR_USER_ORDERS = '[User] Clear User Orders';
class LoadUserOrders extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS;
    }
}
class LoadUserOrdersFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS, payload);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_FAIL;
    }
}
class LoadUserOrdersSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_SUCCESS;
    }
}
class ClearUserOrders {
    constructor() {
        this.type = CLEAR_USER_ORDERS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_TITLES = '[User] Load Tiltes';
/** @type {?} */
const LOAD_TITLES_FAIL = '[User] Load Titles Fail';
/** @type {?} */
const LOAD_TITLES_SUCCESS = '[User] Load Titles Success';
class LoadTitles {
    constructor() {
        this.type = LOAD_TITLES;
    }
}
class LoadTitlesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_FAIL;
    }
}
class LoadTitlesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_DELIVERY_COUNTRIES = '[User] Load Delivery Countries';
/** @type {?} */
const LOAD_DELIVERY_COUNTRIES_FAIL = '[User] Load Delivery Countries Fail';
/** @type {?} */
const LOAD_DELIVERY_COUNTRIES_SUCCESS = '[User] Load Delivery Countries Success';
class LoadDeliveryCountries {
    constructor() {
        this.type = LOAD_DELIVERY_COUNTRIES;
    }
}
class LoadDeliveryCountriesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_FAIL;
    }
}
class LoadDeliveryCountriesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_REGIONS = '[User] Load Regions';
/** @type {?} */
const LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
/** @type {?} */
const LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
class LoadRegions {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS;
    }
}
class LoadRegionsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS_FAIL;
    }
}
class LoadRegionsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_ORDER_DETAILS = '[User] Load Order Details';
/** @type {?} */
const LOAD_ORDER_DETAILS_FAIL = '[User] Load Order Details Fail';
/** @type {?} */
const LOAD_ORDER_DETAILS_SUCCESS = '[User] Load Order Details Success';
/** @type {?} */
const CLEAR_ORDER_DETAILS = '[User] Clear Order Details';
class LoadOrderDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS;
    }
}
class LoadOrderDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_FAIL;
    }
}
class LoadOrderDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_SUCCESS;
    }
}
class ClearOrderDetails {
    constructor() {
        this.type = CLEAR_ORDER_DETAILS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOAD_BILLING_COUNTRIES = '[User] Load Billing Countries';
/** @type {?} */
const LOAD_BILLING_COUNTRIES_FAIL = '[User] Load Billing Countries Fail';
/** @type {?} */
const LOAD_BILLING_COUNTRIES_SUCCESS = '[User] Load Billing Countries Success';
class LoadBillingCountries {
    constructor() {
        this.type = LOAD_BILLING_COUNTRIES;
    }
}
class LoadBillingCountriesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_FAIL;
    }
}
class LoadBillingCountriesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CLEAR_MISCS_DATA = '[User] Clear User Misc Data';
class ClearMiscsData {
    constructor() {
        this.type = CLEAR_MISCS_DATA;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserDetailsEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserDetails$ = this.actions$.pipe(ofType(LOAD_USER_DETAILS), map((action) => action.payload), mergeMap(userId => {
            return this.occUserService.loadUser(userId).pipe(map((user) => {
                return new LoadUserDetailsSuccess(user);
            }), catchError(error => of(new LoadUserDetailsFail(error))));
        }));
    }
}
UserDetailsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserDetailsEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserDetailsEffects.prototype, "loadUserDetails$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserAddressesEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(LOAD_USER_ADDRESSES), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService.loadUserAddresses(payload).pipe(map((addressesList) => {
                return new LoadUserAddressesSuccess(addressesList.addresses);
            }), catchError(error => of(new LoadUserAddressesFail(error))));
        }));
        this.addUserAddress$ = this.actions$.pipe(ofType(ADD_USER_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .addUserAddress(payload.userId, payload.address)
                .pipe(map((data) => {
                return new AddUserAddressSuccess(data);
            }), catchError(error => of(new AddUserAddressFail(error))));
        }));
        this.updateUserAddress$ = this.actions$.pipe(ofType(UPDATE_USER_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .updateUserAddress(payload.userId, payload.addressId, payload.address)
                .pipe(map((data) => {
                return new UpdateUserAddressSuccess(data);
            }), catchError(error => of(new UpdateUserAddressFail(error))));
        }));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(DELETE_USER_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .deleteUserAddress(payload.userId, payload.addressId)
                .pipe(map((data) => {
                return new DeleteUserAddressSuccess(data);
            }), catchError(error => of(new DeleteUserAddressFail(error))));
        }));
    }
}
UserAddressesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserAddressesEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserAddressesEffects.prototype, "loadUserAddresses$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserAddressesEffects.prototype, "addUserAddress$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserAddressesEffects.prototype, "updateUserAddress$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserAddressesEffects.prototype, "deleteUserAddress$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserPaymentMethodsEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserPaymentMethods$ = this.actions$.pipe(ofType(LOAD_USER_PAYMENT_METHODS), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService.loadUserPaymentMethods(payload).pipe(map((paymentsList) => {
                return new LoadUserPaymentMethodsSuccess(paymentsList.payments);
            }), catchError(error => of(new LoadUserPaymentMethodsFail(error))));
        }));
        this.setDefaultUserPaymentMethod$ = this.actions$.pipe(ofType(SET_DEFAULT_USER_PAYMENT_METHOD), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .setDefaultUserPaymentMethod(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((data) => {
                return [
                    new SetDefaultUserPaymentMethodSuccess(data),
                    new LoadUserPaymentMethods(payload.userId)
                ];
            }), catchError(error => of(new SetDefaultUserPaymentMethodFail(error))));
        }));
        this.deleteUserPaymentMethod$ = this.actions$.pipe(ofType(DELETE_USER_PAYMENT_METHOD), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .deleteUserPaymentMethod(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((data) => {
                return [
                    new DeleteUserPaymentMethodSuccess(data),
                    new LoadUserPaymentMethods(payload.userId)
                ];
            }), catchError(error => of(new DeleteUserPaymentMethodFail(error))));
        }));
    }
}
UserPaymentMethodsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserPaymentMethodsEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserPaymentMethodsEffects.prototype, "loadUserPaymentMethods$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserPaymentMethodsEffects.prototype, "setDefaultUserPaymentMethod$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserPaymentMethodsEffects.prototype, "deleteUserPaymentMethod$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserRegisterEffects {
    /**
     * @param {?} actions$
     * @param {?} userService
     */
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.registerUser$ = this.actions$.pipe(ofType(REGISTER_USER), map((action) => action.payload), mergeMap((user) => {
            return this.userService.registerUser(user).pipe(switchMap(_result => [
                new LoadUserToken({
                    userId: user.uid,
                    password: user.password
                }),
                new RegisterUserSuccess()
            ]), catchError(error => of(new RegisterUserFail(error))));
        }));
    }
}
UserRegisterEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserRegisterEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserRegisterEffects.prototype, "registerUser$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserOrdersEffect {
    /**
     * @param {?} actions$
     * @param {?} occOrderService
     */
    constructor(actions$, occOrderService) {
        this.actions$ = actions$;
        this.occOrderService = occOrderService;
        this.loadUserOrders$ = this.actions$.pipe(ofType(LOAD_USER_ORDERS), map((action) => action.payload), switchMap(payload => {
            return this.occOrderService
                .getOrders(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((orders) => {
                return new LoadUserOrdersSuccess(orders);
            }), catchError(error => of(new LoadUserOrdersFail(error))));
        }));
        this.resetUserOrders$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, CLEAR_USER_ORDERS), map(() => {
            return new LoaderResetAction(USER_ORDERS);
        }));
    }
}
UserOrdersEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserOrdersEffect.ctorParameters = () => [
    { type: Actions },
    { type: OccOrderService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserOrdersEffect.prototype, "loadUserOrders$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], UserOrdersEffect.prototype, "resetUserOrders$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TitlesEffects {
    /**
     * @param {?} actions$
     * @param {?} occMiscsService
     */
    constructor(actions$, occMiscsService) {
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadTitles$ = this.actions$.pipe(ofType(LOAD_TITLES), switchMap(() => {
            return this.occMiscsService.loadTitles().pipe(map(data => new LoadTitlesSuccess(data.titles)), catchError(error => of(new LoadTitlesFail(error))));
        }));
    }
}
TitlesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TitlesEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccMiscsService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], TitlesEffects.prototype, "loadTitles$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeliveryCountriesEffects {
    /**
     * @param {?} actions$
     * @param {?} occMiscsService
     */
    constructor(actions$, occMiscsService) {
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadDeliveryCountries$ = this.actions$.pipe(ofType(LOAD_DELIVERY_COUNTRIES), switchMap(() => {
            return this.occMiscsService.loadDeliveryCountries().pipe(map(data => new LoadDeliveryCountriesSuccess(data.countries)), catchError(error => of(new LoadDeliveryCountriesFail(error))));
        }));
    }
}
DeliveryCountriesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DeliveryCountriesEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccMiscsService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DeliveryCountriesEffects.prototype, "loadDeliveryCountries$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RegionsEffects {
    /**
     * @param {?} actions$
     * @param {?} occMiscsService
     */
    constructor(actions$, occMiscsService) {
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadRegions$ = this.actions$.pipe(ofType(LOAD_REGIONS), map((action) => {
            return action.payload;
        }), switchMap((countryCode) => {
            return this.occMiscsService.loadRegions(countryCode).pipe(map(data => new LoadRegionsSuccess(data.regions)), catchError(error => of(new LoadRegionsFail(error))));
        }));
    }
}
RegionsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RegionsEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccMiscsService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], RegionsEffects.prototype, "loadRegions$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailsEffect {
    /**
     * @param {?} actions$
     * @param {?} occOrderService
     * @param {?} productImageConverter
     */
    constructor(actions$, occOrderService, productImageConverter) {
        this.actions$ = actions$;
        this.occOrderService = occOrderService;
        this.productImageConverter = productImageConverter;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(LOAD_ORDER_DETAILS), map((action) => action.payload), switchMap(payload => {
            return this.occOrderService
                .getOrder(payload.userId, payload.orderCode)
                .pipe(map((order) => {
                if (order.consignments) {
                    order.consignments.forEach(element => {
                        element.entries.forEach(entry => {
                            this.productImageConverter.convertProduct(entry.orderEntry.product);
                        });
                    });
                }
                if (order.unconsignedEntries) {
                    order.unconsignedEntries.forEach(entry => {
                        this.productImageConverter.convertProduct(entry.product);
                    });
                }
                return new LoadOrderDetailsSuccess(order);
            }), catchError(error => of(new LoadOrderDetailsFail(error))));
        }));
    }
}
OrderDetailsEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderDetailsEffect.ctorParameters = () => [
    { type: Actions },
    { type: OccOrderService },
    { type: ProductImageConverterService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BillingCountriesEffect {
    /**
     * @param {?} actions$
     * @param {?} occMiscsService
     */
    constructor(actions$, occMiscsService) {
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadBillingCountries$ = this.actions$.pipe(ofType(LOAD_BILLING_COUNTRIES), switchMap(() => {
            return this.occMiscsService.loadBillingCountries().pipe(map(data => new LoadBillingCountriesSuccess(data.countries)), catchError(error => of(new LoadBillingCountriesFail(error))));
        }));
    }
}
BillingCountriesEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BillingCountriesEffect.ctorParameters = () => [
    { type: Actions },
    { type: OccMiscsService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], BillingCountriesEffect.prototype, "loadBillingCountries$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$6 = [
    DeliveryCountriesEffects,
    RegionsEffects,
    TitlesEffects,
    UserDetailsEffects,
    UserAddressesEffects,
    UserPaymentMethodsEffects,
    UserRegisterEffects,
    UserOrdersEffect,
    OrderDetailsEffect,
    BillingCountriesEffect
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$d = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$d(state = initialState$d, action) {
    switch (action.type) {
        case LOAD_BILLING_COUNTRIES_SUCCESS: {
            /** @type {?} */
            const billingCountries = action.payload;
            /** @type {?} */
            const entities = billingCountries.reduce((countryEntities, name) => {
                return Object.assign({}, countryEntities, { [name.isocode]: name });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState$d;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$e = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$e(state = initialState$e, action) {
    switch (action.type) {
        case LOAD_DELIVERY_COUNTRIES_SUCCESS: {
            /** @type {?} */
            const deliveryCountries = action.payload;
            /** @type {?} */
            const entities = deliveryCountries.reduce((countryEntities, country) => {
                return Object.assign({}, countryEntities, { [country.isocode]: country });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState$e;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$f = {
    order: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$f(state = initialState$f, action) {
    switch (action.type) {
        case LOAD_ORDER_DETAILS_SUCCESS: {
            /** @type {?} */
            const order = action.payload;
            return Object.assign({}, state, { order });
        }
        case CLEAR_ORDER_DETAILS: {
            return initialState$f;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$g = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$g(state = initialState$g, action) {
    switch (action.type) {
        case LOAD_USER_PAYMENT_METHODS_SUCCESS: {
            return action.payload ? action.payload : state;
        }
        case LOAD_USER_PAYMENT_METHODS_FAIL: {
            return initialState$g;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$h = {
    entities: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$h(state = initialState$h, action) {
    switch (action.type) {
        case LOAD_REGIONS_SUCCESS: {
            /** @type {?} */
            const entities = action.payload;
            if (entities) {
                return Object.assign({}, state, { entities });
            }
            return initialState$h;
        }
        case LOAD_REGIONS: {
            return Object.assign({}, state);
        }
        case CLEAR_MISCS_DATA: {
            return Object.assign({}, initialState$h);
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$i = {
    entities: {}
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$i(state = initialState$i, action) {
    switch (action.type) {
        case LOAD_TITLES_SUCCESS: {
            /** @type {?} */
            const titles = action.payload;
            /** @type {?} */
            const entities = titles.reduce((titleEntities, name) => {
                return Object.assign({}, titleEntities, { [name.code]: name });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CLEAR_MISCS_DATA: {
            return initialState$i;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$j = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$j(state = initialState$j, action) {
    switch (action.type) {
        case LOAD_USER_ADDRESSES_FAIL: {
            return initialState$j;
        }
        case LOAD_USER_ADDRESSES_SUCCESS: {
            return action.payload ? action.payload : state;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$k = {
    details: (/** @type {?} */ ({}))
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$k(state = initialState$k, action) {
    switch (action.type) {
        case LOAD_USER_DETAILS_SUCCESS: {
            /** @type {?} */
            const details = action.payload;
            return Object.assign({}, state, { details });
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$l = {
    orders: [],
    pagination: {},
    sorts: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$l(state = initialState$l, action) {
    switch (action.type) {
        case LOAD_USER_ORDERS_SUCCESS: {
            return action.payload ? action.payload : initialState$l;
        }
        case LOAD_USER_ORDERS_FAIL: {
            return initialState$l;
        }
    }
    return state;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$8() {
    return {
        account: reducer$k,
        addresses: loaderReducer(USER_ADDRESSES, reducer$j),
        billingCountries: reducer$d,
        payments: loaderReducer(USER_PAYMENT_METHODS, reducer$g),
        orders: loaderReducer(USER_ORDERS, reducer$l),
        order: reducer$f,
        countries: reducer$e,
        titles: reducer$i,
        regions: reducer$h
    };
}
/** @type {?} */
const reducerToken$8 = new InjectionToken('UserReducers');
/** @type {?} */
const reducerProvider$8 = {
    provide: reducerToken$8,
    useFactory: getReducers$8
};
/**
 * @param {?} reducer
 * @return {?}
 */
function clearUserState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
const metaReducers$5 = [clearUserState];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getUserState = createFeatureSelector(USER_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getDetailsState = createSelector(getUserState, (state) => state.account);
/** @type {?} */
const getDetails = createSelector(getDetailsState, (state) => state.details);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getAddressesLoaderState = createSelector(getUserState, (state) => state.addresses);
/** @type {?} */
const getAddresses = createSelector(getAddressesLoaderState, (state) => loaderValueSelector(state));
/** @type {?} */
const getAddressesLoading = createSelector(getAddressesLoaderState, (state) => loaderLoadingSelector(state));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getPaymentMethodsState = createSelector(getUserState, (state) => state.payments);
/** @type {?} */
const getPaymentMethods = createSelector(getPaymentMethodsState, (state) => loaderValueSelector(state));
/** @type {?} */
const getPaymentMethodsLoading = createSelector(getPaymentMethodsState, (state) => loaderLoadingSelector(state));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getOrdersState = createSelector(getUserState, (state) => state.orders);
/** @type {?} */
const getOrdersLoaded = createSelector(getOrdersState, (state) => loaderSuccessSelector(state));
/** @type {?} */
const getOrders = createSelector(getOrdersState, (state) => loaderValueSelector(state));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getTitlesState = createSelector(getUserState, (state) => state.titles);
/** @type {?} */
const getTitlesEntites = createSelector(getTitlesState, (state) => state.entities);
/** @type {?} */
const getAllTitles = createSelector(getTitlesEntites, entites => Object.keys(entites).map(code => entites[code]));
/** @type {?} */
const titleSelectorFactory = (code) => createSelector(getTitlesEntites, entities => (Object.keys(entities).length !== 0 ? entities[code] : null));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getDeliveryCountriesState = createSelector(getUserState, (state) => state.countries);
/** @type {?} */
const getDeliveryCountriesEntites = createSelector(getDeliveryCountriesState, (state) => state.entities);
/** @type {?} */
const getAllDeliveryCountries = createSelector(getDeliveryCountriesEntites, entites => Object.keys(entites).map(isocode => entites[isocode]));
/** @type {?} */
const countrySelectorFactory = (isocode) => createSelector(getDeliveryCountriesEntites, entities => (Object.keys(entities).length !== 0 ? entities[isocode] : null));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getRegionsState = createSelector(getUserState, (state) => state.regions);
/** @type {?} */
const getAllRegions = createSelector(getRegionsState, (state) => state.entities);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getOrderState = createSelector(getUserState, (state) => state.order);
/** @type {?} */
const getOrderDetails$1 = createSelector(getOrderState, (state) => state.order);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getBillingCountriesState = createSelector(getUserState, (state) => state.billingCountries);
/** @type {?} */
const getBillingCountriesEntites = createSelector(getBillingCountriesState, (state) => state.entities);
/** @type {?} */
const getAllBillingCountries = createSelector(getBillingCountriesEntites, entites => Object.keys(entites).map(isocode => entites[isocode]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns a user
     * @return {?}
     */
    get() {
        return this.store.pipe(select(getDetails));
    }
    /**
     * Loads the user's details
     * @param {?} userId
     * @return {?}
     */
    load(userId) {
        this.store.dispatch(new LoadUserDetails(userId));
    }
    /**
     * Register a new user
     *
     * @param {?} userRegisterFormData
     * @return {?}
     */
    register(userRegisterFormData) {
        this.store.dispatch(new RegisterUser(userRegisterFormData));
    }
    /**
     * Returns an order's detail
     * @return {?}
     */
    getOrderDetails() {
        return this.store.pipe(select(getOrderDetails$1));
    }
    /**
     * Retrieves order's details
     *
     * @param {?} userId a user's ID
     * @param {?} orderCode an order code
     * @return {?}
     */
    loadOrderDetails(userId, orderCode) {
        this.store.dispatch(new LoadOrderDetails({
            userId: userId,
            orderCode: orderCode
        }));
    }
    /**
     * Clears order's details
     * @return {?}
     */
    clearOrderDetails() {
        this.store.dispatch(new ClearOrderDetails());
    }
    /**
     * Returns order history list
     * @param {?} userId
     * @param {?} pageSize
     * @return {?}
     */
    getOrderHistoryList(userId, pageSize) {
        return this.store.pipe(select(getOrdersState), tap(orderListState => {
            /** @type {?} */
            const attemptedLoad = orderListState.loading ||
                orderListState.success ||
                orderListState.error;
            if (!attemptedLoad && !!userId) {
                this.loadOrderList(userId, pageSize);
            }
        }), map(orderListState => orderListState.value));
    }
    /**
     * Returns a loaded flag for order history list
     * @return {?}
     */
    getOrderHistoryListLoaded() {
        return this.store.pipe(select(getOrdersLoaded));
    }
    /**
     * Loads all user's payment methods.
     * @param {?} userId a user ID
     * @return {?}
     */
    loadPaymentMethods(userId) {
        this.store.dispatch(new LoadUserPaymentMethods(userId));
    }
    /**
     * Returns all user's payment methods
     * @return {?}
     */
    getPaymentMethods() {
        return this.store.pipe(select(getPaymentMethods));
    }
    /**
     * Returns a loading flag for payment methods
     * @return {?}
     */
    getPaymentMethodsLoading() {
        return this.store.pipe(select(getPaymentMethodsLoading));
    }
    /**
     * Sets the payment as a default one
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    setPaymentMethodAsDefault(userId, paymentMethodId) {
        this.store.dispatch(new SetDefaultUserPaymentMethod({
            userId: userId,
            paymentMethodId
        }));
    }
    /**
     * Deletes the payment method
     *
     * @param {?} userId a user ID
     * @param {?} paymentMethodId a payment method ID
     * @return {?}
     */
    deletePaymentMethod(userId, paymentMethodId) {
        this.store.dispatch(new DeleteUserPaymentMethod({
            userId: userId,
            paymentMethodId
        }));
    }
    /**
     * Retrieves an order list
     * @param {?} userId a user ID
     * @param {?} pageSize page size
     * @param {?=} currentPage current page
     * @param {?=} sort sort
     * @return {?}
     */
    loadOrderList(userId, pageSize, currentPage, sort) {
        this.store.dispatch(new LoadUserOrders({
            userId: userId,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort
        }));
    }
    /**
     * Retrieves user's addresses
     * @param {?} userId a user ID
     * @return {?}
     */
    loadAddresses(userId) {
        this.store.dispatch(new LoadUserAddresses(userId));
    }
    /**
     * Adds user address
     * @param {?} userId a user ID
     * @param {?} address a user address
     * @return {?}
     */
    addUserAddress(userId, address) {
        this.store.dispatch(new AddUserAddress({
            userId: userId,
            address: address
        }));
    }
    /**
     * Sets user address as default
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    setAddressAsDefault(userId, addressId) {
        this.store.dispatch(new UpdateUserAddress({
            userId: userId,
            addressId: addressId,
            address: { defaultAddress: true }
        }));
    }
    /**
     * Updates existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    updateUserAddress(userId, addressId, address) {
        this.store.dispatch(new UpdateUserAddress({
            userId: userId,
            addressId: addressId,
            address: address
        }));
    }
    /**
     * Deletes existing user address
     * @param {?} userId a user ID
     * @param {?} addressId a user address ID
     * @return {?}
     */
    deleteUserAddress(userId, addressId) {
        this.store.dispatch(new DeleteUserAddress({
            userId: userId,
            addressId: addressId
        }));
    }
    /**
     * Returns addresses
     * @return {?}
     */
    getAddresses() {
        return this.store.pipe(select(getAddresses));
    }
    /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    getAddressesLoading() {
        return this.store.pipe(select(getAddressesLoading));
    }
    /**
     * Returns titles
     * @return {?}
     */
    getTitles() {
        return this.store.pipe(select(getAllTitles));
    }
    /**
     * Retrieves titles
     * @return {?}
     */
    loadTitles() {
        this.store.dispatch(new LoadTitles());
    }
    /**
     * Retrieves delivery countries
     * @return {?}
     */
    loadDeliveryCountries() {
        this.store.dispatch(new LoadDeliveryCountries());
    }
    /**
     * Returns all delivery countries
     * @return {?}
     */
    getDeliveryCountries() {
        return this.store.pipe(select(getAllDeliveryCountries));
    }
    /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    getCountry(isocode) {
        return this.store.pipe(select(countrySelectorFactory(isocode)));
    }
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        this.store.dispatch(new LoadRegions(countryIsoCode));
    }
    /**
     * Returns all regions
     * @return {?}
     */
    getRegions() {
        return this.store.pipe(select(getAllRegions));
    }
    /**
     * Returns all billing countries
     * @return {?}
     */
    getAllBillingCountries() {
        return this.store.pipe(select(getAllBillingCountries));
    }
    /**
     * Retrieves billing countries
     * @return {?}
     */
    loadBillingCountries() {
        return this.store.dispatch(new LoadBillingCountries());
    }
    /**
     * Cleaning order list
     * @return {?}
     */
    clearOrderList() {
        this.store.dispatch(new ClearUserOrders());
    }
}
UserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserStoreModule {
}
UserStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    StateModule,
                    StoreModule.forFeature(USER_FEATURE, reducerToken$8, { metaReducers: metaReducers$5 }),
                    EffectsModule.forFeature(effects$6),
                    RouterModule
                ],
                providers: [reducerProvider$8]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserModule {
}
UserModule.decorators = [
    { type: NgModule, args: [{
                imports: [UserOccModule, UserStoreModule],
                providers: [UserService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutEffects {
    /**
     * @param {?} actions$
     * @param {?} occCartService
     * @param {?} occOrderService
     * @param {?} productImageConverter
     */
    constructor(actions$, occCartService, occOrderService, productImageConverter) {
        this.actions$ = actions$;
        this.occCartService = occCartService;
        this.occOrderService = occOrderService;
        this.productImageConverter = productImageConverter;
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(ADD_DELIVERY_ADDRESS), map((action) => action.payload), mergeMap(payload => this.occCartService
            .createAddressOnCart(payload.userId, payload.cartId, payload.address)
            .pipe(mergeMap(address => {
            address['titleCode'] = payload.address.titleCode;
            return [
                new LoadUserAddresses(payload.userId),
                new SetDeliveryAddress({
                    userId: payload.userId,
                    cartId: payload.cartId,
                    address: address
                })
            ];
        }), catchError(error => of(new AddDeliveryAddressFail(error))))));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(SET_DELIVERY_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .setDeliveryAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(map(() => new SetDeliveryAddressSuccess(payload.address)), catchError(error => of(new SetDeliveryAddressFail(error))));
        }));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(LOAD_SUPPORTED_DELIVERY_MODES), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .getSupportedDeliveryModes(payload.userId, payload.cartId)
                .pipe(map(data => {
                return new LoadSupportedDeliveryModesSuccess(data);
            }), catchError(error => of(new LoadSupportedDeliveryModesFail(error))));
        }));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(SET_DELIVERY_MODE), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .setDeliveryMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(map(() => new SetDeliveryModeSuccess(payload.selectedModeId)), catchError(error => of(new SetDeliveryModeFail(error))));
        }));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(CREATE_PAYMENT_DETAILS), map((action) => action.payload), mergeMap(payload => {
            // get information for creating a subscription directly with payment provider
            return this.occCartService
                .getPaymentProviderSubInfo(payload.userId, payload.cartId)
                .pipe(map(data => {
                /** @type {?} */
                const labelsMap = this.convertToMap(data.mappingLabels.entry);
                return {
                    url: data.postUrl,
                    parameters: this.getParamsForPaymentProvider(payload.paymentDetails, data.parameters.entry, labelsMap),
                    mappingLabels: labelsMap
                };
            }), mergeMap(sub => {
                // create a subscription directly with payment provider
                return this.occCartService
                    .createSubWithPaymentProvider(sub.url, sub.parameters)
                    .pipe(map(response => this.extractPaymentDetailsFromHtml(response)), mergeMap(fromPaymentProvider => {
                    if (!fromPaymentProvider['hasError']) {
                        // consume response from payment provider and creates payment details
                        return this.occCartService
                            .createPaymentDetails(payload.userId, payload.cartId, this.getPaymentSopResponseParams(payload.paymentDetails, fromPaymentProvider, sub.mappingLabels))
                            .pipe(mergeMap(details => {
                            return [
                                new LoadUserPaymentMethods(payload.userId),
                                new CreatePaymentDetailsSuccess(details)
                            ];
                        }), catchError(error => of(new CreatePaymentDetailsFail(error))));
                    }
                    else {
                        return of(new CreatePaymentDetailsFail(fromPaymentProvider));
                    }
                }));
            }));
        }));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(SET_PAYMENT_DETAILS), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .setPaymentDetails(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map(() => new SetPaymentDetailsSuccess(payload.paymentDetails)), catchError(error => of(new SetPaymentDetailsFail(error))));
        }));
        this.placeOrder$ = this.actions$.pipe(ofType(PLACE_ORDER), map((action) => action.payload), mergeMap(payload => {
            return this.occOrderService
                .placeOrder(payload.userId, payload.cartId)
                .pipe(map(data => {
                for (const entry of (/** @type {?} */ (data.entries))) {
                    this.productImageConverter.convertProduct(entry.product);
                }
                return data;
            }), switchMap(data => [
                new PlaceOrderSuccess(data),
                new AddMessage({
                    text: 'Order placed successfully',
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION
                })
            ]), catchError(error => of(new PlaceOrderFail(error))));
        }));
        if (typeof DOMParser !== 'undefined') {
            this.domparser = new DOMParser();
        }
    }
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} fromPaymentProvider
     * @param {?} mappingLabels
     * @return {?}
     */
    getPaymentSopResponseParams(paymentDetails, fromPaymentProvider, mappingLabels) {
        /** @type {?} */
        const sopResponseParams = {};
        sopResponseParams['decision'] =
            fromPaymentProvider[mappingLabels['hybris_sop_decision']];
        sopResponseParams['amount'] =
            fromPaymentProvider[mappingLabels['hybris_sop_amount']];
        sopResponseParams['currency'] =
            fromPaymentProvider[mappingLabels['hybris_sop_currency']];
        sopResponseParams['billTo_country'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_country']];
        sopResponseParams['billTo_firstName'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_firstname']];
        sopResponseParams['billTo_lastName'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_lastname']];
        sopResponseParams['billTo_street1'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_street1']];
        sopResponseParams['billTo_city'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_city']];
        sopResponseParams['billTo_postalCode'] =
            fromPaymentProvider[mappingLabels['hybris_billTo_postalcode']];
        sopResponseParams['card_cardType'] = paymentDetails.cardType.code;
        sopResponseParams['card_accountNumber'] =
            fromPaymentProvider[mappingLabels['hybris_sop_card_number']];
        sopResponseParams['card_expirationMonth'] = paymentDetails.expiryMonth;
        sopResponseParams['card_expirationYear'] = paymentDetails.expiryYear;
        sopResponseParams['card_nameOnCard'] = paymentDetails.accountHolderName;
        sopResponseParams['defaultPayment'] = paymentDetails.defaultPayment;
        sopResponseParams['savePaymentInfo'] = true;
        sopResponseParams['reasonCode'] =
            fromPaymentProvider[mappingLabels['hybris_sop_reason_code']];
        sopResponseParams['paySubscriptionCreateReply_subscriptionID'] =
            fromPaymentProvider[mappingLabels['hybris_sop_subscriptionID']];
        if (mappingLabels['hybris_sop_uses_public_signature'] === 'true') {
            sopResponseParams['paySubscriptionCreateReply_subscriptionIDPublicSignature'] = fromPaymentProvider[mappingLabels['hybris_sop_public_signature']];
        }
        return sopResponseParams;
    }
    /**
     * @private
     * @param {?} paymentDetails
     * @param {?} parameters
     * @param {?} mappingLabels
     * @return {?}
     */
    getParamsForPaymentProvider(paymentDetails, parameters, mappingLabels) {
        /** @type {?} */
        const params = this.convertToMap(parameters);
        params[mappingLabels['hybris_account_holder_name']] =
            paymentDetails.accountHolderName;
        params[mappingLabels['hybris_card_type']] = paymentDetails.cardType.code;
        params[mappingLabels['hybris_card_number']] = paymentDetails.cardNumber;
        if (mappingLabels['hybris_combined_expiry_date'] === 'true') {
            params[mappingLabels['hybris_card_expiry_date']] =
                paymentDetails.expiryMonth +
                    mappingLabels['hybris_separator_expiry_date'] +
                    paymentDetails.expiryYear;
        }
        else {
            params[mappingLabels['hybris_card_expiration_month']] =
                paymentDetails.expiryMonth;
            params[mappingLabels['hybris_card_expiration_year']] =
                paymentDetails.expiryYear;
        }
        params[mappingLabels['hybris_card_cvn']] = paymentDetails.cvn;
        // billing address
        params[mappingLabels['hybris_billTo_country']] =
            paymentDetails.billingAddress.country.isocode;
        params[mappingLabels['hybris_billTo_firstname']] =
            paymentDetails.billingAddress.firstName;
        params[mappingLabels['hybris_billTo_lastname']] =
            paymentDetails.billingAddress.lastName;
        params[mappingLabels['hybris_billTo_street1']] =
            paymentDetails.billingAddress.line1 +
                ' ' +
                paymentDetails.billingAddress.line2;
        params[mappingLabels['hybris_billTo_city']] =
            paymentDetails.billingAddress.town;
        params[mappingLabels['hybris_billTo_postalcode']] =
            paymentDetails.billingAddress.postalCode;
        return params;
    }
    /**
     * @private
     * @param {?} html
     * @return {?}
     */
    extractPaymentDetailsFromHtml(html) {
        /** @type {?} */
        const domdoc = this.domparser.parseFromString(html, 'text/xml');
        /** @type {?} */
        const responseForm = domdoc.getElementsByTagName('form')[0];
        /** @type {?} */
        const inputs = responseForm.getElementsByTagName('input');
        /** @type {?} */
        const values = {};
        for (let i = 0; inputs[i]; i++) {
            /** @type {?} */
            const input = inputs[i];
            if (input.getAttribute('name') !== '{}' &&
                input.getAttribute('value') !== '') {
                values[input.getAttribute('name')] = input.getAttribute('value');
            }
        }
        // rejected for some reason
        if (values['decision'] !== 'ACCEPT') {
            /** @type {?} */
            const reason = { hasError: true };
            Object.keys(values).forEach(name => {
                if (name === 'reasonCode' || name.startsWith('InvalidField')) {
                    reason[name] = values[name];
                }
            });
            return reason;
        }
        return values;
    }
    /**
     * @private
     * @param {?} paramList
     * @return {?}
     */
    convertToMap(paramList) {
        return paramList.reduce(function (result, item) {
            /** @type {?} */
            const key = item.key;
            result[key] = item.value;
            return result;
        }, {});
    }
}
CheckoutEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CheckoutEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccCartService },
    { type: OccOrderService },
    { type: ProductImageConverterService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CheckoutEffects.prototype, "addDeliveryAddress$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CheckoutEffects.prototype, "setDeliveryAddress$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CheckoutEffects.prototype, "loadSupportedDeliveryModes$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CheckoutEffects.prototype, "setDeliveryMode$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CheckoutEffects.prototype, "createPaymentDetails$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CheckoutEffects.prototype, "setPaymentDetails$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CheckoutEffects.prototype, "placeOrder$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardTypesEffects {
    /**
     * @param {?} actions$
     * @param {?} occMiscsService
     */
    constructor(actions$, occMiscsService) {
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadCardTypes$ = this.actions$.pipe(ofType(LOAD_CARD_TYPES), switchMap(() => {
            return this.occMiscsService.loadCardTypes().pipe(map(data => new LoadCardTypesSuccess(data.cardTypes)), catchError(error => of(new LoadCardTypesFail(error))));
        }));
    }
}
CardTypesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CardTypesEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccMiscsService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], CardTypesEffects.prototype, "loadCardTypes$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressVerificationEffect {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.verifyAddress$ = this.actions$.pipe(ofType(VERIFY_ADDRESS), map((action) => action.payload), mergeMap(payload => this.occUserService.verifyAddress(payload.userId, payload.address).pipe(map(data => {
            return new VerifyAddressSuccess(data);
        }), catchError(error => of(new VerifyAddressFail(error))))));
    }
}
AddressVerificationEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressVerificationEffect.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], AddressVerificationEffect.prototype, "verifyAddress$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$7 = [
    CheckoutEffects,
    AddressVerificationEffect,
    CardTypesEffects
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutService {
    /**
     * @param {?} checkoutStore
     * @param {?} cartData
     */
    constructor(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Get supported delivery modes
     * @return {?}
     */
    getSupportedDeliveryModes() {
        return this.checkoutStore.pipe(select(getSupportedDeliveryModes));
    }
    /**
     * Get selected delivery mode
     * @return {?}
     */
    getSelectedDeliveryMode() {
        return this.checkoutStore.pipe(select(getSelectedDeliveryMode));
    }
    /**
     * Get selected delivery mode code
     * @return {?}
     */
    getSelectedDeliveryModeCode() {
        return this.checkoutStore.pipe(select(getSelectedCode));
    }
    /**
     * Get card types
     * @return {?}
     */
    getCardTypes() {
        return this.checkoutStore.pipe(select(getAllCardTypes));
    }
    /**
     * Get delivery address
     * @return {?}
     */
    getDeliveryAddress() {
        return this.checkoutStore.pipe(select(getDeliveryAddress$1));
    }
    /**
     * Get address verification results
     * @return {?}
     */
    getAddressVerificationResults() {
        return this.checkoutStore.pipe(select(getAddressVerificationResults$1), filter(results => Object.keys(results).length !== 0));
    }
    /**
     * Get payment details
     * @return {?}
     */
    getPaymentDetails() {
        return this.checkoutStore.pipe(select(getPaymentDetails$1));
    }
    /**
     * Get order details
     * @return {?}
     */
    getOrderDetails() {
        return this.checkoutStore.pipe(select(getCheckoutOrderDetails));
    }
    /**
     * Create and set a delivery address using the address param
     * @param {?} address : the Address to be created and set
     * @return {?}
     */
    createAndSetAddress(address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new AddDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                address: address
            }));
        }
    }
    /**
     * Load supported delivery modes
     * @return {?}
     */
    loadSupportedDeliveryModes() {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new LoadSupportedDeliveryModes({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId
            }));
        }
    }
    /**
     * Set delivery mode
     * @param {?} mode : The delivery mode to be set
     * @return {?}
     */
    setDeliveryMode(mode) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new SetDeliveryMode({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                selectedModeId: mode
            }));
        }
    }
    /**
     * Load the supported card types
     * @return {?}
     */
    loadSupportedCardTypes() {
        this.checkoutStore.dispatch(new LoadCardTypes());
    }
    /**
     * Create payment details using the given paymentDetails param
     * @param {?} paymentDetails
     * @return {?}
     */
    createPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CreatePaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                paymentDetails
            }));
        }
    }
    /**
     * Places an order
     * @return {?}
     */
    placeOrder() {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new PlaceOrder({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId
            }));
        }
    }
    /**
     * Verifies the address
     * @param {?} address : the address to be verified
     * @return {?}
     */
    verifyAddress(address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new VerifyAddress({
                userId: this.cartData.userId,
                address
            }));
        }
    }
    /**
     * Set delivery address
     * @param {?} address : The address to be set
     * @return {?}
     */
    setDeliveryAddress(address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new SetDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                address: address
            }));
        }
    }
    /**
     * Set payment details
     * @param {?} paymentDetails : the PaymentDetails to be set
     * @return {?}
     */
    setPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new SetPaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                paymentDetails: paymentDetails
            }));
        }
    }
    /**
     * Clear address verification results
     * @return {?}
     */
    clearAddressVerificationResults() {
        this.checkoutStore.dispatch(new ClearAddressVerificationResults());
    }
    /**
     * Clear checkout data
     * @return {?}
     */
    clearCheckoutData() {
        this.checkoutStore.dispatch(new ClearCheckoutData());
    }
    /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    clearCheckoutStep(stepNumber) {
        this.checkoutStore.dispatch(new ClearCheckoutStep(stepNumber));
    }
    /**
     * @private
     * @return {?}
     */
    actionAllowed() {
        return this.cartData.userId !== ANONYMOUS_USERID;
    }
}
CheckoutService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CheckoutService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutStoreModule {
}
CheckoutStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StoreModule.forFeature(CHECKOUT_FEATURE, reducerToken$6, { metaReducers: metaReducers$4 }),
                    EffectsModule.forFeature(effects$7)
                ],
                providers: [reducerProvider$6]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultCmsModuleConfig = {
    defaultPageIdForType: {
        ProductPage: ['productDetails'],
        CategoryPage: ['productList', 'productGrid', 'category']
    },
    cmsComponents: {
        CMSTabParagraphComponent: { selector: 'cx-paragraph' }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutPageTitleResolver extends PageTitleResolver {
    /**
     * @param {?} routingService
     * @param {?} cartService
     */
    constructor(routingService, cartService) {
        super();
        this.routingService = routingService;
        this.cartService = cartService;
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cartService
            .getActive()
            .pipe(map(cart => `Checkout ${cart.totalItems} items`));
    }
}
CheckoutPageTitleResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CheckoutPageTitleResolver.ctorParameters = () => [
    { type: RoutingService },
    { type: CartService }
];
/** @nocollapse */ CheckoutPageTitleResolver.ngInjectableDef = defineInjectable({ factory: function CheckoutPageTitleResolver_Factory() { return new CheckoutPageTitleResolver(inject(RoutingService), inject(CartService)); }, token: CheckoutPageTitleResolver, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutModule {
}
CheckoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CheckoutStoreModule],
                providers: [
                    CheckoutService,
                    {
                        provide: PageTitleResolver,
                        useExisting: CheckoutPageTitleResolver,
                        multi: true
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SmartEditService {
    /**
     * @param {?} cmsService
     * @param {?} routingService
     * @param {?} winRef
     */
    constructor(cmsService, routingService, winRef) {
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.getCmsTicket();
        this.addPageContract();
        if (winRef.nativeWindow) {
            /** @type {?} */
            const window = (/** @type {?} */ (winRef.nativeWindow));
            // rerender components and slots after editing
            window.smartedit = window.smartedit || {};
            window.smartedit.renderComponent = (componentId, componentType, parentId) => {
                return this.renderComponent(componentId, componentType, parentId);
            };
            // reprocess page
            window.smartedit.reprocessPage = this.reprocessPage;
        }
    }
    /**
     * @return {?}
     */
    get cmsTicketId() {
        return this._cmsTicketId;
    }
    /**
     * @protected
     * @return {?}
     */
    getCmsTicket() {
        combineLatest(this.cmsService.getCurrentPage(), this.routingService.getRouterState())
            .pipe(takeWhile(([cmsPage]) => cmsPage === undefined))
            .subscribe(([, routerState]) => {
            if (routerState.state && !this._cmsTicketId) {
                this._cmsTicketId = routerState.state.queryParams['cmsTicketId'];
                if (this._cmsTicketId) {
                    this.cmsService.launchInSmartEdit = true;
                }
            }
        });
    }
    /**
     * @protected
     * @return {?}
     */
    addPageContract() {
        this.cmsService.getCurrentPage().subscribe(cmsPage => {
            if (cmsPage && this._cmsTicketId) {
                /** @type {?} */
                const previousContract = [];
                Array.from(document.body.classList).forEach(attr => previousContract.push(attr));
                previousContract.forEach(attr => document.body.classList.remove(attr));
                document.body.classList.add(`smartedit-page-uid-${cmsPage.pageId}`);
                document.body.classList.add(`smartedit-page-uuid-${cmsPage.uuid}`);
                document.body.classList.add(`smartedit-catalog-version-uuid-${cmsPage.catalogUuid}`);
            }
        });
    }
    /**
     * @protected
     * @param {?} componentId
     * @param {?=} componentType
     * @param {?=} parentId
     * @return {?}
     */
    renderComponent(componentId, componentType, parentId) {
        if (componentId) {
            // without parentId, it is slot
            if (!parentId) {
                this.cmsService.refreshLatestPage();
            }
            else if (componentType) {
                this.cmsService.refreshComponent(componentId);
            }
        }
        return true;
    }
    /**
     * @protected
     * @return {?}
     */
    reprocessPage() {
        // TODO: reprocess page API
    }
}
SmartEditService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SmartEditService.ctorParameters = () => [
    { type: CmsService },
    { type: RoutingService },
    { type: WindowRef }
];
/** @nocollapse */ SmartEditService.ngInjectableDef = defineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(inject(CmsService), inject(RoutingService), inject(WindowRef)); }, token: SmartEditService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsTicketInterceptor {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (request.url.indexOf('/cms/') > -1 && this.service.cmsTicketId) {
            request = request.clone({
                setParams: {
                    cmsTicketId: this.service.cmsTicketId
                }
            });
        }
        return next.handle(request);
    }
}
CmsTicketInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CmsTicketInterceptor.ctorParameters = () => [
    { type: SmartEditService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const interceptors$3 = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CmsTicketInterceptor,
        multi: true
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SmartEditModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SmartEditModule,
            providers: [...interceptors$3]
        };
    }
}
SmartEditModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STORES_ENDPOINT = 'stores';
class OccStoreFinderService {
    /**
     * @param {?} http
     * @param {?} occModuleConfig
     */
    constructor(http, occModuleConfig) {
        this.http = http;
        this.occModuleConfig = occModuleConfig;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    findStores(query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude);
    }
    /**
     * @return {?}
     */
    storesCount() {
        /** @type {?} */
        const storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http
            .get(storeCountUrl)
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} storeId
     * @return {?}
     */
    findStoreById(storeId) {
        /** @type {?} */
        const storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        const params = { fields: 'FULL' };
        return this.http
            .get(storeDetailsUrl, { params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    callOccFindStores(query, searchConfig, longitudeLatitude) {
        /** @type {?} */
        const url = this.getStoresEndpoint();
        /** @type {?} */
        let params = new HttpParams({
            fromString: 'fields=stores(name,displayName,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),' +
                'geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),' +
                'pagination(DEFAULT),' +
                'sorts(DEFAULT)'
        });
        if (longitudeLatitude) {
            params = params.set('longitude', String(longitudeLatitude.longitude));
            params = params.set('latitude', String(longitudeLatitude.latitude));
        }
        else {
            params = params.set('query', query);
        }
        if (searchConfig.pageSize) {
            params = params.set('pageSize', String(searchConfig.pageSize));
        }
        if (searchConfig.currentPage) {
            params = params.set('currentPage', String(searchConfig.currentPage));
        }
        if (searchConfig.sort) {
            params = params.set('sort', searchConfig.sort);
        }
        return this.http.get(url, { params }).pipe(catchError((error) => {
            if (error.json) {
                return throwError(error.json());
            }
            return throwError(error);
        }));
    }
    /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    getStoresEndpoint(url) {
        /** @type {?} */
        const baseUrl = this.occModuleConfig.server.baseUrl +
            this.occModuleConfig.server.occPrefix +
            this.occModuleConfig.site.baseSite +
            '/' +
            STORES_ENDPOINT;
        return url ? baseUrl + '/' + url : baseUrl;
    }
}
OccStoreFinderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccStoreFinderService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderOccModule {
}
StoreFinderOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, OccModule],
                providers: [OccStoreFinderService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class StoreFinderConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STORE_FINDER_FEATURE = 'stores';
/** @type {?} */
const STORE_FINDER_DATA = '[StoreFinder] Store Finder Data';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ON_HOLD = '[StoreFinder] On Hold';
/** @type {?} */
const FIND_STORES = '[StoreFinder] Find Stores';
/** @type {?} */
const FIND_STORES_FAIL = '[StoreFinder] Find Stores Fail';
/** @type {?} */
const FIND_STORES_SUCCESS = '[StoreFinder] Find Stores Success';
/** @type {?} */
const FIND_STORE_BY_ID = '[StoreFinder] Find a Store by Id';
/** @type {?} */
const FIND_STORE_BY_ID_FAIL = '[StoreFinder] Find a Store by Id Fail';
/** @type {?} */
const FIND_STORE_BY_ID_SUCCESS = '[StoreFinder] Find a Store by Id Success';
class OnHold extends LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = ON_HOLD;
    }
}
class FindStores extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES;
    }
}
class FindStoresFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORES_FAIL;
    }
}
class FindStoresSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORES_SUCCESS;
    }
}
class FindStoreById extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID;
    }
}
class FindStoreByIdFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_FAIL;
    }
}
class FindStoreByIdSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = FIND_STORE_BY_ID_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VIEW_ALL_STORES = '[StoreFinder] View All Stores';
/** @type {?} */
const VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
/** @type {?} */
const VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';
class ViewAllStores extends LoaderLoadAction {
    constructor() {
        super(STORE_FINDER_DATA);
        this.type = VIEW_ALL_STORES;
    }
}
class ViewAllStoresFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA, payload);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_FAIL;
    }
}
class ViewAllStoresSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(STORE_FINDER_DATA);
        this.payload = payload;
        this.type = VIEW_ALL_STORES_SUCCESS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getStoreFinderState = createFeatureSelector(STORE_FINDER_FEATURE);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getFindStoresState = createSelector(getStoreFinderState, (storesState) => storesState.findStores);
/** @type {?} */
const getFindStoresEntities = createSelector(getFindStoresState, state => loaderValueSelector(state));
/** @type {?} */
const getStoresLoading = createSelector(getFindStoresState, state => loaderLoadingSelector(state));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getViewAllStoresState = createSelector(getStoreFinderState, (storesState) => storesState.viewAllStores);
/** @type {?} */
const getViewAllStoresEntities = createSelector(getViewAllStoresState, state => loaderValueSelector(state));
/** @type {?} */
const getViewAllStoresLoading = createSelector(getViewAllStoresState, state => loaderLoadingSelector(state));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExternalJsFileLoader {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
    }
    /**
     * Loads a javascript from an external URL
     * @param {?} src URL for the script to be loaded
     * @param {?=} params additional parameters to be attached to the given URL
     * @param {?=} callback a function to be invoked after the script has been loaded
     * @return {?}
     */
    load(src, params, callback) {
        /** @type {?} */
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        if (params) {
            script.src = src + this.parseParams(params);
        }
        else {
            script.src = src;
        }
        script.async = true;
        script.defer = true;
        if (callback) {
            script.addEventListener('load', callback);
        }
        document.head.appendChild(script);
    }
    /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @private
     * @param {?} params object containing parameters
     * @return {?}
     */
    parseParams(params) {
        /** @type {?} */
        let result = '';
        /** @type {?} */
        const keysArray = Object.keys(params);
        if (keysArray.length > 0) {
            result =
                '?' +
                    keysArray
                        .map(key => encodeURI(key) + '=' + encodeURI(params[key]))
                        .join('&');
        }
        return result;
    }
}
ExternalJsFileLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ExternalJsFileLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreDataService {
    constructor() {
        this.weekDays = {
            0: 'Sun',
            1: 'Mon',
            2: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri',
            6: 'Sat'
        };
    }
    /**
     * Returns store latitude
     * @param {?} location store location
     * @return {?}
     */
    getStoreLatitude(location) {
        return location.geoPoint.latitude;
    }
    /**
     * Returns store longitude
     * @param {?} location store location
     * @return {?}
     */
    getStoreLongitude(location) {
        return location.geoPoint.longitude;
    }
    /**
     * Returns store closing time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    getStoreClosingTime(location, date) {
        /** @type {?} */
        const requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        let result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            const closingHour = requestedDaySchedule.closingTime.formattedHour.split(':')[0];
            /** @type {?} */
            const closingMinute = requestedDaySchedule.closingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(closingHour);
            result.setMinutes(closingMinute);
        }
        return result;
    }
    /**
     * Returns store opening time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    getStoreOpeningTime(location, date) {
        /** @type {?} */
        const requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        let result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            const openingHour = requestedDaySchedule.openingTime.formattedHour.split(':')[0];
            /** @type {?} */
            const openingMinutes = requestedDaySchedule.openingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(openingHour);
            result.setMinutes(openingMinutes);
        }
        return result;
    }
    /**
     * Returns information about store open status
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    isStoreOpen(location, date) {
        /** @type {?} */
        const requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        let result = false;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            const openingDate = this.getStoreOpeningTime(location, date);
            /** @type {?} */
            const closingDate = this.getStoreClosingTime(location, date);
            result = date > openingDate && date < closingDate;
        }
        return result;
    }
    /**
     * Extracts schedule from the given location for the given date
     * @private
     * @param {?} location location
     * @param {?} date date
     *
     * @return {?} payload describing the store's schedule for the given day.
     */
    getSchedule(location, date) {
        /** @type {?} */
        const weekday = this.weekDays[date.getDay()];
        return location.openingHours.weekDayOpeningList.find(weekDayOpeningListItem => weekDayOpeningListItem.weekDay === weekday);
    }
}
StoreDataService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleMapRendererService {
    /**
     * @param {?} config
     * @param {?} externalJsFileLoader
     * @param {?} storeDataService
     */
    constructor(config, externalJsFileLoader, storeDataService) {
        this.config = config;
        this.externalJsFileLoader = externalJsFileLoader;
        this.storeDataService = storeDataService;
        this.googleMap = null;
    }
    /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param {?} mapElement HTML element inside of which the map will be displayed
     * @param {?} locations array containign geo data to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    renderMap(mapElement, locations, selectMarkerHandler) {
        if (this.googleMap === null) {
            this.externalJsFileLoader.load(this.config.googleMaps.apiUrl, { key: this.config.googleMaps.apiKey }, () => {
                this.drawMap(mapElement, locations, selectMarkerHandler);
            });
        }
        else {
            this.drawMap(mapElement, locations, selectMarkerHandler);
        }
    }
    /**
     * Centers the map to the given point
     * @param {?} latitute latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    centerMap(latitute, longitude) {
        this.googleMap.panTo({ lat: latitute, lng: longitude });
        this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
    }
    /**
     * Defines and returns {\@link google.maps.LatLng} representing a point where the map will be centered
     * @private
     * @param {?} locations list of locations
     * @return {?}
     */
    defineMapCenter(locations) {
        return new google.maps.LatLng(this.storeDataService.getStoreLatitude(locations[0]), this.storeDataService.getStoreLongitude(locations[0]));
    }
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be created
     * @param {?} mapCenter {\@link google.maps.LatLng} the point where the map will be centered
     * @return {?}
     */
    initMap(mapElement, mapCenter) {
        /** @type {?} */
        const mapProp = {
            center: mapCenter,
            zoom: this.config.googleMaps.scale,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.googleMap = new google.maps.Map(mapElement, mapProp);
    }
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @private
     * @param {?} locations array of locations to be displayed on the map
     * @param {?=} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    createMarkers(locations, selectMarkerHandler) {
        this.markers = [];
        locations.forEach((element, index) => {
            /** @type {?} */
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.storeDataService.getStoreLatitude(element), this.storeDataService.getStoreLongitude(element)),
                label: index + 1 + ''
            });
            this.markers.push(marker);
            marker.setMap(this.googleMap);
            marker.addListener('mouseover', function () {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            });
            marker.addListener('mouseout', function () {
                marker.setAnimation(null);
            });
            if (selectMarkerHandler) {
                marker.addListener('click', function () {
                    selectMarkerHandler(index);
                });
            }
        });
    }
    /**
     * Initialize and draw the map
     * @private
     * @param {?} mapElement {\@link HTMLElement} inside of which the map will be drawn
     * @param {?} locations array of locations to be displayed on the map
     * @param {?} selectMarkerHandler function to handle whenever a marker on a map is clicked
     * @return {?}
     */
    drawMap(mapElement, locations, selectMarkerHandler) {
        this.initMap(mapElement, this.defineMapCenter(locations));
        this.createMarkers(locations, selectMarkerHandler);
    }
}
GoogleMapRendererService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleMapRendererService.ctorParameters = () => [
    { type: StoreFinderConfig },
    { type: ExternalJsFileLoader },
    { type: StoreDataService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FindStoresEffect {
    /**
     * @param {?} actions$
     * @param {?} occStoreFinderService
     */
    constructor(actions$, occStoreFinderService) {
        this.actions$ = actions$;
        this.occStoreFinderService = occStoreFinderService;
        this.findStores$ = this.actions$.pipe(ofType(FIND_STORES), map((action) => action.payload), mergeMap(payload => this.occStoreFinderService
            .findStores(payload.queryText, payload.searchConfig, payload.longitudeLatitude)
            .pipe(map(data => {
            data.geolocation = payload.longitudeLatitude;
            if (payload.countryIsoCode) {
                data.stores = data.stores.filter(store => store.address.country.isocode === payload.countryIsoCode);
            }
            return new FindStoresSuccess(data);
        }), catchError(error => of(new FindStoresFail(error))))));
        this.findStoreById$ = this.actions$.pipe(ofType(FIND_STORE_BY_ID), map((action) => action.payload), switchMap(payload => this.occStoreFinderService.findStoreById(payload.storeId).pipe(map(data => new FindStoreByIdSuccess(data)), catchError(error => of(new FindStoreByIdFail(error))))));
    }
}
FindStoresEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FindStoresEffect.ctorParameters = () => [
    { type: Actions },
    { type: OccStoreFinderService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], FindStoresEffect.prototype, "findStores$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], FindStoresEffect.prototype, "findStoreById$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewAllStoresEffect {
    /**
     * @param {?} actions$
     * @param {?} occStoreFinderService
     */
    constructor(actions$, occStoreFinderService) {
        this.actions$ = actions$;
        this.occStoreFinderService = occStoreFinderService;
        this.viewAllStores$ = this.actions$.pipe(ofType(VIEW_ALL_STORES), switchMap(() => {
            return this.occStoreFinderService.storesCount().pipe(map(data => new ViewAllStoresSuccess(data)), catchError(error => of(new ViewAllStoresFail(error))));
        }));
    }
}
ViewAllStoresEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ViewAllStoresEffect.ctorParameters = () => [
    { type: Actions },
    { type: OccStoreFinderService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const effects$8 = [FindStoresEffect, ViewAllStoresEffect];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getReducers$9() {
    return {
        findStores: loaderReducer(STORE_FINDER_DATA),
        viewAllStores: loaderReducer(STORE_FINDER_DATA)
    };
}
/** @type {?} */
const reducerToken$9 = new InjectionToken('StoreFinderReducers');
/** @type {?} */
const reducerProvider$9 = {
    provide: reducerToken$9,
    useFactory: getReducers$9
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderService {
    /**
     * @param {?} store
     * @param {?} winRef
     */
    constructor(store, winRef) {
        this.store = store;
        this.winRef = winRef;
        this.geolocationWatchId = null;
    }
    /**
     * Returns boolean observable for store's loading state
     * @return {?}
     */
    getStoresLoading() {
        return this.store.pipe(select(getStoresLoading));
    }
    /**
     * Returns observable for store's entities
     * @return {?}
     */
    getFindStoresEntities() {
        return this.store.pipe(select(getFindStoresEntities));
    }
    /**
     * Returns boolean observable for view all store's loading state
     * @return {?}
     */
    getViewAllStoresLoading() {
        return this.store.pipe(select(getViewAllStoresLoading));
    }
    /**
     * Returns observable for view all store's entities
     * @return {?}
     */
    getViewAllStoresEntities() {
        return this.store.pipe(select(getViewAllStoresEntities));
    }
    /**
     * Store finding action functionality
     * @param {?} queryText text query
     * @param {?} longitudeLatitude longitude and latitude coordinates
     * @param {?} searchConfig search configuration
     * @param {?=} countryIsoCode country ISO code
     * @return {?}
     */
    findStoresAction(queryText, longitudeLatitude, searchConfig, countryIsoCode) {
        this.store.dispatch(new FindStores({
            queryText: queryText,
            longitudeLatitude: longitudeLatitude,
            searchConfig: searchConfig,
            countryIsoCode: countryIsoCode
        }));
    }
    /**
     * View all stores
     * @return {?}
     */
    viewAllStores() {
        this.clearWatchGeolocation(new ViewAllStores());
    }
    /**
     * View all stores by id
     * @param {?} storeId store id
     * @return {?}
     */
    viewStoreById(storeId) {
        this.clearWatchGeolocation(new FindStoreById({ storeId }));
    }
    /**
     * Find all stores
     * @param {?} queryText text query
     * @param {?=} useMyLocation use current location
     * @return {?}
     */
    findStores(queryText, useMyLocation) {
        if (useMyLocation && this.winRef.nativeWindow) {
            this.clearWatchGeolocation(new OnHold());
            this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((pos) => {
                /** @type {?} */
                const longitudeLatitude = {
                    longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude
                };
                this.clearWatchGeolocation(new FindStores({ queryText, longitudeLatitude }));
            });
        }
        else {
            this.clearWatchGeolocation(new FindStores({ queryText }));
        }
    }
    /**
     * @private
     * @param {?} callbackAction
     * @return {?}
     */
    clearWatchGeolocation(callbackAction) {
        if (this.geolocationWatchId !== null) {
            this.winRef.nativeWindow.navigator.geolocation.clearWatch(this.geolocationWatchId);
            this.geolocationWatchId = null;
        }
        this.store.dispatch(callbackAction);
    }
}
StoreFinderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StoreFinderService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderStoreModule {
}
StoreFinderStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    StoreFinderOccModule,
                    StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken$9),
                    EffectsModule.forFeature(effects$8)
                ],
                providers: [reducerProvider$9]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultStoreFinderConfig = {
    googleMaps: {
        apiUrl: 'https://maps.googleapis.com/maps/api/js',
        apiKey: '',
        scale: 12,
        selectedMarkerScale: 16
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$3 = defaultStoreFinderConfig;
class StoreFinderCoreModule {
}
StoreFinderCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigModule.withConfig(defaultStoreFinderConfig),
                    StoreFinderStoreModule,
                    StoreFinderOccModule
                ],
                providers: [
                    StoreFinderService,
                    StoreDataService,
                    GoogleMapRendererService,
                    ExternalJsFileLoader,
                    { provide: StoreFinderConfig, useValue: ɵ0$3 }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CxApiModule {
}
CxApiModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CxApiService {
    /**
     * @param {?} auth
     * @param {?} cms
     * @param {?} routing
     * @param {?} currency
     * @param {?} language
     * @param {?} product
     * @param {?} productSearch
     * @param {?} productReview
     * @param {?} user
     */
    constructor(auth, cms, routing, currency, language, product, productSearch, productReview, user) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.currency = currency;
        this.language = language;
        this.product = product;
        this.productSearch = productSearch;
        this.productReview = productReview;
        this.user = user;
    }
}
CxApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CxApiService.ctorParameters = () => [
    { type: AuthService, decorators: [{ type: Optional }] },
    { type: CmsService, decorators: [{ type: Optional }] },
    { type: RoutingService, decorators: [{ type: Optional }] },
    { type: CurrencyService, decorators: [{ type: Optional }] },
    { type: LanguageService, decorators: [{ type: Optional }] },
    { type: ProductService, decorators: [{ type: Optional }] },
    { type: ProductSearchService, decorators: [{ type: Optional }] },
    { type: ProductReviewService, decorators: [{ type: Optional }] },
    { type: UserService, decorators: [{ type: Optional }] }
];
/** @nocollapse */ CxApiService.ngInjectableDef = defineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(inject(AuthService, 8), inject(CmsService, 8), inject(RoutingService, 8), inject(CurrencyService, 8), inject(LanguageService, 8), inject(ProductService, 8), inject(ProductSearchService, 8), inject(ProductReviewService, 8), inject(UserService, 8)); }, token: CxApiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripHtmlPipe {
    /**
     * @param {?} product
     * @return {?}
     */
    transform(product) {
        /** @type {?} */
        const productClone = Object.assign({}, product);
        productClone.name = product.name.replace(/<[^>]*>/g, '');
        return productClone;
    }
}
StripHtmlPipe.decorators = [
    { type: Pipe, args: [{ name: 'stripHtml' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StripHtmlModule {
}
StripHtmlModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StripHtmlPipe],
                exports: [StripHtmlPipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipeModule {
}
PipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [StripHtmlModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtilModule {
}
UtilModule.decorators = [
    { type: NgModule, args: [{
                imports: [PipeModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CREATE_CART, CREATE_CART_FAIL, CREATE_CART_SUCCESS, LOAD_CART, LOAD_CART_FAIL, LOAD_CART_SUCCESS, MERGE_CART, MERGE_CART_SUCCESS, CreateCart, CreateCartFail, CreateCartSuccess, LoadCart, LoadCartFail, LoadCartSuccess, MergeCart, MergeCartSuccess, ADD_ENTRY, ADD_ENTRY_SUCCESS, ADD_ENTRY_FAIL, REMOVE_ENTRY, REMOVE_ENTRY_SUCCESS, REMOVE_ENTRY_FAIL, UPDATE_ENTRY, UPDATE_ENTRY_SUCCESS, UPDATE_ENTRY_FAIL, AddEntry, AddEntrySuccess, AddEntryFail, RemoveEntry, RemoveEntrySuccess, RemoveEntryFail, UpdateEntry, UpdateEntrySuccess, UpdateEntryFail, getCartContentSelector, getRefreshSelector, getEntriesSelector, getCartMergeCompleteSelector, getCartsState, getActiveCartState, getCartState, getCartContent, getRefresh, getLoaded, getCartMergeComplete, getEntriesMap, getEntrySelectorFactory, getEntries, CART_FEATURE, CART_DATA, services$1 as services, CartService, ANONYMOUS_USERID, CartDataService, OccCartService, CartOccModule, CartModule, provideConfig, provideConfigFactory, configurationFactory, Config, ConfigChunk, ConfigModule, ServerConfig, defaultServerConfig, serverConfigFromMetaTagFactory, SERVER_BASE_URL_META_TAG_NAME, SERVER_BASE_URL_META_TAG_PLACEHOLDER, serverConfigValidator, provideConfigValidator, validateConfig, ConfigValidatorToken, StateModule, entityMeta, entityRemoveMeta, entityRemoveAllMeta, ENTITY_REMOVE_ACTION, ENTITY_REMOVE_ALL_ACTION, EntityRemoveAction, EntityRemoveAllAction, entityReducer, initialEntityState, entitySelector, loadMeta, failMeta, successMeta, resetMeta, LOADER_LOAD_ACTION, LOADER_FAIL_ACTION, LOADER_SUCCESS_ACTION, LOADER_RESET_ACTION, LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, LoaderResetAction, loaderReducer, initialLoaderState, loaderValueSelector, loaderLoadingSelector, loaderErrorSelector, loaderSuccessSelector, ofLoaderLoad, ofLoaderFail, ofLoaderSuccess, entityLoadMeta, entityFailMeta, entitySuccessMeta, entityResetMeta, ENTITY_LOAD_ACTION, ENTITY_FAIL_ACTION, ENTITY_SUCCESS_ACTION, ENTITY_RESET_ACTION, EntityLoadAction, EntityFailAction, EntitySuccessAction, EntityResetAction, entityLoaderReducer, entityStateSelector, entityValueSelector, entityLoadingSelector, entityErrorSelector, entitySuccessSelector, getStateSlice, StorageSyncType, StateConfig, metaReducersFactory, META_REDUCER, OccProductService, OccProductSearchService, ProductOccModule, PRODUCT_FEATURE, PRODUCT_DETAIL_ENTITY, ProductImageConverterService, ProductReferenceConverterService, ProductConverterModule, SEARCH_PRODUCTS, SEARCH_PRODUCTS_FAIL, SEARCH_PRODUCTS_SUCCESS, GET_PRODUCT_SUGGESTIONS, GET_PRODUCT_SUGGESTIONS_SUCCESS, GET_PRODUCT_SUGGESTIONS_FAIL, CLEAN_PRODUCT_SEARCH, SearchProducts, SearchProductsFail, SearchProductsSuccess, GetProductSuggestions, GetProductSuggestionsSuccess, GetProductSuggestionsFail, CleanProductSearchState, LOAD_PRODUCT, LOAD_PRODUCT_FAIL, LOAD_PRODUCT_SUCCESS, LoadProduct, LoadProductFail, LoadProductSuccess, LOAD_PRODUCT_REVIEWS, LOAD_PRODUCT_REVIEWS_FAIL, LOAD_PRODUCT_REVIEWS_SUCCESS, POST_PRODUCT_REVIEW, POST_PRODUCT_REVIEW_FAIL, POST_PRODUCT_REVIEW_SUCCESS, LoadProductReviews, LoadProductReviewsFail, LoadProductReviewsSuccess, PostProductReview, PostProductReviewFail, PostProductReviewSuccess, getProductsState, getProductState, getSelectedProductsFactory, getSelectedProductStateFactory, getSelectedProductFactory, getSelectedProductLoadingFactory, getSelectedProductSuccessFactory, getSelectedProductErrorFactory, getAllProductCodes, getProductsSearchState, getSearchResults$1 as getSearchResults, getAuxSearchResults$1 as getAuxSearchResults, getProductSuggestions$1 as getProductSuggestions, getProductReviewsState, getSelectedProductReviewsFactory, ProductService, ProductSearchService, ProductReviewService, ProductModule, CategoryPageTitleResolver, ProductPageTitleResolver, SearchPageTitleResolver, LanguageService, CurrencyService, SiteContextModule, interceptors$1 as interceptors, OccSiteService, SiteContextOccModule, SiteContextInterceptor, SiteContextConfig, serviceMapFactory, ContextServiceMap, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID, contextServiceMapProvider, inititializeContext, contextServiceProviders, initSiteContextRoutesHandler, siteContextParamsProviders, SITE_CONTEXT_FEATURE, LOAD_LANGUAGES, LOAD_LANGUAGES_FAIL, LOAD_LANGUAGES_SUCCESS, SET_ACTIVE_LANGUAGE, LANGUAGE_CHANGE, LoadLanguages, LoadLanguagesFail, LoadLanguagesSuccess, SetActiveLanguage, LanguageChange, LOAD_CURRENCIES, LOAD_CURRENCIES_FAIL, LOAD_CURRENCIES_SUCCESS, SET_ACTIVE_CURRENCY, CURRENCY_CHANGE, LoadCurrencies, LoadCurrenciesFail, LoadCurrenciesSuccess, SetActiveCurrency, CurrencyChange, getSiteContextState, getLanguagesState, getLanguagesEntities, getActiveLanguage, getAllLanguages, getCurrenciesState, getCurrenciesEntities, getActiveCurrency, getAllCurrencies, OccConfig, defaultOccConfig, OccModule, USE_CLIENT_TOKEN, InterceptorUtil, OccMiscsService, PriceType, ImageType, Fields, Fields1, Fields2, Fields3, Fields4, Fields5, Fields6, PageType, Fields7, Fields8, Fields9, Fields10, Fields11, Fields12, Fields13, Fields14, Fields15, Fields16, SortEnum, Fields17, Fields18, Fields19, Fields20, Fields21, Fields22, Fields23, Fields24, Fields25, Fields26, Fields27, Fields28, Fields29, Fields30, Fields31, Fields32, Fields33, Fields34, Fields35, Fields36, Fields37, Fields38, Fields39, Fields40, Fields41, Fields42, Fields43, Fields44, Fields45, Fields46, Fields47, Fields48, Fields49, Fields50, Fields51, Fields52, Fields53, Fields54, Fields55, Fields56, Fields57, Fields58, Fields59, Fields60, Fields61, Type, RoutingModule, RoutingService, PageContext, ConfigurableRoutesConfig, UrlTranslationModule, TranslateUrlPipe, ConfigurableRoutesService, initConfigurableRoutes, ConfigurableRoutesModule, RoutesConfigLoader, CHECKOUT_FEATURE, CHECKOUT_CLEAR_MISCS_DATA, CheckoutClearMiscsData, ADD_DELIVERY_ADDRESS, ADD_DELIVERY_ADDRESS_FAIL, ADD_DELIVERY_ADDRESS_SUCCESS, SET_DELIVERY_ADDRESS, SET_DELIVERY_ADDRESS_FAIL, SET_DELIVERY_ADDRESS_SUCCESS, LOAD_SUPPORTED_DELIVERY_MODES, LOAD_SUPPORTED_DELIVERY_MODES_FAIL, LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS, CLEAR_SUPPORTED_DELIVERY_MODES, SET_DELIVERY_MODE, SET_DELIVERY_MODE_FAIL, SET_DELIVERY_MODE_SUCCESS, CREATE_PAYMENT_DETAILS, CREATE_PAYMENT_DETAILS_FAIL, CREATE_PAYMENT_DETAILS_SUCCESS, SET_PAYMENT_DETAILS, SET_PAYMENT_DETAILS_FAIL, SET_PAYMENT_DETAILS_SUCCESS, PLACE_ORDER, PLACE_ORDER_FAIL, PLACE_ORDER_SUCCESS, CLEAR_CHECKOUT_STEP, CLEAR_CHECKOUT_DATA, AddDeliveryAddress, AddDeliveryAddressFail, AddDeliveryAddressSuccess, SetDeliveryAddress, SetDeliveryAddressFail, SetDeliveryAddressSuccess, LoadSupportedDeliveryModes, LoadSupportedDeliveryModesFail, LoadSupportedDeliveryModesSuccess, SetDeliveryMode, SetDeliveryModeFail, SetDeliveryModeSuccess, CreatePaymentDetails, CreatePaymentDetailsFail, CreatePaymentDetailsSuccess, SetPaymentDetails, SetPaymentDetailsFail, SetPaymentDetailsSuccess, PlaceOrder, PlaceOrderFail, PlaceOrderSuccess, ClearSupportedDeliveryModes, ClearCheckoutStep, ClearCheckoutData, LOAD_CARD_TYPES, LOAD_CARD_TYPES_FAIL, LOAD_CARD_TYPES_SUCCESS, LoadCardTypes, LoadCardTypesFail, LoadCardTypesSuccess, VERIFY_ADDRESS, VERIFY_ADDRESS_FAIL, VERIFY_ADDRESS_SUCCESS, CLEAR_ADDRESS_VERIFICATION_RESULTS, VerifyAddress, VerifyAddressFail, VerifyAddressSuccess, ClearAddressVerificationResults, getCheckoutStepsState, getDeliveryAddress$1 as getDeliveryAddress, getDeliveryMode$1 as getDeliveryMode, getSupportedDeliveryModes, getSelectedCode, getSelectedDeliveryMode, getPaymentDetails$1 as getPaymentDetails, getCheckoutOrderDetails, getCardTypesState, getCardTypesEntites$1 as getCardTypesEntites, getAllCardTypes, getAddressVerificationResultsState, getAddressVerificationResults$1 as getAddressVerificationResults, CheckoutService, CheckoutModule, CheckoutPageTitleResolver, OccUserService, OccOrderService, UserOccModule, CLEAR_MISCS_DATA, ClearMiscsData, LOAD_USER_DETAILS, LOAD_USER_DETAILS_FAIL, LOAD_USER_DETAILS_SUCCESS, LoadUserDetails, LoadUserDetailsFail, LoadUserDetailsSuccess, LOAD_USER_ADDRESSES, LOAD_USER_ADDRESSES_FAIL, LOAD_USER_ADDRESSES_SUCCESS, ADD_USER_ADDRESS, ADD_USER_ADDRESS_FAIL, ADD_USER_ADDRESS_SUCCESS, UPDATE_USER_ADDRESS, UPDATE_USER_ADDRESS_FAIL, UPDATE_USER_ADDRESS_SUCCESS, DELETE_USER_ADDRESS, DELETE_USER_ADDRESS_FAIL, DELETE_USER_ADDRESS_SUCCESS, LoadUserAddresses, LoadUserAddressesFail, LoadUserAddressesSuccess, AddUserAddress, AddUserAddressFail, AddUserAddressSuccess, UpdateUserAddress, UpdateUserAddressFail, UpdateUserAddressSuccess, DeleteUserAddress, DeleteUserAddressFail, DeleteUserAddressSuccess, LOAD_USER_PAYMENT_METHODS, LOAD_USER_PAYMENT_METHODS_FAIL, LOAD_USER_PAYMENT_METHODS_SUCCESS, SET_DEFAULT_USER_PAYMENT_METHOD, SET_DEFAULT_USER_PAYMENT_METHOD_FAIL, SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS, DELETE_USER_PAYMENT_METHOD, DELETE_USER_PAYMENT_METHOD_FAIL, DELETE_USER_PAYMENT_METHOD_SUCCESS, LoadUserPaymentMethods, LoadUserPaymentMethodsFail, LoadUserPaymentMethodsSuccess, SetDefaultUserPaymentMethod, SetDefaultUserPaymentMethodFail, SetDefaultUserPaymentMethodSuccess, DeleteUserPaymentMethod, DeleteUserPaymentMethodFail, DeleteUserPaymentMethodSuccess, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, RegisterUser, RegisterUserFail, RegisterUserSuccess, LOAD_USER_ORDERS, LOAD_USER_ORDERS_FAIL, LOAD_USER_ORDERS_SUCCESS, CLEAR_USER_ORDERS, LoadUserOrders, LoadUserOrdersFail, LoadUserOrdersSuccess, ClearUserOrders, LOAD_TITLES, LOAD_TITLES_FAIL, LOAD_TITLES_SUCCESS, LoadTitles, LoadTitlesFail, LoadTitlesSuccess, LOAD_DELIVERY_COUNTRIES, LOAD_DELIVERY_COUNTRIES_FAIL, LOAD_DELIVERY_COUNTRIES_SUCCESS, LoadDeliveryCountries, LoadDeliveryCountriesFail, LoadDeliveryCountriesSuccess, LOAD_REGIONS, LOAD_REGIONS_SUCCESS, LOAD_REGIONS_FAIL, LoadRegions, LoadRegionsFail, LoadRegionsSuccess, LOAD_ORDER_DETAILS, LOAD_ORDER_DETAILS_FAIL, LOAD_ORDER_DETAILS_SUCCESS, CLEAR_ORDER_DETAILS, LoadOrderDetails, LoadOrderDetailsFail, LoadOrderDetailsSuccess, ClearOrderDetails, LOAD_BILLING_COUNTRIES, LOAD_BILLING_COUNTRIES_FAIL, LOAD_BILLING_COUNTRIES_SUCCESS, LoadBillingCountries, LoadBillingCountriesFail, LoadBillingCountriesSuccess, effects$6 as effects, UserDetailsEffects, UserAddressesEffects, UserPaymentMethodsEffects, UserRegisterEffects, UserOrdersEffect, TitlesEffects, DeliveryCountriesEffects, RegionsEffects, OrderDetailsEffect, BillingCountriesEffect, getReducers$8 as getReducers, clearUserState, reducerToken$8 as reducerToken, reducerProvider$8 as reducerProvider, metaReducers$5 as metaReducers, getDetailsState, getDetails, getAddressesLoaderState, getAddresses, getAddressesLoading, getPaymentMethodsState, getPaymentMethods, getPaymentMethodsLoading, getOrdersState, getOrdersLoaded, getOrders, getTitlesState, getTitlesEntites, getAllTitles, titleSelectorFactory, getDeliveryCountriesState, getDeliveryCountriesEntites, getAllDeliveryCountries, countrySelectorFactory, getRegionsState, getAllRegions, getOrderState, getOrderDetails$1 as getOrderDetails, getUserState, getBillingCountriesState, getBillingCountriesEntites, getAllBillingCountries, USER_FEATURE, USER_PAYMENT_METHODS, USER_ORDERS, USER_ADDRESSES, UserService, UserModule, AuthModule, AuthConfig, AuthService, AuthGuard, NotAuthGuard, LOAD_USER_TOKEN, LOAD_USER_TOKEN_FAIL, LOAD_USER_TOKEN_SUCCESS, REFRESH_USER_TOKEN, REFRESH_USER_TOKEN_FAIL, REFRESH_USER_TOKEN_SUCCESS, LoadUserToken, LoadUserTokenFail, LoadUserTokenSuccess, RefreshUserToken, RefreshUserTokenSuccess, RefreshUserTokenFail, LOAD_CLIENT_TOKEN, LOAD_CLIENT_TOKEN_FAIL, LOAD_CLIENT_TOKEN_SUCCESS, LoadClientToken, LoadClientTokenFail, LoadClientTokenSuccess, LOGIN, LOGOUT, Login, Logout, getAuthState, getUserTokenSelector, getUserTokenState, getUserToken, getClientTokenState, AUTH_FEATURE, CLIENT_TOKEN_DATA, GLOBAL_MESSAGE_FEATURE, ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_MESSAGES_BY_TYPE, AddMessage, RemoveMessage, RemoveMessagesByType, getGlobalMessageState, getGlobalMessageEntities, GlobalMessageStoreModule, GlobalMessageService, GlobalMessageType, GlobalMessageModule, defaultCmsModuleConfig, JSP_INCLUDE_CMS_COMPONENT_TYPE, CmsConfig, OccCmsService, ComponentMapperService, DefaultPageService, CmsOccModule, CMS_FEATURE, NAVIGATION_DETAIL_ENTITY, COMPONENT_ENTITY, LOAD_PAGEDATA, LOAD_PAGEDATA_FAIL, LOAD_PAGEDATA_SUCCESS, REFRESH_LATEST_PAGE, UPDATE_LATEST_PAGE_KEY, CLEAN_PAGE_STATE, LoadPageData, LoadPageDataFail, LoadPageDataSuccess, RefreshLatestPage, UpdateLatestPageKey, CleanPageState, LOAD_COMPONENT, LOAD_COMPONENT_FAIL, LOAD_COMPONENT_SUCCESS, GET_COMPONENET_FROM_PAGE, LoadComponent, LoadComponentFail, LoadComponentSuccess, GetComponentFromPage, LOAD_NAVIGATION_ITEMS, LOAD_NAVIGATION_ITEMS_FAIL, LOAD_NAVIGATION_ITEMS_SUCCESS, LoadNavigationItems, LoadNavigationItemsFail, LoadNavigationItemsSuccess, getPageEntitiesSelector, getPageCount, getLatestPageKeySelector, getPageState, getPageEntities, getLatestPageKey, getLatestPage, currentSlotSelectorFactory, getComponentEntitiesSelector, getComponentState, getComponentEntities, componentStateSelectorFactory, componentSelectorFactory, getNavigationEntryItemState, getSelectedNavigationEntryItemState, itemsSelectorFactory, getCmsState, CmsService, PageTitleService, CmsModule, PageTitleResolver, ContentPageTitleResolver, CmsPageTitleModule, SmartEditModule, OccStoreFinderService, StoreFinderOccModule, StoreFinderConfig, ON_HOLD, FIND_STORES, FIND_STORES_FAIL, FIND_STORES_SUCCESS, FIND_STORE_BY_ID, FIND_STORE_BY_ID_FAIL, FIND_STORE_BY_ID_SUCCESS, OnHold, FindStores, FindStoresFail, FindStoresSuccess, FindStoreById, FindStoreByIdFail, FindStoreByIdSuccess, VIEW_ALL_STORES, VIEW_ALL_STORES_FAIL, VIEW_ALL_STORES_SUCCESS, ViewAllStores, ViewAllStoresFail, ViewAllStoresSuccess, getFindStoresState, getFindStoresEntities, getStoresLoading, getViewAllStoresState, getViewAllStoresEntities, getViewAllStoresLoading, STORE_FINDER_FEATURE, STORE_FINDER_DATA, ExternalJsFileLoader, GoogleMapRendererService, StoreFinderService, StoreDataService, StoreFinderCoreModule, WindowRef, CxApiModule, CxApiService, PipeModule, StripHtmlModule, UtilModule, defaultAuthConfig as ɵeq, AuthErrorInterceptor as ɵex, ClientTokenInterceptor as ɵev, interceptors as ɵeu, UserTokenInterceptor as ɵew, ClientAuthenticationTokenService as ɵeo, ClientErrorHandlingService as ɵes, services as ɵer, UserAuthenticationTokenService as ɵen, UserErrorHandlingService as ɵet, AuthStoreModule as ɵee, authStoreConfigFactory as ɵed, ClientTokenEffect as ɵem, effects$1 as ɵek, UserTokenEffects as ɵel, clearAuthState as ɵei, getReducers$1 as ɵef, metaReducers as ɵej, reducerProvider$1 as ɵeh, reducerToken$1 as ɵeg, reducer$1 as ɵep, CartStoreModule as ɵa, CartEntryEffects as ɵi, CartEffects as ɵh, effects$5 as ɵg, reducer$2 as ɵj, clearCartState as ɵe, getReducers$2 as ɵb, metaReducers$1 as ɵf, reducerProvider$2 as ɵd, reducerToken$2 as ɵc, CheckoutStoreModule as ɵdr, AddressVerificationEffect as ɵdq, CardTypesEffects as ɵdp, CheckoutEffects as ɵdo, effects$7 as ɵdn, getAddressVerificationResults as ɵdm, reducer$a as ɵdl, getCardTypesEntites as ɵdk, reducer$b as ɵdj, getDeliveryAddress as ɵdf, getDeliveryMode as ɵdg, getOrderDetails as ɵdi, getPaymentDetails as ɵdh, reducer$9 as ɵde, clearCheckoutState as ɵdc, getCheckoutState as ɵdb, getReducers$6 as ɵcy, metaReducers$4 as ɵdd, reducerProvider$6 as ɵda, reducerToken$6 as ɵcz, CmsStoreModule as ɵbj, cmsStoreConfigFactory as ɵbi, ComponentEffects as ɵbr, effects$4 as ɵbp, NavigationEntryItemEffects as ɵbs, PageEffects as ɵbq, clearCmsState as ɵbn, getReducers$5 as ɵbk, metaReducers$3 as ɵbo, reducerProvider$5 as ɵbm, reducerToken$5 as ɵbl, reducer$8 as ɵby, reducer$7 as ɵbx, ConfigModule as ɵfi, HttpErrorInterceptor as ɵfd, interceptors$2 as ɵfc, reducer$c as ɵfb, getReducers$7 as ɵey, reducerProvider$7 as ɵfa, reducerToken$7 as ɵez, PageType as ɵcx, effects$3 as ɵbb, ProductReviewsEffects as ɵbe, ProductsSearchEffects as ɵbc, ProductEffects as ɵbd, ProductStoreModule as ɵbg, productStoreConfigFactory as ɵbf, clearProductsState as ɵz, getReducers$4 as ɵw, metaReducers$2 as ɵba, reducerProvider$4 as ɵy, reducerToken$4 as ɵx, reducer$4 as ɵbh, getAuxSearchResults as ɵu, getProductSuggestions as ɵv, getSearchResults as ɵt, reducer$3 as ɵs, defaultConfigurableRoutesConfig as ɵcn, defaultStorefrontRoutesTranslations as ɵco, RouteRecognizerService as ɵbv, UrlParsingService as ɵbw, UrlTranslationService as ɵbu, ROUTING_FEATURE as ɵcp, effects as ɵcv, RouterEffects as ɵcw, CustomSerializer as ɵcu, getReducers as ɵcq, reducer as ɵcr, reducerProvider as ɵct, reducerToken as ɵcs, defaultSiteContextConfigFactory as ɵcf, SiteContextParamsService as ɵck, SiteContextRoutesHandler as ɵcm, SiteContextUrlSerializer as ɵcl, CurrenciesEffects as ɵce, effects$2 as ɵcc, LanguagesEffects as ɵcd, reducer$6 as ɵcj, getReducers$3 as ɵbz, reducerProvider$3 as ɵcb, reducerToken$3 as ɵca, reducer$5 as ɵci, SiteContextStoreModule as ɵch, siteContextStoreConfigFactory as ɵcg, CmsTicketInterceptor as ɵff, interceptors$3 as ɵfe, SmartEditService as ɵfg, defaultStateConfig as ɵk, stateMetaReducers as ɵl, getStorageSyncReducer as ɵm, getTransferStateReducer as ɵn, defaultStoreFinderConfig as ɵfj, FindStoresEffect as ɵfp, effects$8 as ɵfo, ViewAllStoresEffect as ɵfq, getReducers$9 as ɵfl, reducerProvider$9 as ɵfn, reducerToken$9 as ɵfm, getStoreFinderState as ɵfh, StoreFinderStoreModule as ɵfk, reducer$d as ɵdv, reducer$e as ɵdz, reducer$f as ɵdy, reducer$g as ɵdw, reducer$h as ɵeb, reducer$i as ɵea, reducer$j as ɵdu, reducer$k as ɵdt, reducer$l as ɵdx, UserStoreModule as ɵec, StripHtmlPipe as ɵfr };

//# sourceMappingURL=spartacus-core.js.map