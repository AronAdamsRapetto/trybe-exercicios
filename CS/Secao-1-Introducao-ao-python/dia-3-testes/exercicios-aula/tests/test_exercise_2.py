import pytest
from src.exercise_2 import translate_message


def test_of_translate_message_correctely():
    assert translate_message("1-HOME-SWEET-HOME") == "1-4663-79338-4663"


def test_of_translate_message_returns_error_when_invalid_message_is_passed():
    with pytest.raises(ValueError, match="Menssagem inválida"):
        translate_message("1-HoMe-5W3T-HoM3-0")
