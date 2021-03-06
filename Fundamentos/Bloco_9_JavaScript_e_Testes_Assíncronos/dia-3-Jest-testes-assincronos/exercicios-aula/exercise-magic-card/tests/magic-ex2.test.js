const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
  favoriteCards.forEach(() => {
    if(favoriteCards.length > 4) {
      favoriteCards.pop();
    }
  });
}

afterEach(() => {
  retrievesFavoriteCards();
})

describe(' Testa a função saveFavoriteMagicCard', () => {
  afterEach(() => {
    retrievesFavoriteCards();
  });
  
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');

    // implemente seus testes aqui
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[favoriteCards.length - 1].name).toBe('Beacon of Immortality');

    await saveFavoriteMagicCard('130554');

    expect(favoriteCards.length).toBe(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);

    // implemente seus testes aqui
    const cartasNome = favoriteCards.map((carta) => carta.name);
    const expectResult = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];

    expect(expectResult).toEqual(cartasNome);
  });
});
