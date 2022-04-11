const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
const listaSkills = (objeto) => {
    const chavesObjeto = Object.keys(objeto);

    for (const valor in chavesObjeto) {
        console.log(`${chavesObjeto[valor]}, Nível: ${objeto[chavesObjeto[valor]]}`)
    }
}

listaSkills(student1);

  