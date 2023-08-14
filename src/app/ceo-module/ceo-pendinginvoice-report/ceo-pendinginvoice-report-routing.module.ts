import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoPendinginvoiceReportPage } from './ceo-pendinginvoice-report.page';

const routes: Routes = [
  {
    path: '',
    component: CeoPendinginvoiceReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoPendinginvoiceReportPageRoutingModule {}
