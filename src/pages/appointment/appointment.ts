import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Appointment } from '../../domain/Appointment';
import { Sample } from '../../domain/Sample';
import { AppointmentListUpdateComponent } from '../../components/appointment-list-update/appointment-list-update';

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
  editFlag: boolean = false;
  editAppointment: Appointment = new Appointment();

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public navParams: NavParams) {
    this.getAppointmentList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }

  getAppointmentList(){
    this.appointmentList = this.samples.getAppointmentList();
  }

  addNewAppointment() {

    let modal = this.modalCtrl.create(AppointmentListUpdateComponent, { appointment: this.editAppointment });
    modal.onDidDismiss((res) => {
      console.table(res);
      if (!this.editFlag)
        this.appointmentList.push(res.appointment);
    });

    modal.present();
  }

  edit(item: any) {
    debugger;
    console.table(item);
    this.editAppointment = item;
    this.editFlag = true;
    this.addNewAppointment();
  }

}
