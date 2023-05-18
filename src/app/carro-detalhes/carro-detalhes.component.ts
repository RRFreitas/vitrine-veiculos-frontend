import { Component, Input } from '@angular/core';
import { Carro } from '../models/carro';

@Component({
  selector: 'app-carro-detalhes',
  templateUrl: './carro-detalhes.component.html',
  styleUrls: ['./carro-detalhes.component.css']
})
export class CarroDetalhesComponent {
  @Input() carro? : Carro;
}
