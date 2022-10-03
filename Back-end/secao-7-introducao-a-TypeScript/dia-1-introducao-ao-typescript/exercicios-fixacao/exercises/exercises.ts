export function greeter(name: string):string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losangle(D:number, d:number):number {
  return (D * d) / 2;
}

export function trapeze(B:number, b:number, height:number):number {
  return ((B + b) * height) / 2;
}

export function circle(radius:number):number {
  return (radius ** 2) * 3.14;
}

enum weekDays {
  domingo = 1,
  segunda,
  terça,
  quarta,
  quinta,
  sexta,
  sabado,
}

enum rainbowColors {
  red = 'Vermelho',
  orange = 'Laranja',
  yellow = 'Amarelo',
  green = 'Verde',
  blue = 'Azul',
  indigo = 'Anil',
  violet = 'Violeta',
}