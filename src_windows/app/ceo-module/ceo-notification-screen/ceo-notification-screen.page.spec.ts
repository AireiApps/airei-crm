import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoNotificationScreenPage } from './ceo-notification-screen.page';

describe('CeoNotificationScreenPage', () => {
  let component: CeoNotificationScreenPage;
  let fixture: ComponentFixture<CeoNotificationScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoNotificationScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoNotificationScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
