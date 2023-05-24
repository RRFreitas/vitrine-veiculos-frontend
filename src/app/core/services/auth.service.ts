import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginToken } from '../../models/loginToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL : string = environment.API_URL + "/token/";

  constructor(private http: HttpClient) {}

  login(user: User): Observable<LoginToken> {
    return this.http.post<LoginToken>(this.API_URL, user)
      .pipe(tap(this.setSession));
  }

  logout(): void {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  isLoggedIn(): boolean {
    return this.hasSession();
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  private setSession(authResult:LoginToken): void {
    localStorage.setItem('id_token', authResult.access);
  }

  private hasSession(): boolean {
    return localStorage.getItem('id_token') !== null;
  }
}
