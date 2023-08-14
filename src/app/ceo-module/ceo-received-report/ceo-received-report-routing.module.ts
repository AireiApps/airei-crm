import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoReceivedReportPage } from './ceo-received-report.page';

const routes: Routes = [
  {
    path: '',
    component: CeoReceivedReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoReceivedReportPageRoutingModule {}
