import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StaffAuthService } from '../../staff.auth.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  token: string;
  lecturerId: string;
  credentialsForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private staffAuthService: StaffAuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit(): void {
    this.init();
    this.route.params.subscribe(
      (params: Params) => {
        if (params['token']) {
          this.token = params['token'];
          this.loadingCtrl.create()
            .then(loadingEl => {
              loadingEl.present();
              this.staffAuthService.getResetPassword(this.token)
                .subscribe(responseData => {
                  loadingEl.dismiss();
                  this.lecturerId = responseData.lecturerId;
                }, error => {
                  loadingEl.dismiss();
                  this.router.navigateByUrl('/');
                });
            });
        }
      }
    );
  }

  private init() {
    this.credentialsForm = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (!this.credentialsForm.valid) {
      return;
    }
    if (this.credentialsForm.value.password !== this.credentialsForm.value.confirmpassword) {
      return this.alertCtrl.create({
        header: "Success",
        message: 'Fields does not match!',
        buttons: ['OK']
      }).then(alertEl => {
        alertEl.present();
      });
    }
    const password = this.credentialsForm.value.password;
    const confirmpassword = this.credentialsForm.value.confirmpassword;
    this.loadingCtrl.create({ spinner: "dots" })
      .then(loadingEl => {
        loadingEl.present();
        this.staffAuthService.postResetPassword(password, confirmpassword, this.token, this.lecturerId)
          .subscribe(responseData => {
            loadingEl.dismiss();
            this.credentialsForm.reset();
            this.alertCtrl.create({
              header: "Success",
              message: responseData.message,
              buttons: ['OK']
            }).then(alertEl => {
              alertEl.present();
              this.router.navigateByUrl('/staff/login');
            });
          }, error => {
            loadingEl.dismiss();
          });
      });
  }

}
