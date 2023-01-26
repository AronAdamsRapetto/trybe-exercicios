class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        print(self.__volume)

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        print(self.__volume)

    def modificar_canal(self, novo_canal):
        if 0 < novo_canal <= 99:
            self.__canal = novo_canal
        else:
            raise ValueError("Canal inexistente: canais válidos de 1 a 99")
        print(self.__canal)

    def ligar_desligar(self):
        self.__ligada = False if self.__ligada else True
        print(self.__ligada)
