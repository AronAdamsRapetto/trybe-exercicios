export default class Person {
  private _nome: string;
  private _nascimento: Date;

  constructor(nome: string, data: Date) {
    const validateName = this.validationData(data);
    const validateDate = this.validationName(nome);
    if (!validateDate || !validateName) {
      throw new Error ('Nome ou data inválidos');
    }
    this._nascimento = data;
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(newValue: string) {
    const validateName = this.validationName(newValue);
    if (!validateName) {
      throw new Error ('Nome inválido');
    }
    this._nome = newValue;
  }

  get nascimento() {
    return this._nascimento;
  }

  set nascimento(newValue: Date) {
    const validateDate = this.validationData(newValue);
    if (!validateDate) {
      throw new Error ('Data inválida');
    }
    this._nascimento = newValue
  }

  private validationName(nome: string) {
    if (nome.length >= 3) return true;
    return false
  }

  private validationData(data: Date) {
    const dataComparacao = new Date();

    if (data > dataComparacao) return false
    if (dataComparacao.getFullYear() - data.getFullYear() > 120) return false
    return true;
  }
}