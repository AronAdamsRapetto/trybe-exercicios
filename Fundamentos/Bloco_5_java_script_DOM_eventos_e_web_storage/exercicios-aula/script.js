function mudaTexto() {
    document.getElementsByTagName('p')[0].innerText = "Me vejo trabalhando em uma grande empresa de tecnologia, sendo promovido de 'junior' para 'pleno'.";
};

function mudaCorMainBox() {
    let corDeFundoMain = document.getElementsByClassName('main-content');
    corDeFundoMain[0].style.backgroundColor = 'rgb(76,164,109)';
};

function mudaCorContentBox() {
    let corDeFundoContent = document.getElementsByClassName('center-content');
    corDeFundoContent[0].style.backgroundColor = 'white';
};

function correcaoH1() {
    document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';
};

function textoHighCase() {
    let textos = document.getElementsByTagName('p');
    for(i = 0; i < textos.length; i += 1) {
        textos[i].style.textTransform = 'uppercase';
    }
}

function imprimeConsole() {
    textos = document.getElementsByTagName('p');
    for(i = 0; i < textos.length; i += 1) {
        console.log(textos[i].innerText);
    }    
}


/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


mudaTexto();

mudaCorMainBox();

mudaCorContentBox();

correcaoH1();

textoHighCase();

imprimeConsole();