import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminAuthService } from '../../admin.auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private adminAuthService: AdminAuthService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private _location: Location,
  ) {
    if (this.adminAuthService.getAdminAuthStatus()) {
      this._location.back();
    }
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.loadingCtrl.create({
      spinner: 'dots',
      message: 'Logging in...'
    })
      .then(loadingEl => {
        loadingEl.present();
        this.adminAuthService.login(username, password);
        loadingEl.dismiss();
      });

  }
}
