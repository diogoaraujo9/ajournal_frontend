import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(public _router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('access_token')) {
            return true;
        }
    
        this._router.navigate(['login']);
        return false;
    }
}