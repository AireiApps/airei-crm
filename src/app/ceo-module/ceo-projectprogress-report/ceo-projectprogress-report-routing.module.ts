import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoProjectprogressReportPage } from './ceo-projectprogress-report.page';

const routes: Routes = [
  {
    path: '',
    component: CeoProjectprogressReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoProjectprogressReportPageRoutingModule {}
