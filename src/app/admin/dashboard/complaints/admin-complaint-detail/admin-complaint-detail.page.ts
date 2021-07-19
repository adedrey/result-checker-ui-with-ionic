import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Complaint } from 'src/app/forum/complaints/complaints.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin-complaint-detail',
  templateUrl: './admin-complaint-detail.page.html',
  styleUrls: ['./admin-complaint-detail.page.scss'],
})
export class AdminComplaintDetailPage implements OnInit {
  complaint: Complaint;
  complaintId: string;
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
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
              this.adminService.getComplaint(this.complaintId)
                .subscribe(responseData => {
                  loadingEl.dismiss();
                  this.complaint = responseData.complaint;
                }, error => {
                  loadingEl.dismiss();
                  this.router.navigateByUrl('/admin/complaints');
                });
            });
        }
      }
    );
  }

}
