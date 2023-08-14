import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoReportsPage } from './ceo-reports.page';

describe('CeoReportsPage', () => {
  let component: CeoReportsPage;
  let fixture: ComponentFixture<CeoReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoReportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
