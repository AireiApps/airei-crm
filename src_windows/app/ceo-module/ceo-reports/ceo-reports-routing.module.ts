import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoReportsPage } from './ceo-reports.page';

const routes: Routes = [
  {
    path: '',
    component: CeoReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoReportsPageRoutingModule {}
