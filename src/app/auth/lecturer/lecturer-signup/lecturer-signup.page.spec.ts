import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerSignupPage } from './lecturer-signup.page';

describe('LecturerSignupPage', () => {
  let component: LecturerSignupPage;
  let fixture: ComponentFixture<LecturerSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
