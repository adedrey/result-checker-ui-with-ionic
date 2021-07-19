import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAddAssignmentPageRoutingModule } from './admin-add-assignment-routing.module';

import { AdminAddAssignmentPage } from './admin-add-assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAddAssignmentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminAddAssignmentPage]
})
export class AdminAddAssignmentPageModule {}
