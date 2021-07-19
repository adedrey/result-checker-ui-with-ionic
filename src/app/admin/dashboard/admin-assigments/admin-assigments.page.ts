import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin-assigments',
  templateUrl: './admin-assigments.page.html',
  styleUrls: ['./admin-assigments.page.scss'],
})
export class AdminAssigmentsPage implements OnInit {

  constructor(
    private adminService: AdminService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  refresh() {
    this.loadingCtrl.create({ spinner: 'dots' })
      .then(loadingEl => {
        loadingEl.present();
        this.adminService.getAssignments();
        loadingEl.dismiss();
      });
  }

}
