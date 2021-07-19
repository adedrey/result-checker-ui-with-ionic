import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssDetailPage } from './ass-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AssDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssDetailPageRoutingModule {}
