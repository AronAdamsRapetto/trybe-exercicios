function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
  // implemente seus testes aqui

  describe('Exercicio 3 - Testes da função myFizzBuzz', () => {
      test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
          expect(myFizzBuzz(15)).toBe('fizzbuzz');
      });
      test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
          expect('fizz').toBe(myFizzBuzz(3));
      });
      test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect('buzz').toBe(myFizzBuzz(5));
      });
      test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(2).toBe(myFizzBuzz(2));
      });
      test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(false).toBe(myFizzBuzz('a'));
      });
  });