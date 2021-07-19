import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';
import { AdminAuthService } from './auth/admin.auth.service';
import { MenuService } from './menu.service';
import { StaffAuthService } from './auth/staff.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  nav: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService : AuthService,
    private adminAuthService: AdminAuthService,
    private staffAuthService: StaffAuthService,
    private menuService: MenuService
  ) {
    this.initializeApp();
    this.authService.autoAuthUser();
    this.adminAuthService.autoAuthAdmin();
    this.staffAuthService.autoAuthStaff();
    this.menuService.getUserOptionStatus()
    .subscribe(responseData => {
      this.nav = responseData;
    })
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onLogoutUser() {
    this.authService.logout();
  }

  onLogoutAdmin() {
    this.adminAuthService.logout();
  }

  onLogoutStaff() {
    this.staffAuthService.logout()
  }
}
