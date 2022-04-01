//Exercicio 1

// const calculaFatorial = (numero) => {
//     for(let i = (numero-1); i >= 1; i -= 1) {
//         numero *= i;
//     }
//     return numero;
// }

// const fatorial = (numero) => numero === 0 || numero === 1 ? 1 : calculaFatorial(numero);

// console.log(fatorial(4));

const encontraMaiorPalavra = (palavras) => {
  let maiorPalavra = "";
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > maiorPalavra.length){
      maiorPalavra = palavras[index];
    }
  }
  return maiorPalavra;
}

const longestWord = (frase) => encontraMaiorPalavra(frase.split(" "));  

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
