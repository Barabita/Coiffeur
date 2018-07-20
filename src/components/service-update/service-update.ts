import { Component } from '@angular/core';
import {Service} from "../../domain/Service";
import {ViewController} from "ionic-angular";
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServiceUpdateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'service-update',
  templateUrl: 'service-update.html'
})
export class ServiceUpdateComponent {

  service: Service = new Service();
  

  constructor(private viewCtrl: ViewController,public navCtrl: NavController,private params: NavParams ) {
    console.log('Hello ServiceUpdateComponent Component');
    debugger;
    if(this.params.data.service != null)
    this.service = this.params.data.service;
  }

  save(){
    if(this.isNotEmpty(this.service)){
    this.viewCtrl.dismiss({service: this.service});
    }
  }

  quit(){
    this.navCtrl.pop();
  }

  isNotEmpty(item: any): boolean {
    return !(typeof item == 'undefined' || item == null || item == "")
  }

}
