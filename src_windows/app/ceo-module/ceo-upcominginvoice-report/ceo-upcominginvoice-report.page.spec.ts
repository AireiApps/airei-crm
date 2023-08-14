import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoUpcominginvoiceReportPage } from './ceo-upcominginvoice-report.page';

describe('CeoUpcominginvoiceReportPage', () => {
  let component: CeoUpcominginvoiceReportPage;
  let fixture: ComponentFixture<CeoUpcominginvoiceReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoUpcominginvoiceReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoUpcominginvoiceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
