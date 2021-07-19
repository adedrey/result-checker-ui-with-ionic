import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditComplaintPage } from './edit-complaint.page';

describe('EditComplaintPage', () => {
  let component: EditComplaintPage;
  let fixture: ComponentFixture<EditComplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComplaintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditComplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
