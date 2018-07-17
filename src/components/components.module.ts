import { NgModule } from '@angular/core';
import { EmployeeListUpdateComponent } from './employee-list-update/employee-list-update';
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
})
export class ComponentsModule {}
