/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PageTitleResolver } from './page-title.resolver';
import { ContentPageTitleResolver } from './content-page-title.resolver';
var CmsPageTitleModule = /** @class */ (function () {
    function CmsPageTitleModule() {
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
    return CmsPageTitleModule;
}());
export { CmsPageTitleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekU7SUFBQTtJQVNpQyxDQUFDOztnQkFUakMsUUFBUSxTQUFDO29CQUNSLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsd0JBQXdCOzRCQUNyQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7SUFDZ0MseUJBQUM7Q0FBQSxBQVRsQyxJQVNrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuL3BhZ2UtdGl0bGUucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29udGVudFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi9jb250ZW50LXBhZ2UtdGl0bGUucmVzb2x2ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQYWdlVGl0bGVSZXNvbHZlcixcbiAgICAgIHVzZUV4aXN0aW5nOiBDb250ZW50UGFnZVRpdGxlUmVzb2x2ZXIsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDbXNQYWdlVGl0bGVNb2R1bGUge31cbiJdfQ==