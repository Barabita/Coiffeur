
import {Employee} from "./Employee";
import {Product} from "./Product";
import {Service} from "./Service";
import { Appointment } from "./Appointment";

/*
 * @author mali.sahin
 * @since  12-Jul-18.
 */


export class Sample {

  employeeList: Employee[] = [];
  productList: Product[] = [];
  serviceList: Service[] = [];

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

  getProductList(): Product[]{
    let prod1 = new Product();
    prod1.id = '1';
    prod1.name = 'Hairspray';
    prod1.info = 'Extra volume and smoothness for your special events.';
    prod1.price = 41.99;
    this.productList.push(prod1);

    let prod2 = new Product();
    prod2.id = '2';
    prod2.name = 'Face Mist';
    prod2.info = "Keepin' it fresh.";
    prod2.price = 19.99;
    this.productList.push(prod2);

    let prod3 = new Product();
    prod3.id = '3';
    prod3.name = 'Clay Mask';
    prod3.info = 'Fight your pores with soothing rosemary extract.';
    prod3.price = 49.99;
    this.productList.push(prod3);

    return this.productList;
  }
  getServiceList(): Service[]{
    let serv1 = new Service();
    serv1.id = '101';
    serv1.name = 'Haircut';
    serv1.info = 'Cut your feelings away.';
    serv1.price = 24.99;
    serv1.time = '20'
    this.serviceList.push(serv1);

    let serv2 = new Service();
    serv2.id = '102';
    serv2.name = 'Hot towel and mint';
    serv2.info = "For an instant freshness.";
    serv2.price = 9.99;
    serv2.time = '5'
    this.serviceList.push(serv2);

    let serv3 = new Service();
    serv3.id = '103';
    serv3.name = 'Relaxing shampoo';
    serv3.info = "What else would you need after a long day?";
    serv3.price = 9.99;
    serv3.time = '10'
    this.serviceList.push(serv3);

    return this.serviceList;
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
