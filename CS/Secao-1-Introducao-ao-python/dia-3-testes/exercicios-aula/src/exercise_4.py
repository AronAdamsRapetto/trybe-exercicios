import re


def verify_parameter(param):
    if type(param) != list:
        raise ValueError("O parâmetro deve ser uma lista")


def validate_email_list(email_list):
    regex = r'^[a-zA-Z]([a-zA-Z0-9_-]+)@[a-zA-Z0-9]+\.[a-zA-Z]{1,3}$'
    email_filter = []
    verify_parameter(email_list)
    for email in email_list:
        if type(email) != str:
            raise ValueError("O conteúdo da lista devem ser apenas de texto")
        if not re.match(regex, email):
            print(f"Email inválido: {email}")
        else:
            email_filter.append(email)
    return email_filter


print(validate_email_list(["nome@dominio.com",
                           "errad#@dominio.com", "outro@dominio.com"]))
