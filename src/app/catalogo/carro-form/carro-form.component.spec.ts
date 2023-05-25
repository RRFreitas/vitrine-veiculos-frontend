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
  let h2: HTMLElement;
  let buttonSave: HTMLButtonElement;

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
    h2 = fixture.nativeElement.querySelector('h2');
    buttonSave = fixture.nativeElement.querySelector('.submit-button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Inserir" if car is not already created', () => {
    expect(h2.textContent).toContain('Inserir');
  })

  it('should show "Atualizar" if car is already created', () => {
    component.isCreated = true;
    fixture.detectChanges();
    expect(h2.textContent).toContain('Atualizar');
  })

  it('submit button should be disabled if inputs are empty', () => {
    expect(buttonSave.disabled).toBeTrue();
  })
  
  it('submit button should be enabled if inputs are filled', () => {
    component.form.setValue({nome: 'nome', marca: 'marca', ano: 2000, km: 2000, valor: 3000, foto: 'foto', estado: 'estado'})
    fixture.detectChanges();
    expect(component.form.valid).toBeTrue();
    expect(buttonSave.disabled).toBeFalse();
  })
});
