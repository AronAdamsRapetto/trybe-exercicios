def append_each_letter_of_the_word_in_a_list(word):
    listOfLetters = []
    for letter in word:
        listOfLetters.append(letter)
    return listOfLetters


def return_index_of_the_uppercase_letter(word):
    indexOfUpperLetter = 0
    for letter in word:
        if (letter.isupper()):
            indexOfUpperLetter = word.index(letter)
    return indexOfUpperLetter


def return_element_from_list_that_is_string(input_list):
    element = ''
    for value in input_list:
        if(type(value) == str):
            element = value
    return element
