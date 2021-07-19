import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerLoginPage } from './lecturer-login.page';

describe('LecturerLoginPage', () => {
  let component: LecturerLoginPage;
  let fixture: ComponentFixture<LecturerLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
