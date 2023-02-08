import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
html = response.text
selector = Selector(html)

title = selector.css("div.col-sm-6.product_main > h1::text").get()
price = selector.css("div.col-sm-6.product_main > p.price_color::text").re_first(r"\d*\.\d{2}")
description = selector.css("article > p::text").get()

suffix = "...more"

if description.endswith(suffix):
    description = description[:-len(suffix)]
    
img_url: str = "http://books.toscrape.com/" + selector.css("div.item.active > img::attr(src)").get()

img_url = img_url.replace("../", "")

print(title, price, description, img_url, sep=", ")

# Exercicio 5

stock = selector.css("div.col-sm-6.product_main > p.instock.availability::text").re_first("\d")

print(title, price, description, img_url, stock, sep=", ")





