let algarismoDaDireita = "";
const algarismosRomanos = {
  I: 1,
  // IV: 4,
  V: 5,
  // IX: 9,
  X: 10,
  // XL: 40,
  L: 50,
  // XC: 90,
  C: 100,
  // CD: 400,
  D: 500,
  // CM: 900,
  M: 1000,
};

const traduzAlgarismo = (algarismo) => {
  let soma = 0;
  for (let index = 0; index < algarismo.length; index += 1) {
    if (index === algarismo.length - 1) {
      algarismoDaDireita = algarismo[index];
    } else {
      algarismoDaDireita = algarismo[index + 1];
    }
    if (
      algarismosRomanos[algarismo[index]] <
      algarismosRomanos[algarismoDaDireita]
    ) {
      soma -= algarismosRomanos[algarismo[index]]
    } else {
      soma += algarismosRomanos[algarismo[index]];
    }
  }
  return `Algarismo: ${algarismo} / Valor:${soma}`;
};

console.log(traduzAlgarismo("XXXVI"));

console.log(traduzAlgarismo("MDCCLI"));

console.log(traduzAlgarismo("XXV"));

console.log(traduzAlgarismo("MCCLVII"));

console.log(traduzAlgarismo("XXVIII"));

console.log('//');

console.log(traduzAlgarismo("CCX"));

console.log(traduzAlgarismo("XXIII"));

console.log(traduzAlgarismo("CCXII"));

console.log(traduzAlgarismo("XCII"));

console.log(traduzAlgarismo("XCVII"));

console.log('//');

console.log(traduzAlgarismo("CDXCIX"));

console.log(traduzAlgarismo("VIII"));

console.log(traduzAlgarismo("XIV"));

console.log(traduzAlgarismo("CCIX"));

console.log(traduzAlgarismo("C"));

console.log('//');

console.log(traduzAlgarismo("XXXVII"));

console.log(traduzAlgarismo("LIII"));

console.log(traduzAlgarismo("CLXXXIV"));

console.log(traduzAlgarismo("CCCII"));

console.log(traduzAlgarismo("LXIX"));

