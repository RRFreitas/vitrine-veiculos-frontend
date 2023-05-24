import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { Carro } from '../../../models/carro';
import { CarroFormComponent } from '../../carro-form/carro-form.component';

@Component({
  selector: 'app-carro-card',
  templateUrl: './carro-card.component.html',
  styleUrls: ['./carro-card.component.css']
})
export class CarroCardComponent {
  @Input() carro?: Carro;

  constructor(public dialog: MatDialog, public authService: AuthService) {}

  openCarroForm(): void {
    if(!this.authService.isLoggedIn())
      return;
    const dialogRef = this.dialog.open(CarroFormComponent, {
      data: {
        carro: this.carro
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
