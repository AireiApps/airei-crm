import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoDashboardPageRoutingModule } from './ceo-dashboard-routing.module';

import { CeoDashboardPage } from './ceo-dashboard.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CeoDashboardPageRoutingModule
  ],
  declarations: [CeoDashboardPage]
})
export class CeoDashboardPageModule {}
