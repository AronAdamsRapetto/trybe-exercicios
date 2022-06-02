function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
  // implemente seus testes aqui

  describe('Exercicio 2 - Testes da função remove array', () => {
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
      expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    });
    
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });