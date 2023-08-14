import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoPendinginvoiceReportPageRoutingModule } from './ceo-pendinginvoice-report-routing.module';

import { CeoPendinginvoiceReportPage } from './ceo-pendinginvoice-report.page';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CeoPendinginvoiceReportPageRoutingModule
  ],
  declarations: [CeoPendinginvoiceReportPage]
})
export class CeoPendinginvoiceReportPageModule {}
