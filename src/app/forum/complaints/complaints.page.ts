import { Component, OnInit } from '@angular/core';
import { LoadingController, IonItemSliding, NavController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { ComplaintService } from './complaints.service';
import { Complaint } from './complaints.model';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {
  complaints: Complaint[] = [];
  loadedComplaints: Complaint[] = [];
  constructor(
    private loadingCtrl: LoadingController, 
    private complaintService: ComplaintService, 
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.complaintService.getComplaints();
    this.loadingCtrl.create({ spinner: "dots"})
      .then(loadingEl => {
        loadingEl.present();
        this.complaintService.getComplaintStatusListener().subscribe(
          complaints => {
            loadingEl.dismiss();
            this.complaints = complaints;
            this.loadedComplaints = this.complaints;
          }
        );
      });
  }

  onEditItem(complaintId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.navCtrl.navigateForward('/forum/tabs/complaints/edit/' + complaintId);
  }

  onFilter(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail.value)
    if (event.detail.value == "resolved") {
      this.loadedComplaints = this.complaints.filter(p => p.status === true);
    } else {
      this.loadedComplaints = this.complaints;
    }
  }

}
