from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")

chrome = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)

# Requisições para essa instância criada utilizando o método `get`
chrome.get("https://www.google.com.br/")

search_input = chrome.find_element(By.NAME, "q")
search_input.send_keys("selenium")
search_input.send_keys(Keys.ENTER)

# Espera 10 segundos
sleep(10)

# Encerra o navegador, importante quando usamos containers
chrome.quit()