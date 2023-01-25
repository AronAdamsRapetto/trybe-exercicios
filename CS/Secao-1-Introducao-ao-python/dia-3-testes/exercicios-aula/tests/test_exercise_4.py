import pytest
from src.exercise_4 import validate_email_list


def test_validate_email_list_return_a_list_of_valid_emails():
    emails = ["nome@dominio.com", "errad#@dominio.com", "3rrado@dominio.com",
              "outro@dominio.com", "errado@dom!nio.com",
              "errado@dominio.commmm"]
    assert validate_email_list(emails) == ["nome@dominio.com",
                                           "outro@dominio.com"]


def test_validate_email_list_raise_erro_if_parameter_is_not_a_list():
    with pytest.raises(ValueError, match="O parâmetro deve ser uma lista"):
        validate_email_list("nome@dominio.com")


def test_validate_email_list_raise_erro_if_list_have_another_type():
    with pytest.raises(ValueError,
                       match="O conteúdo da lista devem ser apenas de texto"):
        validate_email_list(["nome@dominio.com", 34, "errad#@dominio.com"])
