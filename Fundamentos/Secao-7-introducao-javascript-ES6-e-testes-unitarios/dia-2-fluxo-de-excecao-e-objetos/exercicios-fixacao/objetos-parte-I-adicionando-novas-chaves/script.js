const objeto = {
    nome: 'Aron',
    idade: 24,
    trabalho: 'dev'
}

console.log(objeto);

const addChaveObjeto = (objeto, chave, valor) =>  objeto[chave] = valor;

addChaveObjeto(objeto, 'Estado Civil', 'Casado');

console.log(objeto);