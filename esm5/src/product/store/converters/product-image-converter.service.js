/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { OccConfig } from '../../../occ/index';
var ProductImageConverterService = /** @class */ (function () {
    function ProductImageConverterService(config) {
        this.config = config;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    ProductImageConverterService.prototype.convertList = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_1, _a;
        if (!list) {
            return;
        }
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var product = list_1_1.value;
                this.convertProduct(product);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductImageConverterService.prototype.convertProduct = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (product.images) {
            product.images = this.populate(product.images);
        }
    };
    /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     */
    /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     * @param {?} source
     * @return {?}
     */
    ProductImageConverterService.prototype.populate = /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var e_2, _a;
        /** @type {?} */
        var images = {};
        if (source) {
            try {
                for (var source_1 = tslib_1.__values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
                    var image = source_1_1.value;
                    /** @type {?} */
                    var isList = image.hasOwnProperty('galleryIndex');
                    if (!images.hasOwnProperty(image.imageType)) {
                        images[image.imageType] = isList ? [] : {};
                    }
                    /** @type {?} */
                    var imageContainer = void 0;
                    if (isList && !images[image.imageType][image.galleryIndex]) {
                        images[image.imageType][image.galleryIndex] = {};
                    }
                    if (isList) {
                        imageContainer = images[image.imageType][image.galleryIndex];
                    }
                    else {
                        imageContainer = images[image.imageType];
                    }
                    // set full image URL path
                    image.url = (this.config.server.baseUrl || '') + image.url;
                    imageContainer[image.format] = image;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return images;
    };
    ProductImageConverterService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductImageConverterService.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    return ProductImageConverterService;
}());
export { ProductImageConverterService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductImageConverterService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1jb252ZXJ0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1jb252ZXJ0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRy9DO0lBRUUsc0NBQXNCLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7OztJQUUzQyxrREFBVzs7OztJQUFYLFVBQVksSUFBb0I7O1FBQzlCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPO1NBQ1I7O1lBQ0QsS0FBc0IsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtnQkFBdkIsSUFBTSxPQUFPLGlCQUFBO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlCOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7OztJQUVELHFEQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7OztJQUNILCtDQUFROzs7Ozs7Ozs7O0lBQVIsVUFBUyxNQUFrQjs7O1lBQ25CLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksTUFBTSxFQUFFOztnQkFDVixLQUFvQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO29CQUF2QixJQUFNLEtBQUssbUJBQUE7O3dCQUNSLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQzVDOzt3QkFFRyxjQUFjLFNBQUE7b0JBQ2xCLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7d0JBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDbEQ7b0JBRUQsSUFBSSxNQUFNLEVBQUU7d0JBQ1YsY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM5RDt5QkFBTTt3QkFDTCxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDMUM7b0JBRUQsMEJBQTBCO29CQUMxQixLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBRTNELGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUN0Qzs7Ozs7Ozs7O1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkF0REYsVUFBVTs7OztnQkFIRixTQUFTOztJQTBEbEIsbUNBQUM7Q0FBQSxBQXZERCxJQXVEQztTQXREWSw0QkFBNEI7Ozs7OztJQUMzQiw4Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VDb252ZXJ0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIGNvbnZlcnRMaXN0KGxpc3Q6IEFycmF5PFByb2R1Y3Q+KTogdm9pZCB7XG4gICAgaWYgKCFsaXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBsaXN0KSB7XG4gICAgICB0aGlzLmNvbnZlcnRQcm9kdWN0KHByb2R1Y3QpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnRQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkIHtcbiAgICBpZiAocHJvZHVjdC5pbWFnZXMpIHtcbiAgICAgIHByb2R1Y3QuaW1hZ2VzID0gdGhpcy5wb3B1bGF0ZShwcm9kdWN0LmltYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjXG4gICAqIENyZWF0ZXMgdGhlIGltYWdlIHN0cnVjdHVlIHdlJ2QgbGlrZSB0byBoYXZlLiBJbnN0ZWFkIG9mXG4gICAqIGhhdmluZyBhIHNpbmdlbCBsaXN0IHdpdGggYWxsIGltYWdlcyBkZXNwaXRlIHR5cGUgYW5kIGZvcm1hdFxuICAgKiB3ZSBjcmVhdGUgYSBwcm9wZXIgc3RydWN0dXJlLiBXaXRoIHRoYXQgd2UgY2FuIGRvOlxuICAgKiAtIGltYWdlcy5wcmltYXJ5LnRodW1uYWlsLnVybFxuICAgKiAtIGltYWdlcy5HQUxMRVJZWzBdLnRodW1uYWlsLnVybFxuICAgKi9cbiAgcG9wdWxhdGUoc291cmNlOiBBcnJheTxhbnk+KTogYW55IHtcbiAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICBpZiAoc291cmNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHNvdXJjZSkge1xuICAgICAgICBjb25zdCBpc0xpc3QgPSBpbWFnZS5oYXNPd25Qcm9wZXJ0eSgnZ2FsbGVyeUluZGV4Jyk7XG4gICAgICAgIGlmICghaW1hZ2VzLmhhc093blByb3BlcnR5KGltYWdlLmltYWdlVHlwZSkpIHtcbiAgICAgICAgICBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXSA9IGlzTGlzdCA/IFtdIDoge307XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW1hZ2VDb250YWluZXI7XG4gICAgICAgIGlmIChpc0xpc3QgJiYgIWltYWdlc1tpbWFnZS5pbWFnZVR5cGVdW2ltYWdlLmdhbGxlcnlJbmRleF0pIHtcbiAgICAgICAgICBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMaXN0KSB7XG4gICAgICAgICAgaW1hZ2VDb250YWluZXIgPSBpbWFnZXNbaW1hZ2UuaW1hZ2VUeXBlXVtpbWFnZS5nYWxsZXJ5SW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltYWdlQ29udGFpbmVyID0gaW1hZ2VzW2ltYWdlLmltYWdlVHlwZV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgZnVsbCBpbWFnZSBVUkwgcGF0aFxuICAgICAgICBpbWFnZS51cmwgPSAodGhpcy5jb25maWcuc2VydmVyLmJhc2VVcmwgfHwgJycpICsgaW1hZ2UudXJsO1xuXG4gICAgICAgIGltYWdlQ29udGFpbmVyW2ltYWdlLmZvcm1hdF0gPSBpbWFnZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGltYWdlcztcbiAgfVxufVxuIl19