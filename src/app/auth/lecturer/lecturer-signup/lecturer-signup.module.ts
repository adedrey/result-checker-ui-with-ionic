import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerSignupPageRoutingModule } from './lecturer-signup-routing.module';

import { LecturerSignupPage } from './lecturer-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerSignupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LecturerSignupPage]
})
export class LecturerSignupPageModule {}
