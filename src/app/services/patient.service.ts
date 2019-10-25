import {Injectable} from '@angular/core';
import { PatientStub } from '../models/patientStub';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class PatientService {

  private serverUrl = 'http://hapi.fhir.org/baseDstu3';
  private patientArgString = '/Patient?_id=';
  private patientFromServer: PatientStub = {id: '', lastName: '', birthDate: ''};

  getPatientById(patientId: string): Promise<PatientStub> {

    let tempString = this.serverUrl + this.patientArgString + patientId;

    this.http.get(tempString).subscribe(data => {
     let tempData: any = data as any;
     this.patientFromServer.lastName = tempData.entry[0].resource.name[0].family;
     this.patientFromServer.birthDate = tempData.entry[0].resource.birthDate;
     this.patientFromServer.id = tempData.entry[0].resource.id;

    });
    return of(this.patientFromServer).toPromise();
  }

  constructor(private http: HttpClient) { }

}
