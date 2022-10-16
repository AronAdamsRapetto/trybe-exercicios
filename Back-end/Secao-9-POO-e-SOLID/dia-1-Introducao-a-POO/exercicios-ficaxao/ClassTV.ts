interface conections {
  HDMI1: boolean,
  HDMI2?: boolean,
  Ethernet?: boolean,
  VGA: boolean,
  usb?: boolean,
}

class Tv {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: conections;
  private connectedTo!: string[];

  constructor(brand: string,
    size: number,
    resolution: string,
    connections: conections) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn = () => {
    console.log(`TV info:
    Marca: ${this.brand}
    Tamanho: ${this.size}
    Resolução: ${this.resolution}
    Conexões: ${this.connections}`);
  }

  getConnectedTo = () => {
    return this.connectedTo;
  };

  setConnectedTo = (value: keyof conections) => {
    const verifyConnection = Object
      .keys(this.connections)
        .some((conn) => conn === value && this.connections[conn] === false);

    if (verifyConnection) {
      this.connections[value] = true;
    } else {
      console.log('Sorry, connection unavailable!');
    }
    if (verifyConnection && this.connectedTo) {
      this.connectedTo.push(value);
    } else {
      this.connectedTo = [value];
    }
  };  
};

const Tv1 = new Tv('Phillips', 50, '1920:1080', { HDMI1: false, VGA: false });

Tv1.turnOn();

console.log(Tv1.getConnectedTo());

Tv1.setConnectedTo('VGA');

console.log(Tv1.getConnectedTo());

Tv1.setConnectedTo('Ethernet');