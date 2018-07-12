import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {Employee} from "../../domain/Employee";
import {Sample} from "../../domain/Sample";
import {EmployeeListUpdateComponent} from "../../components/employee-list-update/employee-list-update";


@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {

  employeeList: Employee[] = [];

  employeeName = "EMPLOYEE2";

  samples: Sample = new Sample();

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              public navParams: NavParams) {

    this.getEmployeeList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
  }

  getEmployeeList() {
    this.employeeList = this.samples.getEmployeeList();
  }

  addNewEmployee() {

    let modal = this.modalCtrl.create(EmployeeListUpdateComponent, {data: 'Ayşe'});
    modal.onDidDismiss((res) => {
      console.table(res);
      debugger;
      this.employeeList.push(res.employee);
    });

    modal.present();
  }

}
