export default class Subject {
  private _name: string;

  constructor(name: string) {
    this.validationName(name);
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newValue: string) {
    this.validationName(newValue);
    this._name = newValue;
  }

  private validationName(name: string) {
    if (name.length < 3) throw new Error('Nome deve ter no minimo 3 caracteres');
  }
}