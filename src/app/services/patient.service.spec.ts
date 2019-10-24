import { TestBed } from '@angular/core/testing';

import { PatientService } from './patient.service';

describe('FhirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientService = TestBed.get(PatientService);
    expect(service).toBeTruthy();
  });
});
