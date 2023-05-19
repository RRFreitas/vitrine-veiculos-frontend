import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrosComponent } from './components/carros/carros.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CarroCardComponent } from './components/carro-card/carro-card.component';
import { CarroValorComponent } from './components/carro-valor/carro-valor.component';
import { CarroDetalhesComponent } from './components/carro-detalhes/carro-detalhes.component';
import { CarroNomeComponent } from './components/carro-nome/carro-nome.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    NavbarComponent,
    BuscadorComponent,
    CarroCardComponent,
    CarroValorComponent,
    CarroDetalhesComponent,
    CarroNomeComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
