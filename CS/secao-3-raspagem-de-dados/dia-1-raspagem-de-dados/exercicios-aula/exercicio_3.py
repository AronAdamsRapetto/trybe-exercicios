import requests

headers = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:101.0) Gecko/20100101 Firefox/101.0',
    'Accept': 'text/html'
}
response = requests.get("https://scrapethissite.com/pages/advanced/?gotcha=headers", headers=headers)
assert "bot detected" not in response.text