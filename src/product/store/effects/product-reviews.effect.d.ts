import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as productReviewsActions from './../actions/product-reviews.action';
import { OccProductService } from './../../occ/product.service';
export declare class ProductReviewsEffects {
    private actions$;
    private occProductService;
    loadProductReviews$: Observable<productReviewsActions.LoadProductReviewsSuccess | productReviewsActions.LoadProductReviewsFail>;
    postProductReview: Observable<productReviewsActions.PostProductReviewSuccess | productReviewsActions.PostProductReviewFail>;
    constructor(actions$: Actions, occProductService: OccProductService);
}
