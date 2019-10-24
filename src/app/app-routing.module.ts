import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatientportalComponent} from './components/patientportal/patientportal.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {LoginComponent} from './components/login/login.component';
import {ProceduresComponent} from './components/procedures/procedures.component';
import {AppComponent} from './app.component';
import {FileNotFoundComponent} from './components/file-not-found/file-not-found.component';

export const routes: Routes = [
  { path: 'patientportal', component: PatientportalComponent },
  { path: 'articles', component: ArticlesComponent},
  { path: 'procedures', component: ProceduresComponent},
  { path: '', component: LoginComponent },
  { path: '**', component: FileNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
