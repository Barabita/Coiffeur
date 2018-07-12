import { Component } from '@angular/core';
import {Employee} from "../../domain/Employee";
import {ViewController} from "ionic-angular";

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

  constructor(private viewCtrl: ViewController) {
    console.log('Hello EmployeeListUpdateComponent Component');

  }


  save(){
    this.viewCtrl.dismiss({employee: this.employee});

  }

  quit(){

  }
}
