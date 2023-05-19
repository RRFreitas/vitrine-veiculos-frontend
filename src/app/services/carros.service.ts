import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../models/carro';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

const API_URL : string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http: HttpClient) { }

  public getCarros() {
    return this.http.get<Carro[]>(API_URL + '/carros/')
      .pipe(catchError(async e => console.log(e)));
  }

  public postCarro(carro: Carro) {
    return this.http.post<Carro>(API_URL + '/carros/', carro)
      .pipe(catchError(async e => console.log(e)));
  }
}
