import { Component, OnInit, ViewChild } from '@angular/core';
import { Assignment } from 'src/app/shared/assignment.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { LecturerService } from '../../lecturer.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lecturer-assignment-item',
  templateUrl: './lecturer-assignment-item.component.html',
  styleUrls: ['./lecturer-assignment-item.component.scss'],
})
export class LecturerAssignmentItemComponent implements OnInit {
  assignments: Assignment[] = [];
  displayedColumns: string[] = ['department', 'course_code', 'users', 'submission_date', 'posted', 'action'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private lecturerService: LecturerService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.lecturerService.getAssignments();
    this.lecturerService.getAssignmentChanged()
      .subscribe(responseData => {
        this.assignments = responseData;
        this.dataSource = new MatTableDataSource(this.assignments);
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onView(assignmentId: string) {
    this.router.navigateByUrl('/staff/assignments/' + assignmentId);
  }

  onDelete(assignmentId: string) {
    // ...
    this.loadingCtrl.create({ spinner: "dots" })
      .then(loadingEl => {
        loadingEl.present();
        this.lecturerService.deleteAssignment(assignmentId);
        loadingEl.dismiss();
      });
  }
}
