/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OccConfig } from '../../occ/config/occ-config';
/**
 * @record
 */
export function StandardCmsComponentConfig() { }
if (false) {
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.SiteContextSelectorComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.CMSLinkComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.SimpleResponsiveBannerComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.SimpleBannerComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.CMSParagraphComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.BreadcrumbComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.NavigationComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.FooterNavigationComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.CategoryNavigationComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.ProductAddToCartComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.MiniCartComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.ProductCarouselComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.SearchBoxComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.ProductReferencesComponent;
    /** @type {?|undefined} */
    StandardCmsComponentConfig.prototype.CMSTabParagraphComponent;
}
/**
 * @record
 */
export function JspIncludeCmsComponentConfig() { }
if (false) {
    /** @type {?|undefined} */
    JspIncludeCmsComponentConfig.prototype.AccountAddressBookComponent;
}
/** @type {?} */
export const JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
/**
 * @record
 */
export function CmsComponentMapping() { }
if (false) {
    /** @type {?|undefined} */
    CmsComponentMapping.prototype.selector;
    /** @type {?|undefined} */
    CmsComponentMapping.prototype.providers;
    /** @type {?|undefined} */
    CmsComponentMapping.prototype.disableSSR;
}
/**
 * @record
 */
export function CMSComponentConfig() { }
/**
 * @abstract
 */
export class CmsConfig extends OccConfig {
}
if (false) {
    /** @type {?} */
    CmsConfig.prototype.authentication;
    /** @type {?} */
    CmsConfig.prototype.defaultPageIdForType;
    /** @type {?} */
    CmsConfig.prototype.cmsComponents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY29uZmlnL2Ntcy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUd4RCxnREFnQkM7OztJQWZDLGtFQUFtRDs7SUFDbkQsc0RBQXVDOztJQUN2QyxxRUFBc0Q7O0lBQ3RELDJEQUE0Qzs7SUFDNUMsMkRBQTRDOztJQUM1Qyx5REFBMEM7O0lBQzFDLHlEQUEwQzs7SUFDMUMsK0RBQWdEOztJQUNoRCxpRUFBa0Q7O0lBQ2xELCtEQUFnRDs7SUFDaEQsdURBQXdDOztJQUN4Qyw4REFBK0M7O0lBQy9DLHdEQUF5Qzs7SUFDekMsZ0VBQWlEOztJQUNqRCw4REFBK0M7Ozs7O0FBR2pELGtEQUVDOzs7SUFEQyxtRUFBa0Q7OztBQUdwRCxNQUFNLE9BQU8sOEJBQThCLEdBQUcscUJBQXFCOzs7O0FBRW5FLHlDQUlDOzs7SUFIQyx1Q0FBa0I7O0lBQ2xCLHdDQUE2Qjs7SUFDN0IseUNBQXFCOzs7OztBQUd2Qix3Q0FJQzs7OztBQUVELE1BQU0sT0FBZ0IsU0FBVSxTQUFRLFNBQVM7Q0FZaEQ7OztJQVhDLG1DQUdFOztJQUVGLHlDQUdFOztJQUVGLGtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRpY1Byb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4uLy4uL2F1dGgvY29uZmlnL2F1dGgtY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGFuZGFyZENtc0NvbXBvbmVudENvbmZpZyB7XG4gIFNpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDTVNMaW5rQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNpbXBsZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENNU1BhcmFncmFwaENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEJyZWFkY3J1bWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBOYXZpZ2F0aW9uQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RBZGRUb0NhcnRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBNaW5pQ2FydENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNlYXJjaEJveENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ01TVGFiUGFyYWdyYXBoQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBKc3BJbmNsdWRlQ21zQ29tcG9uZW50Q29uZmlnIHtcbiAgQWNjb3VudEFkZHJlc3NCb29rQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cblxuZXhwb3J0IGNvbnN0IEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSA9ICdKc3BJbmNsdWRlQ29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDbXNDb21wb25lbnRNYXBwaW5nIHtcbiAgc2VsZWN0b3I/OiBzdHJpbmc7XG4gIHByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW107XG4gIGRpc2FibGVTU1I/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENNU0NvbXBvbmVudENvbmZpZ1xuICBleHRlbmRzIFN0YW5kYXJkQ21zQ29tcG9uZW50Q29uZmlnLFxuICAgIEpzcEluY2x1ZGVDbXNDb21wb25lbnRDb25maWcge1xuICBbXzogc3RyaW5nXTogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc0NvbmZpZyBleHRlbmRzIE9jY0NvbmZpZyBpbXBsZW1lbnRzIEF1dGhDb25maWcge1xuICBhdXRoZW50aWNhdGlvbj86IHtcbiAgICBjbGllbnRfaWQ/OiBzdHJpbmc7XG4gICAgY2xpZW50X3NlY3JldD86IHN0cmluZztcbiAgfTtcblxuICBkZWZhdWx0UGFnZUlkRm9yVHlwZT86IHtcbiAgICBQcm9kdWN0UGFnZT86IHN0cmluZ1tdO1xuICAgIENhdGVnb3J5UGFnZT86IHN0cmluZ1tdO1xuICB9O1xuXG4gIGNtc0NvbXBvbmVudHM/OiBDTVNDb21wb25lbnRDb25maWc7XG59XG4iXX0=