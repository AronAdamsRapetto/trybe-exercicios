import Student from "./Estudante.class";
import Subject from "./Subject.class";
import Teacher from "./Teacher.class";

const estudante1 = new Student('Aron', new Date('08-22-1997'), [90, 89, 95, 92], [100, 100]);
const estudante2 = new Student('Pedro', new Date('12-01-1997'), [90, 89, 95, 92], [100, 100]);
const estudante3 = new Student('Greg', new Date('09-27-1992'), [90, 89, 95, 92], [100, 100]);
const estudante4 = new Student('Glauco', new Date('09-15-1999'), [90, 89, 95, 92], [100, 100]);
const estudante5 = new Student('Rafa', new Date('05-14-1980'), [90, 89, 95, 92], [100, 100]);

console.log(estudante1.enrollment);
console.log(estudante1.nome);
console.log(estudante1.nascimento);
console.log(estudante1.notasProva);
console.log(estudante1.notasTrab);
console.log(estudante1.getNotaTotal());
console.log(estudante1.getMedia());

console.log(estudante2.enrollment);
console.log(estudante2.nome);
console.log(estudante2.nascimento);
console.log(estudante2.notasProva);
console.log(estudante2.notasTrab);
console.log(estudante2.getNotaTotal());
console.log(estudante2.getMedia());

console.log(estudante3.enrollment);
console.log(estudante3.nome);
console.log(estudante3.nascimento);
console.log(estudante3.notasProva);
console.log(estudante3.notasTrab);
console.log(estudante3.getNotaTotal());
console.log(estudante3.getMedia());

console.log(estudante4.enrollment);
console.log(estudante4.nome);
console.log(estudante4.nascimento);
console.log(estudante4.notasProva);
console.log(estudante4.notasTrab);
console.log(estudante4.getNotaTotal());
console.log(estudante4.getMedia());

console.log(estudante5.enrollment);
console.log(estudante5.nome);
console.log(estudante5.nascimento);
console.log(estudante5.notasProva);
console.log(estudante5.notasTrab);
console.log(estudante5.getNotaTotal());
console.log(estudante5.getMedia());

const diciplina1 = new Subject('Matemática');
const diciplina2 = new Subject('História');
const diciplina3 = new Subject('Filosofia');

console.log(diciplina1.name);
console.log(diciplina2.name);
console.log(diciplina3.name);

const teacher1 = new Teacher('Aron', new Date(), 4567.72, diciplina1);
const teacher2 = new Teacher('Aron', new Date(), 7289.81, diciplina2);
const teacher3 = new Teacher('Aron', new Date(), 12678.47, diciplina3);