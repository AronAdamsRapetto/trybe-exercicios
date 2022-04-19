const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((accVisitantes, visitante) => {
    const novoAcc = accVisitantes;
    if (visitante.age < 18) {
      novoAcc.child += 1;
    } else if (visitante.age < 50) {
      novoAcc.adult += 1;
    } else {
      novoAcc.senior += 1;
    }
    return novoAcc;
  }, { adult: 0, child: 0, senior: 0 });
}

function calculateEntry(entrants) {
  // seu código aqui

  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const numVisitantes = countEntrants(entrants);
  const { adult: adultVisit, child: childVisit, senior: seniorVisit } = numVisitantes;
  const { adult: adultValue, child: childValue, senior: seniorValue } = prices;

  return adultVisit * adultValue + childVisit * childValue + seniorVisit * seniorValue;
}

module.exports = { calculateEntry, countEntrants };
