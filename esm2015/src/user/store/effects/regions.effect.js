/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromActions from '../actions/index';
import { OccMiscsService } from '../../../occ/miscs/miscs.service';
export class RegionsEffects {
    /**
     * @param {?} actions$
     * @param {?} occMiscsService
     */
    constructor(actions$, occMiscsService) {
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadRegions$ = this.actions$.pipe(ofType(fromActions.LOAD_REGIONS), map((action) => {
            return action.payload;
        }), switchMap((countryCode) => {
            return this.occMiscsService.loadRegions(countryCode).pipe(map(data => new fromActions.LoadRegionsSuccess(data.regions)), catchError(error => of(new fromActions.LoadRegionsFail(error))));
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
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], RegionsEffects.prototype, "loadRegions$", void 0);
if (false) {
    /** @type {?} */
    RegionsEffects.prototype.loadRegions$;
    /**
     * @type {?}
     * @private
     */
    RegionsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    RegionsEffects.prototype.occMiscsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3JlZ2lvbnMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHbkUsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBZXpCLFlBQ1UsUUFBaUIsRUFDakIsZUFBZ0M7UUFEaEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFmMUMsaUJBQVksR0FBMEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RFLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQ2hDLEdBQUcsQ0FBQyxDQUFDLE1BQStCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDN0QsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2hFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBbkJMLFVBQVU7Ozs7WUFSTSxPQUFPO1lBTWYsZUFBZTs7QUFLdEI7SUFEQyxNQUFNLEVBQUU7c0NBQ0ssVUFBVTtvREFXdEI7OztJQVpGLHNDQVlFOzs7OztJQUdBLGtDQUF5Qjs7Ozs7SUFDekIseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjTWlzY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL21pc2NzL21pc2NzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVnaW9uc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFJlZ2lvbnMkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlJlZ2lvbnNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1JFR0lPTlMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Mb2FkUmVnaW9ucykgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pLFxuICAgIHN3aXRjaE1hcCgoY291bnRyeUNvZGU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjTWlzY3NTZXJ2aWNlLmxvYWRSZWdpb25zKGNvdW50cnlDb2RlKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBuZXcgZnJvbUFjdGlvbnMuTG9hZFJlZ2lvbnNTdWNjZXNzKGRhdGEucmVnaW9ucykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkUmVnaW9uc0ZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjTWlzY3NTZXJ2aWNlOiBPY2NNaXNjc1NlcnZpY2VcbiAgKSB7fVxufVxuIl19