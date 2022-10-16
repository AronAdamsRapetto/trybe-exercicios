enum areaMap {
  'mm²' = -6,
  'cm²' = -4,
  'dm²' = -2,
  'm²' = 0,
  'dam²' = 2,
  'hm²' = 4,
  'km²' = 6,
}

type areaUnit = 'mm²' | 'cm²' | 'dm²' | 'm²' | 'dam²' | 'hm²' | 'km²';

function areaConvert(value:number, base:areaUnit, convert:areaUnit) {
  const baseUnit:number = Math.pow(10, areaMap[base]);
  const convertUnit:number = Math.pow(10, areaMap[convert]);
  return (value * baseUnit) / convertUnit;
}

console.log(areaConvert(1, 'km²', 'mm²'));