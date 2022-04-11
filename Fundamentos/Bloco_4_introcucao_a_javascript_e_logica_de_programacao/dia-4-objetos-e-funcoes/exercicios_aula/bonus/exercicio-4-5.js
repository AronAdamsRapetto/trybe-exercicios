let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  const moradorBlocoDois = Object.values(moradores.blocoDois[1]);
  console.log(`O morador do bloco 2 de nome ${moradorBlocoDois[0]} ${moradorBlocoDois[1]} mora no ${moradorBlocoDois[2]}° andar, apartamento ${moradorBlocoDois[3]}.`);

  for (key in moradores) {
      moradores[key].forEach((element) => {
          console.log(`${element.nome} ${element.sobrenome}`);
      });
  }