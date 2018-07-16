import { Employee } from "./Employee";
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
}
