const {
  searchEmployee,
  selecionaId,
  validaInformacao,
} = require("./buscaFuncionario.js");

const obj = {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"]
}

describe("Exercicio Bônus - Testes da função busca funcionário", () => {
  test("Verifica se função existe", () => {
    expect(searchEmployee).toBeDefined();
  });

  test("Verifica se ao passar uma Id que não existe retorna a mensagem de erro 'ID não identificada'", () => {
    expect(() => {
      selecionaId("8");
    }).toThrowError("ID não identificada");
  });

  test("Verifica se ao passar uma informação que não existe retorna a mensagem de  erro 'Informação indisponível'", () => {
    expect(() => {
      validaInformacao(obj, 'last');
    }).toThrowError('Informação indisponível');
  });

  test('(1)Verifica se o retorno da função retorna o esperado', () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toBe('id: 9852-2-2, informação solicitada: Jeff');
  });
  test('(2)Verifica se o retorno da função retorna o esperado', () => {
    expect(searchEmployee('1256-4', 'specialities')).toBe('id: 1256-4, informação solicitada: Hooks,Context API,Tailwind CSS');
  });
  test('(3)Verifica se o retorno da função retorna o esperado', () => {
    expect(searchEmployee('4678-2', 'specialities')).toBe('id: 4678-2, informação solicitada: Backend');
  });
  test('(4)Verifica se o retorno da função retorna o esperado', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('id: 5569-4, informação solicitada: Jobs');
  });
});
