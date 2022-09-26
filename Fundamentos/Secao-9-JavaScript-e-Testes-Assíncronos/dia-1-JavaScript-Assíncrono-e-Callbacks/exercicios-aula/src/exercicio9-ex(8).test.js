// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8.js");
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');
    function callback (err, resultado) {
      try {
        expect(err).toEqual(expectedError);
        done();
      } catch (error) {
        done(error);
      }
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  describe("A função getPokemonDetails", () => {
    it("retorna um pokemon que existe no banco de dados", (done) => {
      // Escreva aqui seu código
      const expectedResult = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
      function callback (err, resultado) {
        try {
          expect(resultado).toBe(expectedResult);
          done();
        } catch (error) {
          done(error);
        }
      }
      getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
    });
});