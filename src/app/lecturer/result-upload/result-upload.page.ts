import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LecturerService } from '../lecturer.service';
import { finalize } from 'rxjs/operators';
import { StaffAuthService } from 'src/app/auth/staff.auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-upload',
  templateUrl: './result-upload.page.html',
  styleUrls: ['./result-upload.page.scss'],
})
export class ResultUploadPage implements OnInit {
  answerForm: FormGroup;
  documentPreview: string;
  documentName: string;
  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private lecturerService: LecturerService,
    private staffAuthService: StaffAuthService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.answerForm = new FormGroup({
      'course_code': new FormControl(null, Validators.required),
      'session': new FormControl(null, Validators.required),
      'semester': new FormControl(null, Validators.required),
      'attachment': new FormControl(null, Validators.required)
    });
  }

  ionViewWillEnter() {
    this.staffAuthService.checkStaffRole().subscribe(response => {
      if (!response.checked) {
        return this.router.navigate(['/staff']);
      }
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
                const session = this.answerForm.value.session;
                const semester = this.answerForm.value.semester;
                this.lecturerService.uploadResult(document, course_code, session, semester)
                  .pipe(finalize(() => {
                    loadingEl.dismiss();
                  }))
                  .subscribe(responseData => {
                    // this.answerForm.reset();
                    this.answerForm.reset({attachment: ''});

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
