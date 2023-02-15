# def count_evens(n):
#     count_evens = 0
#     for number in range(1, n + 1):
#         if number % 2 == 0:
#             count_evens += 1
#     return count_evens


def count_evens(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_evens(n - 1)
    else:
        return count_evens(n - 1)


print(count_evens(5))
