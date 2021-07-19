import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerAssignmentsPage } from './lecturer-assignments.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerAssignmentsPage
  },
  {
    path: 'create',
    loadChildren: () => import('./lecturer-add-assignment/lecturer-add-assignment.module').then( m => m.LecturerAddAssignmentPageModule)
  },
  {
    path: ':assignmentId',
    loadChildren: () => import('./lecturer-assignment-detail/lecturer-assignment-detail.module').then( m => m.LecturerAssignmentDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerAssignmentsPageRoutingModule {}
