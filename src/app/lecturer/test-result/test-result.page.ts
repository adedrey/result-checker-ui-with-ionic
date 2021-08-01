import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

import { finalize } from 'rxjs/operators';
import { LecturerService } from '../lecturer.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.page.html',
  styleUrls: ['./test-result.page.scss'],
})
export class TestResultPage implements OnInit {
  answerForm: FormGroup;
  documentPreview: string;
  documentName: string;
  
  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private lecturerService: LecturerService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.answerForm = new FormGroup({
      'course_code': new FormControl(null, Validators.required),
      'result_type': new FormControl(null, Validators.required),
      'session': new FormControl(null, Validators.required),
      'semester': new FormControl(null, Validators.required),
      'attachment': new FormControl(null, Validators.required)
    });
  }

  onDocumentPicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.documentName = file.name;
    this.answerForm.patchValue({ attachment: file });
    this.answerForm.get('attachment').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.documentPreview = (reader.result as string);
      // console.log(this.documentPreview);
    }
    reader.readAsDataURL(file);
  }


  onSubmitResult() {
    if (!this.answerForm.valid) {
      return;
    }
    this.alertCtrl.create({
      header: 'Confirm',
      message: 'Do you want to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Continue',
          handler: () => {
            this.loadingCtrl.create({ spinner: 'lines-small', message: "Uploading Result..." })
              .then(loadingEl => {
                loadingEl.present();
                const document = this.answerForm.value.attachment;
                const course_code = this.answerForm.value.course_code;
                const result_type = this.answerForm.value.result_type;
                const session = this.answerForm.value.session;
                const semester = this.answerForm.value.semester;
                this.lecturerService.uploadTestResult(document, course_code, result_type, session, semester)
                  .pipe(finalize(() => {
                    loadingEl.dismiss();
                  }))
                  .subscribe(responseData => {
                    // this.answerForm.reset();
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
        }
      ]
    })
      .then(alertEl => {
        alertEl.present();
      });
  }

  onCancel() {
    this.router.navigateByUrl('/staff/assignments')
  }

}
