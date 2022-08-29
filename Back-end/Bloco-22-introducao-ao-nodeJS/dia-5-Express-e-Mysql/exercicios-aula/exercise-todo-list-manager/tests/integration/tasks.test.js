const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

afterEach(sinon.restore);

describe('Testes da Rota Tasks', function () {
  it('Testa a rota POST /tasks', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const response = await chai.request(app).post('/tasks').send({
      nome: 'Entregar Pizza',
      descricao: 'Tarefa de Trabalho',
    });

    expect(response.status).to.equal(201);
    expect(response.body).to.be.deep.equal({ message: 'Inserido com sucesso no id 1' });
  });

  it('Testa a rota PUT /tasks/:id', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await chai.request(app).put('/tasks/1').send({
      nome: 'Estudar',
      descricao: 'Trybe',
    });

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ message: 'Linhas atuaizadas com sucesso: 1' });
  });

  it('Testa a rota DELETE /tasks/:id', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await chai.request(app).delete('/tasks/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ message: 'Linhas removidas com sucesso: 1' });
  });

  it('Testa a rota GET /tasks', async function () {
    const responseMockDB = [
      {
        id: 1,
        nome: 'Estudar',
        descricao: 'Trybe'
      },
      {
        id: 2,
        nome: 'Entregar pizza',
        descricao: 'Trabalho'
      }
    ] 
    sinon.stub(connection, 'execute').resolves([responseMockDB]);

    const response = await chai.request(app).get('/tasks');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(responseMockDB);
  });

  it('Testa a rota GET /tasks/:id', async function () {
    const responseMockDB = [{
      id: 1,
      nome: 'Estudar',
      descricao: 'Trybe'
    }];
    sinon.stub(connection, 'execute').resolves([responseMockDB]);

    const response = await chai.request(app).get('/tasks/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(responseMockDB);
  });
});