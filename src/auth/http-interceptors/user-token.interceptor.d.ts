import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig } from '../config/auth-config';
import { AuthService } from '../facade/auth.service';
import { UserToken } from '../../auth/models/token-types.model';
export declare class UserTokenInterceptor implements HttpInterceptor {
    private config;
    private authService;
    userToken: UserToken;
    baseReqString: string;
    constructor(config: AuthConfig, authService: AuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
