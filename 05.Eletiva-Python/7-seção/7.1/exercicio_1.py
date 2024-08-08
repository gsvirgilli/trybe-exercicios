import requests


response = requests.get("https://httpbin.org/encoding/utf8")
# print(response.text)

response_1 = requests.get("https://api.github.com/users")
# users = response_1.json()
# for user in users:
#     print(f"{user['login']} {user['url']}")


response_2 = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
assert (
    "User-Agent value doesn't look like a standard mozilla/chrome/safari value"
    not in response.text
)