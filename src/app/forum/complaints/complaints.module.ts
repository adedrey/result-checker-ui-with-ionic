import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintsPageRoutingModule } from './complaints-routing.module';

import { ComplaintsPage } from './complaints.page';
import { ComplaintItemComponent } from './complaint-item/complaint-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintsPageRoutingModule
  ],
  declarations: [ComplaintsPage, ComplaintItemComponent]
})
export class ComplaintsPageModule {}
