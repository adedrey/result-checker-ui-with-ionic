import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestResultPageRoutingModule } from './test-result-routing.module';

import { TestResultPage } from './test-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TestResultPageRoutingModule
  ],
  declarations: [TestResultPage]
})
export class TestResultPageModule {}
