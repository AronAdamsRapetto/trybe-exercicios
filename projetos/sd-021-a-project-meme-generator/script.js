const inputTexto = document.getElementById('text-input');
const inputArquivo = document.getElementById('meme-insert');
const botaoBordaFire = document.getElementById('fire');
const botaoBordaWater = document.getElementById('water');
const botaoBordaEarth = document.getElementById('earth');
const imagemMeme1 = document.getElementById('meme-1');
const imagemMeme2 = document.getElementById('meme-2');
const imagemMeme3 = document.getElementById('meme-3');
const imagemMeme4 = document.getElementById('meme-4');

function adicionaTexto() {
  const textoImagem = document.getElementById('meme-text');
  textoImagem.innerText = inputTexto.value;
}

// Solução para resolver erro do fakepath oriunda link disponibilizado no redme do projeto (https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977)
function addImagem(event) {
  document.getElementById('meme-image').src = URL.createObjectURL(event.target.files[0]);
}

function alteraBorda(event) {
  const boxImg = document.getElementById('meme-image-container');
  const estiloBotao = window.getComputedStyle(event.target).getPropertyValue('border');
  boxImg.style.border = estiloBotao;
  console.log(boxImg.style);
}

function selecionaImagem(event) {
  const imagemMeme = document.getElementById('meme-image');
  imagemMeme.src = event.target.src;
}

inputArquivo.addEventListener('change', addImagem);

inputTexto.addEventListener('keyup', adicionaTexto);

botaoBordaFire.addEventListener('click', alteraBorda);
botaoBordaWater.addEventListener('click', alteraBorda);
botaoBordaEarth.addEventListener('click', alteraBorda);

imagemMeme1.addEventListener('click', selecionaImagem);
imagemMeme2.addEventListener('click', selecionaImagem);
imagemMeme3.addEventListener('click', selecionaImagem);
imagemMeme4.addEventListener('click', selecionaImagem);
