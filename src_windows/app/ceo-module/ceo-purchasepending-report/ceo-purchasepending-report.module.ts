import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoPurchasependingReportPageRoutingModule } from './ceo-purchasepending-report-routing.module';

import { CeoPurchasependingReportPage } from './ceo-purchasepending-report.page';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CeoPurchasependingReportPageRoutingModule
  ],
  declarations: [CeoPurchasependingReportPage]
})
export class CeoPurchasependingReportPageModule {}
