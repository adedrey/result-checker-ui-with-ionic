import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestResultPageRoutingModule } from './test-result-routing.module';

import { TestResultPage } from './test-result.page';
import { ComplaintNewsModule } from 'src/app/shared/complaint-news.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TestResultPageRoutingModule,
    ComplaintNewsModule
  ],
  declarations: [TestResultPage]
})
export class TestResultPageModule {}
