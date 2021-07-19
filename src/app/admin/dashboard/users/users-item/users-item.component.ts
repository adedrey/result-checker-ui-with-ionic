import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss'],
})
export class UsersItemComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'matric_no', 'course', 'yoe', 'moe', 'status', 'action'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private adminService: AdminService,
    private loadingCtrl: LoadingController,
    private router : Router
  ) { }

  ngOnInit() {
    this.adminService.getUsers();
    this.adminService.getUserStatusListener()
      .subscribe(responseData => {
        this.users = responseData;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateUserStatus(userId: string) {
    this.loadingCtrl.create({
      spinner: 'dots'
    })
    .then(loadingEl => {
      loadingEl.present();
      this.adminService.updateUserStatus(userId);
      loadingEl.dismiss();
    });
  }

  onDelete(userId: string) {
    this.loadingCtrl.create({
      spinner: 'dots'
    })
    .then(loadingEl => {
      loadingEl.present();
      this.adminService.deleteUser(userId);
      loadingEl.dismiss();
    });
  }
}
