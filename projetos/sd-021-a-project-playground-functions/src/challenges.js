// function para reduzir complexity do desafio 6
function encontraMaiorValor(array) {
  let maiorValor = -100;
  for (let valores in array) {
    if (array[valores] > maiorValor) {
      maiorValor = array[valores];
    }
  }
  return maiorValor;
}

// Desafio 1
function compareTrue(condicao1, condicao2) {
  let resultado;
  if (condicao1 === true && condicao2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada;
  fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

// Desafio 4
function concatName(strings) {
  let retorno = `${strings[strings.length - 1]}, ${strings[0]}`; // coreção automática do eslint... após conclusão do projeto pesquisarei o que significa essas ${} durante a concatenação de strings fora de um console.log.
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = (wins * 3) + ties;
  return totalPontos;
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  let maiorValor = encontraMaiorValor(array);
  for (let valores in array) {
    if (array[valores] === maiorValor) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = (cat1 - mouse);
  let distanciaCat2 = (cat2 - mouse);
  let resultadoCaça;

  if (distanciaCat1 - distanciaCat2 < 0 && distanciaCat1 !== distanciaCat2 * (-1)) {
    resultadoCaça = 'cat1';
  } else if (distanciaCat1 - distanciaCat2 > 0 && distanciaCat1 !== distanciaCat2 * (-1)) {
    resultadoCaça = 'cat2';
  } else {
    resultadoCaça = 'os gatos trombam e o rato foge';
  }
  return resultadoCaça;
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  let retornoString = [];

  for (let numero of array) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      retornoString.push('fizzBuzz');
    } else if (numero % 5 === 0) {
      retornoString.push('buzz');
    } else if (numero % 3 === 0) {
      retornoString.push('fizz');
    } else {
      retornoString.push('bug!');
    }
  }
  return retornoString;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
// eslint-disable-next-line max-lines-per-function
function encode(mensagem) {
  let mensagemCodificada = '';
  for (let letra = 0; letra < mensagem.length; letra += 1) {
    switch (mensagem[letra]) {
    case 'a':
      mensagemCodificada += '1';
      break;
    case 'e':
      mensagemCodificada += '2';
      break;
    case 'i':
      mensagemCodificada += '3';
      break;
    case 'o':
      mensagemCodificada += '4';
      break;
    case 'u':
      mensagemCodificada += '5';
      break;
    default:
      mensagemCodificada += mensagem[letra];
      break;
    }
  }
  return mensagemCodificada;
}

// eslint-disable-next-line max-lines-per-function
function decode(mensagem) {
  let mensagemDecodificada = '';
  for (let letra = 0; letra < mensagem.length; letra += 1) {
    switch (mensagem[letra]) {
    case '1':
      mensagemDecodificada += 'a';
      break;
    case '2':
      mensagemDecodificada += 'e';
      break;
    case '3':
      mensagemDecodificada += 'i';
      break;
    case '4':
      mensagemDecodificada += 'o';
      break;
    case '5':
      mensagemDecodificada += 'u';
      break;
    default:
      mensagemDecodificada += mensagem[letra];
      break;
    }
  }
  return mensagemDecodificada;
}

// Desafio 10
// eslint-disable-next-line max-lines-per-function

function techList(tech, name) {
  let tecnologias = [];
  tech.sort(); // Dica de ordenar o array de tecnologias antes de inseri-lo em um objeto recebida por Hill Hilton Turma 21 Tribo A.
  if (tech.length > 0) {
    for (let index of tech) {
      tecnologias.push({
        tech: index,
        name,
      });
    }
  } else {
    return 'Vazio!';
  }
  return tecnologias;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
