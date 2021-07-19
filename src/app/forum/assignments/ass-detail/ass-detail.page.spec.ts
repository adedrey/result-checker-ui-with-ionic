import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssDetailPage } from './ass-detail.page';

describe('AssDetailPage', () => {
  let component: AssDetailPage;
  let fixture: ComponentFixture<AssDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
