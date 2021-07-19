import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private router: Router,
    private _location: Location,
  ) {
    if (this.authService.getAuthStatus()) {
      this.router.navigateByUrl('/forum');
    }
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.loginForm = new FormGroup({
      'matric_no': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.loadingController.create({
      spinner: 'dots',
      message: 'Logging in...'
    })
      .then(loadingEl => {
        loadingEl.present();
        this.authService.login(this.loginForm.value)
        .pipe(finalize(() => {
          loadingEl.dismiss();
        }))
        .subscribe(responseData => {
          this.loginForm.reset();
          this.router.navigateByUrl('/undergraduate/home');
        });
      })

  }

}
