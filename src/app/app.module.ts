import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { UserCustomerListComponent } from './user-customer-list/user-customer-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HostelsListComponent } from './hostels-list/hostels-list.component';
import { LogimComponent } from './logim/logim.component';
import { AuthService } from './auth.service';
import { AppRouting } from './app.routing';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    UserCustomerListComponent,
    CoursesListComponent,
    HostelsListComponent,
    LogimComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRouting
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
