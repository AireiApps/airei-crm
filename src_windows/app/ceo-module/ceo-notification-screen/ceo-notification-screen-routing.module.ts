import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoNotificationScreenPage } from './ceo-notification-screen.page';

const routes: Routes = [
  {
    path: '',
    component: CeoNotificationScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoNotificationScreenPageRoutingModule {}
