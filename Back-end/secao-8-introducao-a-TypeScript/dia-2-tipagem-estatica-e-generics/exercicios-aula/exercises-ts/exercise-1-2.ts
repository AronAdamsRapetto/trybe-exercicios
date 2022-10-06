class Car {
  brand: string;
  color: string;
  doors: number;
  
  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  
  honk = () => console.log('Aciona buzina!');

  turnOn = () => console.log('Liga o carro');

  turnOff = () => console.log('Desliga o carro');

  speedUp = () => console.log('Acelera o carro');

  speedDown = () => console.log('Desacelera o carro');

  stop = () => console.log('Para o carro');

  turn = (direction: string) => console.log(`Vira para ${direction}`);
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