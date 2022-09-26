let candidato = "resultado"

switch(candidato){
    case "aprovado":
        console.log("Parabéns, você foi aprovado(a)!!!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovado":
        console.log("Infelizmente você reprovado :(");
        break;
    default:
        console.log("Não se aplica...");
}