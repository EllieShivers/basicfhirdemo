import {Injectable} from '@angular/core';
import { PatientStub } from '../models/patientStub';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PATIENT } from '../mock-patient';
//import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class PatientService {

  private serverUrl = 'http://hapi.fhir.org/baseDstu3';

  getPatientById(patientId: string): Observable<PatientStub> {
    // change this to get patient id from server
    return of(PATIENT);
  }

  constructor(private http: HttpClient) { }

}
