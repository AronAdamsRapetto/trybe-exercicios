import Employee from "./Employee.interface";
import Person from "./Person.class";
import Subject from "./Subject.class";

export default class Teacher extends Person implements Employee {
  subject: Subject;
  salary: number;
  admissionDate: Date;
  registration: string;

  constructor(name: string, date: Date, salary: number, subject: Subject) {
    super(name, date);
    this.salary = salary;
    this.subject = subject;
    this.admissionDate = new Date();
    this.registration = this.generateRegistration();
  }  

  generateRegistration() {
    const firstRandomString = Math.floor(Date.now() * Math.random()).toString(36);
    const secontRandomString = Math.floor(Date.now() * Math.random()).toString(36);
    return `${firstRandomString}-${secontRandomString}`;
  }
}