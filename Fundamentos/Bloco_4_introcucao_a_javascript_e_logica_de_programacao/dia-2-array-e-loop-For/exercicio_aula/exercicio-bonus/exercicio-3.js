let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multi =[];
let auxMultiplicador;

for(let index = 0; index < numbers.length; index += 1){
    if(index === numbers.length -1){
        multi.push(numbers[index] * 2);
    }
    else{
        multi.push(numbers[index] * numbers[index + 1]);
    }
    
}
console.log(multi);
