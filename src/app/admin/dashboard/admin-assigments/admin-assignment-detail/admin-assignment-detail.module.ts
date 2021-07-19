import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAssignmentDetailPageRoutingModule } from './admin-assignment-detail-routing.module';

import { AdminAssignmentDetailPage } from './admin-assignment-detail.page';
import { ComplaintNewsModule } from 'src/app/shared/complaint-news.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAssignmentDetailPageRoutingModule,
    ComplaintNewsModule
  ],
  declarations: [AdminAssignmentDetailPage]
})
export class AdminAssignmentDetailPageModule {}
