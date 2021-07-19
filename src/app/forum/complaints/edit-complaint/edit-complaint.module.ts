import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditComplaintPageRoutingModule } from './edit-complaint-routing.module';

import { EditComplaintPage } from './edit-complaint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditComplaintPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditComplaintPage]
})
export class EditComplaintPageModule {}
