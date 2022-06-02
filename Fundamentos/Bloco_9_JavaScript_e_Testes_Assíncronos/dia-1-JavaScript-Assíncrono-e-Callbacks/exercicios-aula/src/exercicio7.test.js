const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

describe('teste se função uppercase se comporta corretamente', ()=> {
  
  it('Dada a palavra "Aron", retorna "ARON"', (done) => {  
    const expectedResult = 'ARON';

    function callback(resultado) {
      try {
        expect(resultado).toBe(expectedResult);
        done();
      } catch (error) {
        done(error);
      }
    };
    uppercase('Aron', callback);
  });

  it('Dada a frase "Ei, roda esse teste direitinho", retorna "EI, RODA ESSE TESTE DIREITINHO"', (done) => {  
    const expectedResult = 'EI, RODA ESSE TESTE DIREITINHO';

    function callback(resultado) {
      try {
        expect(resultado).toBe(expectedResult);
        done();
      } catch (error) {
        done(error);
      }
    };
    uppercase('Ei, roda esse teste direitinho', callback);
  });

  it('Dada a frase "testando... 1, 2... testando", retorna "TESTANDO... 1, 2... TESTANDO"', (done) => {  
    const expectedResult = 'TESTANDO... 1, 2... TESTANDO';

    function callback(resultado) {
      try {
        expect(resultado).toBe(expectedResult);
        done();
      } catch (error) {
        done(error);
      }
    };
    uppercase('testando... 1, 2... testando', callback);
  });  
});