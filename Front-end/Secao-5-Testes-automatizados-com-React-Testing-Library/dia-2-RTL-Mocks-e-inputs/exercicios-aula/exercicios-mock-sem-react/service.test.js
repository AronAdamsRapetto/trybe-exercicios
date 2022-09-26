
describe("Testando função randomNumber do arquivo service.js", () => {
  let randomNumber = require('./service');

  it("Testa se função randomNumber retorna 10", () => {  
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  });

  it("Exercício 2", () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(randomNumber(2, 2)).toBe(1);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber(2, 2)).toBe(undefined);
  });

  it("Exercício 3", () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(1, 2, 3)).toBe(6);
    expect(randomNumber(1, 2, 3)).not.toBe(undefined);
    expect(randomNumber).toHaveBeenCalledTimes(2);

    randomNumber.mockReset();

    randomNumber.mockImplementation((a) => a * 2);

    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    
  })
});

describe("Testando novas funções do arquivo service.js", () => {
  let service = require('./service');
  jest.mock('./service');

  service.upperCase.mockImplementation((texto) => texto.toLowerCase());

  service.firstLetter.mockImplementation((texto) => texto[texto.length - 1]);

  service.mergeText.mockImplementation((texto1, texto2, texto3) => texto1 + texto2 + texto3);

  it("Testando função upperCase", () => {
    expect(service.upperCase('Nome')).toBe('nome');
    expect(service.upperCase('Cidade')).toBe('cidade');
    expect(service.upperCase).toHaveBeenCalledTimes(2);
  });

  it("Testando função firstLetter", () => {
    expect(service.firstLetter('nome')).toBe('e');
    expect(service.firstLetter('alexandre')).toBe('e');
    expect(service.firstLetter).toHaveBeenCalledTimes(2);
  });

  it("Testando função mergeText", () => {
    expect(service.mergeText('primeiro ', 'nome', 'e')).toBe('primeiro nomee');
    expect(service.mergeText('alexandre', 'faria', 'filho')).toBe('alexandrefariafilho');
    expect(service.mergeText).toHaveBeenCalledTimes(2);
  });

  it("Testando função upperCase original", () => {
    service.upperCase.mockRestore();
    expect(service.upperCase('nome')).toBe(undefined);
    expect(service.upperCase).toHaveBeenCalledTimes(1);
  });
});

describe("Testando mock de requisição a API", () => {
  const service = require('./service');  

  it("testa requisição resolvida", async () => {
    service.fetchDogs.mockResolvedValue("request success");
    
    await expect(service.fetchDogs()).resolves.toBe("request success");
    expect(service.fetchDogs).toHaveBeenCalledTimes(1);
  });

  it("Testa requisição rejeitada", async () => {    
    service.fetchDogs.mockRejectedValue("request fail");

    await expect(service.fetchDogs()).rejects.toMatch("request fail");
    expect(service.fetchDogs).toHaveBeenCalledTimes(2);
  })
});