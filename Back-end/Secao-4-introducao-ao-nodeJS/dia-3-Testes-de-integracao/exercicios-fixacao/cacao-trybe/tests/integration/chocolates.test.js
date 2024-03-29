const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ]});

describe('Testando a API Cacao Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });
  
  afterEach(function () {
    sinon.restore();
  });
  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const response = await chai.request(app).get('/chocolates');

      expect(response.status).to.be.equals(200);

      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando médoto GET em /chocolates/total para buscar o total de chocolates', function () {
    it('Retorna o total de chocolates', async function () {
      const response = await chai.request(app).get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({
        "totalChocolates": 4
      });
    });
  });

  describe('Usando médoto GET em /chocolates/search para buscar chocolate pro nome', function () {
    it('Retorna Mon Chéri e Mound', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.be.deep.equal([
        {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
        },
        {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
        }
      ]);
    });

    it('Retorna um array vazio e status 404', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(404);
      expect(response.body.chocolates).to.be.deep.equal([]);
    });
  });

  describe('Usando médoto PUT em /chocolates/:id para alterar um chocolate', function () {
    it('Altera o chocolate de id 1 pelo endpoit /chocolates/1', async function () {
      const response = await chai.request(app).put('/chocolates/1').send({ 
        "name": "Mint Pretty Good",
        "brandId": 2
      });

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({
        "chocolate": { 
          "id": 1,
          "name": "Mint Pretty Good",
          "brandId": 2
        }
      });
    });

    it('Retorna uma mensagem de erro e status 404 para o endpoint /chocolates/555', async function () {
      const response = await chai.request(app).put('/chocolates/555').send({ 
        "name": "Mint Pretty Good",
        "brandId": 2
      });

      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ 
        "message": "chocolate not found"
      });
    });
  });
});
