import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroFormComponent } from './carro-form.component';

describe('CarroFormComponent', () => {
  let component: CarroFormComponent;
  let fixture: ComponentFixture<CarroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroFormComponent]
    });
    fixture = TestBed.createComponent(CarroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
