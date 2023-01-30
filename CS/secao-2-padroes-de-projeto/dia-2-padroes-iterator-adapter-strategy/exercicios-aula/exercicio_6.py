from abc import ABC, abstractmethod


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calcular_imposto(self.valor)


class EstrategiaImposto(ABC):
    @abstractmethod
    def calcular_imposto(cls, valor):
        pass


class ISS(EstrategiaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.1


class ICMS(EstrategiaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.6


class PIS(EstrategiaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.0065


class COFINS(EstrategiaImposto):
    @classmethod
    def calcular_imposto(cls, valor):
        return valor * 0.03


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(ISS)}")
print(f"ICMS: {orcamento.calcular_imposto(ICMS)}")
print(f"PIS: {orcamento.calcular_imposto(PIS)}")
print(f"COFINS: {orcamento.calcular_imposto(COFINS)}")
