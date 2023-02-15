import random

def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average/n
        list_of_averages.append(average)

    return list_of_averages

# tempo = O(n) porque o for de 100 é linear e n pode ser qualquer valor,
# no pior caso n pode ser muito maior que 100 tornando 100 despresivel 
# espaço = O(1) pois sempre será retornado uma lista de 10 números