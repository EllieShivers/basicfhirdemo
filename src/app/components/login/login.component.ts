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

  // TODO: Remove this one and related HTML once login handling is fully functional, user won't actually see success message
  loginSuccess: boolean = false;

  // Step 1: Pull values from login fields and setup in patientLoginStub object.

  // Quick login Testing Variables TODO: Move this sort of stuff to unit tests?
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

    // TODO: Figure out why Promise is not waiting until after network call to run rest of code.
    this.patientService.getPatientById(this.patientLoginStub.id).then((data) => {
      patientFromServer = data;
    }).catch((error) => {
      //TODO: Network call error handling
      console.log(error);
    }).finally(() => {

      // Logging to check what the patient objects look like, notice on first click the patientFromServer is usually empty since not coming
      // back on time.
      console.log(patientFromServer);
      console.log(this.patientLoginStub);

      // Step 3: Verify information from patientLoginStub against patientFromServer
      if (this.patientLoginStub.lastName === patientFromServer.lastName
        && this.patientLoginStub.birthDate === patientFromServer.birthDate) {

        this.loginError = false;
        this.loginSuccess = true;

        // Step4: Direct patient to patient portal and pass the patient Stub.
        // TODO: This should not be routing until network call complete
        this.router.navigate(["procedures"]).then( (e) => {
          if (e) {
            //TODO: Setup different output for this stuff
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
