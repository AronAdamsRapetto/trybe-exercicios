"use strict";
const myFilter = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        const validateValue = callback(array[i], i, array);
        if (validateValue)
            newArray.push(array[i]);
    }
    return newArray;
};
const teste = myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value > 5);
console.log(teste);
