const { expect } = require('chai');
const sinon = require('sinon');
const { createTravel } = require('../../../src/services/passenger.service');
const travelModel = require('../../../src/models/travel.model');
const waypointModel = require('../../../src/models/waypoints.model');

const { travelResponse } = require('./mocks/passenger.service.mock');

describe('Testes de unidades do passengerService', function () {
  describe('solicitação de viagem', function () {
    it('sem pontos de parada é realizada com sucesso', async function () {
      // arrange
       sinon.stub(travelModel, 'insertTravel').resolves(1); // retorna travel com ID 1
       sinon.stub(travelModel, 'getTravelById').resolves(travelResponse);
      const WAITING_DRIVER = 1;
      const passenger = {
        id: 1,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
      };
      // act
      const travel = await createTravel(
        passenger.id,
        {
          startingAddress: passenger.startingAddress,
          endingAddress: passenger.endingAddress,
        },
      );
      // assert
      expect(travel.message).to.deep.equal({
        id: 1,
        passengerId: 1,
        driverId: null,
        travelStatusId: WAITING_DRIVER,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
        requestDate: '2022-08-24T03:04:04.374Z',
      });
    });

    it('com pontos de parada é realizada com sucesso', async function () {
      // arrange
       sinon.stub(travelModel, 'insertTravel').resolves(1); // retorna travel com ID 1
       sinon.stub(travelModel, 'getTravelById').resolves(travelResponse);
       sinon.stub(waypointModel, 'insertWayPoints').resolves(1); // retorna waypoint com ID 1

      const WAITING_DRIVER = 1;
      const passenger = {
        id: 1,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
      };

      // act
      const travel = await createTravel(
        passenger.id,
        {
          startingAddress: passenger.startingAddress,
          endingAddress: passenger.endingAddress,
          waypoints: passenger.waypoints,
      },
      );

      // assert
      expect(travel.message).to.deep.equal({
        id: 1,
        passengerId: 1,
        driverId: null,
        travelStatusId: WAITING_DRIVER,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
        requestDate: '2022-08-24T03:04:04.374Z',
      });
    });

    it('com mesmo local de origem e destino é rejeitada', async function () {
      // arrange
      const passenger = {
        id: 1,
        startingAddress: 'Rua X',
        endingAddress: 'Rua X',
      };

      // act
      const error = await createTravel(
        passenger.id,
        {
          startingAddress: passenger.startingAddress,
          endingAddress: passenger.endingAddress,
        },
      );

      // assert
      expect(error.type).to.equal('INVALID_VALUE');
      expect(error.message).to.equal('"endingAddress" contains an invalid value');
    });
  });
   afterEach(function () {
     sinon.restore();
   });
 });
