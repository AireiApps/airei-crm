import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoProjectprogressReportPageRoutingModule } from './ceo-projectprogress-report-routing.module';

import { CeoProjectprogressReportPage } from './ceo-projectprogress-report.page';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CeoProjectprogressReportPageRoutingModule
  ],
  declarations: [CeoProjectprogressReportPage]
})
export class CeoProjectprogressReportPageModule {}
