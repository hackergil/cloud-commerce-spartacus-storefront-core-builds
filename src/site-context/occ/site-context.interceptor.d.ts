import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
import { OccConfig } from '../../occ/config/occ-config';
export declare class SiteContextInterceptor implements HttpInterceptor {
    private languageService;
    private currencyService;
    private config;
    baseReqString: string;
    activeLang: string;
    activeCurr: string;
    constructor(languageService: LanguageService, currencyService: CurrencyService, config: OccConfig);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
