import { TestBed } from '@angular/core/testing';

import { ServicioBaseService } from './servicio-base.service';

describe('ServicioBaseService', () => {
  let service: ServicioBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
