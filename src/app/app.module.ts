import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {appRoutes} from './routerConfig';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { PatientportalComponent } from './components/patientportal/patientportal.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { ProceduresComponent } from './components/procedures/procedures.component';
import { ArticlesComponent } from './components/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientportalComponent,
    FileNotFoundComponent,
    ProceduresComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
