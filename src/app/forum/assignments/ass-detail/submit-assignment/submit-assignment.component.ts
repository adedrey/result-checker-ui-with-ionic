import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Assignment } from '../../../../shared/assignment.model';

@Component({
  selector: 'app-submit-assignment',
  templateUrl: './submit-assignment.component.html',
  styleUrls: ['./submit-assignment.component.scss'],
})
export class SubmitAssignmentComponent implements OnInit {
  @Input() selectedAssignment: Assignment;
  answerForm: FormGroup;
  documentPreview: string;
  documentName: string;
  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.answerForm = new FormGroup({
      'attachment': new FormControl(null, Validators.required)
    })
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


  onSubmitAnswer() {
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
            this.modalCtrl.dismiss({
              postData: {
                assignmentId: this.selectedAssignment._id,
                attachment: this.answerForm.value.attachment,
                attachmentString: this.documentPreview
              }
            }, 'confirm');
          }
        }
      ]
    })
      .then(alertEl => {
        alertEl.present();
      });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
