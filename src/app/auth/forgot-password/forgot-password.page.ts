import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  credentialsForm: FormGroup;

  constructor(
    private router: Router,
    private _location: Location,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.credentialsForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  onSubmit() {
    if (!this.credentialsForm.valid) {

      return;
    }
    this.loadingCtrl.create({ spinner: "dots" })
      .then(loadingEl => {
        loadingEl.present();
        this.authService.forgotPassword(this.credentialsForm.value.email)
          .subscribe(responseData => {
            loadingEl.dismiss();
            this.credentialsForm.reset();
            this.alertCtrl.create({
              header: "Success",
              message: responseData.message,
              buttons: ['OK']
            }).then(alertEl => {
              alertEl.present();
            });
          }, error => {
            loadingEl.dismiss();
          });
      });
  }
}
