/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import * as fromReducer from './../reducers/address-verification.reducer';
import * as fromFeature from './../reducers/index';
/** @type {?} */
export var getAddressVerificationResultsState = createSelector(fromFeature.getCheckoutState, function (state) { return state.addressVerification; });
/** @type {?} */
export var getAddressVerificationResults = createSelector(getAddressVerificationResultsState, fromReducer.getAddressVerificationResults);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3NlbGVjdG9ycy9hZGRyZXNzLXZlcmlmaWNhdGlvbi5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sS0FBSyxXQUFXLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxLQUFLLFdBQVcsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHbkQsTUFBTSxLQUFPLGtDQUFrQyxHQUczQyxjQUFjLENBQ2hCLFdBQVcsQ0FBQyxnQkFBZ0IsRUFDNUIsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLG1CQUFtQixFQUF6QixDQUF5QixDQUNwRDs7QUFFRCxNQUFNLEtBQU8sNkJBQTZCLEdBR3RDLGNBQWMsQ0FDaEIsa0NBQWtDLEVBQ2xDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW1vaXplZFNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQ2hlY2tvdXRTdGF0ZSwgQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVJlZHVjZXIgZnJvbSAnLi8uLi9yZWR1Y2Vycy9hZGRyZXNzLXZlcmlmaWNhdGlvbi5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21GZWF0dXJlIGZyb20gJy4vLi4vcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIENoZWNrb3V0U3RhdGUsXG4gIEFkZHJlc3NWZXJpZmljYXRpb25TdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBmcm9tRmVhdHVyZS5nZXRDaGVja291dFN0YXRlLFxuICAoc3RhdGU6IENoZWNrb3V0U3RhdGUpID0+IHN0YXRlLmFkZHJlc3NWZXJpZmljYXRpb25cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0czogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgQ2hlY2tvdXRTdGF0ZSxcbiAgc3RyaW5nIHwgQWRkcmVzc1ZhbGlkYXRpb25cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHNTdGF0ZSxcbiAgZnJvbVJlZHVjZXIuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHNcbik7XG4iXX0=