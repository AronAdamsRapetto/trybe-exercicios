class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho:
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe) for naipe in self.naipes for valor in self.valores
        ]
        self.estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self.estrategia)


class BaralhoIterator:
    def __init__(self, iterable, estrategia):
        self.__iterable = iterable
        self.estrategia = estrategia
        self.__index = 0

    def __next__(self):
        try:
            if self.estrategia.next(self.__index) == -1:
                result = self.__iterable[self.__index - 1]
            else:
                result = self.__iterable[self.__index]
            self.__index = self.estrategia.next(self.__index)
            return result
        except IndexError:
            raise StopIteration


class EstrategiaAsc:
    def next(cls, index):
        return index + 1


class EstrategiaDesc:
    def next(cls, index):
        return index - 1


baralho = Baralho(EstrategiaAsc())

baralhoInverso = Baralho(EstrategiaDesc())

# for carta in baralho:
# print(carta)

for carta in baralhoInverso:
    print(carta)
