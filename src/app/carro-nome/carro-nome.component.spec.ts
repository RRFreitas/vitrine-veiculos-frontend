import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroNomeComponent } from './carro-nome.component';

describe('CarroNomeComponent', () => {
  let component: CarroNomeComponent;
  let fixture: ComponentFixture<CarroNomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroNomeComponent]
    });
    fixture = TestBed.createComponent(CarroNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
