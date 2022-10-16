import Enrolable from "./enrollable.interface";
import Person from "./Person.class";

export default class Employee extends Person implements Enrolable {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, date: Date, salary: number, admission: Date) {
    super(name, date);
    this._admissionDate = admission;
    this._salary = salary
    this._enrollment = this.generateEnrollment();
  }

  get admissionDate() { return this._admissionDate }
  set admissionDate(newValue: Date) { this._admissionDate = newValue }

  get salary() { return this._salary }
  set salary(newValue: number) { this._salary = newValue }

  get enrollment() { return this._enrollment }
  set enrollment(newValue: string) { this._enrollment = newValue }

  generateEnrollment(): string {
    const firstRandomString = Math.floor(Date.now() * Math.random()).toString(36);
    const secontRandomString = Math.floor(Date.now() * Math.random()).toString(36);
    return `${firstRandomString}-${secontRandomString}`;
  }
}