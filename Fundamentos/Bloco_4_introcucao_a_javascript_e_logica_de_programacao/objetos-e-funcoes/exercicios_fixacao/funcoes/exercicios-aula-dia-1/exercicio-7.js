function classNota(porcentagem){

    let conceito;

    if(porcentagem < 0 || porcentagem > 100){
        console.log("Nota recebida: " + porcentagem + " Erro na computação da nota...");
    }
    else if(porcentagem >= 90){
        conceito = "A";
        console.log("Nota computada " + porcentagem + " / conceito aplicado " + conceito);
    }
    else if(porcentagem >= 80){
        conceito = "B";
        console.log("Nota computada " + porcentagem + " / conceito aplicado " + conceito);
    }
    else if(porcentagem >= 70){
        conceito = "C";
        console.log("Nota computada " + porcentagem + " / conceito aplicado " + conceito);
    }
    else if(porcentagem >= 60){
        conceito = "D";
        console.log("Nota computada " + porcentagem + " / conceito aplicado " + conceito);
    }
    else if(porcentagem >= 50){
        conceito = "E";
        console.log("Nota computada " + porcentagem + " / conceito aplicado " + conceito);
    }
    else if(porcentagem < 50){
        conceito = "F";
        console.log("Nota computada " + porcentagem + " / conceito aplicado " + conceito);
    }    
}

classNota(-50);