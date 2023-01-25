def print_name():
    user_name = input("Digite um nome:")
    count = 0
    while count < len(user_name):
        if count == 0:
            print(user_name)
        else:
            print(user_name[:-count])
        count += 1


print_name()
