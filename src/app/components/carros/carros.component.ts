import { Component } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { AuthService } from 'src/app/services/auth.service';
import { CarrosService } from 'src/app/services/carros.service';
import { CARROS } from '../../mock-carros';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent {
  carros : Carro[] = CARROS

  constructor(private carrosService : CarrosService, private authService: AuthService) {}

  public ngOnInit() {
    this.carrosService.getCarros().subscribe(carros => {
      console.log(carros)
    }) 
  }

  public isLoggedIn() {
    return this.authService.isLoggedIn()
  }
}
