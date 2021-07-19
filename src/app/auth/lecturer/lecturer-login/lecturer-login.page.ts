import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffAuthService } from '../../staff.auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-lecturer-login',
  templateUrl: './lecturer-login.page.html',
  styleUrls: ['./lecturer-login.page.scss'],
})
export class LecturerLoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private staffAuthService: StaffAuthService,
    private loadingController: LoadingController,
    private router: Router,
    private _location: Location,
  ) {
    if (this.staffAuthService.getStaffAuthStatus()) {
      this._location.back();
    }
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.loginForm = new FormGroup({
      'staff_no': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    const staff_no = this.loginForm.value.staff_no;
    const password = this.loginForm.value.password;
    this.loadingController.create({
      spinner: 'dots',
      message: 'Logging in...'
    })
      .then(loadingEl => {
        loadingEl.present();
        this.staffAuthService.login(staff_no, password)
        .pipe(finalize(() => {
          loadingEl.dismiss();
        }))
        .subscribe(responseData => {
          this.loginForm.reset();
          this.router.navigate(['/staff']);
        });
      })

  }

}
