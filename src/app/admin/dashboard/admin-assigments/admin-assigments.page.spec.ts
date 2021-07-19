import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAssigmentsPage } from './admin-assigments.page';

describe('AdminAssigmentsPage', () => {
  let component: AdminAssigmentsPage;
  let fixture: ComponentFixture<AdminAssigmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssigmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAssigmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
