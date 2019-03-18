import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CofferOrderComponent } from './coffe-order.component';

describe('CofferOrderComponent', () => {
  let component: CofferOrderComponent;
  let fixture: ComponentFixture<CofferOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CofferOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CofferOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
