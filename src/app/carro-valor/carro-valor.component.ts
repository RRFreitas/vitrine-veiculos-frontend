import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carro-valor',
  templateUrl: './carro-valor.component.html',
  styleUrls: ['./carro-valor.component.css']
})
export class CarroValorComponent {
  @Input() valor?: number;
}
