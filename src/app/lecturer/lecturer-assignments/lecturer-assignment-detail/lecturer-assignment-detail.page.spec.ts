import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerAssignmentDetailPage } from './lecturer-assignment-detail.page';

describe('LecturerAssignmentDetailPage', () => {
  let component: LecturerAssignmentDetailPage;
  let fixture: ComponentFixture<LecturerAssignmentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerAssignmentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerAssignmentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
