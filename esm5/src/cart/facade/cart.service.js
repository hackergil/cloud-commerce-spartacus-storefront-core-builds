/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import * as fromAction from '../store/actions';
import * as fromSelector from '../store/selectors';
import { ANONYMOUS_USERID, CartDataService } from './cart-data.service';
var CartService = /** @class */ (function () {
    function CartService(store, cartData, authService) {
        this.store = store;
        this.cartData = cartData;
        this.authService = authService;
        this.init();
    }
    /**
     * @return {?}
     */
    CartService.prototype.getActive = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromSelector.getCartContent));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getEntries = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromSelector.getEntries));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getCartMergeComplete = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromSelector.getCartMergeComplete));
    };
    /**
     * @return {?}
     */
    CartService.prototype.getLoaded = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromSelector.getLoaded));
    };
    /**
     * @protected
     * @return {?}
     */
    CartService.prototype.init = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.store.pipe(select(fromSelector.getCartContent)).subscribe(function (cart) {
            _this.cartData.cart = cart;
            if (_this.callback) {
                _this.callback();
                _this.callback = null;
            }
        });
        this.authService
            .getUserToken()
            .pipe(filter(function (userToken) { return _this.cartData.userId !== userToken.userId; }))
            .subscribe(function (userToken) {
            _this.setUserId(userToken);
            _this.loadOrMerge();
        });
        this.refresh();
    };
    /**
     * @protected
     * @param {?} userToken
     * @return {?}
     */
    CartService.prototype.setUserId = /**
     * @protected
     * @param {?} userToken
     * @return {?}
     */
    function (userToken) {
        if (Object.keys(userToken).length !== 0) {
            this.cartData.userId = userToken.userId;
        }
        else {
            this.cartData.userId = ANONYMOUS_USERID;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CartService.prototype.loadOrMerge = /**
     * @protected
     * @return {?}
     */
    function () {
        this.cartData.getDetails = true;
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (this.cartData.userId !== ANONYMOUS_USERID) {
            if (!this.isCreated(this.cartData.cart)) {
                this.store.dispatch(new fromAction.LoadCart({
                    userId: this.cartData.userId,
                    cartId: 'current'
                }));
            }
            else {
                this.store.dispatch(new fromAction.MergeCart({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cart.guid
                }));
            }
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CartService.prototype.refresh = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.store.pipe(select(fromSelector.getRefresh)).subscribe(function (refresh) {
            if (refresh) {
                _this.store.dispatch(new fromAction.LoadCart({
                    userId: _this.cartData.userId,
                    cartId: _this.cartData.cartId,
                    details: true
                }));
            }
        });
    };
    /**
     * @return {?}
     */
    CartService.prototype.loadDetails = /**
     * @return {?}
     */
    function () {
        this.cartData.getDetails = true;
        if (this.cartData.userId !== ANONYMOUS_USERID) {
            this.store.dispatch(new fromAction.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId ? this.cartData.cartId : 'current',
                details: true
            }));
        }
        else if (this.cartData.cartId) {
            this.store.dispatch(new fromAction.LoadCart({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                details: true
            }));
        }
    };
    /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    CartService.prototype.addEntry = /**
     * @param {?} productCode
     * @param {?} quantity
     * @return {?}
     */
    function (productCode, quantity) {
        if (!this.isCreated(this.cartData.cart)) {
            this.store.dispatch(new fromAction.CreateCart({ userId: this.cartData.userId }));
            this.callback = function () {
                this.store.dispatch(new fromAction.AddEntry({
                    userId: this.cartData.userId,
                    cartId: this.cartData.cartId,
                    productCode: productCode,
                    quantity: quantity
                }));
            };
        }
        else {
            this.store.dispatch(new fromAction.AddEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                productCode: productCode,
                quantity: quantity
            }));
        }
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    CartService.prototype.removeEntry = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        this.store.dispatch(new fromAction.RemoveEntry({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
            entry: entry.entryNumber
        }));
    };
    /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    CartService.prototype.updateEntry = /**
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    function (entryNumber, quantity) {
        if (+quantity > 0) {
            this.store.dispatch(new fromAction.UpdateEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber,
                qty: quantity
            }));
        }
        else {
            this.store.dispatch(new fromAction.RemoveEntry({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                entry: entryNumber
            }));
        }
    };
    /**
     * @param {?} productCode
     * @return {?}
     */
    CartService.prototype.getEntry = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.store.pipe(select(fromSelector.getEntrySelectorFactory(productCode)));
    };
    /**
     * @param {?} cart
     * @return {?}
     */
    CartService.prototype.isCreated = /**
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && !!Object.keys(cart).length;
    };
    /**
     * @param {?} cart
     * @return {?}
     */
    CartService.prototype.isEmpty = /**
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && !cart.totalItems;
    };
    CartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService },
        { type: AuthService }
    ]; };
    return CartService;
}());
export { CartService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartService.prototype.callback;
    /**
     * @type {?}
     * @private
     */
    CartService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    CartService.prototype.cartData;
    /**
     * @type {?}
     * @private
     */
    CartService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGtCQUFrQixDQUFDO0FBRTFELE9BQU8sS0FBSyxVQUFVLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxLQUFLLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEU7SUFJRSxxQkFDVSxLQUEyQixFQUMzQixRQUF5QixFQUN6QixXQUF3QjtRQUZ4QixVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsK0JBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELGdDQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCwwQ0FBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FB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TFksV0FBVzs7Ozs7O0lBQ3RCLCtCQUEyQjs7Ozs7SUFHekIsNEJBQW1DOzs7OztJQUNuQywrQkFBaUM7Ozs7O0lBQ2pDLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2FydCwgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCAqIGFzIGZyb21TZWxlY3RvciBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgQU5PTllNT1VTX1VTRVJJRCwgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBwcml2YXRlIGNhbGxiYWNrOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0PixcbiAgICBwcml2YXRlIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldENhcnRDb250ZW50KSk7XG4gIH1cblxuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldEVudHJpZXMpKTtcbiAgfVxuXG4gIGdldENhcnRNZXJnZUNvbXBsZXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TZWxlY3Rvci5nZXRDYXJ0TWVyZ2VDb21wbGV0ZSkpO1xuICB9XG5cbiAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TZWxlY3Rvci5nZXRMb2FkZWQpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldENhcnRDb250ZW50KSkuc3Vic2NyaWJlKGNhcnQgPT4ge1xuICAgICAgdGhpcy5jYXJ0RGF0YS5jYXJ0ID0gY2FydDtcbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKGZpbHRlcih1c2VyVG9rZW4gPT4gdGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IHVzZXJUb2tlbi51c2VySWQpKVxuICAgICAgLnN1YnNjcmliZSh1c2VyVG9rZW4gPT4ge1xuICAgICAgICB0aGlzLnNldFVzZXJJZCh1c2VyVG9rZW4pO1xuICAgICAgICB0aGlzLmxvYWRPck1lcmdlKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFVzZXJJZCh1c2VyVG9rZW46IFVzZXJUb2tlbik6IHZvaWQge1xuICAgIGlmIChPYmplY3Qua2V5cyh1c2VyVG9rZW4pLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5jYXJ0RGF0YS51c2VySWQgPSB1c2VyVG9rZW4udXNlcklkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhcnREYXRhLnVzZXJJZCA9IEFOT05ZTU9VU19VU0VSSUQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGxvYWRPck1lcmdlKCk6IHZvaWQge1xuICAgIHRoaXMuY2FydERhdGEuZ2V0RGV0YWlscyA9IHRydWU7XG4gICAgLy8gZm9yIGxvZ2luIHVzZXIsIHdoZW5ldmVyIHRoZXJlJ3MgYW4gZXhpc3RpbmcgY2FydCwgd2Ugd2lsbCBsb2FkIHRoZSB1c2VyXG4gICAgLy8gY3VycmVudCBjYXJ0IGFuZCBtZXJnZSBpdCBpbnRvIHRoZSBleGlzdGluZyBjYXJ0XG4gICAgaWYgKHRoaXMuY2FydERhdGEudXNlcklkICE9PSBBTk9OWU1PVVNfVVNFUklEKSB7XG4gICAgICBpZiAoIXRoaXMuaXNDcmVhdGVkKHRoaXMuY2FydERhdGEuY2FydCkpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FydCh7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiAnY3VycmVudCdcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgZnJvbUFjdGlvbi5NZXJnZUNhcnQoe1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0Lmd1aWRcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVNlbGVjdG9yLmdldFJlZnJlc2gpKS5zdWJzY3JpYmUocmVmcmVzaCA9PiB7XG4gICAgICBpZiAocmVmcmVzaCkge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBmcm9tQWN0aW9uLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgICAgZGV0YWlsczogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsb2FkRGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnREYXRhLmdldERldGFpbHMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuY2FydERhdGEudXNlcklkICE9PSBBTk9OWU1PVVNfVVNFUklEKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkID8gdGhpcy5jYXJ0RGF0YS5jYXJ0SWQgOiAnY3VycmVudCcsXG4gICAgICAgICAgZGV0YWlsczogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2FydERhdGEuY2FydElkKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIGRldGFpbHM6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0NyZWF0ZWQodGhpcy5jYXJ0RGF0YS5jYXJ0KSkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21BY3Rpb24uQ3JlYXRlQ2FydCh7IHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQgfSlcbiAgICAgICk7XG4gICAgICB0aGlzLmNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb24uQWRkRW50cnkoe1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgICAgICBxdWFudGl0eTogcXVhbnRpdHlcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21BY3Rpb24uQWRkRW50cnkoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tQWN0aW9uLlJlbW92ZUVudHJ5KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgZW50cnk6IGVudHJ5LmVudHJ5TnVtYmVyXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCtxdWFudGl0eSA+IDApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQWN0aW9uLlVwZGF0ZUVudHJ5KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgZW50cnk6IGVudHJ5TnVtYmVyLFxuICAgICAgICAgIHF0eTogcXVhbnRpdHlcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQWN0aW9uLlJlbW92ZUVudHJ5KHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgZW50cnk6IGVudHJ5TnVtYmVyXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TZWxlY3Rvci5nZXRFbnRyeVNlbGVjdG9yRmFjdG9yeShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIGlzQ3JlYXRlZChjYXJ0OiBDYXJ0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNhcnQgJiYgISFPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGg7XG4gIH1cblxuICBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2FydCAmJiAhY2FydC50b3RhbEl0ZW1zO1xuICB9XG59XG4iXX0=