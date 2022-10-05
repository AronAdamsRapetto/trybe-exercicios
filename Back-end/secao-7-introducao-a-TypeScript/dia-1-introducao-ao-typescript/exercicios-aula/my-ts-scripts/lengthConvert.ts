enum lengthMap {
  mm = -3,
  cm,
  dm,
  m,
  dam,
  hm,
  km,    
};

type lengthUnit = 'km' | 'dam' | 'hm' | 'm' | 'dm' | 'cm' | 'mm';

function lengthConvert(value: number, base:lengthUnit , convert:lengthUnit): number {
    const baseUnit:number = Math.pow(10, lengthMap[base]);
    console.log(baseUnit);
    const convertUnit:number = Math.pow(10, lengthMap[convert]);
    console.log(convertUnit);
    return (value * baseUnit) / convertUnit;
}

console.log(lengthConvert(1, 'm', 'dam'));