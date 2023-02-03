from abc import ABC, abstractmethod


class Alarme:
    def __init__(self, despertador):
        self.despertador = despertador
        self.tarefas = []

    def add_tarefa_ao_despertar(self, tarefa):
        self.tarefas.append(tarefa)

    def remove_tarefa_ao_desperar(self, tarefa):
        self.tarefas.remove(tarefa)

    def acionar_alarme(self):
        for tarefa in self.tarefas:
            tarefa.acionar()


class Tarefa(ABC):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.add_tarefa_ao_despertar(self)

    @abstractmethod
    def acionar(self):
        raise NotImplementedError


class Computador(Tarefa):
    def acionar(self):
        print("Computador ligado!")


class Cafeteira(Tarefa):
    def acionar(self):
        print("Café preparado!")


class SisLuzes(Tarefa):
    def acionar(self):
        print("Luzes ligadas!")


alarme = Alarme(5)

Computador(alarme)
Cafeteira(alarme)
SisLuzes(alarme)

for hora in range(0, 24):
    if hora == alarme.despertador:
        alarme.acionar_alarme()
        break
