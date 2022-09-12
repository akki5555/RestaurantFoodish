import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderInfoReadyPage } from './order-info-ready.page';

describe('OrderInfoReadyPage', () => {
  let component: OrderInfoReadyPage;
  let fixture: ComponentFixture<OrderInfoReadyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInfoReadyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderInfoReadyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
