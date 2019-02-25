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
    }
    return state;
}
/** @type {?} */
export const getDeliveryAddress = (state) => state.address;
/** @type {?} */
export const getDeliveryMode = (state) => state.deliveryMode;
/** @type {?} */
export const getPaymentDetails = (state) => state.paymentDetails;
/** @type {?} */
export const getOrderDetails = (state) => state.orderDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9jaGVja291dC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLG9CQUFvQixDQUFDOztBQUdqRCxNQUFNLE9BQU8sWUFBWSxHQUF1QjtJQUM5QyxPQUFPLEVBQUUsRUFBRTtJQUNYLFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNELGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFlBQVksRUFBRSxFQUFFO0NBQ2pCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUFxRTtJQUVyRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsNEJBQTRCLENBQUM7UUFDN0MsS0FBSyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7a0JBQ3RDLE9BQU8sR0FBWSxNQUFNLENBQUMsT0FBTztZQUV2Qyx5QkFDSyxLQUFLLElBQ1IsT0FBTyxJQUNQO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDOztrQkFDL0MsY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYTtZQUNuRCxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNuQixPQUFPLEtBQUssQ0FBQzthQUNkOztrQkFFSyxTQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FDckMsQ0FBQyxLQUF1QyxFQUFFLElBQWtCLEVBQUUsRUFBRTtnQkFDOUQseUJBQ0ssS0FBSyxJQUNSLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFDakI7WUFDSixDQUFDLG9CQUVJLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUVsQztZQUVELHlCQUNLLEtBQUssSUFDUixZQUFZLG9CQUNQLEtBQUssQ0FBQyxZQUFZLElBQ3JCLFNBQVMsT0FFWDtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7a0JBQ25DLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTztZQUUvQix5QkFDSyxLQUFLLElBQ1IsWUFBWSxvQkFDUCxLQUFLLENBQUMsWUFBWSxJQUNyQixRQUFRLE9BRVY7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLDhCQUE4QixDQUFDO1FBQy9DLEtBQUssVUFBVSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDM0MseUJBQ0ssS0FBSyxJQUNSLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUM5QjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsMkJBQTJCLENBQUMsQ0FBQzs7a0JBQ3JDLGNBQWMsR0FBRyxNQUFNLENBQUMsT0FBTztZQUNyQyxJQUFJLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDOUIseUJBQ0ssS0FBSyxJQUNSLGNBQWMsSUFDZDthQUNIO1lBRUQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2tCQUM3QixZQUFZLEdBQVUsTUFBTSxDQUFDLE9BQU87WUFFMUMseUJBQ0ssS0FBSyxJQUNSLFlBQVksSUFDWjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNuQyxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELEtBQUssVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2tCQUM3QixVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFDakMsUUFBUSxVQUFVLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ04seUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxFQUFFLElBQ1g7aUJBQ0g7Z0JBRUQsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDTix5QkFDSyxLQUFLLElBQ1IsWUFBWSxvQkFDUCxLQUFLLENBQUMsWUFBWSxJQUNyQixTQUFTLEVBQUUsRUFBRSxFQUNiLFFBQVEsRUFBRSxFQUFFLE9BRWQ7aUJBQ0g7Z0JBRUQsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDTix5QkFDSyxLQUFLLElBQ1IsY0FBYyxFQUFFLEVBQUUsSUFDbEI7aUJBQ0g7YUFDRjtZQUVELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxLQUFLLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQztRQUMvQyxLQUFLLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3pDLHlCQUNLLEtBQUssSUFDUixZQUFZLG9CQUNQLEtBQUssQ0FBQyxZQUFZLElBQ3JCLFNBQVMsRUFBRSxFQUFFLE9BRWY7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyxDQUFDLEtBQXlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPOztBQUM5RSxNQUFNLE9BQU8sZUFBZSxHQUFHLENBQUMsS0FBeUIsRUFBRSxFQUFFLENBQzNELEtBQUssQ0FBQyxZQUFZOztBQUNwQixNQUFNLE9BQU8saUJBQWlCLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FDN0QsS0FBSyxDQUFDLGNBQWM7O0FBQ3RCLE1BQU0sT0FBTyxlQUFlLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FDM0QsS0FBSyxDQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja291dFN0ZXBzU3RhdGUgfSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4vLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBZGRyZXNzLCBPcmRlciwgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUgPSB7XG4gIGFkZHJlc3M6IHt9LFxuICBkZWxpdmVyeU1vZGU6IHtcbiAgICBzdXBwb3J0ZWQ6IHt9LFxuICAgIHNlbGVjdGVkOiAnJ1xuICB9LFxuICBwYXltZW50RGV0YWlsczoge30sXG4gIG9yZGVyRGV0YWlsczoge31cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLkNoZWNrb3V0QWN0aW9uIHwgZnJvbUFjdGlvbi5DaGVja291dENsZWFyTWlzY3NEYXRhXG4pOiBDaGVja291dFN0ZXBzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkFERF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M6XG4gICAgY2FzZSBmcm9tQWN0aW9uLlNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGFkZHJlc3M6IEFkZHJlc3MgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZHJlc3NcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHN1cHBvcnRlZE1vZGVzID0gYWN0aW9uLnBheWxvYWQuZGVsaXZlcnlNb2RlcztcbiAgICAgIGlmICghc3VwcG9ydGVkTW9kZXMpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdXBwb3J0ZWQgPSBzdXBwb3J0ZWRNb2Rlcy5yZWR1Y2UoXG4gICAgICAgIChtb2RlczogeyBbY29kZTogc3RyaW5nXTogRGVsaXZlcnlNb2RlIH0sIG1vZGU6IERlbGl2ZXJ5TW9kZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5tb2RlcyxcbiAgICAgICAgICAgIFttb2RlLmNvZGVdOiBtb2RlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWRcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICBzdXBwb3J0ZWRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uU0VUX0RFTElWRVJZX01PREVfU1VDQ0VTUzoge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICBzZWxlY3RlZFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5DUkVBVEVfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1M6XG4gICAgY2FzZSBmcm9tQWN0aW9uLlNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBheW1lbnREZXRhaWxzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMOiB7XG4gICAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKHBheW1lbnREZXRhaWxzWydoYXNFcnJvciddKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcGF5bWVudERldGFpbHNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5QTEFDRV9PUkRFUl9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBvcmRlckRldGFpbHM6IE9yZGVyID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcmRlckRldGFpbHNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNMRUFSX0NIRUNLT1VUX0RBVEE6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNMRUFSX0NIRUNLT1VUX1NURVA6IHtcbiAgICAgIGNvbnN0IHN0ZXBOdW1iZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN3aXRjaCAoc3RlcE51bWJlcikge1xuICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRyZXNzOiB7fVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBkZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUuZGVsaXZlcnlNb2RlLFxuICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHt9LFxuICAgICAgICAgICAgICBzZWxlY3RlZDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgcGF5bWVudERldGFpbHM6IHt9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNMRUFSX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUzpcbiAgICBjYXNlIGZyb21BY3Rpb24uQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICBzdXBwb3J0ZWQ6IHt9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVsaXZlcnlBZGRyZXNzID0gKHN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUpID0+IHN0YXRlLmFkZHJlc3M7XG5leHBvcnQgY29uc3QgZ2V0RGVsaXZlcnlNb2RlID0gKHN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUpID0+XG4gIHN0YXRlLmRlbGl2ZXJ5TW9kZTtcbmV4cG9ydCBjb25zdCBnZXRQYXltZW50RGV0YWlscyA9IChzdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlKSA9PlxuICBzdGF0ZS5wYXltZW50RGV0YWlscztcbmV4cG9ydCBjb25zdCBnZXRPcmRlckRldGFpbHMgPSAoc3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSkgPT5cbiAgc3RhdGUub3JkZXJEZXRhaWxzO1xuIl19