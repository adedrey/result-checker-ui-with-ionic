import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-preregister-account',
  templateUrl: './preregister-account.component.html',
  styleUrls: ['./preregister-account.component.scss'],
})
export class PreregisterAccountComponent implements OnInit {
  registerForm: FormGroup;
  documentPreview: string;
  documentName: string;
  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'attachment': new FormControl(null, [Validators.required]),
      'account_type': new FormControl(null, [Validators.required])
    });
  }
  onDocumentPicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.documentName = file.name;
    this.registerForm.patchValue({ attachment: file });
    this.registerForm.get('attachment').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.documentPreview = (reader.result as string);
      // console.log(this.documentPreview);
    }
    reader.readAsDataURL(file);
  }
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onAddUser() {
    if (!this.registerForm.valid) {
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
              postData: this.registerForm.value.attachment,
              account_type: this.registerForm.value.account_type
            }, 'confirm');
          }
        }
      ]
    })
      .then(alertEl => {
        alertEl.present();
      });
  }

}
