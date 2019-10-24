import {Component, NgModule, OnInit} from '@angular/core';
import {Patient} from '../../models/patient';
import {PatientStub} from '../../models/patientStub';
import {PatientService} from '../../services/patient.service';
import { FhirClient} from 'ng-fhir/FhirClient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private config: any = {
    'baseURL': 'http://hapi.fhir.org/baseDstu3',
    'credentials': 'same-origin',
  };

  testMessages: string = "Default";
  loginError: boolean = false;

  client: FhirClient = new FhirClient(this.config);


  // Step 1: Pull values from login fields and setup in patientLoginStub object.
  patientID: string = "2607775"; // testing ID
  patientLoginStub: PatientStub = {id: this.patientID, lastName: "", birthDate: ""};
  patientFromServer: PatientStub = {id: "", lastName: "pop", birthDate: ""};
  // Store as a complete patient object? How easy to manipulate? Just add fullName field to stub? Need any other data?

  onClickLogin() {

    // Step 2: Use patientLoginStub.id to get patient details from server.
    //this.readPatient();

    // Step 3: Verify information from patientLoginStub against patientFromServer
    if (this.patientLoginStub.lastName === this.patientFromServer.lastName) {
      // Need to add AND conditional for birthDate string
      // Step4: Direct patient to patient portal and pass the patient ID.
      this.loginError = false;
    }
    else this.loginError = true; // Show Login Error

  }

  readPatient(){

    this.client.read({type: 'Patient', id: this.patientLoginStub.id}).then((response) => {

      response.data;
      console.log(response.data);
      if(response.data){
        this.patientFromServer = (response.data || {});
      }
    }, (err) => {
      console.log(err);
    });
  }


  /* Handle Navigation, figure this out later.
  /
  /router: Router = {}
  /navigateToPatientPortal() {
  /  this.router.navigate([])
  /}
  */


  constructor() { }
  ngOnInit() {}
}
