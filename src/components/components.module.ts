import { NgModule } from '@angular/core';
import { EmployeeListUpdateComponent } from './employee-list-update/employee-list-update';
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
})
export class ComponentsModule {}
