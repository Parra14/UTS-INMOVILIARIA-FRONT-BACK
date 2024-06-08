import { TestBed } from '@angular/core/testing';

import { InmuebleServicesService } from './inmueble-services.service';

describe('InmuebleServicesService', () => {
  let service: InmuebleServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmuebleServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
