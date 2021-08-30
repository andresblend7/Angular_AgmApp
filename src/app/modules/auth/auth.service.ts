import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { HttpClient } from '@angular/common/http';

import {
  UserLogged,
  UserLogin,
  UserResponse,
} from './../../shared/models/user.interface';

import { catchError, map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { __LSStoreKey } from '@app/shared/Helpers/dictionaries';

const jwtHelper = new JwtHelperService();


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private $isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient) {
    this.checkToken();
  }

  //Obbervable Is Logged User
  get userIsLogged(): Observable<boolean> {
    return this.$isAuthenticated.asObservable();
  }

  logIn(oathData: UserLogin): Observable<UserLogged | null> {
    return this._http
      .post<UserLogged | null>(`${environment.API_URL}/Auth/AuthUser`, oathData)
      .pipe(
        map((res: UserLogged | null) => {
          if (res != null) {
            this.saveToken(JSON.stringify(res));
            res.isLogged = true;

            return res;
          } else {
            this.removeToken();
            return null;
          }
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  logOut() {
    this.$isAuthenticated.next(false);
    this.removeToken();
  }

  private checkToken() {
    const userToken = JSON.parse('' + localStorage.getItem(__LSStoreKey));
    if (userToken) {
      const isExpired = jwtHelper.isTokenExpired(userToken.token || undefined);

      const userIsLogged = !isExpired;
      console.log('IsLooged', userIsLogged);

      isExpired ? this.logOut() : this.$isAuthenticated.next(true);
    }
  }

  private removeToken() {
    localStorage.removeItem(__LSStoreKey);
  }

  private saveToken(token: string) {
    localStorage.setItem(__LSStoreKey, token);
    this.$isAuthenticated.next(true);
  }

  private handlerError(err: any): Observable<never> {
    console.error('error', err);

    let errorMessage = 'An errror ocurred 4HT';

    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }

    alert(errorMessage);

    return throwError(errorMessage);
  }
}
