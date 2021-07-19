import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerAssignmentDetailItemComponent } from './lecturer-assignment-detail-item.component';

describe('LecturerAssignmentDetailItemComponent', () => {
  let component: LecturerAssignmentDetailItemComponent;
  let fixture: ComponentFixture<LecturerAssignmentDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerAssignmentDetailItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerAssignmentDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
