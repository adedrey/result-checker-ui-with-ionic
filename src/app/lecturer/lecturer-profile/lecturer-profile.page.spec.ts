import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerProfilePage } from './lecturer-profile.page';

describe('LecturerProfilePage', () => {
  let component: LecturerProfilePage;
  let fixture: ComponentFixture<LecturerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
