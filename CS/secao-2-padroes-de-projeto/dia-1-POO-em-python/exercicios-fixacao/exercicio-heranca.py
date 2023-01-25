class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco, eletro_name):
        self.name = eletro_name
        self.preco = preco  # publico
        self.cor = cor  # publico
        self._potencia = potencia  # _protedigo
        self._tensao = tensao  # _protegido
        self.__ligado = False  # __privato
        self.__velocidade = 0  # __privado

    def qual_eletro_eu_sou(self):
        print(f"Eu sou um {self.name}")


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


secador = Secador("branco", 12, 12, 122, "Secador")
batedeira = Batedeira("branco", 12, 12, 122, "Batedeira")
maquina_de_lavar = MaquinaDeLavar("branco", 12, 12, 122, "Maquina de lavar")

secador.qual_eletro_eu_sou()
batedeira.qual_eletro_eu_sou()
maquina_de_lavar.qual_eletro_eu_sou()
