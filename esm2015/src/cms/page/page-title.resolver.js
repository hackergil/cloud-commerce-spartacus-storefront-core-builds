/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class PageTitleResolver {
    /**
     * @param {?} page
     * @return {?}
     */
    getScore(page) {
        /** @type {?} */
        let score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        return score;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aXRsZS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvcGFnZS9wYWdlLXRpdGxlLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxNQUFNLE9BQWdCLGlCQUFpQjs7Ozs7SUFNckMsUUFBUSxDQUFDLElBQVU7O1lBQ2IsS0FBSyxHQUFHLENBQUM7UUFFYixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7OztJQWhCQyxxQ0FBbUI7O0lBQ25CLHlDQUFxQjs7Ozs7SUFFckIsc0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9vY2MnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnZVRpdGxlUmVzb2x2ZXIge1xuICBwYWdlVHlwZTogUGFnZVR5cGU7XG4gIHBhZ2VUZW1wbGF0ZTogc3RyaW5nO1xuXG4gIGFic3RyYWN0IHJlc29sdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGdldFNjb3JlKHBhZ2U6IFBhZ2UpOiBudW1iZXIge1xuICAgIGxldCBzY29yZSA9IDA7XG5cbiAgICBpZiAodGhpcy5wYWdlVHlwZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50eXBlID09PSB0aGlzLnBhZ2VUeXBlID8gMSA6IC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdlVGVtcGxhdGUpIHtcbiAgICAgIHNjb3JlICs9IHBhZ2UudGVtcGxhdGUgPT09IHRoaXMucGFnZVRlbXBsYXRlID8gMSA6IC0xO1xuICAgIH1cbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cbn1cbiJdfQ==