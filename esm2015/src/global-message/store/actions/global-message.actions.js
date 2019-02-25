/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const ADD_MESSAGE = '[Global-message] Add a Message';
/** @type {?} */
export const REMOVE_MESSAGE = '[Global-message] Remove a Message';
/** @type {?} */
export const REMOVE_MESSAGES_BY_TYPE = '[Global-message] Remove messages by type';
export class AddMessage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_MESSAGE;
    }
}
if (false) {
    /** @type {?} */
    AddMessage.prototype.type;
    /** @type {?} */
    AddMessage.prototype.payload;
}
export class RemoveMessage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGE;
    }
}
if (false) {
    /** @type {?} */
    RemoveMessage.prototype.type;
    /** @type {?} */
    RemoveMessage.prototype.payload;
}
export class RemoveMessagesByType {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGES_BY_TYPE;
    }
}
if (false) {
    /** @type {?} */
    RemoveMessagesByType.prototype.type;
    /** @type {?} */
    RemoveMessagesByType.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9hY3Rpb25zL2dsb2JhbC1tZXNzYWdlLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxNQUFNLE9BQU8sV0FBVyxHQUFHLGdDQUFnQzs7QUFDM0QsTUFBTSxPQUFPLGNBQWMsR0FBRyxtQ0FBbUM7O0FBQ2pFLE1BQU0sT0FBTyx1QkFBdUIsR0FDbEMsMENBQTBDO0FBRTVDLE1BQU0sT0FBTyxVQUFVOzs7O0lBRXJCLFlBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFEaEMsU0FBSSxHQUFHLFdBQVcsQ0FBQztJQUNnQixDQUFDO0NBQzlDOzs7SUFGQywwQkFBNEI7O0lBQ2hCLDZCQUE2Qjs7QUFHM0MsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFeEIsWUFBbUIsT0FBbUQ7UUFBbkQsWUFBTyxHQUFQLE9BQU8sQ0FBNEM7UUFEN0QsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUMwQyxDQUFDO0NBQzNFOzs7SUFGQyw2QkFBK0I7O0lBQ25CLGdDQUEwRDs7QUFHeEUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUUvQixZQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQURwQyxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDUSxDQUFDO0NBQ2xEOzs7SUFGQyxvQ0FBd0M7O0lBQzVCLHVDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBHbG9iYWxNZXNzYWdlXG59IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBBRERfTUVTU0FHRSA9ICdbR2xvYmFsLW1lc3NhZ2VdIEFkZCBhIE1lc3NhZ2UnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9NRVNTQUdFID0gJ1tHbG9iYWwtbWVzc2FnZV0gUmVtb3ZlIGEgTWVzc2FnZSc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX01FU1NBR0VTX0JZX1RZUEUgPVxuICAnW0dsb2JhbC1tZXNzYWdlXSBSZW1vdmUgbWVzc2FnZXMgYnkgdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBBZGRNZXNzYWdlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9NRVNTQUdFO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR2xvYmFsTWVzc2FnZSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZU1lc3NhZ2UgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX01FU1NBR0U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlOyBpbmRleDogbnVtYmVyIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVNZXNzYWdlc0J5VHlwZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfTUVTU0FHRVNfQllfVFlQRTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdsb2JhbE1lc3NhZ2VUeXBlKSB7fVxufVxuXG5leHBvcnQgdHlwZSBHbG9iYWxNZXNzYWdlQWN0aW9uID1cbiAgfCBBZGRNZXNzYWdlXG4gIHwgUmVtb3ZlTWVzc2FnZVxuICB8IFJlbW92ZU1lc3NhZ2VzQnlUeXBlO1xuIl19