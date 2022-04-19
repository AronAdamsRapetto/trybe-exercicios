const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(idFuncionario) {
  // seu código aqui
  const funcionario = employees.find(({ id }) => id === idFuncionario);
  const idAnimal = funcionario.responsibleFor[0];
  const especie = species.find(({ id }) => id === idAnimal);
  const maisVelho = especie.residents.reduce((accAnimal, animal) => {
    if (accAnimal.age < animal.age) {
      return animal;
    }
    return accAnimal;
  });
  return Object.values(maisVelho);
}

module.exports = getOldestFromFirstSpecies;
