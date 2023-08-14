import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoDelayedinvoiceReportPageRoutingModule } from './ceo-delayedinvoice-report-routing.module';

import { CeoDelayedinvoiceReportPage } from './ceo-delayedinvoice-report.page';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CeoDelayedinvoiceReportPageRoutingModule
  ],
  declarations: [CeoDelayedinvoiceReportPage]
})
export class CeoDelayedinvoiceReportPageModule {}
