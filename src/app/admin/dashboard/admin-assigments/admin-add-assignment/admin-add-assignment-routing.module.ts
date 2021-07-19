import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddAssignmentPage } from './admin-add-assignment.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAddAssignmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAddAssignmentPageRoutingModule {}
