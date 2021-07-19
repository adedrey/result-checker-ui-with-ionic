import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerAddAssignmentPage } from './lecturer-add-assignment.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerAddAssignmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerAddAssignmentPageRoutingModule {}
