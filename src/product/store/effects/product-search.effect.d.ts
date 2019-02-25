import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as productsSearchActions from '../actions/product-search.action';
import { ProductImageConverterService } from '../converters/product-image-converter.service';
import { OccProductSearchService } from '../../occ/product-search.service';
export declare class ProductsSearchEffects {
    private actions$;
    private occProductSearchService;
    private productImageConverter;
    searchProducts$: Observable<productsSearchActions.SearchProductsSuccess | productsSearchActions.SearchProductsFail>;
    getProductSuggestions$: Observable<productsSearchActions.GetProductSuggestionsSuccess | productsSearchActions.GetProductSuggestionsFail>;
    constructor(actions$: Actions, occProductSearchService: OccProductSearchService, productImageConverter: ProductImageConverterService);
}
