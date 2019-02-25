/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { UrlTranslationService } from './url-translation.service';
export class TranslateUrlPipe {
    /**
     * @param {?} urlTranslator
     */
    constructor(urlTranslator) {
        this.urlTranslator = urlTranslator;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    transform(options) {
        return this.urlTranslator.translate(options);
    }
}
TranslateUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'cxTranslateUrl'
            },] }
];
/** @nocollapse */
TranslateUrlPipe.ctorParameters = () => [
    { type: UrlTranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslateUrlPipe.prototype.urlTranslator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLXVybC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdHJhbnNsYXRlLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU1sRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW9CLGFBQW9DO1FBQXBDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7Ozs7O0lBRTVELFNBQVMsQ0FBQyxPQUE0QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQVJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCOzs7O1lBTFEscUJBQXFCOzs7Ozs7O0lBT2hCLHlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlVXJsT3B0aW9ucyB9IGZyb20gJy4vdHJhbnNsYXRlLXVybC1vcHRpb25zJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY3hUcmFuc2xhdGVVcmwnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmxUcmFuc2xhdG9yOiBVcmxUcmFuc2xhdGlvblNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKG9wdGlvbnM6IFRyYW5zbGF0ZVVybE9wdGlvbnMpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudXJsVHJhbnNsYXRvci50cmFuc2xhdGUob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==