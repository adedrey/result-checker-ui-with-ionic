import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintsPageRoutingModule } from './complaints-routing.module';

import { ComplaintsPage } from './complaints.page';
import { ComplaintNewsModule } from 'src/app/shared/complaint-news.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintsPageRoutingModule,
    ComplaintNewsModule
  ],
  declarations: [
    ComplaintsPage
  ]
})
export class ComplaintsPageModule {}
