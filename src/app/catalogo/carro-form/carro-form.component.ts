import { Component, Inject, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, retry, throwError } from 'rxjs';
import { Carro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/services/carros.service';

@Component({
  selector: 'app-carro-form',
  templateUrl: './carro-form.component.html',
  styleUrls: ['./carro-form.component.css']
})
export class CarroFormComponent {
  form: FormGroup;
  isCreated : boolean;
  carroId : number | undefined;

  constructor(
    public dialogRef: MatDialogRef<CarroFormComponent>,
    private fb: FormBuilder,
    private carrosService: CarrosService,
    @Inject(MAT_DIALOG_DATA) public data: {carro?: Carro},) {

    this.form = this.fb.group({
      nome: [data?.carro?.nome ?? '', Validators.required],
      marca: [data?.carro?.marca ?? '', Validators.required],
      ano: [data?.carro?.ano ?? '', Validators.required],
      km: [data?.carro?.ano ?? '', Validators.required],
      estado: [data?.carro?.estado ?? '', Validators.required],
      valor: [data?.carro?.valor ?? '', Validators.required],
      foto: [data?.carro?.foto ?? '', Validators.required]
    });

    if(data?.carro) {
      this.isCreated = true;
      this.carroId = data.carro.id;
    } else {
      this.isCreated = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveCarro(): void {
    if(this.isCreated)
      this.updateCarro();
    else
      this.createCarro();
  }

  updateCarro(): void {
    if(!this.carroId) {
      console.error("carro.id is not defined");
      return;
    }
    const carro : Carro = this.buildCarro();
    this.carrosService.putCarro(this.carroId, carro)
      .pipe(retry(1), catchError(error => {
        alert(error.message);
        return throwError(() => {
          return error.message;
        })
      })).subscribe(s => {
        window.location.reload();
      });
  }

  createCarro(): void {
    const carro: Carro = this.buildCarro();
    this.carrosService.postCarro(carro)
      .pipe(retry(1), catchError(error => {
        alert(error.message);
        return throwError(() => {
          return error.message;
        })
      })).subscribe(s => {
        window.location.reload();
      });
  }

  deleteCarro(): void {
    if(!this.carroId) {
      console.error("carro.id is not defined");
      return;
    }
    this.carrosService.deleteCarro(this.carroId)
      .pipe(retry(1), catchError(error => {
        alert(error.message);
        return throwError(() => {
          return error.message;
        })
      })).subscribe(s => {
        window.location.reload();
      })
  }
  
  isValid(): boolean {
    return Boolean(this.nome?.valid && this.marca?.valid && this.ano?.valid && this.km?.valid && this.estado?.valid && this.valor?.valid && this.foto?.valid);
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
