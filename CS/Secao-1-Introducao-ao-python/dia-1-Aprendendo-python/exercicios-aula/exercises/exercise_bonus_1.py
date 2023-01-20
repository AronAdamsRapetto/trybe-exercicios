def find_smalles_number(number_list):
    smallest_number = number_list[0]
    for number in number_list:
        if number < smallest_number:
            smallest_number = number
    return smallest_number

# Gabarito

# def minimum(numbers):
#    return min(numbers)

# # ou mesmo
# minimum = min
