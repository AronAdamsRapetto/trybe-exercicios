const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let resposta;
  species.forEach((elemento) => {
    if (elemento.name === animal) {
      resposta = elemento.residents.every(({ age: animalAge }) => animalAge > age);
    }
  });
  return resposta;
}

module.exports = getAnimalsOlderThan;
