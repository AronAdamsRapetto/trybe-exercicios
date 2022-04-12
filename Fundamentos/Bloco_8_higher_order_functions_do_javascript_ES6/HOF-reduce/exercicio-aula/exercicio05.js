const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    const contadorA = names.reduce((accA, nome) => {
        for (letra of nome){
            letra.toUpperCase().includes('A') ? accA = accA + 1 : accA = accA;
        }
        return accA;
    }, 0);

    return contadorA;
  };

console.log(containsA());