class Ventilador:
    def __init__(self, preco, corrente, tensao, veloc_max):
        self.preco = preco
        self.corrente = corrente
        self.tensao = tensao
        self.veloc_max = veloc_max
        self.esta_ligado = False
        self.velocidade = 0


class Pessoa:
    def __init__(self, nome, saldo_conta):
        self.nome = nome
        self.saldo_conta = saldo_conta
        self.possui_ventilador = False

    def comprar_ventilador(self, eletro: Ventilador):
        if self.saldo_conta < eletro.preco:
            print(f"{self.nome} não possuí saldo o suficiente para esta compra!")
        else:
            self.saldo_conta -= eletro.preco
            self.possui_ventilador = True
            print("Ventilador Comprado!")

    def __str__(self):
        if self.possui_ventilador:
            return f"{self.nome} possui um ventilador"
        else:
            return f"{self.nome} não possui um ventilador"


ventilador = Ventilador(200, 220, 12, 4)
pessoa = Pessoa(
    "Aron",
    1000,
)

print(pessoa)
pessoa.comprar_ventilador(ventilador)
print(pessoa)
