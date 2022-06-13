require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    await expect(response.name).toBe('Ancestor\'s Chosen');
  });
  
  it('getMagicCard deve ser uma função', () => {
    expect(typeof getMagicCard).toBe('function');
  });
  
  it('getMagicCard deve chamar a funcao fetch', async () => {
    const response = await getMagicCard('130550');
    await expect(fetch).toHaveBeenCalled();
  });
  
  it('getMagicCard deve chamar a funcao fetch com a url https://api.magicthegathering.io/v1/cards/130550', async () => {
    const response = await getMagicCard('130550');
    const url = 'https://api.magicthegathering.io/v1/cards/130550';    
    await expect(fetch).toHaveBeenCalledWith(url);
  });

  it('getMagicCard deve retornar um objeto igual a "card"', async () => {
    const response = await getMagicCard('130550');
    await expect(response).toEqual(card);   
  });    

  it('getMagicCard deve chamada com "idDesconhecido" deve retornar o seguinte erro "Id is not found"', async () => {
    const responseError = await getMagicCard('idDesconhecido');    
    await expect(responseError).toEqual(new Error('Id is not found!'));   
  });
});
