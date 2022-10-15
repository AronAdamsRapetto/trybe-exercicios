import Enrolable from "./enrollable.interface";
import Person from "./Person.class";

export default class Students extends Person implements Enrolable {
  private _enrollment: string; 
  private _notasProva: number[];
  private _notasTrab: number[];

  constructor(nome: string, data: Date, notasP: number[], notasT: number[]) {
    super(nome, data);
    this.validaNotasProva(notasP);
    this.validaNotasTrab(notasT);
    this._enrollment = this.generateEnrollment();
    this._notasProva = notasP;
    this._notasTrab = notasT;
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(newValue: string) {
    this.validaenrollment(newValue);
    this._enrollment = newValue;
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

  private validaenrollment(enrollment: string) {
    if (enrollment.length < 16) throw new Error('enrollment inferior a 16 caracteres');
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

  generateEnrollment() {
    const firstRandomString = Math.floor(Date.now() * Math.random()).toString(36);
    const secontRandomString = Math.floor(Date.now() * Math.random()).toString(36);
    return `${firstRandomString}-${secontRandomString}`;
  }

}