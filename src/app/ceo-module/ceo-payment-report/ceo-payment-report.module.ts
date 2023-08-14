import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoPaymentReportPageRoutingModule } from './ceo-payment-report-routing.module';

import { CeoPaymentReportPage } from './ceo-payment-report.page';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CeoPaymentReportPageRoutingModule
  ],
  declarations: [CeoPaymentReportPage]
})
export class CeoPaymentReportPageModule {}
