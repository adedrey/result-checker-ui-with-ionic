import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs'
import { StaffAuthService } from '../auth/staff.auth.service';

@Injectable({ providedIn: 'root' })
export class ResultGuard implements CanLoad {
  isAuth: boolean;
  constructor(private staffAuthService: StaffAuthService, private router: Router) {
    this.staffAuthService.checkStaffRole().subscribe(response => {
      this.isAuth = response.checked;
    });
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.isAuth)
    if (!this.isAuth) {
      return this.router.navigate(['/staff', 'assignments']);
    }
    return this.isAuth;
  }
}
