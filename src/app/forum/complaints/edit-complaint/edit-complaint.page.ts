import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComplaintService } from '../complaints.service';
import { ActivatedRoute, Params } from '@angular/router';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { Complaint } from '../complaints.model';

@Component({
  selector: 'app-edit-complaint',
  templateUrl: './edit-complaint.page.html',
  styleUrls: ['./edit-complaint.page.scss'],
})
export class EditComplaintPage implements OnInit {
  complaintForm: FormGroup;
  complaintId: string;
  complaint: Complaint;
  constructor(
    private complaintService: ComplaintService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.init();
    this.route.params.subscribe(
      (params: Params) => {
        if (params['complaintId']) {
          this.complaintId = params['complaintId'];
          this.loadingCtrl.create({ spinner: "dots" })
            .then(loadingEl => {
              loadingEl.present();
              this.complaintService.getComplaint(this.complaintId)
                .subscribe(responseData => {
                  loadingEl.dismiss();
                  this.complaint = responseData.complaint;
                  this.complaintForm.setValue({
                    case_type: this.complaint.case_type,
                    title: this.complaint.title,
                    body: this.complaint.body
                  });
                });
            });
        }
      }
    );
  }

  private init() {
    this.complaintForm = new FormGroup({
      'case_type': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'body': new FormControl(null, Validators.required)
    });
  }

  onUpdateComplaint() {
    if (!this.complaintForm.valid) {
      return;
    }
    if (this.complaint.status) {
      return this.alertCtrl.create({
        header: "Error",
        message: 'Sorry, your ticket has been process. Kindly open another ticket',
        buttons: ['Dismiss']
      }).then(alertEl => {
        alertEl.present();
      });
    }
    const case_type = this.complaintForm.value.case_type;
    const title = this.complaintForm.value.title;
    const body = this.complaintForm.value.body;
    this.loadingCtrl.create({ spinner: 'lines-small', message: "Sending your request..." })
      .then(loadingEl => {
        loadingEl.present();
        this.complaintService.updateComplaint(case_type, title, body, this.complaintId);
        loadingEl.dismiss();
        this.navCtrl.navigateBack(['/forum', 'tabs', 'complaints']);
      });
    this.complaintForm.reset();
  }

}
