import { Component, Input } from '@angular/core';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'app-carro-nome',
  templateUrl: './carro-nome.component.html',
  styleUrls: ['./carro-nome.component.css']
})
export class CarroNomeComponent {
  @Input() carro?: Carro;
}
