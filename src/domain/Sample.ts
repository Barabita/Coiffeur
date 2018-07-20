<<<<<<< HEAD
=======

>>>>>>> a0d961051b13c47c54f47e0223f0d5767ae806b0
import {Employee} from "./Employee";
import {Product} from "./Product";
import {Service} from "./Service";
import { Appointment } from "./Appointment";
<<<<<<< HEAD
import { App } from "ionic-angular/umd";
import { Customer } from "./Customer";
/**
=======

/*
>>>>>>> a0d961051b13c47c54f47e0223f0d5767ae806b0
 * @author mali.sahin
 * @since  12-Jul-18.
 */


export class Sample {

  employeeList: Employee[] = [];
<<<<<<< HEAD
  appointmentList: Appointment[] = [];
  customerList: Customer[] = [];

  arrangeLists() {

    //------------------------------çalışanlar------------------------------
=======
  productList: Product[] = [];
  serviceList: Service[] = [];
>>>>>>> a0d961051b13c47c54f47e0223f0d5767ae806b0

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

<<<<<<< HEAD
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
=======
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
>>>>>>> a0d961051b13c47c54f47e0223f0d5767ae806b0

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
