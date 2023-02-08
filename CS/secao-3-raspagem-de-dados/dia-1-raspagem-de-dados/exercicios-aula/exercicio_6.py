from pymongo import MongoClient
from rich import print

input_category = input("Digite uma categoria: ")

with MongoClient() as client:
    data = client.library
    for book in data.books.find({"categories": input_category}):
        print(book['title'])
