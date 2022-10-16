export class SuperClass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

export class SubClass extends SuperClass {
  constructor() {
    super()
    this.isSuper = false;
  }
 }