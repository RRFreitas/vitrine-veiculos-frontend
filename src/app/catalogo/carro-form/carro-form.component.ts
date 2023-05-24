import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, retry, throwError } from 'rxjs';
import { Carro } from 'src/app/models/carro';
import { CarrosService } from 'src/app/catalogo/services/carros.service';

@Component({
  selector: 'app-carro-form',
  templateUrl: './carro-form.component.html',
  styleUrls: ['./carro-form.component.css']
})
export class CarroFormComponent {
  form!: FormGroup;
  isCreated!: boolean;
  carroId: number | undefined;

  constructor(
    public dialogRef: MatDialogRef<CarroFormComponent>,
    private fb: FormBuilder,
    private carrosService: CarrosService,
    @Inject(MAT_DIALOG_DATA) public data: {carro?: Carro},) {}

  ngOnInit(): void {
    this.form = this.buildForm()

    if(this.data?.carro) {
      this.isCreated = true;
      this.carroId = this.data.carro.id;
    } else {
      this.isCreated = false;
    }
  }

  buildFormField(field: keyof Carro): any[] {
    return [this.data?.carro ? this.data.carro[field] : '', Validators.required];
  }

  buildForm(): FormGroup {
    const fields: string[] = ['nome', 'marca', 'ano', 'km', 'estado', 'valor', 'foto'];
    return this.form = this.fb.group(fields.reduce((acc: {}, current: string) => {
      return {...acc, [current]: this.buildFormField(current as keyof Carro)}
    }, {}));
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

  private buildCarro(): Carro {
    return {
      nome: this.nome.value,
      marca: this.marca.value,
      ano: this.ano.value,
      km: this.km.value,
      estado: this.estado.value,
      valor: this.valor.value,
      foto: this.foto.value
    };
  }
  
  get nome() : FormControl {
    return this.form.get('nome') as FormControl; 
  }

  get marca() : FormControl {
    return this.form.get('marca') as FormControl;
  }
  
  get ano() : FormControl {
    return this.form.get('ano') as FormControl;
  }
  
  get km() : FormControl {
    return this.form.get('km') as FormControl;
  }
  
  get estado() : FormControl {
    return this.form.get('estado') as FormControl;
  }

  get valor() : FormControl {
    return this.form.get('valor') as FormControl;
  }
  
  get foto() : FormControl {
    return this.form.get('foto') as FormControl;
  }
}
