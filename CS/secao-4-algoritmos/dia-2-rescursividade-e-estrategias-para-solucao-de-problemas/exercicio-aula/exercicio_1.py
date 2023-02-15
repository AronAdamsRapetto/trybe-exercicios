def count_evens(n):
    count_evens = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            count_evens += 1
    return count_evens


print(count_evens(10))
