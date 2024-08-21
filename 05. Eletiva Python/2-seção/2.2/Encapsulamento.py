class MonthlyExpense:
    def __init__(self, internet, grocery, power, water, rent) -> None:
        self.internet = internet
        self.grocery = grocery
        self._power = power
        self._water = water
        self.__rent = rent

    @property
    def m_power(self):
        print(f"Energia {self._power}!")

    @property
    def m_water(self):
        print(f"Agua {self._water}!")

    @m_power.setter
    def m_power(self, new_power):
        self._power = new_power

    @m_water.setter
    def m_water(self, new_water):
        self._water = new_water
