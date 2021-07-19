import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerAddAssignmentPageRoutingModule } from './lecturer-add-assignment-routing.module';

import { LecturerAddAssignmentPage } from './lecturer-add-assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerAddAssignmentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LecturerAddAssignmentPage]
})
export class LecturerAddAssignmentPageModule {}
