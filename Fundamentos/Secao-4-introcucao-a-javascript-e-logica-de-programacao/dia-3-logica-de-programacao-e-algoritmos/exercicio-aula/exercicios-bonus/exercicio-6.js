let numero = 21;
let primo = false;

for(let i = 2; i < numero; i += 1){
    if(numero % i === 0){
        primo = false;
        break;
    }
    else{
        primo = true;
    }
}
console.log(numero + " é um número informado é primo? " + primo);