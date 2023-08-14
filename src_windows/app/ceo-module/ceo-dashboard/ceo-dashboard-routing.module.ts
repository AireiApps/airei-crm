import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoDashboardPage } from './ceo-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CeoDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoDashboardPageRoutingModule {}
