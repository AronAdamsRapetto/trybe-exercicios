const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  const speciesById = [];
  ids.forEach((elemento) => {
    speciesById.push(species.find(({ id }) => elemento === id));
  });
  return speciesById;
}

module.exports = getSpeciesByIds;
