import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssDetailPageRoutingModule } from './ass-detail-routing.module';

import { AssDetailPage } from './ass-detail.page';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AssDetailPage, SubmitAssignmentComponent],
  entryComponents: [SubmitAssignmentComponent]
})
export class AssDetailPageModule {}
