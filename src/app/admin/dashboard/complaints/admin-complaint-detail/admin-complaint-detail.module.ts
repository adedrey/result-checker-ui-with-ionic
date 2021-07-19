import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminComplaintDetailPageRoutingModule } from './admin-complaint-detail-routing.module';

import { AdminComplaintDetailPage } from './admin-complaint-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminComplaintDetailPageRoutingModule
  ],
  declarations: [AdminComplaintDetailPage]
})
export class AdminComplaintDetailPageModule {}
