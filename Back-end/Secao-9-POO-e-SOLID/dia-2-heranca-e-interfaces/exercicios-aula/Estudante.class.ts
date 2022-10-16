import Person from "./Person.class";

export default class Students extends Person {
  private _matricula: string; 
  private _notasProva: number[];
  private _notasTrab: number[];

  constructor(nome: string, data: Date, notasP: number[], notasT: number[]) {
    super(nome, data);
    this.validaNotasProva(notasP);
    this.validaNotasTrab(notasT);
    this._matricula = this.hashGenerate();
    this._notasProva = notasP;
    this._notasTrab = notasT;
  }

  get matricula() {
    return this._matricula;
  }

  set matricula(newValue: string) {
    this.validaMatricula(newValue);
    this._matricula = newValue;
  }

  get notasProva() {
    return this._notasProva;
  }

  set notasProva(newValue: number[]) {
    this.validaNotasProva(newValue);
    this._notasProva = newValue;
  }

  get notasTrab() {
    return this._notasTrab;
  }

  set notasTrab(newValue: number[]) {
    this.validaNotasTrab(newValue);
    this._notasTrab = newValue;
  }

  private validaMatricula(matricula: string) {
    if (matricula.length < 16) throw new Error('Matricula inferior a 16 caracteres');
  }

  private validaNotasTrab(notasTrab: number[]) {
    if (notasTrab.length > 2) throw new Error('Pode haver no máximo 2 notas de trabalho');
  }

  private validaNotasProva(notasProva: number[]) {
    if (notasProva.length > 4) throw new Error('Pode haver no máximo 4 notas de Prova');
  }

  public getNotaTotal = () => {
    const totalProvas = this._notasProva.reduce((total, nota) => total + nota, 0);
    const totalTrabalhos = this._notasTrab.reduce((total, nota) => total + nota, 0);
    return totalProvas + totalTrabalhos;
  }

  public getMedia = () => {
    const notaTotal = this.getNotaTotal();
    const avaliacoes = this._notasProva.length + this._notasTrab.length
    return notaTotal / avaliacoes;
  }

  private hashGenerate() {
    const firstRandomString = Math.floor(Date.now() * Math.random()).toString(36);
    const secontRandomString = Math.floor(Date.now() * Math.random()).toString(36);
    return `${firstRandomString}-${secontRandomString}`;
  }

}