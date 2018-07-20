import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {Product} from "../../domain/Product";
import {Service} from "../../domain/Service";
import {Sample} from "../../domain/Sample";
import {ProductUpdateComponent} from "../../components/product-update/product-update";
import {ServiceUpdateComponent} from "../../components/service-update/service-update";

@IonicPage()
@Component({
  selector: 'page-products-and-services',
  templateUrl: 'products-and-services.html',
})
export class ProductsAndServicesPage {

  productList: Product[] = [];
  serviceList: Service[] = [];

  editedProduct: Product;
  editedService: Service;
  editFlag: boolean = false;

  employeeName = "EMPLOYEE2";

  samples: Sample = new Sample();
  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,private modalCtrl2: ModalController,
    public navParams: NavParams) {

    this.getServiceList();
    this.getProductList();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsAndServicesPage');
  }

  getServiceList() {
    this.serviceList = this.samples.getServiceList();
  }

  getProductList() {
    this.productList = this.samples.getProductList();
  }

  addNewProduct(){
    let modal = this.modalCtrl.create(ProductUpdateComponent, {product : this.editedProduct});
    modal.onDidDismiss((res) => {
      if(this.isNotEmpty(res)){
      console.table(res);
      if (!this.editFlag)
      this.productList.push(res.product);
      }
  });
  modal.present();
}

  addNewService(){
    
    let modal2 = this.modalCtrl2.create(ServiceUpdateComponent, {service: this.editedService});
    modal2.onDidDismiss((res) => {
      if(this.isNotEmpty(res)){
      console.table(res);
      debugger;
      if (!this.editFlag)
      this.serviceList.push(res.service);
      }
  });
  modal2.present();
}

removeService(item: any){
  if(this.isNotEmpty(item)){
  console.table(item);
  debugger;
  var index = this.serviceList.findIndex(x => x.id == item.id);
  this.serviceList.splice(index,1);
  //delete this.serviceList[index];
  }
}

removeProduct(item: any){
  if(this.isNotEmpty(item)){
    console.table(item);
    debugger;
    var index = this.productList.findIndex(x => x.id == item.id);
    this.productList.splice(index,1);
}
}

editService(item: any) {
  debugger;
  console.table(item);
  this.editedService = item;
  this.editFlag = true;
  this.addNewService();
}
editProduct(item: any) {
  debugger;
  console.table(item);
  this.editedProduct = item;
  this.editFlag = true;
  this.addNewProduct();
}

isNotEmpty(item: any): boolean {
  return !(typeof item == 'undefined' || item == null || item == "")
}
goback() {
  this.navCtrl.pop();
}
}
