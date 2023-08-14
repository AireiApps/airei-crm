import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoInvoiceReportPage } from './ceo-invoice-report.page';

const routes: Routes = [
  {
    path: '',
    component: CeoInvoiceReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoInvoiceReportPageRoutingModule {}
