function encode(mensagem) {
    let mensagemCodificada = '';
    for (let letra = 0; letra < mensagem.length; letra += 1) {
      switch (mensagem[letra]) {
      case 'a':
        mensagemCodificada += '1';
        break;
      case 'e':
        mensagemCodificada += '2';
        break;
      case 'i':
        mensagemCodificada += '3';
        break;
      case 'o':
        mensagemCodificada += '4';
        break;
      case 'u':
        mensagemCodificada += '5';
        break;
      default:
        mensagemCodificada += mensagem[letra];
        break;
      }
    }
    return mensagemCodificada;
  }

  function decode(mensagem) {
    let mensagemDecodificada = '';
    for (let letra = 0; letra < mensagem.length; letra += 1) {
      switch (mensagem[letra]) {
      case '1':
        mensagemDecodificada += 'a';
        break;
      case '2':
        mensagemDecodificada += 'e';
        break;
      case '3':
        mensagemDecodificada += 'i';
        break;
      case '4':
        mensagemDecodificada += 'o';
        break;
      case '5':
        mensagemDecodificada += 'u';
        break;
      default:
        mensagemDecodificada += mensagem[letra];
        break;
      }
    }
    return mensagemDecodificada;
  }

  describe('Exercicio 4 - Testes das funções encode e decode', () => {
    test('Teste se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');    
    });
    test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');    
    });
    test('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('a, b, c, d, e, f')).toBe('1, b, c, d, 2, f');
        expect(decode('1, b, 6, d, 2, f')).toBe('a, b, 6, d, e, f');    
    });
    test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('Hello world')).toHaveLength(11);
        expect(decode('Hello world')).toHaveLength(11);    
    });
  });