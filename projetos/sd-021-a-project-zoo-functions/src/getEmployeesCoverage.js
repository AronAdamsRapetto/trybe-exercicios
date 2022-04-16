const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimals = (lista) => {
  const animals = [];
  lista.forEach((element) => {
    animals.push(species.find(({ id }) => element === id).name);
  });
  return animals;
};

const getLocations = (lista) => {
  const locals = [];
  lista.forEach((element) => {
    locals.push(species.find(({ id }) => element === id).location);
  });
  return locals;
};

const geraCobertura = (funci) => {
  const cobertura = {
    id: funci.id,
    fullName: `${funci.firstName} ${funci.lastName}`,
    species: getAnimals(funci.responsibleFor),
    locations: getLocations(funci.responsibleFor),
  };
  return cobertura;
};

const getFuncionario = (name, id) => {
  const funci = employees.find((element) => {
    if (element.firstName === name || element.lastName === name) return element;
    if (element.id === id) return element;
    return false;
  });
  return funci;
};

const relatorioGeral = () => {
  const relatorio = employees.reduce((accFuncionario, funcionario) => {
    const novoAcc = accFuncionario;
    novoAcc.push({
      id: funcionario.id,
      fullName: `${funcionario.firstName} ${funcionario.lastName}`,
      species: getAnimals(funcionario.responsibleFor),
      locations: getLocations(funcionario.responsibleFor),
    });
    return novoAcc;
  }, []);
  return relatorio;
};

function getEmployeesCoverage(info = {}) {
  const { name, id } = info;
  let funci;
  let cobertura;
  if (Object.keys(info).length === 0) {
    cobertura = relatorioGeral();
  } else {
    funci = getFuncionario(name, id);
  }
  if (funci === undefined && Object.keys(info).length > 0) {
    throw new Error('Informações inválidas');
  } else if (cobertura === undefined) {
    cobertura = geraCobertura(funci);
  }
  return cobertura;
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
