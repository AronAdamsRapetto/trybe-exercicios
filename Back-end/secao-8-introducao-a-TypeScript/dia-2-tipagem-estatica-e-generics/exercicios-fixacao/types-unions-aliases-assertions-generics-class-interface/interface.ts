// EX:
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
      return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}

// EXERCICIOS:

interface car {
  model: string;
  brand: string;
}

interface feine {
  species: string;
  name: string;
  age: number;
}

interface aircraft {
  model: string;
  type: string;
  size: string;
}
