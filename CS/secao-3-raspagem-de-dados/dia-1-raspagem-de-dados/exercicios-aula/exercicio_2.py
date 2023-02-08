import requests
from rich import print

response = requests.get("https://api.github.com/users")
for user in response.json():
    print(user['url'])