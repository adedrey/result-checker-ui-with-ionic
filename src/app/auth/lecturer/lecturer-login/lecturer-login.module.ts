import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerLoginPageRoutingModule } from './lecturer-login-routing.module';

import { LecturerLoginPage } from './lecturer-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LecturerLoginPage]
})
export class LecturerLoginPageModule {}
