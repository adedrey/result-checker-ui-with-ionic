import { Component, OnInit, ViewChild } from '@angular/core';
import { Assignment } from '../../../../shared/assignment.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AdminService } from '../../../dashboard/admin.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin-assignments-item',
  templateUrl: './admin-assignments-item.component.html',
  styleUrls: ['./admin-assignments-item.component.scss'],
})
export class AdminAssignmentsItemComponent implements OnInit {
  assignments: Assignment[] = [];
  displayedColumns: string[] = ['department', 'course_code', 'staff_no', 'users', 'submission_date', 'posted', 'action'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.adminService.getAssignments();
    this.adminService.getAssignmentChanged()
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
    this.router.navigateByUrl('/admin/assignments/' + assignmentId);
  }

  onDelete(assignmentId: string) {
    // ...
    this.loadingCtrl.create({ spinner: "dots" })
      .then(loadingEl => {
        loadingEl.present();
        this.adminService.deleteAssignment(assignmentId);
        loadingEl.dismiss();
      });
  }

}
