let boxParagrafo = document.getElementById('box-paragrafo');
let botaoMudaCorDeFundo = document.getElementById('btn-corFundo');
let botaoMudaCorTexto = document.getElementById('btn-corTexto');
let botaoMudaFontSize = document.getElementById('btn-tamanhoFonte');
let botaoMudaEspacLinhas = document.getElementById('btn-espacoLinhas');
let botaoMudaFonte = document.getElementById('btn-Fonte');
let alteracoes = {
    corFundo: '',
    corTexto: '',
    tamanhoFonte: 0,
    espacoLinhas: 0,
    fonte: ''
};

function addCorFundo (){
    let corPedida = document.getElementById('input-corFundo');
    boxParagrafo.style.backgroundColor = corPedida.value;
    alteracoes.corFundo = corPedida.value;
    localStorage.setItem('alteracoes', JSON.stringify(alteracoes));
}

function alteraCorTexto(){
    let corPedida = document.getElementById('input-corTexto');
    boxParagrafo.style.color = corPedida.value;
    alteracoes.corTexto = corPedida.value;
    localStorage.setItem('alteracoes', JSON.stringify(alteracoes));
}

function alteraTamanhoFonte(){
    let tamanho = document.getElementById('input-tamanhoFonte');
    boxParagrafo.style.fontSize = tamanho.value + 'px';
    alteracoes.tamanhoFonte = tamanho.value;
    localStorage.setItem('alteracoes', JSON.stringify(alteracoes));    
}

function alteraEspacLinhas(){
    let espaco = document.getElementById('input-espacoLinhas');
    boxParagrafo.style.lineHeight = espaco.value + 'px';
    alteracoes.espacoLinhas = espaco.value;
    localStorage.setItem('alteracoes', JSON.stringify(alteracoes));
}

function alteraFonte(){
    let fonte = document.getElementById('input-Fonte');
    boxParagrafo.style.fontFamily = fonte.value;
    alteracoes.fonte = fonte.value;
    localStorage.setItem('alteracoes', JSON.stringify(alteracoes));
}

botaoMudaCorDeFundo.addEventListener('click', addCorFundo);
botaoMudaCorTexto.addEventListener('click', alteraCorTexto);
botaoMudaFontSize.addEventListener('click', alteraTamanhoFonte);
botaoMudaEspacLinhas.addEventListener('click', alteraEspacLinhas);
botaoMudaFonte.addEventListener('click', alteraFonte);


window.onload = function(){    
    alteracoes = JSON.parse(localStorage.getItem('alteracoes'));
    boxParagrafo.style.backgroundColor = alteracoes.corFundo;
    boxParagrafo.style.color = alteracoes.corTexto;
    boxParagrafo.style.fontSize = alteracoes.tamanhoFonte + 'px';
    boxParagrafo.style.lineHeight = alteracoes.espacoLinhas + 'px';
    boxParagrafo.style.fontFamily = alteracoes.fonte;       
}