import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComplaintService } from '../complaints.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.page.html',
  styleUrls: ['./add-complaint.page.scss'],
})
export class AddComplaintPage implements OnInit {
  complaintForm: FormGroup;
  constructor(
    private complaintService: ComplaintService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.complaintForm = new FormGroup({
      'case_type': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'body': new FormControl(null, Validators.required)
    });
  }

  onCreateComplaint() {
    if (!this.complaintForm.valid) {
      return;
    }
    const case_type = this.complaintForm.value.case_type;
    const title = this.complaintForm.value.title;
    const body = this.complaintForm.value.body;
    this.loadingCtrl.create({ spinner: 'lines-small', message: "Sending your request..." })
      .then(loadingEl => {
        loadingEl.present();
        this.complaintService.createComplaint(case_type, title, body);
        loadingEl.dismiss();
        this.navCtrl.navigateBack(['/forum', 'tabs', 'complaints']);
      });
    this.complaintForm.reset();
  }
}
