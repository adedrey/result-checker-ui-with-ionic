
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StaffAuthService } from './staff.auth.service';

@Injectable({providedIn: 'root'})
export class StaffAuthGuard implements CanActivate {
  constructor(private staffAuthService : StaffAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.staffAuthService.getStaffAuthStatus();
    if(!isAuth) {
      return this.router.navigate(['/staff', 'login']);
    }
    return isAuth;
  }
}

