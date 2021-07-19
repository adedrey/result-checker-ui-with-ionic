import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerAssignmentDetailPage } from './lecturer-assignment-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerAssignmentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerAssignmentDetailPageRoutingModule {}
