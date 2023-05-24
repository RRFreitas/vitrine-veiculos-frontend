import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './catalogo/buscador/buscador.component';
import { CarrosComponent } from './catalogo/carros/carros.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AuthService } from './core/services/auth.service';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, MatDialogModule, MatToolbarModule, MatFormFieldModule],
    declarations: [AppComponent, NavbarComponent, BuscadorComponent, CarrosComponent],
    providers: [AuthService, HttpClient, HttpHandler]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
