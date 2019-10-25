import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { PatientportalComponent } from './components/patientportal/patientportal.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { ProceduresComponent } from './components/procedures/procedures.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientService } from './services/patient.service';

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
    RouterModule.forRoot(routes),
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
