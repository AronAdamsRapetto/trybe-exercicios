import random


def word_game():
    word_list = ['calculadora', 'perpendicular',
                 'oftalmologista', 'discrepância']
    random_word = random.choice(word_list)
    encrypted_word = "".join(random.sample(random_word, len(random_word)))

    chances = 3
    print("#### Adivinhe a palavra ####")
    print(encrypted_word)
    while chances > 0:
        print(f"chances restantes: {chances}")
        answer = input("Adivinhe qual palavra é essa? ")
        chances -= 1

        if answer == random_word:
            print(f"Parabéns, a palavra é {random_word}!!")
            break
        elif chances != 0:
            print("Tente novamente!") if chances > 1 else print("Ultima chance!!")
            


word_game()
