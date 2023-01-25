import re


def validate_email(email):
    regex = r'^[a-zA-Z]([a-zA-Z0-9_-]+)@[a-zA-Z0-9]+\.[a-zA-Z]{1,3}$'
    if not re.match(regex, email):
        raise ValueError(f"Email inválido: {email}")
    return email


validate_email('email@dominio.com')
