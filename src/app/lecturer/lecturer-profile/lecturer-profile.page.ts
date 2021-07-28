import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { StaffAuthService } from 'src/app/auth/staff.auth.service';
import { Lecturer } from '../../shared/lecturer.model';

@Component({
  selector: 'app-lecturer-profile',
  templateUrl: './lecturer-profile.page.html',
  styleUrls: ['./lecturer-profile.page.scss'],
})
export class LecturerProfilePage implements OnInit {
  signupForm: FormGroup;
  lecturer: Lecturer;
  constructor(
    private alertCtrl: AlertController,
    private staffAuthService: StaffAuthService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.init();
    this.loadingCtrl.create({ spinner: 'dots' })
      .then(loadingEl => {
        loadingEl.present();
        this.staffAuthService.getProfile()
          .subscribe(responseData => {
            loadingEl.dismiss();
            this.lecturer = responseData.lecturer;
            console.log(responseData.lecturer)
            this.signupForm.setValue({
              name: this.lecturer.name,
              rank: this.lecturer.rank,
              department: this.lecturer.department,
              password: null,
              newpassword: null
            });
          });
      });
  }

  private init() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'rank': new FormControl(null, [Validators.required]),
      'department': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.minLength(8)]),
      'newpassword': new FormControl(null, [Validators.minLength(8)]),
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    const name = this.signupForm.value.name;
    const rank = this.signupForm.value.rank;
    const department = this.signupForm.value.department;
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
                this.staffAuthService.changeProfile(name, rank, department, password, newpassword)
                  .subscribe(responseData => {
                    loadingEl.dismiss();
                    this.lecturer = responseData.lecturer;
                    this.signupForm.setValue({
                      name: this.lecturer.name,
                      rank: this.lecturer.rank,
                      department: this.lecturer.department,
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
