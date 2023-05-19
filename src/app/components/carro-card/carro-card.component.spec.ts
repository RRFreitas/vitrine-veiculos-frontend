import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCardComponent } from './carro-card.component';

describe('CarroCardComponent', () => {
  let component: CarroCardComponent;
  let fixture: ComponentFixture<CarroCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroCardComponent]
    });
    fixture = TestBed.createComponent(CarroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
