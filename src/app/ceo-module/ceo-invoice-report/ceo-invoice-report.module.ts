import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoInvoiceReportPageRoutingModule } from './ceo-invoice-report-routing.module';

import { CeoInvoiceReportPage } from './ceo-invoice-report.page';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CeoInvoiceReportPageRoutingModule
  ],
  declarations: [CeoInvoiceReportPage]
})
export class CeoInvoiceReportPageModule {}
