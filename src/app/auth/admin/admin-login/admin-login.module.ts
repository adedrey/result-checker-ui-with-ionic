import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLoginPageRoutingModule } from './admin-login-routing.module';

import { AdminLoginPage } from './admin-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminLoginPage]
})
export class AdminLoginPageModule {}
