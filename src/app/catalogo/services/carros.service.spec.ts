import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CarrosService } from './carros.service';

describe('CarrosService', () => {
  let service: CarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler]});
    service = TestBed.inject(CarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
