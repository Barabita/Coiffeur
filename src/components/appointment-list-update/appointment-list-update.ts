import { Component } from '@angular/core';
import { ViewController, NavController, NavParams, ModalController } from "ionic-angular";
import { Appointment } from '../../domain/Appointment';
import { Customer } from '../../domain/Customer';
import { CustomerListUpdateComponent } from '../customer-list-update/customer-list-update';
import { Sample } from '../../domain/Sample';
/**
 * Generated class for the AppointmentListUpdateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'appointment-list-update',
  templateUrl: 'appointment-list-update.html'
})
export class AppointmentListUpdateComponent {

  appointment: Appointment = new Appointment();
  customerList: Customer[] = [];
  customer: Customer = new Customer();
  samples:Sample = new Sample();

  constructor(private viewCtrl: ViewController, 
              private params: NavParams, 
              private modalCtrl: ModalController,
              private navCtrl: NavController) {
    console.log('Hello AppointmentListUpdateComponent Component');

    if(this.params.data.appointment != null)
      this.appointment = this.params.data.appointment;
    this.getCustomerList();
  }


  addNewCustomer() {

    let modal = this.modalCtrl.create(CustomerListUpdateComponent, { customer: this.customer });
    modal.onDidDismiss((res) => {
      console.table(res);
      this.customerList.push(res.customer);
    });
    debugger;
    modal.present();
  }

  getCustomerList(){
    this.customerList = this.samples.getCustomerList();
  }

  getEmplyeeList(){
    return this.samples.getEmployeeList();
  }

  save() {
    this.viewCtrl.dismiss({ appointment: this.appointment });

  }

  quit() {
    this.viewCtrl.dismiss();
  }
}
