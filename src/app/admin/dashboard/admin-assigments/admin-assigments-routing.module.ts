import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAssigmentsPage } from './admin-assigments.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAssigmentsPage
  },
  {
    path: 'create',
    loadChildren: () => import('./admin-add-assignment/admin-add-assignment.module').then(m => m.AdminAddAssignmentPageModule)
  },
  {
    path : ':assignmentId',
    loadChildren: () => import('./admin-assignment-detail/admin-assignment-detail.module').then(m => m.AdminAssignmentDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAssigmentsPageRoutingModule {}
