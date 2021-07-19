import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { Assignment } from 'src/app/shared/assignment.model';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-ass-detail',
  templateUrl: './ass-detail.page.html',
  styleUrls: ['./ass-detail.page.scss'],
})
export class AssDetailPage implements OnInit {
  assignment: Assignment;
  assignmentId: string;
  submitted: boolean = false;
  constructor(
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.assignmentService.getAssignments();
    this.route.params.subscribe(
      (params: Params) => {
        if (params['assignmentId']) {
          this.assignmentId = params['assignmentId'];
          this.loadingCtrl.create()
            .then(loadingEl => {
              loadingEl.present();
              this.assignmentService.getAssignmentById(this.assignmentId)
                .subscribe(responseData => {
                  loadingEl.dismiss();
                  this.assignment = responseData.assignment;
                });
            });
        }
      }
    );
  }

  onSubmitAnswer() {
    this.modalCtrl.create({ component: SubmitAssignmentComponent, componentProps: { selectedAssignment: this.assignment } })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData);
        if (resultData.role === 'confirm') {
          this.loadingCtrl.create({ spinner: 'lines-small', message: "Submitting Assignment..." })
            .then(loadingEl => {
              loadingEl.present();
              const data = resultData.data.postData;
              this.assignmentService.submitAssignment(data.assignmentId, data.attachment, data.attachmentString)
                .pipe(finalize(() => {
                  loadingEl.dismiss();
                }))
                .subscribe(responseData => {
                  this.alertCtrl.create({
                    header: "Success",
                    message: responseData.message,
                    buttons: ['Okay']
                  }).then(alertEl => {
                    alertEl.present();
                  });
                });
            });
        }
      });
  }

}
