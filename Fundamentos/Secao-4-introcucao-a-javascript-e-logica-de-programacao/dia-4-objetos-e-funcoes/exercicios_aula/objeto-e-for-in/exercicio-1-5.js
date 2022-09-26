let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem vinda, " + info.personagem);

  info.recorrente = "Sim";

  console.log(info);  

  for(infos in info){
    console.log(infos);
  }
    
  for(infos in info){
    console.log(info[infos]);
  }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  for(infos in info, info2){
    console.log(info[infos] + " e " + info2[infos]);
  }