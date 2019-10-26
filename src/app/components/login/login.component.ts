import {Component, OnInit} from '@angular/core';
import {PatientStub} from '../../models/patientStub';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private patientService: PatientService, private router: Router) { }

  loginError: boolean = false;
  loginSuccess: boolean = false;

  //  Step 1: Pull values from login fields and setup in patientLoginStub object.

  // Quick login Testing Variables
  //testPatientID: string = "2607775"; // testing patientID
  //testPatientLastName: string = "pop"; // testing lastName
  //testPatientBirthDate: string = "2001-01-01"; // testing birthDate
  //patientLoginStub: PatientStub = {id: this.testPatientID, lastName: this.testPatientLastName, birthDate: this.testPatientBirthDate}

  patientLoginStub: PatientStub = {id: "", lastName: "", birthDate: ""}; // To use quick login values uncomment above code and comment this

  onClickLogin() {
    // TODO: Intercept undefined fields, malformed IDs, improperly structured date, etc.
    // TODO: Add in full name and other needed fields to PatientStub

    // Step 2: Use patientLoginStub.id to get patient details from server.
    let patientFromServer: PatientStub; // Temp object to compare

    this.patientService.getPatientById(this.patientLoginStub.id).then((data) => {
      patientFromServer = data;
    }).catch((error) => {
      //TODO: Network call error handling
      console.log(error);
    }).finally(() => {

      console.log(patientFromServer);
      console.log(this.patientLoginStub);
      console.log('Server Data Last Name:' + patientFromServer.lastName);
      console.log('Login Data Last Name:' + this.patientLoginStub.lastName);

      // Step 3: Verify information from patientLoginStub against patientFromServer
      if (this.patientLoginStub.lastName === patientFromServer.lastName
        && this.patientLoginStub.birthDate === patientFromServer.birthDate) {
        // TODO: Step4: Direct patient to patient portal and pass the patient Stub.
        this.loginError = false;
        this.loginSuccess = true;

        this.router.navigate(["procedures"]).then( (e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }
      else {
        this.loginSuccess = false;
        this.loginError = true;
      }
    });
  }

  ngOnInit() {}

}
