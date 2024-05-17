import { ActivatedRouteSnapshot, CanActivateChild, CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("AUTH AAAAAAAAAAAa");
    if (this.authenticationService.isAuthenticated()) {
      return true;
    }

    const token = localStorage.getItem('token');
    if (token) {
      this.authenticationService.setToken(token);
      return true;
    } else {
      return false;
    }
  }
}
