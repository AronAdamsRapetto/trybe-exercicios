const acordar = () => 'Acordado!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(acordar));
console.log(doingThings(cafe));
console.log(doingThings(dormir));