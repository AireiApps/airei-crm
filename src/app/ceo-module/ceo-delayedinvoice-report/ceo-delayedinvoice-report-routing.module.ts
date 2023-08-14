import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoDelayedinvoiceReportPage } from './ceo-delayedinvoice-report.page';

const routes: Routes = [
  {
    path: '',
    component: CeoDelayedinvoiceReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoDelayedinvoiceReportPageRoutingModule {}
