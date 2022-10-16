function verificaFinal(word, ending){
    let mensErro = "Erro ao processar informação!\nA sengunda string deve ser menor que a primeira!"
    let ultimasletras = "";
    if(word > ending){
        for(letra in word){
            if(letra >= word.length - ending.length){
                ultimasletras += word[letra];
            }
        }
        if(ending === ultimasletras){
            return true;
        }
        else{
            return false;
        }

    }
    else{
        return mensErro
    }    
};

console.log(verificaFinal('joaofernando', 'fernan'));