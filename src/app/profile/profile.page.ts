import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/users.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  signupForm: FormGroup;
  user: User;
  constructor(
    private alertCtrl: AlertController,
    private authService: AuthService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.init();
    this.loadingCtrl.create({ spinner: 'dots' })
      .then(loadingEl => {
        loadingEl.present();
        this.authService.getProfile()
          .subscribe(responseData => {
            loadingEl.dismiss();
            this.user = responseData.user;
            this.signupForm.setValue({
              password: null,
              newpassword: null
            });
          });
      });
  }

  private init() {
    this.signupForm = new FormGroup({
      'password': new FormControl(null),
      'newpassword': new FormControl(null, [Validators.minLength(8)]),
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    const password = this.signupForm.value.password;
    const newpassword = this.signupForm.value.newpassword;
    if (newpassword !== null && password === null) {
      return this.alertCtrl.create({
        header: "Error",
        message: 'Please fill the password field.',
        buttons: ['Dismiss']
      }).then(alertEl => {
        alertEl.present();
      });
    }
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
                this.authService.changeProfile(password, newpassword)
                  .subscribe(responseData => {
                    loadingEl.dismiss();
                    this.user = responseData.user;
                    this.signupForm.setValue({
                      password: null,
                      newpassword: null
                    });
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
