import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from '../../../node_modules/ionic-angular';
import { Customer } from '../../domain/Customer';

/**
 * Generated class for the CustomerListUpdateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customer-list-update',
  templateUrl: 'customer-list-update.html'
})
export class CustomerListUpdateComponent {

  customer: Customer = new Customer();

  constructor(private viewCtrl: ViewController,
              private params: NavParams,
              private navCtrl: NavController) {
    console.log('Hello CustomerListUpdateComponent Component');
              
    if(this.params.data.customer != null)
      this.customer = this.params.data.customer;
  }

  save() {
    this.viewCtrl.dismiss({ customer: this.customer });

  }

  quit() {
    this.viewCtrl.dismiss();
  }
}
