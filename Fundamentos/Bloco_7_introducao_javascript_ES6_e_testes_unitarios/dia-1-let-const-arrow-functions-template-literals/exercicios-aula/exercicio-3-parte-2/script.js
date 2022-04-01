const btn = document.getElementById('btn');
const texto = document.getElementById('cont-clicks');
let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount += 1;
    texto.innerText = `${clickCount} cliques no botão`;   
});