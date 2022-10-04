enum lengthMap {
  mm = -3,
  cm,
  dm,
  m,
  dam,
  hm,
  km,    
};

type unit = 'km' | 'dam' | 'hm' | 'm' | 'dm' | 'cm' | 'mm';

function convert(value: number, base:unit , convert:unit): number {
    const baseUnit:number = Math.pow(10, lengthMap[base]);
    console.log(baseUnit);
    const convertUnit:number = Math.pow(10, lengthMap[convert]);
    console.log(convertUnit);
    return (value * baseUnit) / convertUnit;
}

console.log(convert(1, 'm', 'dam'));