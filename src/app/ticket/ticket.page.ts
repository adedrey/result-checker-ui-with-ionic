import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComplaintService } from '../forum/complaints/complaints.service';
import { LoadingController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {
  complaintForm: FormGroup;
  constructor(
    private complaintService: ComplaintService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController
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
        this.complaintService.openTicket(case_type, title, body)
          .subscribe(responseData => {
            loadingEl.dismiss();
            this.alertCtrl.create({
              header: "Success",
              message: responseData.message,
              buttons: ['OK']
            }).then(alertEl => {
              alertEl.present();
              this.complaintForm.reset();
              this.navCtrl.navigateBack(['/forum', 'tabs', 'complaints']);
            });
          }, error => {
            loadingEl.dismiss();
          });
      });
  }
}
