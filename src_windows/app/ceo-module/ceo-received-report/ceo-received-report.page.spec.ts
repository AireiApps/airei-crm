import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoReceivedReportPage } from './ceo-received-report.page';

describe('CeoReceivedReportPage', () => {
  let component: CeoReceivedReportPage;
  let fixture: ComponentFixture<CeoReceivedReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoReceivedReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoReceivedReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
