/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { getGlobalMessageEntities, AddMessage, RemoveMessage, RemoveMessagesByType } from '../store/index';
var GlobalMessageService = /** @class */ (function () {
    function GlobalMessageService(store) {
        this.store = store;
    }
    /**
     * Get all global messages
     */
    /**
     * Get all global messages
     * @return {?}
     */
    GlobalMessageService.prototype.get = /**
     * Get all global messages
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getGlobalMessageEntities), filter(function (data) { return data !== undefined; }));
    };
    /**
     * Add one message into store
     * @param message: GlobalMessage object
     */
    /**
     * Add one message into store
     * @param {?} message
     * @return {?}
     */
    GlobalMessageService.prototype.add = /**
     * Add one message into store
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.store.dispatch(new AddMessage(message));
    };
    /**
     * Remove message(s) from store
     * @param type: GlobalMessageType
     * @param index:optional. Without it, messages will be removed by type; otherwise,
     * message will be removed from list by index.
     */
    /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    GlobalMessageService.prototype.remove = /**
     * Remove message(s) from store
     * @param {?} type
     * @param {?=} index
     * @return {?}
     */
    function (type, index) {
        if (index !== undefined) {
            this.store.dispatch(new RemoveMessage({
                type: type,
                index: index
            }));
        }
        else {
            this.store.dispatch(new RemoveMessagesByType(type));
        }
    };
    GlobalMessageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalMessageService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return GlobalMessageService;
}());
export { GlobalMessageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GlobalMessageService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNeEMsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixFQUNyQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCO0lBRUUsOEJBQW9CLEtBQW9DO1FBQXBDLFVBQUssR0FBTCxLQUFLLENBQStCO0lBQUcsQ0FBQztJQUU1RDs7T0FFRzs7Ozs7SUFDSCxrQ0FBRzs7OztJQUFIO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEVBQ2hDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxTQUFTLEVBQWxCLENBQWtCLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGtDQUFHOzs7OztJQUFILFVBQUksT0FBc0I7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSCxxQ0FBTTs7Ozs7O0lBQU4sVUFBTyxJQUF1QixFQUFFLEtBQWM7UUFDNUMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGFBQWEsQ0FBQztnQkFDaEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLEtBQUs7YUFDYixDQUFDLENBQ0gsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOztnQkF2Q0YsVUFBVTs7OztnQkFqQkYsS0FBSzs7SUF5RGQsMkJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXZDWSxvQkFBb0I7Ozs7OztJQUNuQixxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZVxufSBmcm9tICcuLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxuICBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gIEFkZE1lc3NhZ2UsXG4gIFJlbW92ZU1lc3NhZ2UsXG4gIFJlbW92ZU1lc3NhZ2VzQnlUeXBlXG59IGZyb20gJy4uL3N0b3JlL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZT4pIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgZ2xvYmFsIG1lc3NhZ2VzXG4gICAqL1xuICBnZXQoKTogT2JzZXJ2YWJsZTxHbG9iYWxNZXNzYWdlRW50aXRpZXM+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldEdsb2JhbE1lc3NhZ2VFbnRpdGllcyksXG4gICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhICE9PSB1bmRlZmluZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgb25lIG1lc3NhZ2UgaW50byBzdG9yZVxuICAgKiBAcGFyYW0gbWVzc2FnZTogR2xvYmFsTWVzc2FnZSBvYmplY3RcbiAgICovXG4gIGFkZChtZXNzYWdlOiBHbG9iYWxNZXNzYWdlKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkTWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIG1lc3NhZ2UocykgZnJvbSBzdG9yZVxuICAgKiBAcGFyYW0gdHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbiAgICogQHBhcmFtIGluZGV4Om9wdGlvbmFsLiBXaXRob3V0IGl0LCBtZXNzYWdlcyB3aWxsIGJlIHJlbW92ZWQgYnkgdHlwZTsgb3RoZXJ3aXNlLFxuICAgKiBtZXNzYWdlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIGxpc3QgYnkgaW5kZXguXG4gICAqL1xuICByZW1vdmUodHlwZTogR2xvYmFsTWVzc2FnZVR5cGUsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBSZW1vdmVNZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUmVtb3ZlTWVzc2FnZXNCeVR5cGUodHlwZSkpO1xuICAgIH1cbiAgfVxufVxuIl19