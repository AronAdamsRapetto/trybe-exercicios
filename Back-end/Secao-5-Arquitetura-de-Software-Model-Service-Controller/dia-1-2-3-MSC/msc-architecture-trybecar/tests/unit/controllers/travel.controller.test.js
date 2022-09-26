const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { travelService } = require('../../../src/services');
const travelController = require('../../../src/controllers/travel.controller');

describe('Teste de unidade do travelController', function () {
  it('Buscando as viagens em aberto quando não tem nenhuma viagem cadastrada', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    sinon
      .stub(travelService, 'getOpenTravels')
      .resolves({ type: null, message: [] });
   
    await travelController.getOpenTravels(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ type: null, message: [] });
  });
});