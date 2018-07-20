import { NgModule } from '@angular/core';
import { EmployeeListUpdateComponent } from './employee-list-update/employee-list-update';
<<<<<<< HEAD
import { AppointmentListUpdateComponent } from './appointment-list-update/appointment-list-update';
import { CustomerListUpdateComponent } from './customer-list-update/customer-list-update';
//import { CustomerListUpdateComponent } from './customer-list-update/customer-list-update';
@NgModule({
	declarations: [EmployeeListUpdateComponent,
    AppointmentListUpdateComponent,
    CustomerListUpdateComponent],
    //CustomerListUpdateComponent],
	imports: [],
	exports: [EmployeeListUpdateComponent,
    AppointmentListUpdateComponent,
    CustomerListUpdateComponent],
    //CustomerListUpdateComponent]
=======
import { ProductUpdateComponent } from './product-update/product-update';
import { ServiceUpdateComponent } from './service-update/service-update';
@NgModule({
	declarations: [EmployeeListUpdateComponent,
    ProductUpdateComponent,
    ServiceUpdateComponent],
	imports: [],
	exports: [EmployeeListUpdateComponent,
    ProductUpdateComponent,
    ServiceUpdateComponent]
>>>>>>> a0d961051b13c47c54f47e0223f0d5767ae806b0
})
export class ComponentsModule {}
