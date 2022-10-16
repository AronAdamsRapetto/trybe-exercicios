type slice = 4 | 6 | 8;

interface pizza {
  flavor: string,
  slices: slice,
}

const pizzaCalabresa: pizza = {
  flavor: 'Calabresa',
  slices: 8,
}
console.log(pizzaCalabresa);

const pizzaMarguerita: pizza = {
  flavor: 'Marguerita',
  slices: 6,
}
console.log(pizzaMarguerita);

const pizzaNutela: pizza = {
  flavor: 'Nutela',
  slices: 4,
}
console.log(pizzaNutela);

interface comun extends pizza {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni',
}

interface vegetariana extends pizza {
  flavor: 'Marguerita' | 'Palmito' | 'Cogumelo',
}

interface doce extends pizza {
  flavor: 'Nutela' | 'Goiabada com queiro' | 'Marshmallow',
  slices: 4
}

const pizzaComum1: comun = {
  flavor: 'Calabresa',
  slices: 8,
}
const pizzaComum2: comun = {
  flavor: 'Frango',
  slices: 6,
}
const pizzaComum3: comun = {
  flavor: 'Pepperoni',
  slices: 4,
}
console.log(`pizza1: ${Object.values(pizzaComum1)}
pizza2: ${Object.values(pizzaComum2)}
pizza3: ${Object.values(pizzaComum3)}`);

const pizzaVegetariana1: vegetariana = {
  flavor: 'Palmito',
  slices: 4,
}
const pizzaVegetariana2: vegetariana = {
  flavor: 'Cogumelo',
  slices: 8,
}
console.log(`pizza vegetariana1: ${Object.values(pizzaVegetariana1)}
pizza vegetariana2: ${Object.values(pizzaVegetariana2)}`);

const pizzaDoce: doce = {
  flavor: 'Goiabada com queiro',
  slices: 4,
}
console.log(`pizza doce: ${pizzaDoce}`);