let peca = "ReI";

if(peca.toLowerCase() === "peao"){
    console.log("Uma casa para frente");
}
else if(peca.toLowerCase() === "torre"){
    console.log("Vertical e horizontal");
}
else if(peca.toLowerCase() === "cavalo"){
    console.log("Movimento em 'L'");
}
else if(peca.toLowerCase() === "bispo"){
    console.log("Diagonal");
}
else if(peca.toLowerCase() === "rainha"){
    console.log("Vertical, horizontal e diagonal");
}
else if(peca.toLowerCase() === "rei"){
    console.log("Uma casa para qualquer direção");
}
else{
    console.log("Essa peça não existe no xadrez...")
}