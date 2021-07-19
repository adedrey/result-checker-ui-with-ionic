import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerAssignmentDetailPageRoutingModule } from './lecturer-assignment-detail-routing.module';

import { LecturerAssignmentDetailPage } from './lecturer-assignment-detail.page';
import { ComplaintNewsModule } from 'src/app/shared/complaint-news.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerAssignmentDetailPageRoutingModule,
    ComplaintNewsModule
  ],
  declarations: [LecturerAssignmentDetailPage]
})
export class LecturerAssignmentDetailPageModule {}
