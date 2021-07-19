import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/shared/assignment.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LecturerService } from '../../lecturer.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lecturer-assignment-detail',
  templateUrl: './lecturer-assignment-detail.page.html',
  styleUrls: ['./lecturer-assignment-detail.page.scss'],
})
export class LecturerAssignmentDetailPage implements OnInit {
  assignment: Assignment;
  assignmentId: string;
  constructor(
    private route: ActivatedRoute,
    private lecturerService: LecturerService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['assignmentId']) {
          this.assignmentId = params['assignmentId'];
          this.loadingCtrl.create()
            .then(loadingEl => {
              loadingEl.present();
              this.lecturerService.getAssignmentById(this.assignmentId)
                .subscribe(responseData => {
                  loadingEl.dismiss();
                  this.assignment = responseData.assignment;
                }, error => {
                  loadingEl.dismiss();
                  this.router.navigateByUrl('/staff/assignments');
                });
            });
        }
      }
    );
  }
}
