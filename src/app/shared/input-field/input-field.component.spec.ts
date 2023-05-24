import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFieldComponent, MatFormField, MatIcon],
      imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.control = new FormControl('');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
