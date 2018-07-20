import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsAndServicesPage } from './products-and-services';

@NgModule({
  declarations: [
    ProductsAndServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsAndServicesPage),
  ],
})
export class ProductsAndServicesPageModule {}
