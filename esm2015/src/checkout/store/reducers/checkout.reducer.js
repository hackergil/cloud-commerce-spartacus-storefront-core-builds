/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from './../actions/index';
/** @type {?} */
export const initialState = {
    address: {},
    deliveryMode: {
        supported: {},
        selected: '',
    },
    paymentDetails: {},
    orderDetails: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.ADD_DELIVERY_ADDRESS_SUCCESS:
        case fromAction.SET_DELIVERY_ADDRESS_SUCCESS: {
            /** @type {?} */
            const address = action.payload;
            return Object.assign({}, state, { address });
        }
        case fromAction.LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS: {
            /** @type {?} */
            const supportedModes = action.payload;
            if (!supportedModes) {
                return state;
            }
            /** @type {?} */
            const supported = supportedModes.reduce((modes, mode) => {
                return Object.assign({}, modes, { [mode.code]: mode });
            }, Object.assign({}, state.deliveryMode.supported));
            return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { supported }) });
        }
        case fromAction.SET_DELIVERY_MODE_SUCCESS: {
            /** @type {?} */
            const selected = action.payload;
            return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { selected }) });
        }
        case fromAction.CREATE_PAYMENT_DETAILS_SUCCESS:
        case fromAction.SET_PAYMENT_DETAILS_SUCCESS: {
            return Object.assign({}, state, { paymentDetails: action.payload });
        }
        case fromAction.CREATE_PAYMENT_DETAILS_FAIL: {
            /** @type {?} */
            const paymentDetails = action.payload;
            if (paymentDetails['hasError']) {
                return Object.assign({}, state, { paymentDetails });
            }
            return state;
        }
        case fromAction.PLACE_ORDER_SUCCESS: {
            /** @type {?} */
            const orderDetails = action.payload;
            return Object.assign({}, state, { orderDetails });
        }
        case fromAction.CLEAR_CHECKOUT_DATA: {
            return initialState;
        }
        case fromAction.CLEAR_CHECKOUT_STEP: {
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
        case fromAction.CLEAR_SUPPORTED_DELIVERY_MODES:
        case fromAction.CHECKOUT_CLEAR_MISCS_DATA: {
            return Object.assign({}, state, { deliveryMode: Object.assign({}, state.deliveryMode, { supported: {} }) });
        }
        case fromAction.LOAD_CHECKOUT_DETAILS_SUCCESS: {
            return Object.assign({}, state, { address: action.payload.deliveryAddress, deliveryMode: Object.assign({}, state.deliveryMode, { selected: action.payload.deliveryMode && action.payload.deliveryMode.code }), paymentDetails: action.payload.paymentInfo });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9jaGVja291dC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLG9CQUFvQixDQUFDOztBQUlqRCxNQUFNLE9BQU8sWUFBWSxHQUF1QjtJQUM5QyxPQUFPLEVBQUUsRUFBRTtJQUNYLFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNELGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFlBQVksRUFBRSxFQUFFO0NBQ2pCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUFxRTtJQUVyRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsNEJBQTRCLENBQUM7UUFDN0MsS0FBSyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7a0JBQ3RDLE9BQU8sR0FBWSxNQUFNLENBQUMsT0FBTztZQUV2Qyx5QkFDSyxLQUFLLElBQ1IsT0FBTyxJQUNQO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDOztrQkFDL0MsY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ25CLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7O2tCQUVLLFNBQVMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUNyQyxDQUFDLEtBQXVDLEVBQUUsSUFBa0IsRUFBRSxFQUFFO2dCQUM5RCx5QkFDSyxLQUFLLElBQ1IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUNqQjtZQUNKLENBQUMsb0JBRUksS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBRWxDO1lBRUQseUJBQ0ssS0FBSyxJQUNSLFlBQVksb0JBQ1AsS0FBSyxDQUFDLFlBQVksSUFDckIsU0FBUyxPQUVYO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztrQkFDbkMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBRS9CLHlCQUNLLEtBQUssSUFDUixZQUFZLG9CQUNQLEtBQUssQ0FBQyxZQUFZLElBQ3JCLFFBQVEsT0FFVjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsOEJBQThCLENBQUM7UUFDL0MsS0FBSyxVQUFVLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUMzQyx5QkFDSyxLQUFLLElBQ1IsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQzlCO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOztrQkFDckMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQ3JDLElBQUksY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5Qix5QkFDSyxLQUFLLElBQ1IsY0FBYyxJQUNkO2FBQ0g7WUFFRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7a0JBQzdCLFlBQVksR0FBVSxNQUFNLENBQUMsT0FBTztZQUUxQyx5QkFDSyxLQUFLLElBQ1IsWUFBWSxJQUNaO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsS0FBSyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7a0JBQzdCLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTztZQUNqQyxRQUFRLFVBQVUsRUFBRTtnQkFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDTix5QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLEVBQUUsSUFDWDtpQkFDSDtnQkFFRCxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNOLHlCQUNLLEtBQUssSUFDUixZQUFZLG9CQUNQLEtBQUssQ0FBQyxZQUFZLElBQ3JCLFNBQVMsRUFBRSxFQUFFLEVBQ2IsUUFBUSxFQUFFLEVBQUUsT0FFZDtpQkFDSDtnQkFFRCxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNOLHlCQUNLLEtBQUssSUFDUixjQUFjLEVBQUUsRUFBRSxJQUNsQjtpQkFDSDthQUNGO1lBRUQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssVUFBVSxDQUFDLDhCQUE4QixDQUFDO1FBQy9DLEtBQUssVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDekMseUJBQ0ssS0FBSyxJQUNSLFlBQVksb0JBQ1AsS0FBSyxDQUFDLFlBQVksSUFDckIsU0FBUyxFQUFFLEVBQUUsT0FFZjtTQUNIO1FBQ0QsS0FBSyxVQUFVLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUM3Qyx5QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUN2QyxZQUFZLG9CQUNQLEtBQUssQ0FBQyxZQUFZLElBQ3JCLFFBQVEsRUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBRW5FLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFDMUM7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tvdXRTdGVwc1N0YXRlIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlLCBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlID0ge1xuICBhZGRyZXNzOiB7fSxcbiAgZGVsaXZlcnlNb2RlOiB7XG4gICAgc3VwcG9ydGVkOiB7fSxcbiAgICBzZWxlY3RlZDogJycsXG4gIH0sXG4gIHBheW1lbnREZXRhaWxzOiB7fSxcbiAgb3JkZXJEZXRhaWxzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLkNoZWNrb3V0QWN0aW9uIHwgZnJvbUFjdGlvbi5DaGVja291dENsZWFyTWlzY3NEYXRhXG4pOiBDaGVja291dFN0ZXBzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkFERF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M6XG4gICAgY2FzZSBmcm9tQWN0aW9uLlNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGFkZHJlc3M6IEFkZHJlc3MgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBzdXBwb3J0ZWRNb2RlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKCFzdXBwb3J0ZWRNb2Rlcykge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN1cHBvcnRlZCA9IHN1cHBvcnRlZE1vZGVzLnJlZHVjZShcbiAgICAgICAgKG1vZGVzOiB7IFtjb2RlOiBzdHJpbmddOiBEZWxpdmVyeU1vZGUgfSwgbW9kZTogRGVsaXZlcnlNb2RlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLm1vZGVzLFxuICAgICAgICAgICAgW21vZGUuY29kZV06IG1vZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWQsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5kZWxpdmVyeU1vZGUsXG4gICAgICAgICAgc3VwcG9ydGVkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uU0VUX0RFTElWRVJZX01PREVfU1VDQ0VTUzoge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNSRUFURV9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUzpcbiAgICBjYXNlIGZyb21BY3Rpb24uU0VUX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGF5bWVudERldGFpbHM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMOiB7XG4gICAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKHBheW1lbnREZXRhaWxzWydoYXNFcnJvciddKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcGF5bWVudERldGFpbHMsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uUExBQ0VfT1JERVJfU1VDQ0VTUzoge1xuICAgICAgY29uc3Qgb3JkZXJEZXRhaWxzOiBPcmRlciA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgb3JkZXJEZXRhaWxzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ0xFQVJfQ0hFQ0tPVVRfREFUQToge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ0xFQVJfQ0hFQ0tPVVRfU1RFUDoge1xuICAgICAgY29uc3Qgc3RlcE51bWJlciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3dpdGNoIChzdGVwTnVtYmVyKSB7XG4gICAgICAgIGNhc2UgMToge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHt9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBkZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUuZGVsaXZlcnlNb2RlLFxuICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHt9LFxuICAgICAgICAgICAgICBzZWxlY3RlZDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYXltZW50RGV0YWlsczoge30sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNMRUFSX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUzpcbiAgICBjYXNlIGZyb21BY3Rpb24uQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICBzdXBwb3J0ZWQ6IHt9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfQ0hFQ0tPVVRfREVUQUlMU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkcmVzczogYWN0aW9uLnBheWxvYWQuZGVsaXZlcnlBZGRyZXNzLFxuICAgICAgICBkZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5kZWxpdmVyeU1vZGUsXG4gICAgICAgICAgc2VsZWN0ZWQ6XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5kZWxpdmVyeU1vZGUgJiYgYWN0aW9uLnBheWxvYWQuZGVsaXZlcnlNb2RlLmNvZGUsXG4gICAgICAgIH0sXG4gICAgICAgIHBheW1lbnREZXRhaWxzOiBhY3Rpb24ucGF5bG9hZC5wYXltZW50SW5mbyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19