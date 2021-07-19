import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentsPage } from './assignments.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentsPage
  },
  {
    path: ':assignmentId',
    loadChildren: () => import('./ass-detail/ass-detail.module').then( m => m.AssDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentsPageRoutingModule {}
