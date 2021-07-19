import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ComplaintService } from '../complaints.service';
import { Complaint } from '../complaints.model';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.page.html',
  styleUrls: ['./complaint-detail.page.scss'],
})
export class ComplaintDetailPage implements OnInit {
  complaint: Complaint;
  complaintId: string;
  constructor(
    private route: ActivatedRoute,
    private complaintService: ComplaintService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
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
                }, error => {
                  loadingEl.dismiss();
                  this.router.navigateByUrl('/forum/tabs/complaints');
                });
            })
        }
      }
    );
  }

  // onDeleteComplaint(complaintId: string) {
  //   //
  //   // console.log(complaintId);
  //   this.alertCtrl.create({
  //     header: 'Confirm',
  //     message: 'Are you sure?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       },
  //       {
  //         text: 'Delete',
  //         handler: () => {
  //           this.loadingCtrl.create({ message: 'Deleting...' })
  //             .then(loadingEl => {
  //               loadingEl.present();
  //               this.complaintService.deleteComplaint(complaintId);
  //               loadingEl.dismiss();
  //             });
  //         }
  //       }
  //     ]
  //   }).then(alertEl => {
  //     alertEl.present();
  //   });

  // }

}
