import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoUpcominginvoiceReportPageRoutingModule } from './ceo-upcominginvoice-report-routing.module';

import { CeoUpcominginvoiceReportPage } from './ceo-upcominginvoice-report.page';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CeoUpcominginvoiceReportPageRoutingModule
  ],
  declarations: [CeoUpcominginvoiceReportPage]
})
export class CeoUpcominginvoiceReportPageModule {}
