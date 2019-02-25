/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID } from '../providers/context-service-map';
/**
 * @return {?}
 */
export function defaultSiteContextConfigFactory() {
    var _a;
    return {
        siteContext: {
            parameters: (_a = {},
                _a[LANGUAGE_CONTEXT_ID] = {
                    persistence: 'route',
                    defaultValue: 'en',
                    values: ['en', 'de', 'ja', 'zh']
                },
                _a[CURRENCY_CONTEXT_ID] = {
                    persistence: 'route',
                    defaultValue: 'USD',
                    values: ['USD', 'JPY']
                },
                _a),
            urlEncodingParameters: [LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID]
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9jb25maWcvZGVmYXVsdC1zaXRlLWNvbnRleHQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNwQixNQUFNLGtDQUFrQyxDQUFDOzs7O0FBRTFDLE1BQU0sVUFBVSwrQkFBK0I7O0lBQzdDLE9BQU87UUFDTCxXQUFXLEVBQUU7WUFDWCxVQUFVO2dCQUNSLEdBQUMsbUJBQW1CLElBQUc7b0JBQ3JCLFdBQVcsRUFBRSxPQUFPO29CQUNwQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxHQUFDLG1CQUFtQixJQUFHO29CQUNyQixXQUFXLEVBQUUsT0FBTztvQkFDcEIsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7aUJBQ3ZCO21CQUNGO1lBQ0QscUJBQXFCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQztTQUNsRTtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHtcbiAgQ1VSUkVOQ1lfQ09OVEVYVF9JRCxcbiAgTEFOR1VBR0VfQ09OVEVYVF9JRFxufSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5KCk6IFNpdGVDb250ZXh0Q29uZmlnIHtcbiAgcmV0dXJuIHtcbiAgICBzaXRlQ29udGV4dDoge1xuICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICBbTEFOR1VBR0VfQ09OVEVYVF9JRF06IHtcbiAgICAgICAgICBwZXJzaXN0ZW5jZTogJ3JvdXRlJyxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdlbicsXG4gICAgICAgICAgdmFsdWVzOiBbJ2VuJywgJ2RlJywgJ2phJywgJ3poJ11cbiAgICAgICAgfSxcbiAgICAgICAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiB7XG4gICAgICAgICAgcGVyc2lzdGVuY2U6ICdyb3V0ZScsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiAnVVNEJyxcbiAgICAgICAgICB2YWx1ZXM6IFsnVVNEJywgJ0pQWSddXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cmxFbmNvZGluZ1BhcmFtZXRlcnM6IFtMQU5HVUFHRV9DT05URVhUX0lELCBDVVJSRU5DWV9DT05URVhUX0lEXVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==