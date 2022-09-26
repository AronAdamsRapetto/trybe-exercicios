const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const driverModel = require('../../../src/models/driver.model');

describe('Testes de unidade do driverModel', function () {
  it('Realizando uma operação SELECT ALL com o model driver', async function () {
    const expected = [
      {
        id: 1,
        name: 'Liana Cisneiros',
      }, 
      {
        id: 2,
        name: 'Fábio Frazão',
      },
    ];

    sinon.stub(connection, 'execute').resolves(expected);

    const result = await driverModel.getAllDrivers();

    expect(result).to.be.deep.equal(expected);
  });

  it('Testa a operação INSERT de um carro com o model driver', async function () {
    const expected = 1;

    sinon.stub(connection, 'execute').resolves([{ insertId: expected }]);

    const result = await driverModel.insertCar({
      model: 'Tesla',
      color: 'black',
      licensePlate: 'ABC-1234',
    });

    expect(result).to.be.equal(expected);
  });

  it('Testa a operação SELECT de um carro por id', async function () {
    const expected = {
      id: 2,
      model: 'Volkswagen Gol',
      color: 'Vermelho',
      licensePlate: 'DZG-4376',
    };

    sinon.stub(connection, 'execute').resolves([[expected]]);

    const result = await driverModel.getCarById(2);

    expect(result).to.be.deep.equal(expected);
  });

  it('Testa a operação SELECT de um motorista por id', async function () {
    const expected = {
      id: 1,
      name: 'Liana Cisneiros',
    };

    sinon.stub(connection, 'execute').resolves([[expected]]);

    const result = await driverModel.findById(1);

    expect(result).to.be.deep.equal(expected);
  });

  it('Testa a operação INSERT de um motorista', async function () {
    const expected = 1;

    sinon.stub(connection, 'execute').resolves([{ insertId: expected }]);

    const result = await driverModel.addDriver({ name: 'Astolfo' });

    expect(result).to.be.equal(expected);
  });

  it('Testa a operaçã INSERT de um motorista + carro', async function () {
    const expected = 1;

    sinon.stub(connection, 'execute').resolves([{ insertId: expected }]);

    const result = await driverModel.addDriverCar({ driverId: 1, carId: 1 });

    expect(result).to.be.equal(expected);
  });

  afterEach(sinon.restore);
});