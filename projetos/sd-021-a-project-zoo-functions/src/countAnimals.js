const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const contAnimalsSemParam = () => species.reduce((accAnimal, { name, residents }) => {
  const novoAcc = accAnimal;
  novoAcc[name] = residents.length;
  return novoAcc;
}, {});

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return contAnimalsSemParam();
  }
  if (animal.sex === undefined) {
    return species.find(({ name }) => animal.specie === name).residents.length;
  }
  const specie = species.find(({ name }) => animal.specie === name);
  return specie.residents.reduce((accAnimal, { sex }) => {
    let novoAcc = accAnimal;
    if (sex === animal.sex) novoAcc += 1;
    return novoAcc;
  }, 0);
}

module.exports = countAnimals;
