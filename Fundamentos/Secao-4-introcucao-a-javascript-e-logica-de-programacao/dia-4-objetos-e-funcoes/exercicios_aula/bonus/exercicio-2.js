const arrayOfNumbers = (vector) => {
    const novoArray = [];
    for (let index = 0; index < vector.length; index += 1) {
        vector[index].forEach(element => {
            if (element % 2 === 0) {
                novoArray.push(element);
            }
        });
    }
    return novoArray;
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

