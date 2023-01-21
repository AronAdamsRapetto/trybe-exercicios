import re


def validate_email_list(email_list):
    regex = r'^[a-zA-Z]([a-zA-Z0-9_-]+)@[a-zA-Z0-9]+\.[a-zA-Z]{1,3}$'
    email_filter = []
    for email in email_list:
        if not re.match(regex, email):
            print(f"Email inválido: {email}")
        else:
            email_filter.append(email)
    return email_filter


print(validate_email_list(["nome@dominio.com",
                           "errad#@dominio.com", "outro@dominio.com"]))
