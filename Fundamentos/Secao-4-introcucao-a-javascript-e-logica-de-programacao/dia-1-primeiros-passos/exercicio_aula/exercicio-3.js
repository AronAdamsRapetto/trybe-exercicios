let maior;
const a = 25, b = 16, c = 28;

if(a > b && a > c) {
    maior = a;
} 
else if(b > c) {
    maior = b;
}
else {
    maior = c;
}

console.log(maior);