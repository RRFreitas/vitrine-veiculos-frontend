import { Component } from '@angular/core';
import { Carro } from '../models/carro';
import { CARROS } from '../mock-carros';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent {
  carros = CARROS;
}
