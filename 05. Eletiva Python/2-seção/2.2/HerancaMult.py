class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def make_sound(self) -> str:
        print(f"{self.name} fazendo som")


class Mammal(Animal):
    def breastfeed(self) -> None:
        print(f"{self.name} amamentando")


class Dog(Mammal):
    def bark(self) -> str:
        print(f"{self.name} Au au!")


dog = Dog("Rex")
dog.make_sound()
dog.breastfeed()
dog.bark()
