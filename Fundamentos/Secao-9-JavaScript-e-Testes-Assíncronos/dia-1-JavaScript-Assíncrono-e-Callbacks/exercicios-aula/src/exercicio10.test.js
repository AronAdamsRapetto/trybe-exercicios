beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('3 - beforeEach'));
  afterEach(() => console.log('3 - afterEach'));

  test('', () => console.log('3 - test'));
});

// A saída será:
//1 - beforeEach
//1 - test
//1 - afterEach
//1 - beforeEach (Errei - ele irá rodar beforeEach antes do escopo describe)

//2 - beforeEach
//2 - test
//2 - afterEach
//1 - afterEach (Errei - ele irá rodar afterEach depois di escopo describe)

//Teste para entendimento - a saída será:
//1 - beforeEach
//1 - test
//1 - afterEach

//1 - beforeEach
//2 - beforeEach
//2 - test
//2 - afterEach
//1 - afterEach

//1 - beforeEach
//3 - beforeEach
//3 - test
//3 - afterEach
//1 - afterEach