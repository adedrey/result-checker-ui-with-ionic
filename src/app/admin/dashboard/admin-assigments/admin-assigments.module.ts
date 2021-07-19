import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAssigmentsPageRoutingModule } from './admin-assigments-routing.module';

import { AdminAssigmentsPage } from './admin-assigments.page';
import { ComplaintNewsModule } from '../../../shared/complaint-news.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAssigmentsPageRoutingModule,
    ComplaintNewsModule
  ],
  declarations: [AdminAssigmentsPage]
})
export class AdminAssigmentsPageModule {}
