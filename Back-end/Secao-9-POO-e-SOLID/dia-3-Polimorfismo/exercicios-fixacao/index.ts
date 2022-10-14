import { LongRangerCharacter, MeleeCharacter, myFunction } from "./exercicio-1";
import { CharacterService, LocalDbModel, MockedDbModel } from "./exercicio-2";


// Exercicio 1
const melleCharacter = new MeleeCharacter();
const rangerCharacter = new LongRangerCharacter();

myFunction(melleCharacter);
myFunction(rangerCharacter);

// Exericio 2
const model = new LocalDbModel();
const mockModel = new MockedDbModel();

const charService = new CharacterService(model);
const mockCharService = new CharacterService(mockModel);

charService.insert();
mockCharService.update();