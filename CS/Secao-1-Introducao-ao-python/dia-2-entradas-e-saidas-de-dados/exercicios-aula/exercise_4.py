import json
import csv


def get_books_from_json():
    with open("exercise_4_books.json") as file:
        books = json.load(file)
    return books


def count_books_by_category(book_list):
    book_categories = {}
    for book in book_list:
        for category in book["categories"]:
            if category in book_categories:
                book_categories[category] += 1
            else:
                book_categories[category] = 1
    return book_categories


def calculate_percentage_categories(books_by_category, total_books):
    return [(category, num_books / total_books)
            for category, num_books in books_by_category.items()]


def write_in_csv(book_infos):
    header = ("categoria", "porcentagem")

    with open("exercise_4_result.csv", "w") as file:
        writer = csv.writer(file)
        writer.writerow(header)
        writer.writerows(book_infos)


def main():
    # pegar os livros do arquivo json
    books = get_books_from_json()
    # contar quantos livros tem por categoria
    books_by_category = count_books_by_category(books)
    # calcular a porcentagem por categoria
    total_books = len(books)
    percentage_by_category = calculate_percentage_categories(
        books_by_category, total_books)
    # salvar os dados em um arquivo csv
    write_in_csv(percentage_by_category)


main()
