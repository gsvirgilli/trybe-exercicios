import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscclerrape.com"
page = requests.get(url)
html_content = page.text
# print(page.content)


soup = BeautifulSoup(html_content, "html.parser")
print(soup.prettify())


# acessando a tag 'title'
# title = soup.title

# retorna o elemento HTML da tag
# print(title)

# o tipo de 'title' é tag
# print(type(title))

# o nome de 'title' é title
# print(title.name)

# acessando a tag 'footer'
# footer = soup.footer

# acessando o atributo classe da tag footer
# print(footer["class"])
