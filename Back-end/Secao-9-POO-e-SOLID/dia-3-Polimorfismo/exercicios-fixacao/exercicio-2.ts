// interface Character {
//   name: string;
//   specialMove: string;
// }

// interface DbCharacter extends Character {
//   id: number;
// }

// const db: DbCharacter[] = [];

interface IModel {
  insert(): void,
  select(): void,
  update(): void,
  delete(): void,
}

export class LocalDbModel implements IModel {
  insert() {
    console.log('inserted');
  }
  select(): void {
    console.log('selected');
  }
  update(): void {
    console.log('updated');
  }
  delete(): void {
    console.log('deleted');
  }
}

export class CharacterService {
  constructor(private model: IModel) { }

  insert() {
    this.model.insert();
  }
  select() {
    this.model.select();
  }
  update() {
    this.model.update();
  }
  delete() {
    this.model.delete();
  }
}

export class MockedDbModel implements IModel {
  insert() {
    console.log('mock inserted');
  }
  select(): void {
    console.log('mock selected');
  }
  update(): void {
    console.log('mock updated');
  }
  delete(): void {
    console.log('mock deleted');
  }
}