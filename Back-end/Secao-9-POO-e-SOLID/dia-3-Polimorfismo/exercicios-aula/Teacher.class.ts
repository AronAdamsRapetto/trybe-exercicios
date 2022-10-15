import Employee from "./Employee.class";
import Subject from "./Subject.class";

export default class Teacher extends Employee {
  subject: Subject;

  constructor(name: string, date: Date, salary: number, subject: Subject) {
    super(name, date, salary, new Date());
    this.subject = subject;
  }
}