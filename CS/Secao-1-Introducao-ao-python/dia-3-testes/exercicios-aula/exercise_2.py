def translate_message(message: str):
    secret = {
      "ABC": "2",
      "DEF": "3",
      "GHI": "4",
      "JKL": "5",
      "MNO": "6",
      "PQRS": "7",
      "TUV": "8",
      "WXYZ": "9",
      }

    new_message = message
    for letter in new_message:
        for secret_letter, number in secret.items():
            if letter in secret_letter:
                print
                new_message = new_message.replace(letter, number)
    return new_message


print(translate_message("1-HOME-SWEET-HOME"))
