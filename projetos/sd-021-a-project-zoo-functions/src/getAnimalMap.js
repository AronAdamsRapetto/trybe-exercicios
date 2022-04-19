const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const pegaNomeObjeto = (elemento) => elemento.name;

const filtraObjetos = (sexo, residents) => {
  const listaNomes = residents.filter((element) => element.sex === sexo).map(pegaNomeObjeto);
  return listaNomes;
};

const getOptions = (sexo, sorted) => species.reduce((accAnimais, { location, name, residents }) => {
  const novoAcc = accAnimais;
  if (sorted !== undefined) {
    novoAcc[location].push({ [name]: filtraObjetos(sexo, residents).sort() });
  } else {
    novoAcc[location].push({ [name]: filtraObjetos(sexo, residents) });
  }
  return novoAcc;
}, { NE: [], NW: [], SE: [], SW: [] });

const getAnimalName = (sorted) => species.reduce((accAnimais, { location, name, residents }) => {
  const novoAcc = accAnimais;
  if (sorted !== undefined) {
    novoAcc[location].push({ [name]: residents.map((element) => element.name).sort() });
  } else {
    novoAcc[location].push({ [name]: residents.map((element) => element.name) });
  }
  return novoAcc;
}, { NE: [], NW: [], SE: [], SW: [] });

const getWhithoutNames = () => species.reduce((accAnimais, { location, name }) => {
  const novoAcc = accAnimais;
  novoAcc[location].push(name);
  return novoAcc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalMap(options = {}) {
  let animalsMap = {};
  const { includeNames, sorted, sex } = options;
  if (includeNames === undefined) {
    animalsMap = getWhithoutNames();
  } else if (sex !== undefined) {
    animalsMap = getOptions(sex, sorted);
  } else if (includeNames === true) {
    animalsMap = getAnimalName(sorted);
  }
  return animalsMap;
}

console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'female' }));

module.exports = getAnimalMap;
