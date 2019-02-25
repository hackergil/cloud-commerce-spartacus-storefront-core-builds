/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PageTitleResolver } from './page-title.resolver';
import { ContentPageTitleResolver } from './content-page-title.resolver';
export class CmsPageTitleModule {
}
CmsPageTitleModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    {
                        provide: PageTitleResolver,
                        useExisting: ContentPageTitleResolver,
                        multi: true
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFXekUsTUFBTSxPQUFPLGtCQUFrQjs7O1lBVDlCLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLHdCQUF3Qjt3QkFDckMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4vcGFnZS10aXRsZS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDb250ZW50UGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuL2NvbnRlbnQtcGFnZS10aXRsZS5yZXNvbHZlcic7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBhZ2VUaXRsZVJlc29sdmVyLFxuICAgICAgdXNlRXhpc3Rpbmc6IENvbnRlbnRQYWdlVGl0bGVSZXNvbHZlcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VUaXRsZU1vZHVsZSB7fVxuIl19