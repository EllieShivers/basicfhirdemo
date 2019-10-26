import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientportal',
  templateUrl: './patientportal.component.html',
  styleUrls: ['./patientportal.component.css']
})
export class PatientportalComponent implements OnInit {
  loggedin: boolean = true;
  patientNameDisplayString = "First Last";
  patientIdDisplayString = "12345678";

  constructor() { }

  ngOnInit() {
  }

}
