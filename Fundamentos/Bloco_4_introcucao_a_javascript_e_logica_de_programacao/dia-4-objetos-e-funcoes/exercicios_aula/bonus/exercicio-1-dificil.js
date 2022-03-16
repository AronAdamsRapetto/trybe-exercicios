let algarismoFornecido = 'III';
let auxAlgarismo = '';
let valorSoma = 0;
let auxSoma = 0;
let algarismosRomanos = {
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
}

for(let index = 0; index < algarismoFornecido.length; index += 1){
    auxAlgarismo = '';
    for(let letra in algarismosRomanos){
        if(index < algarismoFornecido.length - 1) {
            auxAlgarismo += algarismoFornecido[index + 1];
        }
        if (algarismoFornecido[index] === letra) {
            auxSoma = algarismosRomanos.letra;
            if (algarismosRomanos.letra < algarismosRomanos.auxAlgarismo) {
                valorSoma -= auxSoma;
            } else {
                valorSoma += auxSoma;
            }
        }
    }
     
}        
    

console.log(valorSoma);

