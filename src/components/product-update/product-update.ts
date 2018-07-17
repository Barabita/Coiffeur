import { Component } from '@angular/core';
import {Product} from "../../domain/Product";
import {ViewController} from "ionic-angular";
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ProductUpdateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-update',
  templateUrl: 'product-update.html'
})
export class ProductUpdateComponent {

  product: Product = new Product();

  constructor(private viewCtrl: ViewController,public navCtrl: NavController ,private params: NavParams) {
    console.log('Hello ProductUpdateComponent Component');
    if(this.params.data.product != null)
    this.product = this.params.data.product;
  
  }

  save(){
    if(this.isNotEmpty(this.product)){
    this.viewCtrl.dismiss({product: this.product});
    }
  }

  quit(){
    this.navCtrl.pop();
      
  }
  
  isNotEmpty(item: any): boolean {
    return !(typeof item == 'undefined' || item == null || item == "");
  }

}
