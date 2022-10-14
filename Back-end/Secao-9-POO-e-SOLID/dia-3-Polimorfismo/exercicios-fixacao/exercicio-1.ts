abstract class Character {
  abstract talk(): void
  abstract specialMove():void
}

export class MeleeCharacter extends Character {
  talk() {
    console.log('Melle Character is talking');
  }
  specialMove(): void {
    console.log('Melle Character has used his special move');
  }
}

export class LongRangerCharacter extends Character {
  talk(): void {
      console.log('Long Ranger Character is talking');
  }

  specialMove(): void {
      console.log('Long Ranger Character is using his special move');
  }
}

export const myFunction =(character: Character) => {
  character.talk();
  character.specialMove();
}
