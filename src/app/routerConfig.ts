import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {PatientportalComponent} from './patientportal/patientportal.component';
import {FileNotFoundComponent} from './components/file-not-found/file-not-found.component';
import {AppComponent} from './app.component';

export const appRoutes: Routes = [
  { path: 'patient', component: PatientportalComponent },
  { path: '', component: AppComponent },
  { path: '**', component: FileNotFoundComponent}
];
