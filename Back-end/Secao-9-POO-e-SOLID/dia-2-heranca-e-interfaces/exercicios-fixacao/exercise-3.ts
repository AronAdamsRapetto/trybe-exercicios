interface Logger {
  log(message: string): void,
}

export class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

export class ConsoleLogger2 implements Logger {
  log(message: string) {
    console.log('LOGGER 2', message);
  }
}

interface Database {
  console: Logger,
  save(key: string, value: string): void,
}

export class ExampleDataBase implements Database {
  constructor(public console: Logger = new ConsoleLogger()) { }

  save(key: string, value: string) {
    this.console.log(key + '' + value);
  }
}