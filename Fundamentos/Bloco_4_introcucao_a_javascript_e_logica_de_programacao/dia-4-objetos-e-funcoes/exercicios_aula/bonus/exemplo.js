function qualASoma(str){    
    const converte = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let soma = 0;    
    let numLeft = 0;
  
    for (let i = 0; i < str.length; i++) {      
      const numAtual = converte[str[i]];    
      soma += numAtual;     
      if (numLeft < numAtual) {        
        soma -= numLeft + numLeft;
      }      
      numLeft = numAtual;
    }   
    return soma;
}
  console.log(qualASoma('IX'));