import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultUploadPage } from './result-upload.page';

const routes: Routes = [
  {
    path: '',
    component: ResultUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultUploadPageRoutingModule {}
