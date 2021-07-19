import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturerAssignmentItemComponent } from './lecturer-assignment-item.component';

describe('LecturerAssignmentItemComponent', () => {
  let component: LecturerAssignmentItemComponent;
  let fixture: ComponentFixture<LecturerAssignmentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerAssignmentItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturerAssignmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
