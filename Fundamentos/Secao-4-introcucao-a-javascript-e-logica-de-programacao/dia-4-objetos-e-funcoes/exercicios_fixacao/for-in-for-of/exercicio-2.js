let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(carro in car){
      console.log("Chave: " + carro + " / valor: " + car[carro]);
  }