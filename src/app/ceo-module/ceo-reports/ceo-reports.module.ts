import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoReportsPageRoutingModule } from './ceo-reports-routing.module';

import { CeoReportsPage } from './ceo-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CeoReportsPageRoutingModule
  ],
  declarations: [CeoReportsPage]
})
export class CeoReportsPageModule {}
