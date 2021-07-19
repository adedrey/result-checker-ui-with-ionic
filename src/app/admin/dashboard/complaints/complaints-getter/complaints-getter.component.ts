import { Component, OnInit, ViewChild } from '@angular/core';
import { ComplaintService } from 'src/app/forum/complaints/complaints.service';
import { Complaint } from 'src/app/forum/complaints/complaints.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AdminService } from '../../admin.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaints-getter',
  templateUrl: './complaints-getter.component.html',
  styleUrls: ['./complaints-getter.component.scss'],
})
export class ComplaintsGetterComponent implements OnInit {
  complaints: Complaint[] = [];
  displayedColumns : string[] = ['title', 'matric_no', 'status', 'action'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private adminService: AdminService,
    private loadingCtrl : LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.adminService.getComplaints();
    this.adminService.getComplaintStatusListener().subscribe(
      responseData => {
        this.complaints = responseData;
        this.dataSource = new MatTableDataSource(this.complaints);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  onUpdateStatus(complaintId: string) {
    this.loadingCtrl.create({ spinner: 'lines-small'})
    .then(loadingEl => {
      loadingEl.present();
      this.adminService.updateComplaintStatus(complaintId);
      loadingEl.dismiss();
    });
  }

  onDelete(complaintId: string) {
    this.loadingCtrl.create({ spinner: 'lines-small'})
    .then(loadingEl => {
      loadingEl.present();
      this.adminService.deleteComplaint(complaintId);
      loadingEl.dismiss();
    });
  }

  onView(complaintId: string) {
    this.router.navigateByUrl('/admin/complaints/' + complaintId);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter =  filterValue.trim().toLowerCase();
  }
}
