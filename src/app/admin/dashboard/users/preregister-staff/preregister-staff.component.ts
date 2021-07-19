import { Component, OnInit, ViewChild } from '@angular/core';
import { Staff, AdminService } from '../../admin.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preregister-staff',
  templateUrl: './preregister-staff.component.html',
  styleUrls: ['./preregister-staff.component.scss'],
})
export class PreregisterStaffComponent implements OnInit {
  staff: Staff[] = [];
  displayedColumns: string[] = ['file_no', 'created_on'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private adminService: AdminService,
    private router : Router
  ) { }

  ngOnInit() {
    this.adminService.getPreregisteredStaff();
    this.adminService.getPregisterStaffListener()
      .subscribe(responseData => {
        this.staff = responseData;
        this.dataSource = new MatTableDataSource(this.staff);
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
