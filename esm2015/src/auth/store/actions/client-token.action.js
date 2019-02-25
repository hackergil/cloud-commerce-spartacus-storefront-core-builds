/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CLIENT_TOKEN_DATA } from '../auth-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
/** @type {?} */
export const LOAD_CLIENT_TOKEN = '[Token] Create Client Token';
/** @type {?} */
export const LOAD_CLIENT_TOKEN_FAIL = '[Token] Create Client Token Fail';
/** @type {?} */
export const LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Create Client Token Success';
export class LoadClientToken extends LoaderLoadAction {
    constructor() {
        super(CLIENT_TOKEN_DATA);
        this.type = LOAD_CLIENT_TOKEN;
    }
}
if (false) {
    /** @type {?} */
    LoadClientToken.prototype.type;
}
export class LoadClientTokenFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CLIENT_TOKEN_DATA, payload);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadClientTokenFail.prototype.type;
    /** @type {?} */
    LoadClientTokenFail.prototype.payload;
}
export class LoadClientTokenSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CLIENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadClientTokenSuccess.prototype.type;
    /** @type {?} */
    LoadClientTokenSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2FjdGlvbnMvY2xpZW50LXRva2VuLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNwQixNQUFNLDJDQUEyQyxDQUFDOztBQUVuRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsNkJBQTZCOztBQUM5RCxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsa0NBQWtDOztBQUN4RSxNQUFNLE9BQU8seUJBQXlCLEdBQUcscUNBQXFDO0FBRTlFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQUVuRDtRQUNFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRmxCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUdsQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFrQzs7QUFNcEMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjs7OztJQUV2RCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURqQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUd2QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUF1Qzs7SUFDM0Isc0NBQW1COztBQUtqQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsbUJBQW1COzs7O0lBRTdELFlBQW1CLE9BQW9CO1FBQ3JDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRFIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUQ5QixTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFHMUMsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBMEM7O0lBQzlCLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENMSUVOVF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ0xJRU5UX1RPS0VOID0gJ1tUb2tlbl0gQ3JlYXRlIENsaWVudCBUb2tlbic7XG5leHBvcnQgY29uc3QgTE9BRF9DTElFTlRfVE9LRU5fRkFJTCA9ICdbVG9rZW5dIENyZWF0ZSBDbGllbnQgVG9rZW4gRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTElFTlRfVE9LRU5fU1VDQ0VTUyA9ICdbVG9rZW5dIENyZWF0ZSBDbGllbnQgVG9rZW4gU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2xpZW50VG9rZW4gZXh0ZW5kcyBMb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0xJRU5UX1RPS0VOO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihDTElFTlRfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbGllbnRUb2tlbkZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0xJRU5UX1RPS0VOX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDTElFTlRfVE9LRU5fREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbGllbnRUb2tlblN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0xJRU5UX1RPS0VOX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDbGllbnRUb2tlbikge1xuICAgIHN1cGVyKENMSUVOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDbGllbnRUb2tlbkFjdGlvbiA9XG4gIHwgTG9hZENsaWVudFRva2VuXG4gIHwgTG9hZENsaWVudFRva2VuRmFpbFxuICB8IExvYWRDbGllbnRUb2tlblN1Y2Nlc3M7XG4iXX0=