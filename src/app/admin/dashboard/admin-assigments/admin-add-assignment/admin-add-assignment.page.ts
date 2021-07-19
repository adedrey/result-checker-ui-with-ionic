import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AdminService } from '../../../dashboard/admin.service';

@Component({
  selector: 'app-admin-add-assignment',
  templateUrl: './admin-add-assignment.page.html',
  styleUrls: ['./admin-add-assignment.page.scss'],
})
export class AdminAddAssignmentPage implements OnInit {
  credentials: FormGroup;
  startDate: string;
  endDate: string;
  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private assignmentService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    const availableFrom = new Date();
    this.startDate = new Date(availableFrom.getTime() + 1 * 24 * 60 * 60 * 1000).toISOString();
    this.endDate = new Date(
      new Date(this.startDate).getTime()
      +
      0.8
      *
      (new Date(this.startDate).getTime() + 6 * 24 * 60 * 60 * 1000 - new Date(this.startDate).getTime())).toISOString();
    this.credentials = new FormGroup({
      department: new FormControl(null, [Validators.required]),
      course_code: new FormControl(null, [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      staff_no: new FormControl(null),
      question: new FormControl(null, [Validators.required]),
      submission_date: new FormControl(this.startDate, [Validators.required])
    });
  }

  onSubmit() {
    if (!this.credentials.valid) {
      return;
    }

    this.alertController.create({
      header: 'Confirm',
      message: 'Do you want to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Continue',
          handler: () => {
            this.loadingController.create({ spinner: 'lines-small', message: 'Setting up assignment...' })
              .then(loadingEl => {
                loadingEl.present()
                this.assignmentService.createAssignment(this.credentials.value);
                this.credentials.reset();
                loadingEl.dismiss();
              });
          }
        }
      ]
    })
      .then(loadingEl => {
        loadingEl.present();
      });

  }

}
