/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, mergeMap, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions/index';
import { OccCartService } from '../../../cart/index';
import { GlobalMessageType, AddMessage } from '../../../global-message/index';
import { ProductImageConverterService } from '../../../product/index';
import { OccOrderService } from '../../../user/index';
import * as fromUserActions from '../../../user/store/actions/index';
export class CheckoutEffects {
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
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(fromActions.ADD_DELIVERY_ADDRESS), map((action) => action.payload), mergeMap(payload => this.occCartService
            .createAddressOnCart(payload.userId, payload.cartId, payload.address)
            .pipe(mergeMap(address => {
            address['titleCode'] = payload.address.titleCode;
            return [
                new fromUserActions.LoadUserAddresses(payload.userId),
                new fromActions.SetDeliveryAddress({
                    userId: payload.userId,
                    cartId: payload.cartId,
                    address: address
                })
            ];
        }), catchError(error => of(new fromActions.AddDeliveryAddressFail(error))))));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(fromActions.SET_DELIVERY_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .setDeliveryAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(map(() => new fromActions.SetDeliveryAddressSuccess(payload.address)), catchError(error => of(new fromActions.SetDeliveryAddressFail(error))));
        }));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(fromActions.LOAD_SUPPORTED_DELIVERY_MODES), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .getSupportedDeliveryModes(payload.userId, payload.cartId)
                .pipe(map(data => {
                return new fromActions.LoadSupportedDeliveryModesSuccess(data);
            }), catchError(error => of(new fromActions.LoadSupportedDeliveryModesFail(error))));
        }));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(fromActions.SET_DELIVERY_MODE), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .setDeliveryMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(map(() => new fromActions.SetDeliveryModeSuccess(payload.selectedModeId)), catchError(error => of(new fromActions.SetDeliveryModeFail(error))));
        }));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(fromActions.CREATE_PAYMENT_DETAILS), map((action) => action.payload), mergeMap(payload => {
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
                                new fromUserActions.LoadUserPaymentMethods(payload.userId),
                                new fromActions.CreatePaymentDetailsSuccess(details)
                            ];
                        }), catchError(error => of(new fromActions.CreatePaymentDetailsFail(error))));
                    }
                    else {
                        return of(new fromActions.CreatePaymentDetailsFail(fromPaymentProvider));
                    }
                }));
            }));
        }));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(fromActions.SET_PAYMENT_DETAILS), map((action) => action.payload), mergeMap(payload => {
            return this.occCartService
                .setPaymentDetails(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map(() => new fromActions.SetPaymentDetailsSuccess(payload.paymentDetails)), catchError(error => of(new fromActions.SetPaymentDetailsFail(error))));
        }));
        this.placeOrder$ = this.actions$.pipe(ofType(fromActions.PLACE_ORDER), map((action) => action.payload), mergeMap(payload => {
            return this.occOrderService
                .placeOrder(payload.userId, payload.cartId)
                .pipe(map(data => {
                for (const entry of (/** @type {?} */ (data.entries))) {
                    this.productImageConverter.convertProduct(entry.product);
                }
                return data;
            }), switchMap(data => [
                new fromActions.PlaceOrderSuccess(data),
                new AddMessage({
                    text: 'Order placed successfully',
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION
                })
            ]), catchError(error => of(new fromActions.PlaceOrderFail(error))));
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
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "addDeliveryAddress$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "setDeliveryAddress$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "loadSupportedDeliveryModes$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "setDeliveryMode$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "createPaymentDetails$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "setPaymentDetails$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "placeOrder$", void 0);
if (false) {
    /** @type {?} */
    CheckoutEffects.prototype.addDeliveryAddress$;
    /** @type {?} */
    CheckoutEffects.prototype.setDeliveryAddress$;
    /** @type {?} */
    CheckoutEffects.prototype.loadSupportedDeliveryModes$;
    /** @type {?} */
    CheckoutEffects.prototype.setDeliveryMode$;
    /** @type {?} */
    CheckoutEffects.prototype.createPaymentDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.setPaymentDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.placeOrder$;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.domparser;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.occCartService;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.occOrderService;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.productImageConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sS0FBSyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxLQUFLLGVBQWUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdyRSxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQWlOMUIsWUFDVSxRQUFpQixFQUNqQixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxxQkFBbUQ7UUFIbkQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBOEI7UUFuTjdELHdCQUFtQixHQUlmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixN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VTs7OztZQWJGLE9BQU87WUFNUCxjQUFjO1lBR2QsZUFBZTtZQURmLDRCQUE0Qjs7QUFRbkM7SUFEQyxNQUFNLEVBQUU7c0NBQ1ksVUFBVTs0REF5QjdCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1ksVUFBVTs0REFhN0I7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDb0IsVUFBVTtvRUFrQnJDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1MsVUFBVTt5REFlMUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDYyxVQUFVOzhEQXFFL0I7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVyxVQUFVOzJEQW9CNUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO29EQXlCckI7OztJQTVNRiw4Q0EwQkU7O0lBRUYsOENBY0U7O0lBRUYsc0RBbUJFOztJQUVGLDJDQWdCRTs7SUFFRixnREFzRUU7O0lBRUYsNkNBcUJFOztJQUVGLHNDQTBCRTs7Ozs7SUFFRixvQ0FBNkI7Ozs7O0lBRzNCLG1DQUF5Qjs7Ozs7SUFDekIseUNBQXNDOzs7OztJQUN0QywwQ0FBd0M7Ozs7O0lBQ3hDLGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBPY2NDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NhcnQvaW5kZXgnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUsIEFkZE1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0SW1hZ2VDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBPY2NPcmRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91c2VyL2luZGV4JztcbmltcG9ydCB7IE9yZGVyRW50cnksIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3VzZXIvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja291dEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgYWRkRGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21Vc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3Nlc1xuICAgIHwgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzXG4gICAgfCBmcm9tQWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkFERF9ERUxJVkVSWV9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAuY3JlYXRlQWRkcmVzc09uQ2FydChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuYWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzWyd0aXRsZUNvZGUnXSA9IHBheWxvYWQuYWRkcmVzcy50aXRsZUNvZGU7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzKHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzRmFpbChlcnJvcikpKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgfCBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlNFVF9ERUxJVkVSWV9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAuc2V0RGVsaXZlcnlBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5hZGRyZXNzLmlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4gbmV3IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MocGF5bG9hZC5hZGRyZXNzKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzRmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21BY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2Vzc1xuICAgIHwgZnJvbUFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAuZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3MgfCBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeU1vZGVGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlNFVF9ERUxJVkVSWV9NT0RFKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAuc2V0RGVsaXZlcnlNb2RlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5zZWxlY3RlZE1vZGVJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKCkgPT4gbmV3IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3MocGF5bG9hZC5zZWxlY3RlZE1vZGVJZClcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5TW9kZUZhaWwoZXJyb3IpKSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVQYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kc1xuICAgIHwgZnJvbUFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzXG4gICAgfCBmcm9tQWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuQ1JFQVRFX1BBWU1FTlRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgLy8gZ2V0IGluZm9ybWF0aW9uIGZvciBjcmVhdGluZyBhIHN1YnNjcmlwdGlvbiBkaXJlY3RseSB3aXRoIHBheW1lbnQgcHJvdmlkZXJcbiAgICAgIHJldHVybiB0aGlzLm9jY0NhcnRTZXJ2aWNlXG4gICAgICAgIC5nZXRQYXltZW50UHJvdmlkZXJTdWJJbmZvKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxzTWFwID0gdGhpcy5jb252ZXJ0VG9NYXAoZGF0YS5tYXBwaW5nTGFiZWxzLmVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHVybDogZGF0YS5wb3N0VXJsLFxuICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiB0aGlzLmdldFBhcmFtc0ZvclBheW1lbnRQcm92aWRlcihcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnBheW1lbnREZXRhaWxzLFxuICAgICAgICAgICAgICAgIGRhdGEucGFyYW1ldGVycy5lbnRyeSxcbiAgICAgICAgICAgICAgICBsYWJlbHNNYXBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbWFwcGluZ0xhYmVsczogbGFiZWxzTWFwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lcmdlTWFwKHN1YiA9PiB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBzdWJzY3JpcHRpb24gZGlyZWN0bHkgd2l0aCBwYXltZW50IHByb3ZpZGVyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAgICAgICAuY3JlYXRlU3ViV2l0aFBheW1lbnRQcm92aWRlcihzdWIudXJsLCBzdWIucGFyYW1ldGVycylcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IHRoaXMuZXh0cmFjdFBheW1lbnREZXRhaWxzRnJvbUh0bWwocmVzcG9uc2UpKSxcbiAgICAgICAgICAgICAgICBtZXJnZU1hcChmcm9tUGF5bWVudFByb3ZpZGVyID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghZnJvbVBheW1lbnRQcm92aWRlclsnaGFzRXJyb3InXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdW1lIHJlc3BvbnNlIGZyb20gcGF5bWVudCBwcm92aWRlciBhbmQgY3JlYXRlcyBwYXltZW50IGRldGFpbHNcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vY2NDYXJ0U2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVQYXltZW50RGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBheW1lbnRTb3BSZXNwb25zZVBhcmFtcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC5wYXltZW50RGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVBheW1lbnRQcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViLm1hcHBpbmdMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZU1hcChkZXRhaWxzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJBY3Rpb25zLkxvYWRVc2VyUGF5bWVudE1ldGhvZHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLnVzZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyhkZXRhaWxzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzRmFpbChcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21QYXltZW50UHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldFBheW1lbnREZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MgfCBmcm9tQWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuU0VUX1BBWU1FTlRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjQ2FydFNlcnZpY2VcbiAgICAgICAgLnNldFBheW1lbnREZXRhaWxzKFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQuY2FydElkLFxuICAgICAgICAgIHBheWxvYWQucGF5bWVudERldGFpbHMuaWRcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNTdWNjZXNzKHBheWxvYWQucGF5bWVudERldGFpbHMpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc0ZhaWwoZXJyb3IpKSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBwbGFjZU9yZGVyJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5QbGFjZU9yZGVyU3VjY2VzcyB8IEFkZE1lc3NhZ2UgfCBmcm9tQWN0aW9ucy5QbGFjZU9yZGVyRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5QTEFDRV9PUkRFUiksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjT3JkZXJTZXJ2aWNlXG4gICAgICAgIC5wbGFjZU9yZGVyKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBkYXRhLmVudHJpZXMgYXMgT3JkZXJFbnRyeVtdKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlQ29udmVydGVyLmNvbnZlcnRQcm9kdWN0KGVudHJ5LnByb2R1Y3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3dpdGNoTWFwKGRhdGEgPT4gW1xuICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlBsYWNlT3JkZXJTdWNjZXNzKGRhdGEpLFxuICAgICAgICAgICAgbmV3IEFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0ZXh0OiAnT3JkZXIgcGxhY2VkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5QbGFjZU9yZGVyRmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgcHJpdmF0ZSBkb21wYXJzZXI6IERPTVBhcnNlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjQ2FydFNlcnZpY2U6IE9jY0NhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjT3JkZXJTZXJ2aWNlOiBPY2NPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW1hZ2VDb252ZXJ0ZXI6IFByb2R1Y3RJbWFnZUNvbnZlcnRlclNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBET01QYXJzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmRvbXBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBheW1lbnRTb3BSZXNwb25zZVBhcmFtcyhcbiAgICBwYXltZW50RGV0YWlsczogYW55LFxuICAgIGZyb21QYXltZW50UHJvdmlkZXI6IGFueSxcbiAgICBtYXBwaW5nTGFiZWxzOiBhbnlcbiAgKSB7XG4gICAgY29uc3Qgc29wUmVzcG9uc2VQYXJhbXMgPSB7fTtcblxuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydkZWNpc2lvbiddID1cbiAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX3NvcF9kZWNpc2lvbiddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYW1vdW50J10gPVxuICAgICAgZnJvbVBheW1lbnRQcm92aWRlclttYXBwaW5nTGFiZWxzWydoeWJyaXNfc29wX2Ftb3VudCddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snY3VycmVuY3knXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3BfY3VycmVuY3knXV07XG5cbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX2NvdW50cnknXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fY291bnRyeSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX2ZpcnN0TmFtZSddID1cbiAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19maXJzdG5hbWUnXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2JpbGxUb19sYXN0TmFtZSddID1cbiAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX2JpbGxUb19sYXN0bmFtZSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX3N0cmVldDEnXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fc3RyZWV0MSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX2NpdHknXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fY2l0eSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snYmlsbFRvX3Bvc3RhbENvZGUnXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fcG9zdGFsY29kZSddXTtcblxuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydjYXJkX2NhcmRUeXBlJ10gPSBwYXltZW50RGV0YWlscy5jYXJkVHlwZS5jb2RlO1xuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydjYXJkX2FjY291bnROdW1iZXInXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3BfY2FyZF9udW1iZXInXV07XG4gICAgc29wUmVzcG9uc2VQYXJhbXNbJ2NhcmRfZXhwaXJhdGlvbk1vbnRoJ10gPSBwYXltZW50RGV0YWlscy5leHBpcnlNb250aDtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snY2FyZF9leHBpcmF0aW9uWWVhciddID0gcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcjtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snY2FyZF9uYW1lT25DYXJkJ10gPSBwYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1snZGVmYXVsdFBheW1lbnQnXSA9IHBheW1lbnREZXRhaWxzLmRlZmF1bHRQYXltZW50O1xuICAgIHNvcFJlc3BvbnNlUGFyYW1zWydzYXZlUGF5bWVudEluZm8nXSA9IHRydWU7XG5cbiAgICBzb3BSZXNwb25zZVBhcmFtc1sncmVhc29uQ29kZSddID1cbiAgICAgIGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX3NvcF9yZWFzb25fY29kZSddXTtcbiAgICBzb3BSZXNwb25zZVBhcmFtc1sncGF5U3Vic2NyaXB0aW9uQ3JlYXRlUmVwbHlfc3Vic2NyaXB0aW9uSUQnXSA9XG4gICAgICBmcm9tUGF5bWVudFByb3ZpZGVyW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19zb3Bfc3Vic2NyaXB0aW9uSUQnXV07XG5cbiAgICBpZiAobWFwcGluZ0xhYmVsc1snaHlicmlzX3NvcF91c2VzX3B1YmxpY19zaWduYXR1cmUnXSA9PT0gJ3RydWUnKSB7XG4gICAgICBzb3BSZXNwb25zZVBhcmFtc1tcbiAgICAgICAgJ3BheVN1YnNjcmlwdGlvbkNyZWF0ZVJlcGx5X3N1YnNjcmlwdGlvbklEUHVibGljU2lnbmF0dXJlJ1xuICAgICAgXSA9IGZyb21QYXltZW50UHJvdmlkZXJbbWFwcGluZ0xhYmVsc1snaHlicmlzX3NvcF9wdWJsaWNfc2lnbmF0dXJlJ11dO1xuICAgIH1cblxuICAgIHJldHVybiBzb3BSZXNwb25zZVBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYW1zRm9yUGF5bWVudFByb3ZpZGVyKFxuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyxcbiAgICBwYXJhbWV0ZXJzOiB7IGtleTsgdmFsdWUgfVtdLFxuICAgIG1hcHBpbmdMYWJlbHM6IGFueVxuICApIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbnZlcnRUb01hcChwYXJhbWV0ZXJzKTtcbiAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2FjY291bnRfaG9sZGVyX25hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX3R5cGUnXV0gPSBwYXltZW50RGV0YWlscy5jYXJkVHlwZS5jb2RlO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9udW1iZXInXV0gPSBwYXltZW50RGV0YWlscy5jYXJkTnVtYmVyO1xuICAgIGlmIChtYXBwaW5nTGFiZWxzWydoeWJyaXNfY29tYmluZWRfZXhwaXJ5X2RhdGUnXSA9PT0gJ3RydWUnKSB7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJ5X2RhdGUnXV0gPVxuICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlNb250aCArXG4gICAgICAgIG1hcHBpbmdMYWJlbHNbJ2h5YnJpc19zZXBhcmF0b3JfZXhwaXJ5X2RhdGUnXSArXG4gICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfY2FyZF9leHBpcmF0aW9uX21vbnRoJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGg7XG4gICAgICBwYXJhbXNbbWFwcGluZ0xhYmVsc1snaHlicmlzX2NhcmRfZXhwaXJhdGlvbl95ZWFyJ11dID1cbiAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcjtcbiAgICB9XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19jYXJkX2N2biddXSA9IHBheW1lbnREZXRhaWxzLmN2bjtcblxuICAgIC8vIGJpbGxpbmcgYWRkcmVzc1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2NvdW50cnknXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MuY291bnRyeS5pc29jb2RlO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX2ZpcnN0bmFtZSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5maXJzdE5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fbGFzdG5hbWUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGFzdE5hbWU7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fc3RyZWV0MSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy5saW5lMSArXG4gICAgICAnICcgK1xuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MubGluZTI7XG4gICAgcGFyYW1zW21hcHBpbmdMYWJlbHNbJ2h5YnJpc19iaWxsVG9fY2l0eSddXSA9XG4gICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcy50b3duO1xuICAgIHBhcmFtc1ttYXBwaW5nTGFiZWxzWydoeWJyaXNfYmlsbFRvX3Bvc3RhbGNvZGUnXV0gPVxuICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3MucG9zdGFsQ29kZTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0UGF5bWVudERldGFpbHNGcm9tSHRtbChodG1sOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGRvbWRvYyA9IHRoaXMuZG9tcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC94bWwnKTtcbiAgICBjb25zdCByZXNwb25zZUZvcm0gPSBkb21kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcbiAgICBjb25zdCBpbnB1dHMgPSByZXNwb25zZUZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaW5wdXRzW2ldOyBpKyspIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gaW5wdXRzW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSAhPT0gJ3t9JyAmJlxuICAgICAgICBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgIT09ICcnXG4gICAgICApIHtcbiAgICAgICAgdmFsdWVzW2lucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGlucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZWplY3RlZCBmb3Igc29tZSByZWFzb25cbiAgICBpZiAodmFsdWVzWydkZWNpc2lvbiddICE9PSAnQUNDRVBUJykge1xuICAgICAgY29uc3QgcmVhc29uID0geyBoYXNFcnJvcjogdHJ1ZSB9O1xuICAgICAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3JlYXNvbkNvZGUnIHx8IG5hbWUuc3RhcnRzV2l0aCgnSW52YWxpZEZpZWxkJykpIHtcbiAgICAgICAgICByZWFzb25bbmFtZV0gPSB2YWx1ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlYXNvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9NYXAocGFyYW1MaXN0OiB7IGtleTsgdmFsdWUgfVtdKSB7XG4gICAgcmV0dXJuIHBhcmFtTGlzdC5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBpdGVtKSB7XG4gICAgICBjb25zdCBrZXkgPSBpdGVtLmtleTtcbiAgICAgIHJlc3VsdFtrZXldID0gaXRlbS52YWx1ZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICB9XG59XG4iXX0=