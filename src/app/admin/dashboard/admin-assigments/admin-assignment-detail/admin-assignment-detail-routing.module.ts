import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAssignmentDetailPage } from './admin-assignment-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAssignmentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAssignmentDetailPageRoutingModule {}
