import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputFieldComponent } from 'src/app/shared/input-field/input-field.component';
import { AuthService } from '../services/auth.service';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let button: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, AuthService, HttpClient, HttpHandler],
      declarations: [LoginFormComponent, InputFieldComponent],
      imports: [MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    button= fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit button should be disabled if inputs are empty', () => {
    expect(button.disabled).toBeTrue();
  })
  
  it('submit button should be enabled if inputs are filled', () => {
    component.form.setValue({username: 'user', password: 'pass'})
    fixture.detectChanges();
    expect(component.form.valid).toBeTrue();
    expect(button.disabled).toBeFalse();
  })
});
