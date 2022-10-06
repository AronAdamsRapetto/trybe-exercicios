"use strict";
class Car {
    constructor(brand, color, doors) {
        this.honk = () => console.log('Aciona buzina!');
        this.turnOn = () => console.log('Liga o carro');
        this.turnOff = () => console.log('Desliga o carro');
        this.speedUp = () => console.log('Acelera o carro');
        this.speedDown = () => console.log('Desacelera o carro');
        this.stop = () => console.log('Para o carro');
        this.turn = (direction) => console.log(`Vira para ${direction}`);
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
}
const car = new Car('Ford KA', 'white', 4);
car.turnOn();
car.speedUp();
car.speedDown();
car.turn('esqueda');
car.turn('direita');
car.speedUp();
car.speedDown();
car.turn('direita');
car.speedUp();
car.speedDown();
car.stop();
car.honk();
car.speedUp();
car.speedDown();
car.turn('direita');
car.speedUp();
car.speedDown();
car.turn('esquerda');
car.turn('direita');
car.stop();
