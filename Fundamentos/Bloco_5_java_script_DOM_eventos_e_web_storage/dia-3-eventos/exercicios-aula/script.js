function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  //ex 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let paiLiDias = document.getElementById('days');
  let dia = [];
  
  function criaLiDia () {
    for(let index = 0; index < dezDaysList.length; index += 1){
        dia[index] = document.createElement('li');
        dia[index].classList = 'day';
        dia[index].innerText = dezDaysList[index];        
        paiLiDias.appendChild(dia[index]);      
    }
  }

  function addClasseFeriados() {
    for(let index = 0; index < dezDaysList.length; index += 1){
      if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
        dia[index].classList.add('holiday');
      }
    }
  }

  function addClasseSexta() {
    for(let index = 0; index < dezDaysList.length; index += 1){
      if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
        dia[index].classList.add('friday');
      }
    }
  }

  // ex 2 e 4

  function criaBotao(textoBotao, elementoId) {
    let paiDoBotao = document.getElementsByClassName('buttons-container');
    let botao = document.createElement('button');
    botao.innerText = textoBotao;
    botao.type = 'button';
    botao.id = elementoId;
    paiDoBotao[0].appendChild(botao);
  }

  // ex 3

  function destacaFeriados(){
    let diaFeriado = document.getElementsByClassName('holiday');
    for(let index = 0; index < diaFeriado.length; index += 1){
      if(diaFeriado[index].style.backgroundColor !== 'green'){
        diaFeriado[index].style.backgroundColor = 'green';      
      } else {
        diaFeriado[index].style.backgroundColor = '#eee';
      }
    }
  }

  //ex 5

  let armazenaDiasSexta = [];
  function alteraSexta(){
    let diaSexta = document.getElementsByClassName('friday');
    for(let index = 0; index < diaSexta.length; index += 1){
      if(diaSexta[index].innerText !== 'SEXTOU!'){
        armazenaDiasSexta.push(diaSexta[index].innerText);
        diaSexta[index].innerText = 'SEXTOU!';        
      } else {
        diaSexta[index].innerText = armazenaDiasSexta[index];
      }
    }
  }

  //ex 6

  function destacaDia(event){
    event.target.style.fontSize = '2em';
  }
  
  function normalizaDia(event){
    event.target.style.fontSize = '20px';
  }

  //ex 7

  function addTask(task){
    let paiDeSpan = document.getElementsByClassName('my-tasks');
    let criaSpan = document.createElement('span');
    criaSpan.innerText = task;
    paiDeSpan[0].appendChild(criaSpan);
  }
  
  // chamada das funcoes

  // ex 1

  criaLiDia();
  addClasseFeriados();
  addClasseSexta();
  
  //ex 2

  criaBotao('Feriados', 'btn-holiday'); 
  
  //ex 3
  
  let botaoFeriado = document.getElementById('btn-holiday');
  botaoFeriado.addEventListener('click', destacaFeriados);

  //ex 4

  criaBotao('Sexta-feira', 'btn-friday');

  // ex 5

  let botaoSexta = document.getElementById('btn-friday');
  botaoSexta.addEventListener('click', alteraSexta);  

  //ex 6

  let dias = document.getElementsByClassName('day');
  for(let index = 0; index < dias.length; index += 1){
    dias[index].addEventListener('mouseover', destacaDia);
    dias[index].addEventListener('mouseleave', normalizaDia);
  }

  addTask('Terminar exercícios da trybe');

