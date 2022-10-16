enum massMap {
  mg = -3,
  cg,
  dg,
  g,
  dag,
  hg,
  kg,
}

type massUnit = 'kg' | 'hg' | 'dag' | 'g' | 'dg' | 'cg' | 'mg';  

function massConvert(value:number, base:massUnit, convert:massUnit) {
  const baseUnit:number = Math.pow(10, massMap[base]);
  const convertUnit:number = Math.pow(10, massMap[convert]);
  return (value * baseUnit) / convertUnit
}

console.log(massConvert(1, 'g', 'kg'));