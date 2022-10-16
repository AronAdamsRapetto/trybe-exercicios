type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

// função que converte de string para json 

// TYPE-ASSERTION
// function stringToJson(str: string): unknown {
//   const result = JSON.parse(str);
//   return result;
// }

// GENERICS
// function stringToJson<T>(str: string): T {
//   const result = JSON.parse(str);
//   return result;
// }
function stringToJson<T, U>(str: string, id: U ): T & { id: U } {
  const result = JSON.parse(str);
  result.id = id;
  return result;
}

// utilizando o "as" para converter de unknown para User
// TYPE-ASSERTION
// const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// GENERICS
// const user = stringToJson<User>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');
const user = stringToJson<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());

// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo

// TYPE-ASSERTION
// const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

// GENERICS
// const address = stringToJson<Address>('{"street":"Rua Tamarindo","number":1}')
const address = stringToJson<Address, string>('{"street":"Rua Tamarindo","number":1}', '#01')


user.name;
address.street;

const str: unknown = 'texto'; // simulando um valor supostamente desconhecido

// str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
(str as string).split('') // Corrigindo o erro acima usando o 'as'

const num: string = '2';

// num as number // dispara um erro, pois não é possível usar Type Assertions com tipos incompatíveis
(num as unknown) as number // Corrigindo o erro acima convertendo primeiramente para unknown


// GENERICS
function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

const returnNumber = identity<number, string>(100, "Olá");
const returnString = identity<string, string>("100", "Mundo");
const returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}

const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);

const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");