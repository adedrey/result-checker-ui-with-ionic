import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintsPage } from './complaints.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintsPage
  },
  {
    path: 'add-complaint',
    loadChildren: () => import('./add-complaint/add-complaint.module').then( m => m.AddComplaintPageModule)
  },
  {
    path: ':complaintId',
    loadChildren: () => import('./complaint-detail/complaint-detail.module').then( m => m.ComplaintDetailPageModule)
  },
  {
    path: 'edit/:complaintId',
    loadChildren: () => import('./edit-complaint/edit-complaint.module').then( m => m.EditComplaintPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintsPageRoutingModule {}
