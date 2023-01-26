from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    @abstractmethod
    def area():
        pass

    def perimetro():
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        PI = 3.14
        return PI * (self.raio**2)

    def perimetro(self):
        PI = 3.14
        return 2 * PI * self.raio


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)
