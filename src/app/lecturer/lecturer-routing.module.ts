import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerPage } from './lecturer.page';
import { ResultGuard } from './result-upload.guard';

const routes: Routes = [
  {

    path: '',
    redirectTo: '/staff/assignments', pathMatch: 'full'
  },
  {
    path: 'assignments',
    loadChildren: () => import('./lecturer-assignments/lecturer-assignments.module').then(m => m.LecturerAssignmentsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./lecturer-profile/lecturer-profile.module').then(m => m.LecturerProfilePageModule)
  },
  {
    path: 'result-upload',
    loadChildren: () => import('./result-upload/result-upload.module').then(m => m.ResultUploadPageModule)
  },
  {
    path: 'test-result',
    loadChildren: () => import('./test-result/test-result.module').then( m => m.TestResultPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerPageRoutingModule { }
