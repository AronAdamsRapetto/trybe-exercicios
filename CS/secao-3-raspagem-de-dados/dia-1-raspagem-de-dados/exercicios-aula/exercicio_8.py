import requests
from parsel import Selector

html = requests.get("https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags").text
selector = Selector(html)

box_flag_list = selector.css("div.mw-parser-output > ul.gallery.mw-gallery-traditional")

url_image_list = []
for box_flag in box_flag_list:
  for link_tag in box_flag.css("li.gallerybox > div > div.thumb > div > a.image"):
    url_image_list.append(link_tag.css("img::attr(src)").get())
