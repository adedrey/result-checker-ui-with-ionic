import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComplaintDetailPage } from './admin-complaint-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AdminComplaintDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminComplaintDetailPageRoutingModule {}
