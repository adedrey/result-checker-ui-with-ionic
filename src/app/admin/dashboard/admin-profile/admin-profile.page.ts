import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.page.html',
  styleUrls: ['./admin-profile.page.scss'],
})
export class AdminProfilePage implements OnInit {
  signupForm: FormGroup;
  constructor(
    private alertCtrl: AlertController,
    private adminAuthService: AdminAuthService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.signupForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      newpassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    const password = this.signupForm.value.password;
    const newpassword = this.signupForm.value.newpassword;
    this.alertCtrl.create({
      header: "Confirm!",
      message: "Do you want to continue?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Continue',
          handler: () => {
            this.loadingCtrl.create({ spinner: "dots" })
              .then(loadingEl => {
                loadingEl.present();
                this.signupForm.reset();
                this.adminAuthService.changeProfile(password, newpassword)
                  .subscribe(responseData => {
                    loadingEl.dismiss();
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
      ]
    })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
