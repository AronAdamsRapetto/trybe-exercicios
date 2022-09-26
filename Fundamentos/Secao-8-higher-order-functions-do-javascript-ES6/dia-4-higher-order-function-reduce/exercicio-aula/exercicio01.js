const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    const novoArray = arrays.reduce((acc, array) => {
        array.forEach((elemento) => acc.push(elemento));
        return acc;
    }, []);
    return novoArray;
  };

  console.log(flatten());