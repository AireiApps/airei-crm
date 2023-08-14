import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoReceivedReportPageRoutingModule } from './ceo-received-report-routing.module';

import { CeoReceivedReportPage } from './ceo-received-report.page';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CeoReceivedReportPageRoutingModule
  ],
  declarations: [CeoReceivedReportPage]
})
export class CeoReceivedReportPageModule {}
