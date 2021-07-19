import { Component, OnInit } from '@angular/core';
import { LecturerService } from '../lecturer.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lecturer-assignments',
  templateUrl: './lecturer-assignments.page.html',
  styleUrls: ['./lecturer-assignments.page.scss'],
})
export class LecturerAssignmentsPage implements OnInit {

  constructor(
    private lecturerService: LecturerService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  refresh() {
    this.loadingCtrl.create({ spinner: 'dots' })
      .then(loadingEl => {
        loadingEl.present();
        this.lecturerService.getAssignments();
        loadingEl.dismiss();
      });
  }


}
