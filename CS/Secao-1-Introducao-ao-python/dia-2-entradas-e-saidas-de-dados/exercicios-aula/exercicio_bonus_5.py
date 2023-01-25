import json
import random


def get_pokemon_by_json():
    with open("exercise_bonus_5_pokemon.json") as file:
        pokemon = json.load(file)
    return pokemon["results"]


def get_random_pokemon_name(pokemon_list):
    return random.choice(pokemon_list)["name"]


def show_track(name, trace):
    if trace < 0:
        print(name)
    else:
        print(name[:-trace])


def play_game(pokemon_name):
    is_game_finish = False
    trace_number = len(pokemon_name) - 1
    while is_game_finish is not True:
        user_answer = input("Quem é esse pokemon? ")
        if user_answer == pokemon_name:
            print(f"Você acertou!!! É o {pokemon_name}")
            is_game_finish = True
        else:
            show_track(pokemon_name, trace_number)
            trace_number -= 1


def main():
    pokemon_list = get_pokemon_by_json()
    random_pokemon_name = get_random_pokemon_name(pokemon_list)

    play_game(random_pokemon_name)


main()
