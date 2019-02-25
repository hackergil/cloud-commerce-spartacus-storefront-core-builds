import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
export declare class RouterEffects {
    private actions$;
    private router;
    private location;
    navigate$: Observable<any>;
    navigateBuUrl$: Observable<any>;
    navigateBack$: Observable<Action>;
    navigateForward$: Observable<Action>;
    constructor(actions$: Actions, router: Router, location: Location);
}
