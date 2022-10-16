"use strict";
class Dog {
    constructor(name, age, breed) {
        this.sleep = () => console.log(`${this.name} está dormindo`);
        this.eat = () => console.log(`${this.name} está comendo`);
        this.poop = () => console.log(`${this.name} está cagando`);
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
}
const myDog = new Dog('Will', 12000, 'shitsu');
myDog.sleep();
myDog.eat();
myDog.poop();
myDog.sleep();
class House {
    constructor(address, size, residents) {
        this.clean = () => console.log(`The house has been cleaning up`);
        this.address = address,
            this.residents = [...residents];
        this.size = size;
    }
}
const myHouse = new House('Rua da pinga', 1, ['Astolfo', 'Zezin']);
myHouse.clean();
class Fly {
    constructor(vehicle, distance, destination) {
        this.to = () => console.log(`Flying to ${this.destination}`);
        this.distance = distance;
        this.vehicle = vehicle;
        this.destination = destination;
    }
}
const myFly = new Fly('plain', 1, 'here');
myFly.to();
