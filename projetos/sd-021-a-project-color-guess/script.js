const boxCores = document.getElementById('box-ballCores');
const btnReset = document.getElementById('reset-game');
let contadorPontos = 0;
let contadorClick = 0;

function contadorScore() {
  contadorPontos += 3;
  document.getElementById('score').innerText = `${contadorPontos} Pontos`;
}

function verificaResposta(event) {
  const resposta = document.getElementById('answer');
  const rgbColor = document.getElementById('rgb-color');
  if (event.target.style.backgroundColor === `rgb${rgbColor.innerText}` && contadorClick < 1) {
    resposta.innerText = 'Acertou!';
    contadorClick += 1;
    contadorScore();
  } else if (contadorClick >= 1) {
    resposta.innerText = 'Acertou!';
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
  }
}

function geraCores() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;

  return `(${red}, ${green}, ${blue})`;
}

function geraCirculos() {
  const corInicial = Math.floor(Math.random() * 6) + 1;
  for (let i = 1; i <= 6; i += 1) {
    const novaCor = document.createElement('div');
    novaCor.classList.add('ball');
    if (i === corInicial) {
      novaCor.style.backgroundColor = 'rgb(168, 34, 1)';
    } else {
      novaCor.style.backgroundColor = `rgb${geraCores()}`;
    }
    novaCor.addEventListener('click', verificaResposta);
    boxCores.appendChild(novaCor);
  }
}

function resetGame() {
  const cores = document.getElementsByClassName('ball');
  const corSorteada = Math.floor(Math.random() * 6) + 1;
  const rgbColor = document.getElementById('rgb-color');
  contadorClick = 0;
  document.getElementById('answer').innerText = 'Escolha uma cor';
  for (let index = 0; index < cores.length; index += 1) {
    if (index === corSorteada) {
      rgbColor.innerText = geraCores();
      cores[index].style.backgroundColor = `rgb${rgbColor.innerText}`;
    } else {
      cores[index].style.backgroundColor = `rgb${geraCores()}`;
    }
  }
}

btnReset.addEventListener('click', resetGame);

window.onload = geraCirculos;
