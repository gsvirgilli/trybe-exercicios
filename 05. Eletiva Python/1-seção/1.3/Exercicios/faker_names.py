from faker import Faker


faker = Faker(locale='pt_BR')

print(faker.email())
print(faker.credit_card_number())
print(faker.name())
print(faker.cpf())
