const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const validaDiaAnimal = (dia) => {
  const animal = species.filter(({ availability }) => availability.some((value) => value === dia));
  return animal.map((value) => value.name);
};

const geraRelatorio = () => {
  const relatorioDeDias = Object.keys(hours).reduce((accAgenda, dia) => {
    const novoAcc = accAgenda;
    if (novoAcc[dia] === undefined) {
      novoAcc[dia] = {
        officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
        exhibition: validaDiaAnimal(dia),
      };
    } else {
      novoAcc[dia].exhibition.push(validaDiaAnimal(dia));
    }
    if (dia === 'Monday') {
      novoAcc[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
    return novoAcc;
  }, {});
  return relatorioDeDias;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const relatorioDeDias = geraRelatorio();
  let mensagem;
  if (Object.keys(relatorioDeDias).some((valor) => valor === scheduleTarget)) {
    mensagem = { [scheduleTarget]: relatorioDeDias[scheduleTarget] };
  } else if (species.some(({ name }) => name === scheduleTarget)) {
    mensagem = species.find(({ name }) => name === scheduleTarget).availability;
  } else {
    mensagem = relatorioDeDias;
  }
  return mensagem;
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
