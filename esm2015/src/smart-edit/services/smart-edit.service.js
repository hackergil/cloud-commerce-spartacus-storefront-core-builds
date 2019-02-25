/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { WindowRef } from '../../window/window-ref';
import * as i0 from "@angular/core";
import * as i1 from "../../cms/facade/cms.service";
import * as i2 from "../../routing/facade/routing.service";
import * as i3 from "../../window/window-ref";
export class SmartEditService {
    /**
     * @param {?} cmsService
     * @param {?} routingService
     * @param {?} winRef
     */
    constructor(cmsService, routingService, winRef) {
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.getCmsTicket();
        this.addPageContract();
        if (winRef.nativeWindow) {
            /** @type {?} */
            const window = (/** @type {?} */ (winRef.nativeWindow));
            // rerender components and slots after editing
            window.smartedit = window.smartedit || {};
            window.smartedit.renderComponent = (componentId, componentType, parentId) => {
                return this.renderComponent(componentId, componentType, parentId);
            };
            // reprocess page
            window.smartedit.reprocessPage = this.reprocessPage;
        }
    }
    /**
     * @return {?}
     */
    get cmsTicketId() {
        return this._cmsTicketId;
    }
    /**
     * @protected
     * @return {?}
     */
    getCmsTicket() {
        combineLatest(this.cmsService.getCurrentPage(), this.routingService.getRouterState())
            .pipe(takeWhile(([cmsPage]) => cmsPage === undefined))
            .subscribe(([, routerState]) => {
            if (routerState.state && !this._cmsTicketId) {
                this._cmsTicketId = routerState.state.queryParams['cmsTicketId'];
                if (this._cmsTicketId) {
                    this.cmsService.launchInSmartEdit = true;
                }
            }
        });
    }
    /**
     * @protected
     * @return {?}
     */
    addPageContract() {
        this.cmsService.getCurrentPage().subscribe(cmsPage => {
            if (cmsPage && this._cmsTicketId) {
                /** @type {?} */
                const previousContract = [];
                Array.from(document.body.classList).forEach(attr => previousContract.push(attr));
                previousContract.forEach(attr => document.body.classList.remove(attr));
                document.body.classList.add(`smartedit-page-uid-${cmsPage.pageId}`);
                document.body.classList.add(`smartedit-page-uuid-${cmsPage.uuid}`);
                document.body.classList.add(`smartedit-catalog-version-uuid-${cmsPage.catalogUuid}`);
            }
        });
    }
    /**
     * @protected
     * @param {?} componentId
     * @param {?=} componentType
     * @param {?=} parentId
     * @return {?}
     */
    renderComponent(componentId, componentType, parentId) {
        if (componentId) {
            // without parentId, it is slot
            if (!parentId) {
                this.cmsService.refreshLatestPage();
            }
            else if (componentType) {
                this.cmsService.refreshComponent(componentId);
            }
        }
        return true;
    }
    /**
     * @protected
     * @return {?}
     */
    reprocessPage() {
        // TODO: reprocess page API
    }
}
SmartEditService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SmartEditService.ctorParameters = () => [
    { type: CmsService },
    { type: RoutingService },
    { type: WindowRef }
];
/** @nocollapse */ SmartEditService.ngInjectableDef = i0.defineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.inject(i1.CmsService), i0.inject(i2.RoutingService), i0.inject(i3.WindowRef)); }, token: SmartEditService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype._cmsTicketId;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype.cmsService;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUtwRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFHM0IsWUFDVSxVQUFzQixFQUN0QixjQUE4QixFQUN0QyxNQUFpQjtRQUZULGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3RDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFOztrQkFDakIsTUFBTSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxZQUFZLEVBQU87WUFDekMsOENBQThDO1lBQzlDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7WUFDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FDakMsV0FBVyxFQUNYLGFBQWEsRUFDYixRQUFRLEVBQ1IsRUFBRTtnQkFDRixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNw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bmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU21hcnRFZGl0U2VydmljZSB7XG4gIHByaXZhdGUgX2Ntc1RpY2tldElkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIHRoaXMuZ2V0Q21zVGlja2V0KCk7XG4gICAgdGhpcy5hZGRQYWdlQ29udHJhY3QoKTtcblxuICAgIGlmICh3aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICBjb25zdCB3aW5kb3cgPSB3aW5SZWYubmF0aXZlV2luZG93IGFzIGFueTtcbiAgICAgIC8vIHJlcmVuZGVyIGNvbXBvbmVudHMgYW5kIHNsb3RzIGFmdGVyIGVkaXRpbmdcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQgPSB3aW5kb3cuc21hcnRlZGl0IHx8IHt9O1xuICAgICAgd2luZG93LnNtYXJ0ZWRpdC5yZW5kZXJDb21wb25lbnQgPSAoXG4gICAgICAgIGNvbXBvbmVudElkLFxuICAgICAgICBjb21wb25lbnRUeXBlLFxuICAgICAgICBwYXJlbnRJZFxuICAgICAgKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudChjb21wb25lbnRJZCwgY29tcG9uZW50VHlwZSwgcGFyZW50SWQpO1xuICAgICAgfTtcblxuICAgICAgLy8gcmVwcm9jZXNzIHBhZ2VcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVwcm9jZXNzUGFnZSA9IHRoaXMucmVwcm9jZXNzUGFnZTtcbiAgICB9XG4gIH1cblxuICBnZXQgY21zVGlja2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY21zVGlja2V0SWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q21zVGlja2V0KCkge1xuICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q3VycmVudFBhZ2UoKSxcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKVxuICAgIClcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoW2Ntc1BhZ2VdKSA9PiBjbXNQYWdlID09PSB1bmRlZmluZWQpKVxuICAgICAgLnN1YnNjcmliZSgoWywgcm91dGVyU3RhdGVdKSA9PiB7XG4gICAgICAgIGlmIChyb3V0ZXJTdGF0ZS5zdGF0ZSAmJiAhdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICB0aGlzLl9jbXNUaWNrZXRJZCA9IHJvdXRlclN0YXRlLnN0YXRlLnF1ZXJ5UGFyYW1zWydjbXNUaWNrZXRJZCddO1xuICAgICAgICAgIGlmICh0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxhdW5jaEluU21hcnRFZGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFBhZ2VDb250cmFjdCgpIHtcbiAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q3VycmVudFBhZ2UoKS5zdWJzY3JpYmUoY21zUGFnZSA9PiB7XG4gICAgICBpZiAoY21zUGFnZSAmJiB0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c0NvbnRyYWN0ID0gW107XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QpLmZvckVhY2goYXR0ciA9PlxuICAgICAgICAgIHByZXZpb3VzQ29udHJhY3QucHVzaChhdHRyKVxuICAgICAgICApO1xuICAgICAgICBwcmV2aW91c0NvbnRyYWN0LmZvckVhY2goYXR0ciA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYXR0cikpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChgc21hcnRlZGl0LXBhZ2UtdWlkLSR7Y21zUGFnZS5wYWdlSWR9YCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChgc21hcnRlZGl0LXBhZ2UtdXVpZC0ke2Ntc1BhZ2UudXVpZH1gKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgIGBzbWFydGVkaXQtY2F0YWxvZy12ZXJzaW9uLXV1aWQtJHtjbXNQYWdlLmNhdGFsb2dVdWlkfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb21wb25lbnQoXG4gICAgY29tcG9uZW50SWQ6IHN0cmluZyxcbiAgICBjb21wb25lbnRUeXBlPzogc3RyaW5nLFxuICAgIHBhcmVudElkPzogc3RyaW5nXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChjb21wb25lbnRJZCkge1xuICAgICAgLy8gd2l0aG91dCBwYXJlbnRJZCwgaXQgaXMgc2xvdFxuICAgICAgaWYgKCFwYXJlbnRJZCkge1xuICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaExhdGVzdFBhZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50VHlwZSkge1xuICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaENvbXBvbmVudChjb21wb25lbnRJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVwcm9jZXNzUGFnZSgpIHtcbiAgICAvLyBUT0RPOiByZXByb2Nlc3MgcGFnZSBBUElcbiAgfVxufVxuIl19