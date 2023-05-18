import { Component, Input } from '@angular/core';
import { Carro } from '../models/carro';

@Component({
  selector: 'app-carro-card',
  templateUrl: './carro-card.component.html',
  styleUrls: ['./carro-card.component.css']
})
export class CarroCardComponent {
  @Input() carro?: Carro;
}
