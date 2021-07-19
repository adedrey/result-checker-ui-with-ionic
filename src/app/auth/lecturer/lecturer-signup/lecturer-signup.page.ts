import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffAuthService } from '../../staff.auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lecturer-signup',
  templateUrl: './lecturer-signup.page.html',
  styleUrls: ['./lecturer-signup.page.scss'],
})
export class LecturerSignupPage implements OnInit {
  signupForm : FormGroup;
  constructor(private staffAuthService : StaffAuthService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.signupForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'rank' : new FormControl(null, [Validators.required]),
      'department' : new FormControl(null, [Validators.required]),
      'file_no' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    const name = this.signupForm.value.name;
    const rank = this.signupForm.value.rank;
    const department = this.signupForm.value.department;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const file_no = this.signupForm.value.file_no;
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
            this.staffAuthService.createUser(name,rank,department,email,password,file_no);
            this.signupForm.reset();
          }
        }
      ]
    })
    .then(alertEl => {
      alertEl.present();
    });
  }
}
