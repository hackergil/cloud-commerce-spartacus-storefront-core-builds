import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig } from '../config/auth-config';
import { AuthService } from '../facade/auth.service';
export declare class ClientTokenInterceptor implements HttpInterceptor {
    private config;
    private authService;
    baseReqString: string;
    constructor(config: AuthConfig, authService: AuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private getClientToken;
}
