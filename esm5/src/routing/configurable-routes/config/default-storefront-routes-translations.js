/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultStorefrontRoutesTranslations = {
    default: {
        home: { paths: ['', 'cx-preview'] },
        cart: { paths: ['cart'] },
        search: { paths: ['search/:query'] },
        login: { paths: ['login'] },
        register: { paths: ['register'] },
        resetPassword: { paths: ['reset-new-password/:token'] },
        forgotPassword: { paths: ['reset-password'] },
        checkout: { paths: ['checkout'] },
        orderConfirmation: { paths: ['order-confirmation'] },
        product: {
            paths: ['product/:productCode'],
            paramsMapping: { productCode: 'code' }
        },
        category: {
            paths: ['category/:categoryCode'],
            paramsMapping: { categoryCode: 'code' }
        },
        brand: { paths: ['Brands/:brandName/c/:brandCode'] },
        storeFinder: {
            paths: ['store-finder'],
            children: {
                searchResults: { paths: ['find-stores'] },
                allStores: { paths: ['view-all-stores'] },
                listStores: {
                    paths: ['country/:country/region/:region', 'country/:country']
                },
                storeDescription: {
                    paths: ['country/:country/region/:region/:store']
                }
            }
        },
        termsAndConditions: { paths: ['terms-and-conditions'] },
        contact: { paths: ['contact'] },
        help: { paths: ['faq'] },
        sale: { paths: ['sale'] },
        orders: { paths: ['my-account/orders'] },
        orderDetails: {
            paths: ['my-account/orders/:orderCode'],
            paramsMapping: { orderCode: 'code' }
        },
        addressBook: { paths: ['my-account/address-book'] },
        paymentManagement: { paths: ['my-account/payment-details'] },
        pageNotFound: { paths: ['**'] }
    },
    en: (/** @type {?} */ ({}))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zdG9yZWZyb250LXJvdXRlcy10cmFuc2xhdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZy9kZWZhdWx0LXN0b3JlZnJvbnQtcm91dGVzLXRyYW5zbGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBTyxtQ0FBbUMsR0FHNUM7SUFDRixPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUU7UUFDbkMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekIsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUU7UUFDcEMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDM0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRTtRQUN2RCxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1FBQzdDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRTtRQUNwRCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUMvQixhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO1NBQ3ZDO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDakMsYUFBYSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtTQUN4QztRQUNELEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGdDQUFnQyxDQUFDLEVBQUU7UUFDcEQsV0FBVyxFQUFFO1lBQ1gsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ3ZCLFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDekMsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDekMsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxDQUFDLGlDQUFpQyxFQUFFLGtCQUFrQixDQUFDO2lCQUMvRDtnQkFDRCxnQkFBZ0IsRUFBRTtvQkFDaEIsS0FBSyxFQUFFLENBQUMsd0NBQXdDLENBQUM7aUJBQ2xEO2FBQ0Y7U0FDRjtRQUNELGtCQUFrQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRTtRQUN2RCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUMvQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN6QixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQ3hDLFlBQVksRUFBRTtZQUNaLEtBQUssRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQ3ZDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7U0FDckM7UUFDRCxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1FBQ25ELGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsNEJBQTRCLENBQUMsRUFBRTtRQUM1RCxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtLQUNoQztJQUVELEVBQUUsRUFBRSxtQkFBQSxFQUFFLEVBQU87Q0FDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlZnJvbnRSb3V0ZXNUcmFuc2xhdGlvbnMgfSBmcm9tICcuL3N0b3JlZnJvbnQtcm91dGVzLXRyYW5zbGF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvcmVmcm9udFJvdXRlc1RyYW5zbGF0aW9uczoge1xuICBkZWZhdWx0PzogU3RvcmVmcm9udFJvdXRlc1RyYW5zbGF0aW9ucztcbiAgW2xhbmd1YWdlQ29kZTogc3RyaW5nXTogU3RvcmVmcm9udFJvdXRlc1RyYW5zbGF0aW9ucztcbn0gPSB7XG4gIGRlZmF1bHQ6IHtcbiAgICBob21lOiB7IHBhdGhzOiBbJycsICdjeC1wcmV2aWV3J10gfSxcbiAgICBjYXJ0OiB7IHBhdGhzOiBbJ2NhcnQnXSB9LFxuICAgIHNlYXJjaDogeyBwYXRoczogWydzZWFyY2gvOnF1ZXJ5J10gfSxcbiAgICBsb2dpbjogeyBwYXRoczogWydsb2dpbiddIH0sXG4gICAgcmVnaXN0ZXI6IHsgcGF0aHM6IFsncmVnaXN0ZXInXSB9LFxuICAgIHJlc2V0UGFzc3dvcmQ6IHsgcGF0aHM6IFsncmVzZXQtbmV3LXBhc3N3b3JkLzp0b2tlbiddIH0sXG4gICAgZm9yZ290UGFzc3dvcmQ6IHsgcGF0aHM6IFsncmVzZXQtcGFzc3dvcmQnXSB9LFxuICAgIGNoZWNrb3V0OiB7IHBhdGhzOiBbJ2NoZWNrb3V0J10gfSxcbiAgICBvcmRlckNvbmZpcm1hdGlvbjogeyBwYXRoczogWydvcmRlci1jb25maXJtYXRpb24nXSB9LFxuICAgIHByb2R1Y3Q6IHtcbiAgICAgIHBhdGhzOiBbJ3Byb2R1Y3QvOnByb2R1Y3RDb2RlJ10sXG4gICAgICBwYXJhbXNNYXBwaW5nOiB7IHByb2R1Y3RDb2RlOiAnY29kZScgfVxuICAgIH0sXG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgIHBhdGhzOiBbJ2NhdGVnb3J5LzpjYXRlZ29yeUNvZGUnXSxcbiAgICAgIHBhcmFtc01hcHBpbmc6IHsgY2F0ZWdvcnlDb2RlOiAnY29kZScgfVxuICAgIH0sXG4gICAgYnJhbmQ6IHsgcGF0aHM6IFsnQnJhbmRzLzpicmFuZE5hbWUvYy86YnJhbmRDb2RlJ10gfSxcbiAgICBzdG9yZUZpbmRlcjoge1xuICAgICAgcGF0aHM6IFsnc3RvcmUtZmluZGVyJ10sXG4gICAgICBjaGlsZHJlbjoge1xuICAgICAgICBzZWFyY2hSZXN1bHRzOiB7IHBhdGhzOiBbJ2ZpbmQtc3RvcmVzJ10gfSxcbiAgICAgICAgYWxsU3RvcmVzOiB7IHBhdGhzOiBbJ3ZpZXctYWxsLXN0b3JlcyddIH0sXG4gICAgICAgIGxpc3RTdG9yZXM6IHtcbiAgICAgICAgICBwYXRoczogWydjb3VudHJ5Lzpjb3VudHJ5L3JlZ2lvbi86cmVnaW9uJywgJ2NvdW50cnkvOmNvdW50cnknXVxuICAgICAgICB9LFxuICAgICAgICBzdG9yZURlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgcGF0aHM6IFsnY291bnRyeS86Y291bnRyeS9yZWdpb24vOnJlZ2lvbi86c3RvcmUnXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0ZXJtc0FuZENvbmRpdGlvbnM6IHsgcGF0aHM6IFsndGVybXMtYW5kLWNvbmRpdGlvbnMnXSB9LFxuICAgIGNvbnRhY3Q6IHsgcGF0aHM6IFsnY29udGFjdCddIH0sXG4gICAgaGVscDogeyBwYXRoczogWydmYXEnXSB9LFxuICAgIHNhbGU6IHsgcGF0aHM6IFsnc2FsZSddIH0sXG4gICAgb3JkZXJzOiB7IHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXJzJ10gfSxcbiAgICBvcmRlckRldGFpbHM6IHtcbiAgICAgIHBhdGhzOiBbJ215LWFjY291bnQvb3JkZXJzLzpvcmRlckNvZGUnXSxcbiAgICAgIHBhcmFtc01hcHBpbmc6IHsgb3JkZXJDb2RlOiAnY29kZScgfVxuICAgIH0sXG4gICAgYWRkcmVzc0Jvb2s6IHsgcGF0aHM6IFsnbXktYWNjb3VudC9hZGRyZXNzLWJvb2snXSB9LFxuICAgIHBheW1lbnRNYW5hZ2VtZW50OiB7IHBhdGhzOiBbJ215LWFjY291bnQvcGF5bWVudC1kZXRhaWxzJ10gfSxcbiAgICBwYWdlTm90Rm91bmQ6IHsgcGF0aHM6IFsnKionXSB9XG4gIH0sXG5cbiAgZW46IHt9IGFzIGFueVxufTtcbiJdfQ==