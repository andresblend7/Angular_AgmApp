import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@app/modules/auth/auth.service';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private _oauthSvc : AuthService){}

  canActivate( _routeSS: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    console.log('GUARDD', state.url);

    return this._oauthSvc.userIsLogged.pipe(
      take(1),
      map((isLogged)=> {

        if(isLogged) return true; else {
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    );
  }

}
