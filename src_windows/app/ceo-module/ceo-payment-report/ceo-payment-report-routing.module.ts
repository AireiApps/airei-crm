import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoPaymentReportPage } from './ceo-payment-report.page';

const routes: Routes = [
  {
    path: '',
    component: CeoPaymentReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoPaymentReportPageRoutingModule {}
