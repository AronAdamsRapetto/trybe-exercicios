let boxParagrafo = document.getElementById("box-paragrafo");
let botaoMudaCorDeFundo = document.getElementById("btn-corFundo");
let botaoMudaCorTexto = document.getElementById("btn-corTexto");
let botaoMudaFontSize = document.getElementById("btn-tamanhoFonte");
let botaoMudaEspacLinhas = document.getElementById("btn-espacoLinhas");
let botaoMudaFonte = document.getElementById("btn-Fonte");
let botaoAddParagrado = document.getElementById("btn-Addparagrafo");
let botaoDelParagrafo = document.getElementById("btn-Delparagrafo");
let botaoDelAll = document.getElementById("btn-DelAllParafrafo");
let alteracoes = {
  corFundo: "",
  corTexto: "",
  tamanhoFonte: 0,
  espacoLinhas: 0,
  fonte: "",
};
let paragrafoList = [];

function armazenaEstilo(objeto) {
  localStorage.setItem("alteracoes", JSON.stringify(objeto));
}

function addCorFundo() {
  let corPedida = document.getElementById("input-corFundo");
  boxParagrafo.style.backgroundColor = corPedida.value;
  alteracoes.corFundo = corPedida.value;
  armazenaEstilo(alteracoes);
}

function alteraCorTexto() {
  let corPedida = document.getElementById("input-corTexto");
  boxParagrafo.style.color = corPedida.value;
  alteracoes.corTexto = corPedida.value;
  armazenaEstilo(alteracoes);
}

function alteraTamanhoFonte() {
  let tamanho = document.getElementById("input-tamanhoFonte");
  boxParagrafo.style.fontSize = tamanho.value + "px";
  alteracoes.tamanhoFonte = tamanho.value;
  armazenaEstilo(alteracoes);
}

function alteraEspacLinhas() {
  let espaco = document.getElementById("input-espacoLinhas");
  boxParagrafo.style.lineHeight = espaco.value + "px";
  alteracoes.espacoLinhas = espaco.value;
  armazenaEstilo(alteracoes);
}

function alteraFonte() {
  let fonte = document.getElementById("input-Fonte");
  boxParagrafo.style.fontFamily = fonte.value;
  alteracoes.fonte = fonte.value;
  armazenaEstilo(alteracoes);
}

// Adicionais

function armazenaParagrafo() {
  localStorage.setItem("paragrafos", JSON.stringify(paragrafoList));
}

function selecionaParagrafo(event) {
  if (event.target.classList.contains("selected")) {
    event.target.classList.remove("selected");
  } else {
    event.target.classList.add("selected");
  }
}

function criaParagrafo() {
  let texto = document.getElementById("paragrafo");
  let paragrafo = document.createElement("p");
  paragrafo.innerText = texto.value;
  paragrafo.classList = "paragrafoAdd";
  paragrafoList.push(texto.value);
  texto.value = "";
  return paragrafo;
}

function addParagrafo() {
  let titulo = document.getElementsByTagName("h2");
  let paragrafo = criaParagrafo();  
  paragrafo.addEventListener("click", selecionaParagrafo);
  boxParagrafo.appendChild(paragrafo);
  armazenaParagrafo();
  titulo[0].innerText = "";
}

function atualizaListaParagrafos() {
  let paragrafosRestantes = document.getElementsByClassName('paragrafoAdd');
  paragrafoList = [];
  for (let index = 0; index < paragrafosRestantes.length; index += 1) {
    paragrafoList.push(paragrafosRestantes[index].innerText);    
  }
  armazenaParagrafo();  
}

function delParagrafo() {
  let paragrafoSelecionado = document.getElementsByClassName("paragrafoAdd");  
  paragrafoList = [];
  for (let index = paragrafoSelecionado.length - 1; index >= 0 ; index -= 1) {
    if (paragrafoSelecionado[index].classList.contains("selected")) {
      paragrafoSelecionado[index].remove();            
    }
  }
  atualizaListaParagrafos();  
}

let paragrafoSelecionado = document.getElementsByClassName("paragrafoAdd");

function delAll() {
  boxParagrafo.innerHTML = "<h2>Textos serão exibidos aqui</h2>";
  localStorage.clear();
}

function renderizaParagrafos() {
  if (localStorage.getItem("paragrafos") === null) {
    localStorage.setItem("paragrafos", JSON.stringify([]));
  } else {
    paragrafoList = JSON.parse(localStorage.getItem("paragrafos"));
    let titulo = document.getElementsByTagName("h2");
    for (let index = 0; index < paragrafoList.length; index += 1) {
      let novoParagrafo = document.createElement("p");
      novoParagrafo.innerText = paragrafoList[index];
      novoParagrafo.classList = "paragrafoAdd";
      novoParagrafo.addEventListener("click", selecionaParagrafo);
      boxParagrafo.appendChild(novoParagrafo);
      titulo[0].innerText = "";
    }
  }
}

botaoMudaCorDeFundo.addEventListener("click", addCorFundo);
botaoMudaCorTexto.addEventListener("click", alteraCorTexto);
botaoMudaFontSize.addEventListener("click", alteraTamanhoFonte);
botaoMudaEspacLinhas.addEventListener("click", alteraEspacLinhas);
botaoMudaFonte.addEventListener("click", alteraFonte);

window.onload = function () {
  if (localStorage.getItem("alteracoes") === null) {
    localStorage.setItem("alteracoes", JSON.stringify({}));
  } else {
    alteracoes = JSON.parse(localStorage.getItem("alteracoes"));
    boxParagrafo.style.backgroundColor = alteracoes.corFundo;
    boxParagrafo.style.color = alteracoes.corTexto;
    boxParagrafo.style.fontSize = alteracoes.tamanhoFonte + "px";
    boxParagrafo.style.lineHeight = alteracoes.espacoLinhas + "px";
    boxParagrafo.style.fontFamily = alteracoes.fonte;
    renderizaParagrafos();
  }
};

// adicionais

botaoAddParagrado.addEventListener("click", addParagrafo);
botaoDelParagrafo.addEventListener("click", delParagrafo);
botaoDelAll.addEventListener("click", delAll);
