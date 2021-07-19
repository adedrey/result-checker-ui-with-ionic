import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerSignupPage } from './lecturer-signup.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturerSignupPageRoutingModule {}
