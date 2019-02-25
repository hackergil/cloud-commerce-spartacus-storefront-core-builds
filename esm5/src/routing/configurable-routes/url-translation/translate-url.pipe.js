/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { UrlTranslationService } from './url-translation.service';
var TranslateUrlPipe = /** @class */ (function () {
    function TranslateUrlPipe(urlTranslator) {
        this.urlTranslator = urlTranslator;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    TranslateUrlPipe.prototype.transform = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.urlTranslator.translate(options);
    };
    TranslateUrlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'cxTranslateUrl'
                },] }
    ];
    /** @nocollapse */
    TranslateUrlPipe.ctorParameters = function () { return [
        { type: UrlTranslationService }
    ]; };
    return TranslateUrlPipe;
}());
export { TranslateUrlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslateUrlPipe.prototype.urlTranslator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLXVybC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdHJhbnNsYXRlLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdsRTtJQUlFLDBCQUFvQixhQUFvQztRQUFwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7SUFBRyxDQUFDOzs7OztJQUU1RCxvQ0FBUzs7OztJQUFULFVBQVUsT0FBNEI7UUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkI7Ozs7Z0JBTFEscUJBQXFCOztJQVk5Qix1QkFBQztDQUFBLEFBVEQsSUFTQztTQU5ZLGdCQUFnQjs7Ozs7O0lBQ2YseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi91cmwtdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVVcmxPcHRpb25zIH0gZnJvbSAnLi90cmFuc2xhdGUtdXJsLW9wdGlvbnMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjeFRyYW5zbGF0ZVVybCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVybFRyYW5zbGF0b3I6IFVybFRyYW5zbGF0aW9uU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0ob3B0aW9uczogVHJhbnNsYXRlVXJsT3B0aW9ucyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy51cmxUcmFuc2xhdG9yLnRyYW5zbGF0ZShvcHRpb25zKTtcbiAgfVxufVxuIl19