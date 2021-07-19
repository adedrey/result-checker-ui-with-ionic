import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintsPage } from './complaints.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintsPage
  },
  {
    path: ':complaintId',
    loadChildren: () => import('./admin-complaint-detail/admin-complaint-detail.module').then( m => m.AdminComplaintDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintsPageRoutingModule {}
