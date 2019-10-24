import {Component, NgModule, OnInit} from '@angular/core';
import {Patient} from '../../models/patient';
import {PatientStub} from '../../models/patientStub';
import {Router, Routes, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: boolean = false;
  // Step 1: Pull values from login fields and setup in patientLoginStub object.
  patientLoginStub: PatientStub = {id: "", lastName: "", birthDate: ""};
  patientFromServer: PatientStub; // Store as a complete patient object? How easy to manipulate? Just add fullName field to stub? Need any other data?

  onClickLogin() {

    // Step 2: Use ID to get patient details from server.
    // FHIR CODE HERE
    // this.patientFromServer

    // Step 3: Verify information from patientLoginStub against patientFromServer
    if (this.patientLoginStub.lastName === this.patientFromServer.lastName) {
      // Need to add AND conditional for birthDate string
      // Step4: Direct patient to patient portal and pass the patient ID.
    }
    else this.loginError = true; // Show Login Error

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
