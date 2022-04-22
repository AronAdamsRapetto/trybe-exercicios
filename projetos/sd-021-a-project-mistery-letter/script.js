const btnGeraCarta = document.getElementById('criar-carta');

function estiloAleatorio(palavra) {
  const defineEstilo = Math.floor(Math.random() * 3) + 1;
  switch (defineEstilo) {
  case 1:
    palavra.classList.add('newspaper');
    break;
  case 2:
    palavra.classList.add('magazine1');
    break;
  case 3:
    palavra.classList.add('magazine2');
    break;
  default:
    break;
  }
  return palavra;
}

function tamanhoAleatorio(palavra) {
  const defineEstilo = Math.floor(Math.random() * 3) + 1;
  switch (defineEstilo) {
  case 1:
    palavra.classList.add('medium');
    break;
  case 2:
    palavra.classList.add('big');
    break;
  case 3:
    palavra.classList.add('reallybig');
    break;
  default:
    break;
  }
  return palavra;
}

function rotacaoAleatorio(palavra) {
  const defineEstilo = Math.floor(Math.random() * 2) + 1;
  switch (defineEstilo) {
  case 1:
    palavra.classList.add('rotateleft');
    break;
  case 2:
    palavra.classList.add('rotateright');
    break;
  default:
    break;
  }
  return palavra;
}

function inclinacaoAleatorio(palavra) {
  const defineEstilo = Math.floor(Math.random() * 2) + 1;
  switch (defineEstilo) {
  case 1:
    palavra.classList.add('skewleft');
    break;
  case 2:
    palavra.classList.add('skewright');
    break;
  default:
    break;
  }
  return palavra;
}

function alteraEstiloPalavra(event) {
  let evento = event.target;
  evento.classList = '';
  evento = estiloAleatorio(evento);
  evento = tamanhoAleatorio(evento);
  evento = rotacaoAleatorio(evento);
  evento = inclinacaoAleatorio(evento);
}

function geraCarta(palavras) {
  const carta = document.getElementById('carta-gerada');
  carta.innerHTML = '';
  for (let i = 0; i < palavras.length; i += 1) {
    let palavra = document.createElement('span');
    palavra.innerText = palavras[i];
    palavra = estiloAleatorio(palavra);
    palavra = tamanhoAleatorio(palavra);
    palavra = rotacaoAleatorio(palavra);
    palavra = inclinacaoAleatorio(palavra);
    palavra.addEventListener('click', alteraEstiloPalavra);
    carta.appendChild(palavra);
  }
}

function percorreCarta(palavras) {
  let contValidaPalavras = 0;
  let contPalavras = 0;
  for (let i = 0; i < palavras.length; i += 1) {
    contPalavras += 1;
    if (palavras[i] !== '') {
      contValidaPalavras += 1;
    }
  }
  document.getElementById('carta-contador').innerText = contPalavras;
  return contValidaPalavras;
}

function validaCarta() {
  const textoInput = document.getElementById('carta-texto');
  const palavrasCarta = textoInput.value.split(' ');
  const carta = document.getElementById('carta-gerada');
  const valorPalavras = percorreCarta(palavrasCarta);
  const container = document.getElementById('container-carta');
  container.style.display = 'block';
  if (valorPalavras > 0) {
    container.style.color = 'black';
    geraCarta(palavrasCarta);
  } else {
    container.style.color = 'white';
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

btnGeraCarta.addEventListener('click', validaCarta);
