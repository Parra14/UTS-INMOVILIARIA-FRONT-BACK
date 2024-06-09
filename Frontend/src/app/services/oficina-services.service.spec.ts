import { TestBed } from '@angular/core/testing';

import { OficinaServicesService } from './oficina-services.service';

describe('OficinaServicesService', () => {
  let service: OficinaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OficinaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
