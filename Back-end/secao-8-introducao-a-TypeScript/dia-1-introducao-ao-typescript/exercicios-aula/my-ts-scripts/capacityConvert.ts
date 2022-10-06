enum capacityMap {
  ml = -3,
  cl,
  dl,
  l,
  dal,
  hl,
  kl,
}

type capacityUnit = 'ml' | 'cl' | 'dl' | 'l' | 'dal' | 'hl' | 'kl';

function capacityConvert(value:number, base:capacityUnit, convert:capacityUnit) {
  const baseUnit:number = Math.pow(10, capacityMap[base]);
  const convertUnit:number = Math.pow(10, capacityMap[convert]);
  return (value * baseUnit) / convertUnit;
}

console.log(capacityConvert(1, 'kl', 'ml'));