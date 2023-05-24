import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/core/services/auth.service';
import { InputFieldComponent } from 'src/app/shared/input-field/input-field.component';

import { CarroFormComponent } from './carro-form.component';

describe('CarroFormComponent', () => {
  let component: CarroFormComponent;
  let fixture: ComponentFixture<CarroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroFormComponent, InputFieldComponent],
      providers: [{
        provide:MAT_DIALOG_DATA,
        useValue:{}
      },{
        provide: MatDialogRef,
        useValue: {}
      }, AuthService, HttpClient, HttpHandler],
      imports: [MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(CarroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
