import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {EmployeePage} from "../pages/employee/employee";
import {EmployeeListUpdateComponent} from "../components/employee-list-update/employee-list-update";
import { AppointmentPage } from '../pages/appointment/appointment';
import { AppointmentListUpdateComponent } from '../components/appointment-list-update/appointment-list-update';
import { CustomerListUpdateComponent } from '../components/customer-list-update/customer-list-update';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    EmployeePage,
    EmployeeListUpdateComponent,
    AppointmentPage,
    AppointmentListUpdateComponent,
    CustomerListUpdateComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    EmployeePage,
    EmployeeListUpdateComponent,
    AppointmentPage,
    AppointmentListUpdateComponent,
    CustomerListUpdateComponent

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
