const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};

  let empregado = employees.find(({ firstName }) => employeeName === firstName);

  if (empregado === undefined) {
    empregado = employees.find(({ lastName }) => employeeName === lastName);
  }
  return empregado;
}

module.exports = getEmployeeByName;
