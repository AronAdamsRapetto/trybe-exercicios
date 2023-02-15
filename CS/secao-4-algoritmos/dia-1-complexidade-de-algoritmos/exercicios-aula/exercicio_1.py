def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False

# sort() = O(n log n)
# for abaixo = O(n)
# resultado O(n log n) + O(n) => O(n log n) 