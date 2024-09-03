class Rectangle:
    def __init__(self, base, height) -> None:
        self.base = base
        self.height = height

    def calculate_area(self):
        return self.base * self.height

    def calculate_perimeter(self):
        return 2 * (self.base + self.height)


rectangle = Rectangle(5, 10)
print("Área:", rectangle.calculate_area())
print("Perímetro:", rectangle.calculate_perimeter())
