// // arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

// PARTE I BUSCANDO ELEMENTOS

// ex 1
// console.log(document.getElementById('elementoOndeVoceEsta'));

// // ex 2

// let alteraCor = document.getElementById('elementoOndeVoceEsta').parentNode;

// alteraCor.style.Color = "red";

// // // ex 3

// document.getElementById('primeiroFilhoDoFilho').innerText = "texto / texto / texto / texto";

// // ex 4

// console.log(document.getElementById('pai').firstElementChild);

// // ex 5

// console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// // ex 6

// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// // ex 7

// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// // ex 8

// console.log(document.getElementById('pai').firstChild.nextElementSibling.nextElementSibling.nextElementSibling);

// PARTE II CRIANDO ELEMENTOS

// function criaElementos(pai, elemento){
//     let elementoPai = document.getElementById(pai);
//     let elementoCriado = document.createElement(elemento);

//     elementoCriado.innerText = elemento + ' criado, filho de "' + pai + '".';
//     elementoPai.appendChild(elementoCriado);    
// }

// criaElementos('pai', 'div');

// criaElementos('elementoOndeVoceEsta', 'h1');

// criaElementos('primeiroFilhoDoFilho', 'p');

// let encontraTerceiroFilho = document.getElementsByTagName('p')[0].parentElement.parentElement.nextElementSibling;

// console.log(encontraTerceiroFilho);

// PARTE III REMOVENDO ELEMENTOS

document.getElementById('elementoOndeVoceEsta').lastElementChild.remove();

document.getElementById('pai').firstElementChild.remove();

document.getElementById('elementoOndeVoceEsta').nextElementSibling.remove();

document.getElementById('pai').removeChild(document.getElementById('quartoEUltimoFilho'));

document.getElementById('elementoOndeVoceEsta').nextSibling.remove();
