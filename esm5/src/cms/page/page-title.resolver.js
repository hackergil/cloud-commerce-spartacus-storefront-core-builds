/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
PageTitleResolver = /** @class */ (function () {
    function PageTitleResolver() {
    }
    /**
     * @param {?} page
     * @return {?}
     */
    PageTitleResolver.prototype.getScore = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        return score;
    };
    return PageTitleResolver;
}());
/**
 * @abstract
 */
export { PageTitleResolver };
if (false) {
    /** @type {?} */
    PageTitleResolver.prototype.pageType;
    /** @type {?} */
    PageTitleResolver.prototype.pageTemplate;
    /**
     * @abstract
     * @return {?}
     */
    PageTitleResolver.prototype.resolve = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aXRsZS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvcGFnZS9wYWdlLXRpdGxlLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7OztJQUFBO0lBaUJBLENBQUM7Ozs7O0lBWEMsb0NBQVE7Ozs7SUFBUixVQUFTLElBQVU7O1lBQ2IsS0FBSyxHQUFHLENBQUM7UUFFYixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7Ozs7O0lBaEJDLHFDQUFtQjs7SUFDbkIseUNBQXFCOzs7OztJQUVyQixzREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdlVGl0bGVSZXNvbHZlciB7XG4gIHBhZ2VUeXBlOiBQYWdlVHlwZTtcbiAgcGFnZVRlbXBsYXRlOiBzdHJpbmc7XG5cbiAgYWJzdHJhY3QgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgZ2V0U2NvcmUocGFnZTogUGFnZSk6IG51bWJlciB7XG4gICAgbGV0IHNjb3JlID0gMDtcblxuICAgIGlmICh0aGlzLnBhZ2VUeXBlKSB7XG4gICAgICBzY29yZSArPSBwYWdlLnR5cGUgPT09IHRoaXMucGFnZVR5cGUgPyAxIDogLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2VUZW1wbGF0ZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50ZW1wbGF0ZSA9PT0gdGhpcy5wYWdlVGVtcGxhdGUgPyAxIDogLTE7XG4gICAgfVxuICAgIHJldHVybiBzY29yZTtcbiAgfVxufVxuIl19