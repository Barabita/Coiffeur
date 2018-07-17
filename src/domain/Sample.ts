<<<<<<< HEAD
import {Employee} from "./Employee";
import { Appointment } from "./Appointment";
import { App } from "ionic-angular/umd";
=======
import { Employee } from "./Employee";
>>>>>>> 1bdfd0c4bff722cafd26a9cdd58fa932905aabd3
/**
 * @author mali.sahin
 * @since  12-Jul-18.
 */


export class Sample {

  employeeList: Employee[] = [];

  getEmployeeList(): Employee[] {
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

    return this.employeeList;

  }

  appointmentList: Appointment[] = [];

  getAppointmentList(): Appointment[] {
    let ap1 = new Appointment();
    ap1.customerName = "Müşteri1";
    ap1.customerPhoneNumber = 5467891234;
    ap1.appointmentDate = "16.7.2018-12:00";
    ap1.employee = "Ali";
    this.appointmentList.push(ap1);

    let ap2 = new Appointment();
    ap2.customerName = "Müşteri1";
    ap2.customerPhoneNumber = 5459999999;
    ap2.appointmentDate = "16.7.2018-14:00";
    ap2.employee = "Nur";
    this.appointmentList.push(ap2);

    let ap3 = new Appointment();
    ap3.customerName = "Müşteri2";
    ap3.customerPhoneNumber = 5440000000;
    ap3.appointmentDate = "16.7.2018-16:00";
    ap3.employee = "Elif";
    this.appointmentList.push(ap3);

    return this.appointmentList;

  }
}
