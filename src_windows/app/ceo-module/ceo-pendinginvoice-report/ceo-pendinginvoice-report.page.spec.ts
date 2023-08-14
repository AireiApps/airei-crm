import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoPendinginvoiceReportPage } from './ceo-pendinginvoice-report.page';

describe('CeoPendinginvoiceReportPage', () => {
  let component: CeoPendinginvoiceReportPage;
  let fixture: ComponentFixture<CeoPendinginvoiceReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoPendinginvoiceReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoPendinginvoiceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
