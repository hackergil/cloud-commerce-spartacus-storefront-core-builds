/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
/** @type {?} */
export const ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
/** @type {?} */
export const ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
/** @type {?} */
export const SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
/** @type {?} */
export const SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
/** @type {?} */
export const SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
/** @type {?} */
export const LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
/** @type {?} */
export const LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
/** @type {?} */
export const LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
/** @type {?} */
export const CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
/** @type {?} */
export const SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
/** @type {?} */
export const SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
/** @type {?} */
export const SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
/** @type {?} */
export const CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
/** @type {?} */
export const CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
/** @type {?} */
export const CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
/** @type {?} */
export const SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
/** @type {?} */
export const SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
/** @type {?} */
export const SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
/** @type {?} */
export const PLACE_ORDER = '[Checkout] Place Order';
/** @type {?} */
export const PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
/** @type {?} */
export const PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
/** @type {?} */
export const CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
/** @type {?} */
export const CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
export class AddDeliveryAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS;
    }
}
if (false) {
    /** @type {?} */
    AddDeliveryAddress.prototype.type;
    /** @type {?} */
    AddDeliveryAddress.prototype.payload;
}
export class AddDeliveryAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    AddDeliveryAddressFail.prototype.type;
    /** @type {?} */
    AddDeliveryAddressFail.prototype.payload;
}
export class AddDeliveryAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    AddDeliveryAddressSuccess.prototype.type;
    /** @type {?} */
    AddDeliveryAddressSuccess.prototype.payload;
}
export class SetDeliveryAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryAddress.prototype.type;
    /** @type {?} */
    SetDeliveryAddress.prototype.payload;
}
export class SetDeliveryAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryAddressFail.prototype.type;
    /** @type {?} */
    SetDeliveryAddressFail.prototype.payload;
}
export class SetDeliveryAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_ADDRESS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryAddressSuccess.prototype.type;
    /** @type {?} */
    SetDeliveryAddressSuccess.prototype.payload;
}
export class LoadSupportedDeliveryModes {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES;
    }
}
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModes.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModes.prototype.payload;
}
export class LoadSupportedDeliveryModesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModesFail.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModesFail.prototype.payload;
}
export class LoadSupportedDeliveryModesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadSupportedDeliveryModesSuccess.prototype.type;
    /** @type {?} */
    LoadSupportedDeliveryModesSuccess.prototype.payload;
}
export class SetDeliveryMode {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryMode.prototype.type;
    /** @type {?} */
    SetDeliveryMode.prototype.payload;
}
export class SetDeliveryModeFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_FAIL;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryModeFail.prototype.type;
    /** @type {?} */
    SetDeliveryModeFail.prototype.payload;
}
export class SetDeliveryModeSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_DELIVERY_MODE_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    SetDeliveryModeSuccess.prototype.type;
    /** @type {?} */
    SetDeliveryModeSuccess.prototype.payload;
}
export class CreatePaymentDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    CreatePaymentDetails.prototype.type;
    /** @type {?} */
    CreatePaymentDetails.prototype.payload;
}
export class CreatePaymentDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CreatePaymentDetailsFail.prototype.type;
    /** @type {?} */
    CreatePaymentDetailsFail.prototype.payload;
}
export class CreatePaymentDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CreatePaymentDetailsSuccess.prototype.type;
    /** @type {?} */
    CreatePaymentDetailsSuccess.prototype.payload;
}
export class SetPaymentDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    SetPaymentDetails.prototype.type;
    /** @type {?} */
    SetPaymentDetails.prototype.payload;
}
export class SetPaymentDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    SetPaymentDetailsFail.prototype.type;
    /** @type {?} */
    SetPaymentDetailsFail.prototype.payload;
}
export class SetPaymentDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_PAYMENT_DETAILS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    SetPaymentDetailsSuccess.prototype.type;
    /** @type {?} */
    SetPaymentDetailsSuccess.prototype.payload;
}
export class PlaceOrder {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER;
    }
}
if (false) {
    /** @type {?} */
    PlaceOrder.prototype.type;
    /** @type {?} */
    PlaceOrder.prototype.payload;
}
export class PlaceOrderFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_FAIL;
    }
}
if (false) {
    /** @type {?} */
    PlaceOrderFail.prototype.type;
    /** @type {?} */
    PlaceOrderFail.prototype.payload;
}
export class PlaceOrderSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    PlaceOrderSuccess.prototype.type;
    /** @type {?} */
    PlaceOrderSuccess.prototype.payload;
}
export class ClearSupportedDeliveryModes {
    constructor() {
        this.type = CLEAR_SUPPORTED_DELIVERY_MODES;
    }
}
if (false) {
    /** @type {?} */
    ClearSupportedDeliveryModes.prototype.type;
}
export class ClearCheckoutStep {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_STEP;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutStep.prototype.type;
    /** @type {?} */
    ClearCheckoutStep.prototype.payload;
}
export class ClearCheckoutData {
    constructor() {
        this.type = CLEAR_CHECKOUT_DATA;
    }
}
if (false) {
    /** @type {?} */
    ClearCheckoutData.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGlDQUFpQzs7QUFDckUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNDQUFzQzs7QUFDL0UsTUFBTSxPQUFPLDRCQUE0QixHQUN2Qyx5Q0FBeUM7O0FBRTNDLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxpQ0FBaUM7O0FBQ3JFLE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxzQ0FBc0M7O0FBQy9FLE1BQU0sT0FBTyw0QkFBNEIsR0FDdkMseUNBQXlDOztBQUUzQyxNQUFNLE9BQU8sNkJBQTZCLEdBQ3hDLDBDQUEwQzs7QUFDNUMsTUFBTSxPQUFPLGtDQUFrQyxHQUM3QywrQ0FBK0M7O0FBQ2pELE1BQU0sT0FBTyxxQ0FBcUMsR0FDaEQsa0RBQWtEOztBQUNwRCxNQUFNLE9BQU8sOEJBQThCLEdBQ3pDLDJDQUEyQzs7QUFFN0MsTUFBTSxPQUFPLGlCQUFpQixHQUFHLDhCQUE4Qjs7QUFDL0QsTUFBTSxPQUFPLHNCQUFzQixHQUFHLG1DQUFtQzs7QUFDekUsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNDQUFzQzs7QUFFL0UsTUFBTSxPQUFPLHNCQUFzQixHQUFHLG1DQUFtQzs7QUFDekUsTUFBTSxPQUFPLDJCQUEyQixHQUN0Qyx3Q0FBd0M7O0FBQzFDLE1BQU0sT0FBTyw4QkFBOEIsR0FDekMsMkNBQTJDOztBQUU3QyxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsZ0NBQWdDOztBQUNuRSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcscUNBQXFDOztBQUM3RSxNQUFNLE9BQU8sMkJBQTJCLEdBQ3RDLHdDQUF3Qzs7QUFFMUMsTUFBTSxPQUFPLFdBQVcsR0FBRyx3QkFBd0I7O0FBQ25ELE1B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QU8sVUFBVTs7OztJQUVyQixZQUFtQixPQUEyQztRQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsV0FBVyxDQUFDO0lBQ3FDLENBQUM7Q0FDbkU7OztJQUZDLDBCQUE0Qjs7SUFDaEIsNkJBQWtEOztBQUdoRSxNQUFNLE9BQU8sY0FBYzs7OztJQUV6QixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDQyxDQUFDO0NBQ3BDOzs7SUFGQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFHakMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFtQixPQUFjO1FBQWQsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUR4QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDQSxDQUFDO0NBQ3RDOzs7SUFGQyxpQ0FBb0M7O0lBQ3hCLG9DQUFxQjs7QUFHbkMsTUFBTSxPQUFPLDJCQUEyQjtJQUF4QztRQUNXLFNBQUksR0FBRyw4QkFBOEIsQ0FBQztJQUNqRCxDQUFDO0NBQUE7OztJQURDLDJDQUErQzs7QUFHakQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDQyxDQUFDO0NBQ3ZDOzs7SUFGQyxpQ0FBb0M7O0lBQ3hCLG9DQUFzQjs7QUFHcEMsTUFBTSxPQUFPLGlCQUFpQjtJQUE5QjtRQUNXLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUN0QyxDQUFDO0NBQUE7OztJQURDLGlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIERlbGl2ZXJ5TW9kZUxpc3QsXG4gIFBheW1lbnREZXRhaWxzLFxuICBPcmRlclxufSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTUyA9ICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBBRERfREVMSVZFUllfQUREUkVTU19GQUlMID0gJ1tDaGVja291dF0gQWRkIERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1MgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX0FERFJFU1NfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gTG9hZCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfTU9ERV9TVUNDRVNTID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IE1vZGUgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTID0gJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMID1cbiAgJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFNfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXInO1xuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSX0ZBSUwgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlciBGYWlsJztcbmV4cG9ydCBjb25zdCBQTEFDRV9PUkRFUl9TVUNDRVNTID0gJ1tDaGVja291dF0gUGxhY2UgT3JkZXIgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9TVEVQID0gJ1tDaGVja291dF0gQ2xlYXIgT25lIENoZWNrb3V0IFN0ZXAnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RBVEEgPSAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEYXRhJztcblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzcykge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzcykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEZWxpdmVyeU1vZGVMaXN0KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVsaXZlcnlNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHNlbGVjdGVkTW9kZUlkOiBzdHJpbmcgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGVGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGVTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHMpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldFBheW1lbnREZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHMpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZU9yZGVyU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQTEFDRV9PUkRFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3JkZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dFN0ZXAgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfU1RFUDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RBVEE7XG59XG5cbmV4cG9ydCB0eXBlIENoZWNrb3V0QWN0aW9uID1cbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NcbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NGYWlsXG4gIHwgQWRkRGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICB8IFNldERlbGl2ZXJ5QWRkcmVzc1xuICB8IFNldERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBTZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gIHwgTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWxcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3NcbiAgfCBTZXREZWxpdmVyeU1vZGVcbiAgfCBTZXREZWxpdmVyeU1vZGVGYWlsXG4gIHwgU2V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICB8IENsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1xuICB8IENyZWF0ZVBheW1lbnREZXRhaWxzXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzXG4gIHwgU2V0UGF5bWVudERldGFpbHNcbiAgfCBTZXRQYXltZW50RGV0YWlsc0ZhaWxcbiAgfCBTZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgfCBQbGFjZU9yZGVyXG4gIHwgUGxhY2VPcmRlckZhaWxcbiAgfCBQbGFjZU9yZGVyU3VjY2Vzc1xuICB8IENsZWFyQ2hlY2tvdXRTdGVwXG4gIHwgQ2xlYXJDaGVja291dERhdGE7XG4iXX0=