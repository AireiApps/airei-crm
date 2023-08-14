import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoPurchasependingReportPage } from './ceo-purchasepending-report.page';

describe('CeoPurchasependingReportPage', () => {
  let component: CeoPurchasependingReportPage;
  let fixture: ComponentFixture<CeoPurchasependingReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoPurchasependingReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoPurchasependingReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
