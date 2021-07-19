import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../shared/assignment.model';
import { AssignmentService } from '../../shared/assignment.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {
  assignments: Assignment[] = [];
  constructor(
    private assignmentService: AssignmentService,
    private loadingCtrl: LoadingController
  ) {

  }

  ngOnInit() {
    this.assignmentService.getAssignments();
    this.loadingCtrl.create({ spinner: "lines-small" })
      .then(loadingEl => {
        this.assignmentService.getAssignmentChanged().subscribe(
          responseData => {
            loadingEl.present();
            this.assignments = responseData;
            loadingEl.dismiss();
          }
        );
      });
  }

  refresh() {
    this.loadingCtrl.create({ spinner: 'dots' })
      .then(loadingEl => {
        loadingEl.present();
        this.assignmentService.getAssignments();
        loadingEl.dismiss();
      });
  }

}
