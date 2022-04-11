const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//Exercicio 1

const addTurno = (objeto, chave, valor) => objeto[chave] = valor;

addTurno(lesson2, 'turno', 'Noite');

//Exercicio 2

const printKeys = (objeto) => console.log(Object.keys(objeto));

// printKeys(lesson2);

//Exercicio 3

const tamanhoObjeto = (objeto) => {
    tamanho = Object.keys(objeto);
    return tamanho.length;
}

// console.log(tamanhoObjeto(lesson2));

//Exercicio 4

const printValues = (objeto) => console.log(Object.values(objeto));

// printValues(lesson2);

//Exercicio 5

const juntaObjetos = (objeto1, objeto2, objeto3) => {
    const cloneLesson1 = {lesson1: objeto1};
    const cloneLesson2 = {lesson2: objeto2};
    const cloneLesson3 = {lesson3: objeto3};
    return Object.assign({}, cloneLesson1, cloneLesson2, cloneLesson3);
}

allLessons = juntaObjetos(lesson1, lesson2, lesson3);

console.log(allLessons);

//Exercicio 6

const totalEstudantes = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

// console.log(totalEstudantes());

//Exercicio 7

const pegaValor = (objeto, posicao) => {
    const valor = Object.values(objeto);
    return valor[posicao];
}

// console.log(pegaValor(lesson1, 0));

//Exercicio 8

const verificaPar = (objeto, chave, valor) => objeto[chave] === valor ? true : false;

// console.log(verificaPar(lesson3, 'turno', 'noite'));

// console.log(verificaPar(lesson3, 'materia', 'Maria Clara'));

//Exercicio Bonus 1

const estudantesMatematica = () => {
    let estudantes = 0;
    for (let index in allLessons) {
        if(allLessons[index].materia === "Matemática") {
            estudantes += allLessons[index].numeroEstudantes;
        }
    }
    return estudantes;
}

// console.log(estudantesMatematica());

//Exercicio Bonus 2

const relatortioProfessor = (objeto, nome) => {
    const novoObjeto = {
        professor: nome,
        aulas: [],
        estudantes: 0
    };

    for (let index in objeto) {
        if(objeto[index].professor === novoObjeto.professor) {
            novoObjeto.aulas.push(objeto[index].materia);
            novoObjeto.estudantes += objeto[index].numeroEstudantes;
        }
    }

    return novoObjeto;
}

console.log(relatortioProfessor(allLessons, 'Maria Clara'));

