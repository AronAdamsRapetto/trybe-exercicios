def sequence_sum(number):
    count = 1
    result = 0
    while count <= number:
        result += count
        count += 1
    return result


# Gabarito

# def summation(limit):
#     total = 0
#     for number in range(1, limit + 1):
#         total += number
#     return total

# Metodo nativo
# def summation(limit):
#     return sum(range(1, limit + 1))
