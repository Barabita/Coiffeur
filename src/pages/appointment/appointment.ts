import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../domain/Appointment';
import { Sample } from '../../domain/Sample';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  appointmentList: Appointment[] = [];
  samples: Sample = new Sample();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getAppointmentList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }

  getAppointmentList(){
    this.appointmentList = this.samples.getAppointmentList();
  }

}
