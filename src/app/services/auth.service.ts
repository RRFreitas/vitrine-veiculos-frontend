import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { catchError, tap } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL : string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public login(username:string, password:string) {
    return this.http.post<User>(API_URL + '/token/', {username, password})
      .pipe(tap(this.setSession)).pipe(catchError(async e => console.log(e.statusText)));
  }

  private setSession(authResult:any) {
    localStorage.setItem('id_token', authResult.access);
  }

  private hasSession() {
    return localStorage.getItem('id_token');
  }

  public logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return this.hasSession();
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }
}
