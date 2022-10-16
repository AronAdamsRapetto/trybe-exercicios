class Cliente {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
};

class Pedido {
  private pedido: number[];
  private pagamento: string;
  private desconto?: number;

  constructor(pedido: number[], pagamento: string, desconto?: number) {
    this.pedido = pedido;
    this.pagamento = pagamento;
    this.desconto = desconto
  }

  getTotal = () => this.pedido.reduce((total, pedido) => total + pedido, 0);

  getTotalComDesconto = () => {
    const total = this.getTotal();
    if (this.desconto && this.desconto <= 1 && this.desconto > 0) {
      return total - (total * this.desconto);
    } 
    return 'Desconto inválido, insira um valor de 0.1 à 1';    
  }
};

class Item {
  private nome: string;
  private preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome
    this.preco = preco;
  }
};

const pedido = new Pedido([10, 30, 50, 10], 'débito', 0.9);

console.log(pedido.getTotal());

console.log(pedido.getTotalComDesconto());