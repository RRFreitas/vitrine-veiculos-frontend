import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, retry, throwError } from 'rxjs';
import { Carro } from 'src/app/models/carro';
import { AuthService } from 'src/app/services/auth.service';
import { CarrosService } from 'src/app/services/carros.service';
import { CarroFormComponent } from '../carro-form/carro-form.component';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent {
  carros : Carro[] = [];

  constructor(public dialog: MatDialog, private carrosService : CarrosService, private authService: AuthService) {}

  ngOnInit(): void {
    this.carrosService.getCarros().
      pipe(retry(1), catchError(error => {
        alert(error.message);
        return throwError(() => {
          return error.message;
        });
      }))
      .subscribe((data : Carro[]) => {
        this.carros = data;
      }) 
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }
  
  openCarroForm(): void {
    const dialogRef = this.dialog.open(CarroFormComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
