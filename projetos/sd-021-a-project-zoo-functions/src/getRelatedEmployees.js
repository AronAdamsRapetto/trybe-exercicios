const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.some((elemento) => elemento === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((accNome, { managers, firstName, lastName }) => {
    if (managers.some((elemento) => elemento === managerId)) {
      accNome.push(`${firstName} ${lastName}`);
    }
    return accNome;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
