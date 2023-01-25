# Exercicio 1

# def main():
#     name = input("Digite um nome qualquer: ")
#     print_name(name)


# def print_name(name):
#     for letter in name:
#         print(letter)


# main()

# Exercicio 2

import sys


def main():
    print("(Separe os números com espaço!)")
    numbers = input("Digite números naturais para a soma: ").split(" ")
    result = sum(numbers)
    print(f"O resultado da soma é: {result}")


def sum(numbers):
    result = 0
    for number in numbers:
        if number.isdigit():
            result += int(number)
        else:
            print(f"Erro ao somar valores, {number} é um valor inválido",
                  file=sys.stderr)
    return result


main()
