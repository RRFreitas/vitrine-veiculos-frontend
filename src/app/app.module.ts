import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrosComponent } from './carros/carros.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NavbarComponent } from './navbar/navbar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CarroCardComponent } from './carro-card/carro-card.component';
import { CarroValorComponent } from './carro-valor/carro-valor.component';
import { CarroDetalhesComponent } from './carro-detalhes/carro-detalhes.component';
import { CarroNomeComponent } from './carro-nome/carro-nome.component'

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    NavbarComponent,
    BuscadorComponent,
    CarroCardComponent,
    CarroValorComponent,
    CarroDetalhesComponent,
    CarroNomeComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
