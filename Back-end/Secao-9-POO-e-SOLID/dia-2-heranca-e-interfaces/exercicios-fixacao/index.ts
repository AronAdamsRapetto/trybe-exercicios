import { SubClass, SuperClass } from "./exercise-1";
import MyClass from "./exercise-2";
import { ConsoleLogger, ConsoleLogger2, ExampleDataBase } from "./exercise-3";

// Exercicio 1
const mySuperClass = new SuperClass();
const mySubClass = new SubClass();

export const myFunc = (myClass: SuperClass) => {
  myClass.sayHello();
  if (myClass.isSuper) return console.log('Super!');
  return console.log('Sub!');
}

myFunc(mySuperClass);
myFunc(mySubClass);

// Exercicio 2

const myClass = new MyClass(12);

console.log(myClass.myFunc(12));

// Exercicio 3

const consoleLog = new ConsoleLogger();
const consoleLog2 = new ConsoleLogger2();

const db1 = new ExampleDataBase(consoleLog);
const db2 = new ExampleDataBase(consoleLog2);
const db3 = new ExampleDataBase();

db1.save('conteudo', 'ficticio');
db2.save('sem', 'criatividade');
db1.save('agora', 'vai');