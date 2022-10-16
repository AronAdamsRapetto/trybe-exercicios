enum volumeMap {
  'mm³' = -9,
  'cm³' = -6,
  'dm³' = -3,
  'm³' = 0,
  'dam³' = 3,
  'hm³' = 6,
  'km³' = 9,
};

type volumeUnit = 'mm³' | 'cm³' | 'dm³' | 'm³' | 'dam³' | 'hm³' | 'km³';

function volumeConvert(value:number, base:volumeUnit, convert:volumeUnit) {
  const baseUnit:number = Math.pow(10, volumeMap[base]);
  const convertUnit:number = Math.pow(10, volumeMap[convert]);
  return (value * baseUnit) / convertUnit; 
}

console.log(volumeConvert(1, 'km³', 'mm³'));