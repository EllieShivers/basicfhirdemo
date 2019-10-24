import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Basic FHIR Demo';

  // 1. Get ID, lastname, bday from input fields
  // 2. Get patient from fhir server based on id
  // 3. Compare lastname and bday to data from fhir server
  // 4a. If doesn't match, show login error and stop here
  // 4b. If matches, store full name and id for patient
  // 5. Launch observation list component passing patient
  // 6. Display patient name and ID at top of screen
  // 7. Get observations from server with patient id
  // 8. filter list of observations to those in scope
  // 9. List procedure names and procedure dates by most recent
  // 10. When procedure selected launch instructions component
  // 11. Query google API (or whatever) for articles
  // 11a. Filter articles? Prioritize by source? Etc.

}
