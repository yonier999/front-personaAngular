import { TestBed } from '@angular/core/testing';

import { ServicioTService } from './servicio-t.service';

describe('ServicioTService', () => {
  let service: ServicioTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
