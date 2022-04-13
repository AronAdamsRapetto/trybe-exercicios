// escreva sum abaixo
const sum = (...operator) => {
    const total = operator.reduce((acc, numero) => acc + numero, 0);
    return total;
};

console.log(sum(1,2,3,4,5,6,7,8,9,10));