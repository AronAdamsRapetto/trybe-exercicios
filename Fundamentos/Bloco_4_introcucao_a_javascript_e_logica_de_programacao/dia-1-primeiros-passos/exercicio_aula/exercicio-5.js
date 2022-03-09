const a = -50, b = 150, c = 80;
let triangulo;

if(a < 0 || b <0 || c < 0) {
    console.log("Erro ao validar triangulo... ");
} else if(a + b + c === 180){    
    triangulo = true;
    console.log(triangulo);
}
else {
    triangulo = false;
    console.log(triangulo);
}

