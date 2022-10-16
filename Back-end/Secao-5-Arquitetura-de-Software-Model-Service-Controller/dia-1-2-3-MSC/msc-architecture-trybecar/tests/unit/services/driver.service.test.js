const { expect } = require('chai');
const sinon = require('sinon');

const { driverService } = require('../../../src/services');
const { driverModel } = require('../../../src/models');

describe('Testes de unidades do driverService', function () {
  it('Listando pessoas motoristas', async function () {
    const expected = {
      type: null,
      message: [
        { id: 1, name: 'Liana Cisneiros' },
        { id: 2, name: 'Fábio Frazão' },
        { id: 3, name: 'Anastacia Bicalho' },
        { id: 4, name: 'Samara Granjeiro' },
        { id: 5, name: 'Levi Teixeira' },
      ],
    };

    sinon.stub(driverModel, 'findById').resolves([expected.message]);

    const result = await driverService.getDrivers();

    expect(result).to.be.deep.equal(expected);
  });

  describe('Cadastrando carro', function () {
    it('Cadastrando carro com sucesso', async function () {
      const expected = {
        type: null,
        message: {
          id: 1,
          model: 'Chevrolet Monza',
          color: 'Branco',
          licensePlate: 'ABC1A2B',
        },
      };
  
      sinon.stub(driverModel, 'insertCar').resolves(1);
      sinon.stub(driverModel, 'getCarById').resolves(expected.message);
  
      const result = await driverService.createCar({ 
        model: 'Chevrolet Monza',
        color: 'Branco',
        licensePlate: 'ABC1A2B',
      });
  
      expect(result).to.be.deep.equal(expected);
    });

    it('Cadastrando carro com erro semântico no attri. model', async function () {
      const expected = {
        type: 'INVALID_VALUE',
        message: '"model" length must be at least 3 characters long',
      };

      const error = await driverService.createCar({
        model: 'a',
        color: 'Branco',
        licensePlate: 'ABC1A2B',
      });

      expect(error).to.be.deep.equal(expected);
    });

    it('Cadastrando carro com erro semântico no attri. color', async function () {
      const expected = {
        type: 'INVALID_VALUE',
        message: '"color" length must be at least 2 characters long',
      };

      const error = await driverService.createCar({
        model: 'Chevrolet Monza',
        color: 'a',
        licensePlate: 'ABC1A2B',
      });

      expect(error).to.be.deep.equal(expected);
    });

    it('Cadastrando carro com erro semântico no attri. licensePlate', async function () {
      const expected = {
        type: 'INVALID_VALUE',
        message: '"licensePlate" length must be 7 characters long',
      };

      const error = await driverService.createCar({
        model: 'Chevrolet Monza',
        color: 'Branco',
        licensePlate: 'ABC1A2Babc',
      });

      expect(error).to.be.deep.equal(expected);
    });
  });
  afterEach(sinon.restore);
});