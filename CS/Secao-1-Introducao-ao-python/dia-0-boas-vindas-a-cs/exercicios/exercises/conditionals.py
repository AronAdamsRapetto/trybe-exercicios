def check_if_word_has_4_or_more_letters(word):
    if len(word) >= 4:
        return True
    else:
        return False


def check_what_number_is_greater(first_number, second_number):
    if first_number > second_number:
        return first_number
    else:
        return second_number


def check_if_number_is_odd_or_even(number):
    if number % 2 == 0: 
        return 'even'
    else:
        return 'odd'


def check_if_element_exists_in_list(element, input_list):
    if element in input_list:
        return True
    else:
        return False
