def validate_parameter(param):
    if type(param) != int:
        raise ValueError("Valor inválido! Deve ser passado um inteiro")
    elif param <= 0:
        raise ValueError("Valor inválido! O número deve ser maior que zero")


def fizzbuzz(n):
    count = 1
    fizzbuzz_list = []
    validate_parameter(n)
    while count <= n:
        if count % 5 == 0 and count % 3 == 0:
            fizzbuzz_list.append("FizzBuzz")
        elif count % 3 == 0:
            fizzbuzz_list.append("Fizz")
        elif count % 5 == 0:
            fizzbuzz_list.append("Buzz")
        else:
            fizzbuzz_list.append(count)
        count += 1
    return fizzbuzz_list


print(fizzbuzz(15))
