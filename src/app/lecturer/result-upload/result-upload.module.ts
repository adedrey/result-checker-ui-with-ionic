import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultUploadPageRoutingModule } from './result-upload-routing.module';

import { ResultUploadPage } from './result-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ResultUploadPageRoutingModule
  ],
  declarations: [ResultUploadPage]
})
export class ResultUploadPageModule {}
