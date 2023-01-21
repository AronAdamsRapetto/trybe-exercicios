import pytest
from src.exercise_1 import fizzbuzz


def test_fizzbuzz_returns_a_correct_list():
    assert fizzbuzz(15) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz',
                            'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']


def test_fizzbuzz_returns_a_error_when_invalid_value_is_passed():
    with pytest.raises(ValueError,
                       match="Valor inválido! Deve ser passado um inteiro"):
        fizzbuzz("a")


def test_fizzbuzz_returns_a_error_when_0_is_passed():
    with pytest.raises(
        ValueError,
        match="Valor inválido! O número deve ser maior que zero"
    ):
        fizzbuzz(0)


def test_fizzbuzz_returns_a_error_when_a_value_less_than_zero_is_passed():
    with pytest.raises(
        ValueError,
        match="Valor inválido! O número deve ser maior que zero"
    ):
        fizzbuzz(-5)
