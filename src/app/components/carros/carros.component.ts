import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Carro } from 'src/app/models/carro';
import { AuthService } from 'src/app/services/auth.service';
import { CarrosService } from 'src/app/services/carros.service';
import { CARROS } from '../../mock-carros';
import { CarroFormComponent } from '../carro-form/carro-form.component';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent {
  carros : any = [];//CARROS

  constructor(public dialog: MatDialog, private carrosService : CarrosService, private authService: AuthService) {}

  public ngOnInit() {
    this.carrosService.getCarros().subscribe((data : {}) => {
      this.carros = data;
      console.log(data)
    }) 
  }

  public isLoggedIn() {
    return this.authService.isLoggedIn()
  }
  
  public openCarroForm(): void {
    const dialogRef = this.dialog.open(CarroFormComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
