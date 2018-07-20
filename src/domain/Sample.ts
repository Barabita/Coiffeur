import {Employee} from "./Employee";
import { Appointment } from "./Appointment";
import { App } from "ionic-angular/umd";
import { Customer } from "./Customer";
/**
 * @author mali.sahin
 * @since  12-Jul-18.
 */


export class Sample {

  employeeList: Employee[] = [];
  appointmentList: Appointment[] = [];
  customerList: Customer[] = [];

  arrangeLists() {

    //------------------------------çalışanlar------------------------------

    let em1 = new Employee();
    em1.name = "Ali";
    em1.age = 26;
    em1.surname = "Şahin";
    em1.id = "1";
    this.employeeList.push(em1);

    let em2 = new Employee();
    em2.name = "Elif";
    em2.surname = "Şahin";
    em2.age = 20;
    em2.id = "2";
    this.employeeList.push(em2);

    let em3 = new Employee();
    em3.name = "Nur";
    em3.surname = "Musevit";
    em3.age = 21;
    em3.id = "3";
    this.employeeList.push(em3);

    //---------------müşteriler-------------------------

    let cs1 = new Customer();
    cs1.id = 4;
    cs1.name = "aaaa";
    cs1.surname = "aa";
    cs1.phoneNumber = 1111;
    this.customerList.push(cs1);

    let cs2 = new Customer();
    cs2.id = 5;
    cs2.name = "bbbb";
    cs2.surname = "bb";
    cs2.phoneNumber = 2222;
    this.customerList.push(cs2);

    let cs3 = new Customer();
    cs3.id = 6;
    cs3.name = "cccc";
    cs3.surname = "cc";
    cs3.phoneNumber = 3333;
    this.customerList.push(cs3);
    
    //--------------------------randevular------------------------------- 

    let ap1 = new Appointment();
    ap1.customer = cs1;
    ap1.appointmentDate = "16.7.2018-12:00";
    ap1.employee = em1;
    this.appointmentList.push(ap1);

    let ap2 = new Appointment();
    ap2.customer = cs2;
    ap2.appointmentDate = "16.7.2018-14:00";
    ap2.employee = em2;
    this.appointmentList.push(ap2);

    let ap3 = new Appointment();
    ap3.customer = cs3;
    ap3.appointmentDate = "16.7.2018-16:00";
    ap3.employee = em3;
    this.appointmentList.push(ap3);
  }

  getEmployeeList(): Employee[] {
    this.arrangeLists();
    return this.employeeList;
  }

  getAppointmentList(): Appointment[] {
    this.arrangeLists();
    return this.appointmentList;
  }

  getCustomerList(): Customer[] {
    this.arrangeLists();
    return this.customerList;
  }
}
