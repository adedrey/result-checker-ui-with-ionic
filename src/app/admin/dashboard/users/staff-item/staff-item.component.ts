import { Component, OnInit, ViewChild } from '@angular/core';
import { Lecturer } from 'src/app/shared/lecturer.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AdminService } from '../../admin.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-item',
  templateUrl: './staff-item.component.html',
  styleUrls: ['./staff-item.component.scss'],
})
export class StaffItemComponent implements OnInit {
  lecturers: Lecturer[] = [];
  displayedColumns: string[] = ['name', 'staff_no', 'department', 'created_on', 'rank', 'status', 'action'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private adminService: AdminService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.adminService.getLecturers();
    this.adminService.getLecturerStatusListener()
      .subscribe(responseData => {
        this.lecturers = responseData;
        this.dataSource = new MatTableDataSource(this.lecturers);
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateLecturerStatus(lecturerId: string) {
    this.loadingCtrl.create({
      spinner: 'dots'
    })
    .then(loadingEl => {
      loadingEl.present();
      this.adminService.updateLecturerStatus(lecturerId);
      loadingEl.dismiss();
    });
  }

  onDelete(lecturerId: string) {
    this.loadingCtrl.create({
      spinner: 'dots'
    })
    .then(loadingEl => {
      loadingEl.present();
      this.adminService.deleteLecturer(lecturerId);
      loadingEl.dismiss();
    });
  }
}
