import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoProjectprogressReportPage } from './ceo-projectprogress-report.page';

describe('CeoProjectprogressReportPage', () => {
  let component: CeoProjectprogressReportPage;
  let fixture: ComponentFixture<CeoProjectprogressReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoProjectprogressReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoProjectprogressReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
