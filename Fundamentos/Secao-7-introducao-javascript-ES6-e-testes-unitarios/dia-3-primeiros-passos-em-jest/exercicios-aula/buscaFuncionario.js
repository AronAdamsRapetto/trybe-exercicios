// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

const validaInformacao = (objeto, info) => {
  let informacao;
  for (key in objeto) {    
    if (key === info) {
      informacao = objeto[key];  
    }
  }
  if (informacao === undefined) {
    throw new Error('Informação indisponível')
  }  
};

const selecionaId = (id) => {
  let dadosEmpregado;
  for (index of professionalBoard) {
    if (index.id === id) {
      dadosEmpregado = index;
    }
  }
  if (dadosEmpregado === undefined) {
    throw new Error("ID não identificada");
  }
  return dadosEmpregado;
};

// Pesquisa
const searchEmployee = (id, detail) => {
  try {
    const empregado = selecionaId(id);
    validaInformacao(empregado, detail);
    return `id: ${empregado.id}, informação solicitada: ${empregado[detail]}`;
  } catch (erro) {
    console.log(erro.message);
  }
};

module.exports = { searchEmployee, selecionaId, validaInformacao };
