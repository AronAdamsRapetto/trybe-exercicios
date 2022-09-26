function verificaPalindromo(palavra){
    let auxPalavra = [];
    let palavraInvertida = "";
    
    for(letras of palavra){
        auxPalavra.push(letras);
    }

    auxPalavra.reverse();
    
    for(letras of auxPalavra){
        palavraInvertida += letras;
    }

    if(palavra === palavraInvertida){
        return true;
    }
    else{
        return false;
    }
};

let palindromo = verificaPalindromo('arara');

console.log(palindromo);