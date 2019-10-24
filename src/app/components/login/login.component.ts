import {Component, OnInit} from '@angular/core';
import {PatientStub} from '../../models/patientStub';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // This code breaks the login component :(
  //constructor(private patientService: PatientService) { }

  loginError: boolean = false;
  loginSuccess: boolean = false;

  // Step 1: Pull values from login fields and setup in patientLoginStub object.
  patientID: string = "2607775"; // testing ID
  patientLoginStub: PatientStub = {id: this.patientID, lastName: "", birthDate: ""};
  patientFromServer: PatientStub = {id: '', lastName: '', birthDate: ""};
  // Store as a complete patient object? How easy to manipulate? Just add fullName field to stub? Need any other data?

  onClickLogin() {
    // Step 2: Use patientLoginStub.id to get patient details from server.
    this.getPatientById();

    // Step 3: Verify information from patientLoginStub against patientFromServer
    if (this.patientLoginStub.lastName === this.patientFromServer.lastName) { // Need to add AND conditional for birthDate string
      // Step4: Direct patient to patient portal and pass the patient ID.
      this.loginError = false;
      this.loginSuccess = true;
    }
    else {
      this.loginSuccess = false;
      this.loginError = true; // Show Login Error
    }
  }



  ngOnInit() {}

  getPatientById(): void {
    // Setup code to Validate ID
   // this.patientService.getPatientById(this.patientLoginStub.id).subscribe(patient => this.patientFromServer = patient);
  }

}
