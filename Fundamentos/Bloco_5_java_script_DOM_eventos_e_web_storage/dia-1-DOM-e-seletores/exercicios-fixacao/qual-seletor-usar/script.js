let containerHeader = document.getElementById('header-container');

containerHeader.style.backgroundColor = '#2FC18C';

// 

let containerTasks = document.getElementsByTagName('section');

containerTasks[0].style.backgroundColor = '#ffe4c4';

containerTasks[1].style.backgroundColor = '#FFFF00';

//

let tituloTasks = document.getElementsByTagName('h3');

for(let i = 0; i < tituloTasks.length; i += 1){
    if (i <= 1) {
        tituloTasks[i].style.backgroundColor = '#993399';
    } else {
        tituloTasks[i].style.backgroundColor = '#000000';
    }
}

//

let containerRodape = document.getElementById('footer-container');

containerRodape.style.backgroundColor = '#006400';
