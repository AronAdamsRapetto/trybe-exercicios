"use strict";
const pizzaCalabresa = {
    flavor: 'Calabresa',
    slices: 8,
};
console.log(pizzaCalabresa);
const pizzaMarguerita = {
    flavor: 'Marguerita',
    slices: 6,
};
console.log(pizzaMarguerita);
const pizzaNutela = {
    flavor: 'Nutela',
    slices: 4,
};
console.log(pizzaNutela);
const pizzaComum1 = {
    flavor: 'Calabresa',
    slices: 8,
};
const pizzaComum2 = {
    flavor: 'Frango',
    slices: 6,
};
const pizzaComum3 = {
    flavor: 'Pepperoni',
    slices: 4,
};
console.log(`pizza1: ${Object.values(pizzaComum1)}
pizza2: ${Object.values(pizzaComum2)}
pizza3: ${Object.values(pizzaComum3)}`);
const pizzaVegetariana1 = {
    flavor: 'Palmito',
    slices: 4,
};
const pizzaVegetariana2 = {
    flavor: 'Cogumelo',
    slices: 8,
};
console.log(`pizza vegetariana1: ${Object.values(pizzaVegetariana1)}
pizza vegetariana2: ${Object.values(pizzaVegetariana2)}`);
const pizzaDoce = {
    flavor: 'Goiabada com queiro',
    slices: 4,
};
console.log(`pizza doce: ${pizzaDoce}`);
