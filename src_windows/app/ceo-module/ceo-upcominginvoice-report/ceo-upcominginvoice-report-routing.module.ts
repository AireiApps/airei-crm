import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoUpcominginvoiceReportPage } from './ceo-upcominginvoice-report.page';

const routes: Routes = [
  {
    path: '',
    component: CeoUpcominginvoiceReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoUpcominginvoiceReportPageRoutingModule {}
