import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroValorComponent } from './carro-valor.component';

describe('CarroValorComponent', () => {
  let component: CarroValorComponent;
  let fixture: ComponentFixture<CarroValorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroValorComponent]
    });
    fixture = TestBed.createComponent(CarroValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
