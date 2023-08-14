import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoPurchasependingReportPage } from './ceo-purchasepending-report.page';

const routes: Routes = [
  {
    path: '',
    component: CeoPurchasependingReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoPurchasependingReportPageRoutingModule {}
