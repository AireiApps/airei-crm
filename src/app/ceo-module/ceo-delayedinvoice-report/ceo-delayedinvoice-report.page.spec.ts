import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoDelayedinvoiceReportPage } from './ceo-delayedinvoice-report.page';

describe('CeoDelayedinvoiceReportPage', () => {
  let component: CeoDelayedinvoiceReportPage;
  let fixture: ComponentFixture<CeoDelayedinvoiceReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoDelayedinvoiceReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoDelayedinvoiceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
