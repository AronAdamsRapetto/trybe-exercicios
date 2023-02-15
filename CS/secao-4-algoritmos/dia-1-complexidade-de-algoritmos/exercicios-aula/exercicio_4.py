def kids_with_candies(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))

# espaço O(n) + O(n) => O(n)
# tempo O(n)