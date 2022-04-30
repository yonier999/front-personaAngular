import { TestBed } from '@angular/core/testing';

import { ServicioAPiService } from './servicio-api.service';

describe('ServicioAPiService', () => {
  let service: ServicioAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
