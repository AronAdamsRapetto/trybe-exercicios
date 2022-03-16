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

  // ex2-4

  function criaBotao(textoBotao, elementoId) {
    let paiDoBotao = document.getElementsByClassName('buttons-container');
    let botao = document.createElement('button');
    botao.innerText = textoBotao;
    botao.type = 'button';
    botao.id = elementoId;
    paiDoBotao[0].appendChild(botao);
  }

  // ex3

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
  
  
  criaLiDia();
  addClasseFeriados();
  addClasseSexta();
  
  criaBotao('Feriados', 'btn-holiday');  
  let botaoFeriado = document.getElementById('btn-holiday');
  botaoFeriado.addEventListener('click', destacaFeriados);

  criaBotao('Sexta-feira', 'btn-friday');
  let botaoSexta = document.getElementById('btn-friday');
  botaoSexta.addEventListener('click', alteraSexta);  
