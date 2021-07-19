import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { PreregisterAccountComponent } from './preregister-account/preregister-account.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private adminService: AdminService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  onAddUser() {
    this.modalCtrl.create({ component: PreregisterAccountComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData);
        if (resultData.role === 'confirm') {
          this.loadingCtrl.create({ spinner: 'lines-small', message: "Creating Accounts..." })
            .then(loadingEl => {
              loadingEl.present();
              const data = resultData.data.postData;
              const account = resultData.data.account_type;
              if (account === "Student") {
                this.adminService.preRegisterStudent(data)
                  .subscribe(responseData => {
                    loadingEl.dismiss();
                    this.alertMsg(responseData.message);
                  }, error => {
                    loadingEl.dismiss();
                  });
              } else {
                this.adminService.preRegisterStaff(data)
                  .subscribe(responseData => {
                    loadingEl.dismiss();
                    this.alertMsg(responseData.message);
                  }, error => {
                    loadingEl.dismiss();
                  });;
              }

            });
        }
      });
  }

  alertMsg(message) {
    this.alertCtrl.create({
      header: "Success",
      message: message,
      buttons: ['Okay']
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
