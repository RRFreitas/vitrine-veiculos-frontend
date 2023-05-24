import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';

import { CarroCardComponent } from './carro-card.component';

describe('CarroCardComponent', () => {
  let component: CarroCardComponent;
  let fixture: ComponentFixture<CarroCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, HttpClient, HttpHandler],
      imports: [MatDialogModule],
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
