import { Component, OnInit, ViewChild } from '@angular/core';
import { Student, AdminService } from '../../admin.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preregister-student',
  templateUrl: './preregister-student.component.html',
  styleUrls: ['./preregister-student.component.scss'],
})
export class PreregisterStudentComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = ['matric_no', 'created_on'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private adminService: AdminService,
    private router : Router
  ) { }

  ngOnInit() {
    this.adminService.getPreregisteredStudent();
    this.adminService.getPregisterStudentListener()
      .subscribe(responseData => {
        this.students = responseData;
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
