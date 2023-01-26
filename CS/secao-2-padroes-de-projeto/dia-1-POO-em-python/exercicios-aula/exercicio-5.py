from abc import ABC, abstractmethod
import datetime


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        pass


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open("arquivo_de_log.txt", "w") as file:
            print(msg, file=file)


class Log:
    def __init__(self, manipuladores):
        self.manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.manipuladores.add(manipulador)

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{nivel} - {data}]: {msg}"

    def __log(self, nivel, msg):
        for manipulador in self.manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    def info(self, msg):
        self.__log("INFO", msg)

    def alerta(self, msg):
        self.__log("ALERT", msg)

    def erro(self, msg):
        self.__log("ERRO", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)
