import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoInvoiceReportPage } from './ceo-invoice-report.page';

describe('CeoInvoiceReportPage', () => {
  let component: CeoInvoiceReportPage;
  let fixture: ComponentFixture<CeoInvoiceReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoInvoiceReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoInvoiceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
