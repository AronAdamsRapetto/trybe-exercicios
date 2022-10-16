class Dog {
  name: string;
  age: number;
  breed: string;

  constructor(name: string, age: number, breed:string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  sleep = (): void => console.log(`${this.name} está dormindo`);
  eat = (): void => console.log(`${this.name} está comendo`);
  poop = (): void => console.log(`${this.name} está cagando`);
}
const myDog = new Dog('Will', 12000, 'shitsu');

myDog.sleep();
myDog.eat();
myDog.poop();
myDog.sleep();

class House {
  address: string;
  size: number;
  residents: string[];

  constructor(address: string, size: number, residents: string[]) {
    this.address = address,
    this.residents = [...residents];
    this.size = size;
  }

  clean = (): void => console.log(`The house has been cleaning up`);
}
const myHouse = new House('Rua da pinga', 1, ['Astolfo', 'Zezin']);

myHouse.clean();

class Fly {
  vehicle: string;
  distance: number;
  destination: string;

  constructor(vehicle:string, distance:number, destination:string) {
    this.distance = distance;
    this.vehicle = vehicle;
    this.destination = destination
  }
  to = (): void => console.log(`Flying to ${this.destination}`);
}

const myFly = new Fly('plain', 1, 'here');

myFly.to();
