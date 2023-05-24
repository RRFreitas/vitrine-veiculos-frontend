import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../models/carro';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  API_URL: string = environment.API_URL + '/carros/'

  constructor(private http: HttpClient) { }

  getCarros() : Observable<Carro> {
    return this.http.get<Carro>(this.API_URL);
  }

  postCarro(carro: Carro) {
    return this.http.post<Carro>(this.API_URL, carro);
  }

  putCarro(carroId: number, carro: Carro) {
    return this.http.put<Carro>(this.API_URL + carroId + "/", carro);
  }

  deleteCarro(carroId: number) {
    return this.http.delete<Carro>(this.API_URL + carroId + "/");
  }
}
