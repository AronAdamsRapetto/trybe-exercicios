def calculate_avarage(number_list):
    result = 0
    for number in number_list:
        result += number
    return result / len(number_list)
