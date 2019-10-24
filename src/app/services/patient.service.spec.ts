import { TestBed } from '@angular/core/testing';

import { FhirService } from './patient.service';

describe('FhirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FhirService = TestBed.get(FhirService);
    expect(service).toBeTruthy();
  });
});
