import pytest
from src.exercise_3 import validate_email


def test_validate_email_return_a_email_when_is_valid():
    assert validate_email("email@dominio.com") == "email@dominio.com"


def test_validate_email_rise_an_error_when_have_a_user_invalid():
    email = "errad#@dominio.com"
    with pytest.raises(ValueError, match=f"Email inválido: {email}"):
        validate_email(email)


def test_validate_email_rise_a_error_when_a_user_do_not_init_with_letter():
    email = "3rrado@dominio.com"
    with pytest.raises(ValueError, match=f"Email inválido: {email}"):
        validate_email(email)


def test_validate_email_rise_an_error_when_have_an_domain_invalid():
    email = "errado@dom!nio.com"
    with pytest.raises(ValueError, match=f"Email inválido: {email}"):
        validate_email(email)


def test_validate_email_rise_an_error_when_have_an_extension_invalid():
    email = "errado@dominio.commmm"
    with pytest.raises(ValueError, match=f"Email inválido: {email}"):
        validate_email(email)
