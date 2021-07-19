import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAssignmentDetailItemComponent } from './admin-assignment-detail-item.component';

describe('AdminAssignmentDetailItemComponent', () => {
  let component: AdminAssignmentDetailItemComponent;
  let fixture: ComponentFixture<AdminAssignmentDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssignmentDetailItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAssignmentDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
