import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerLoginPage } from './lecturer-login.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerLoginPageRoutingModule {}
