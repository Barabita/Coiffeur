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
import {ProductsAndServicesPage} from "../pages/products-and-services/products-and-services";
import {EmployeeListUpdateComponent} from "../components/employee-list-update/employee-list-update";
<<<<<<< HEAD
import { ProductUpdateComponent } from '../components/product-update/product-update';
import { ServiceUpdateComponent } from '../components/service-update/service-update';
=======
import { AppointmentPage } from '../pages/appointment/appointment';
>>>>>>> 6032d4a2ff89ce4bc95a009d7b7dc3fff42d58c6

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    EmployeePage,
    EmployeeListUpdateComponent,
<<<<<<< HEAD
    ProductsAndServicesPage,
    ProductUpdateComponent,
    ServiceUpdateComponent
=======
    AppointmentPage
>>>>>>> 6032d4a2ff89ce4bc95a009d7b7dc3fff42d58c6
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
<<<<<<< HEAD
    ProductsAndServicesPage,
    ProductUpdateComponent,
    ServiceUpdateComponent
=======
    AppointmentPage
>>>>>>> 6032d4a2ff89ce4bc95a009d7b7dc3fff42d58c6

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
