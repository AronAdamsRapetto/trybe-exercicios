class Estudante {
  private matricula: string;
  private nome: string;
  private notasProva: number[];
  private notasTrab: number[];

  constructor(m: string, nome: string, notasP: number[], notasT: number[]) {
    this.matricula = m;
    this.nome = nome;
    this.notasProva = notasP;
    this.notasTrab = notasT;
  }

  getNotaTotal = () => {
    const totalProvas = this.notasProva.reduce((total, nota) => total + nota, 0);
    const totalTrabalhos = this.notasTrab.reduce((total, nota) => total + nota, 0);
    return totalProvas + totalTrabalhos;
  }

  getMedia = () => {
    const notaTotal = this.getNotaTotal();
    const avaliacoes = this.notasProva.length + this.notasTrab.length
    return notaTotal / avaliacoes;
  }
}

const estudante = new Estudante('Matemática', 'Aron', [90, 89, 95, 92], [100, 100]);

console.log(estudante.getNotaTotal());
console.log(estudante.getMedia());
