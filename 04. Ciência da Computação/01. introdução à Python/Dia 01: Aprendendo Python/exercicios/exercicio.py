# 🚀Exercício 1: Crie uma função que receba dois números e retorne o maior deles


def maior(x, y):
    maior = max(x, y)
    return maior


# print(maior(10, 20))

# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def med_arit_list(lista):
    total = 0
    for lis in lista:
        total += lis

    return total / len(lista)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n
# Por exemplo:
# Dica: Python sabe multiplicar sequências! Por exemplo, 3 * 'bla' resulta
# em blablabla. Isso se aplica a listas também, caso você precise.
# Sentiu aí um certo dejavu?


def ola(n):
    for row in range(n):
        print(n * "*")

    return row


# print(ola(6))


# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o
#  nome com a maior quantidade de caracteres. Por exemplo,
#  para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno
#  deve ser "Fernanda".
#  🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.


def maior_palavra(x):
    palavra = x[0]
    for y in x:
        if len(palavra) < len(y):
            palavra = y
    return palavra


# print(maior_palavra(["José","Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
#  metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede (em m²).


def minimo(list):
    valor = min(list)
    return valor


# print(minimo([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


def desenho_triangulo(n):
    for row in range(1, n + 1):
        print(row * "*")
    return row


print(desenho_triangulo(7))
