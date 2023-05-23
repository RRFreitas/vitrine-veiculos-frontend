import { Component, Inject, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, retry, throwError } from 'rxjs';
import { Carro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/services/carros.service';
// nome marca
// ano km
// estado valor
// foto

@Component({
  selector: 'app-carro-form',
  templateUrl: './carro-form.component.html',
  styleUrls: ['./carro-form.component.css']
})
export class CarroFormComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CarroFormComponent>,
    private fb: FormBuilder,
    private carrosService: CarrosService,
    @Inject(MAT_DIALOG_DATA) public carro: Carro,) {

    this.form = this.fb.group({
      nome: [this.carro?.nome ?? '', Validators.required],
      marca: [this.carro?.marca ?? '', Validators.required],
      ano: [this.carro?.ano ?? '', Validators.required],
      km: [this.carro?.ano ?? '', Validators.required],
      estado: [this.carro?.estado ?? '', Validators.required],
      valor: [this.carro?.valor ?? '', Validators.required],
      foto: [this.carro?.foto ?? '', Validators.required]
    })

  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public createCarro(): void {
    const carro : Carro = this.buildCarro();
    this.carrosService.postCarro(carro)
      .pipe(retry(1), catchError(error => {
        alert(error.message);
        return throwError(() => {
          return error.message;
        })
      })).subscribe(s => {
        console.log(s)
        window.location.reload();
      });
  }

  private buildCarro(): Carro {
    return {
      nome: this.nome?.value,
      marca: this.marca?.value,
      ano: this.ano?.value,
      km: this.km?.value,
      estado: this.estado?.value,
      valor: this.valor?.value,
      foto: this.foto?.value
    };
  }

  get nome() : AbstractControl<any,any> | null {
    return this.form.get('nome'); 
  }

  get marca() : AbstractControl<any,any> | null {
    return this.form.get('marca'); 
  }
  
  get ano() : AbstractControl<any,any> | null {
    return this.form.get('ano'); 
  }
  
  get km() : AbstractControl<any,any> | null {
    return this.form.get('km'); 
  }
  
  get estado() : AbstractControl<any,any> | null {
    return this.form.get('estado'); 
  }

  get valor() : AbstractControl<any,any> | null {
    return this.form.get('valor'); 
  }
  
  get foto() : AbstractControl<any,any> | null {
    return this.form.get('foto'); 
  }
}
