import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../../../dashboard/admin.service';
import { Assignment } from 'src/app/shared/assignment.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin-assignment-detail',
  templateUrl: './admin-assignment-detail.page.html',
  styleUrls: ['./admin-assignment-detail.page.scss'],
})
export class AdminAssignmentDetailPage implements OnInit {
  assignment: Assignment;
  assignmentId: string;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['assignmentId']) {
          this.assignmentId = params['assignmentId'];
          this.loadingCtrl.create({spinner: 'dots'})
            .then(loadingEl => {
              loadingEl.present();
              this.adminService.getAssignmentById(this.assignmentId)
                .subscribe(responseData => {
                  loadingEl.dismiss();
                  this.assignment = responseData.assignment;
                }, error => {
                  loadingEl.dismiss();
                  this.router.navigateByUrl('/admin/assignments');
                });
            });
        }
      }
    );
  }
}
