import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CarrosService } from '../services/carros.service';

import { CarrosComponent } from './carros.component';

describe('CarrosComponent', () => {
  let component: CarrosComponent;
  let fixture: ComponentFixture<CarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosComponent],
      providers: [MatDialog, CarrosService, HttpClient, HttpHandler],
      imports: [MatDialogModule]
    });
    fixture = TestBed.createComponent(CarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
