import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {appRoutes} from './routerConfig';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { PatientportalComponent } from './patientportal/patientportal.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientportalComponent,
    FileNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
