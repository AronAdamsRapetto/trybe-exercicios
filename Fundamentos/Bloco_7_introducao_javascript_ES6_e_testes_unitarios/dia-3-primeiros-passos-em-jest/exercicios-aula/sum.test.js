const sum = require('./sum');

describe('Exercício 1 - Testes da função sum', () => {
    test('teste se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    test('teste se o retorno de sum(0, 0) é 0', () => {
        expect(0).toBe(sum(0, 0))
    })

    test(`Teste se a função sum(4,'5') lança um erro`, () => {
        expect(() => {sum(4, '5')}).toThrow();
    });

    test(`Teste se a mensagem de erro é "parameters must be numbers"`, () => {
        expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
    })
});