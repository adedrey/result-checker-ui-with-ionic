import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerAssignmentsPageRoutingModule } from './lecturer-assignments-routing.module';

import { LecturerAssignmentsPage } from './lecturer-assignments.page';
import { ComplaintNewsModule } from 'src/app/shared/complaint-news.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerAssignmentsPageRoutingModule,
    ComplaintNewsModule
  ],
  declarations: [LecturerAssignmentsPage]
})
export class LecturerAssignmentsPageModule {}
