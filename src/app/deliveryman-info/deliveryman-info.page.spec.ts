import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliverymanInfoPage } from './deliveryman-info.page';

describe('DeliverymanInfoPage', () => {
  let component: DeliverymanInfoPage;
  let fixture: ComponentFixture<DeliverymanInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymanInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverymanInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
