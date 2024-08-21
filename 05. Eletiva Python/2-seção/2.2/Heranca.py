class Vehcle:
    def __init__(self, name: str, capacity: int) -> None:
        self.name = name
        self.capacity = capacity

    def move(self, distance: int) -> str:
        return (
            f"{self.name} carried {self.capacity} "
            f"people across {distance} kilometers."
        )


class Car(Vehcle):
    def move(self, distance: int) -> str:
        return f"Car {super().move(distance)}"


class Motorcycle(Vehcle):
    def __init__(self, name: str) -> None:
        self.name = name
        self.capacity = 2


carro = Car(name="Opala", capacity=4)
moto = Motorcycle(name="Cg 160 fan 2022")

print(moto.move(10))
print(carro.move(10))
