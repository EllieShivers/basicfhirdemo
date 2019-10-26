import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PatientService {

  private serverUrl = 'http://hapi.fhir.org/baseDstu3';
  private patientArgString = '/Patient?_id=';

  getPatientById(patientId: string): Promise<any> {
    let tempString = this.serverUrl + this.patientArgString + patientId;
    return this.http.get(tempString).toPromise();
  }

  constructor(private http: HttpClient) { }

}
