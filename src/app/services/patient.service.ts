import {Injectable} from '@angular/core';
import { PatientStub } from '../models/patientStub';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PATIENT } from '../mock-patient';

@Injectable()
export class PatientService {
  constructor(
    private http: HttpClient
  ) { }
}

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  getPatient(): Observable<PatientStub> {
    return of(PATIENT);
  }

  constructor() { }

}
