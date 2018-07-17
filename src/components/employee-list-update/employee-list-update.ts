import { Component } from '@angular/core';
import { Employee } from "../../domain/Employee";
import { ViewController, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the EmployeeListUpdateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'employee-list-update',
  templateUrl: 'employee-list-update.html'
})
export class EmployeeListUpdateComponent {


  employee: Employee = new Employee();

  constructor(private viewCtrl: ViewController, private params: NavParams, private navCtrl: NavController) {
    console.log('Hello EmployeeListUpdateComponent Component');

    debugger;
    this.employee = this.params.data.employee;
  }


  save() {
    this.viewCtrl.dismiss({ employee: this.employee });

  }

  quit() {

  }
}
