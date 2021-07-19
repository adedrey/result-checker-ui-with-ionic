import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm : FormGroup;
  constructor(private authService : AuthService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.signupForm = new FormGroup({
      'surname' : new FormControl(null, [Validators.required]),
      'firstname' : new FormControl(null, [Validators.required]),
      'course' : new FormControl(null, [Validators.required]),
      'matric_no' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    const surname = this.signupForm.value.surname;
    const firstname = this.signupForm.value.firstname;
    const course = this.signupForm.value.course;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const matric_no = this.signupForm.value.matric_no;
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
            this.authService.createUser(surname,firstname,course,email,password,matric_no);
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
