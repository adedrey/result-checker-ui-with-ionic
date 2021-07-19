import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumPage } from './forum.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/forum/tabs/assignments', pathMatch: 'full'
  },
  {
    path: 'tabs', component: ForumPage, children: [
      {
        path: 'assignments',
        loadChildren: () => import('./assignments/assignments.module').then(m => m.AssignmentsPageModule)
      },
      {
        path: 'complaints',
        loadChildren: () => import('./complaints/complaints.module').then(m => m.ComplaintsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumPageRoutingModule { }
