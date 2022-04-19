// Desafio 11
function contadorDigitosRepetidos(digitos) {
  let cont = 0;
  for (let index of digitos) {
    let auxCont = 0;
    for (let index2 of digitos) {
      if (index === index2) {
        auxCont += 1;
      }
      if (auxCont > cont) {
        cont = auxCont;
      }
    }
  }
  return cont;
}

function validadorNumero(numero) {
  let mensagem = '';
  let digitosRepetidos = contadorDigitosRepetidos(numero);

  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] < 0 || numero[index] > 9 || digitosRepetidos >= 3) {
      mensagem = 'não é possível gerar um número de telefone com esses valores';
      return mensagem;
    }
  }
}

function generatePhoneNumber(numero) {
  let geradorNumTelefone = '(';
  
  if (numero.length > 11 || numero.length < 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < numero.length; index += 1) { 
        if (index === 2) {
        geradorNumTelefone += ') ';
      } else if (index === 7) {
        geradorNumTelefone += '-';
      }
      geradorNumTelefone += numero[index];
    }
    return geradorNumTelefone;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangulo;
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    triangulo = false;
  } else if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    triangulo = false;
  } else if (lineC > lineB + lineA || lineB < Math.abs(lineA - lineB)) {
    triangulo = false;
  } else {
    triangulo = true;
  }
  return triangulo;
}

// Desafio 13
const contaBebidas = (pedido) => {
  let numeroDeBebidas = 0;
  for (let index = 0; index < pedido.length; index += 1) {
    if (isNaN(parseInt(pedido[index], 10)) === false) {
      numeroDeBebidas += parseInt(pedido[index], 10);
    }
  }
  return numeroDeBebidas;
};

const hydrate = (pedido) => {
  let numeroDeBebidas = contaBebidas(pedido);
  let sugestaoDeAguas;

  if (numeroDeBebidas > 1) {
    sugestaoDeAguas = `${numeroDeBebidas} copos de água`;
  } else {
    sugestaoDeAguas = `${numeroDeBebidas} copo de água`;
  }
  return sugestaoDeAguas;
};

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
