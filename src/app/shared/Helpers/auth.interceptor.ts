import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@app/modules/auth/auth.service';
import { __TOKEN_HEADER_KEY } from './dictionaries';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private _oauthSv: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._oauthSv.getToken();
    let authReq = request;

    console.log(token);

    if(token){
      authReq = request.clone({ setHeaders:{
                                 Authorization: `Bearer ${token}`
                              }});
    }

    return next.handle(authReq);
  }
}
