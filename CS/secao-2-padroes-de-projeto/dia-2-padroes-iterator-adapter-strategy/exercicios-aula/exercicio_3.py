from exercicio_2 import Baralho


class BaralhoInverso(Baralho):
    def __iter__(self):
        return BaralhoInversoIterator(self._cartas)


class BaralhoInversoIterator:
    def __init__(self, iterable):
        self.__iterable = iterable
        self.__index = -1

    def __next__(self):
        try:
            result = self.__iterable[self.__index]
            self.__index -= 1
            return result
        except IndexError:
            raise StopIteration


baralho_inverso = BaralhoInverso()

for carta in baralho_inverso:
    print(carta)
